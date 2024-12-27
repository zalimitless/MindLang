import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { MindLangLexer } from '../../G4/MindLangLexer';
import {
  MindLangParser,
  StatementContext,
  StatementOrBlockContext,
  WhileStatementContext,
  IfStatementContext,
  FunctionDeclarationContext,
  ForStatementContext,
  ExpressionContext,
} from '../../G4/MindLangParser';
import { Interval } from 'antlr4ts/misc/Interval';

describe('MindLang Additional Edge Case Tests', () => {
  const createLexer = (input: string): MindLangLexer => {
    return new MindLangLexer(new ANTLRInputStream(input));
  };

  const createParser = (lexer: MindLangLexer): MindLangParser => {
    return new MindLangParser(new CommonTokenStream(lexer));
  };

  const parseInput = (input: string) => {
    const lexer = createLexer(input);
    const parser = createParser(lexer);
    return parser.program();
  };

  /**
   * Extracts the exact original text that the parser context covered,
   * using its start/stop tokens.
   */
  const extractOriginalText = (ctx: ParserRuleContext): string => {
    if (!ctx || !ctx.start) {
      return "";
    }
    const startIndex = ctx.start.startIndex;
    const stopIndex = ctx.stop ? ctx.stop.stopIndex : startIndex;
    const interval = new Interval(startIndex, stopIndex);
    return ctx.start.inputStream?.getText(interval) ?? "";
  };

  //--------------------------------------------------------------------------
  // Helpers for retrieving statements from statementOrBlock or block
  // (identical to the ones you used in your other test suites)
  //--------------------------------------------------------------------------
  function getContainedStatements(sb: StatementOrBlockContext): StatementContext[] {
    const blk = sb.block();
    if (blk) {
      return blk.statement();
    } else {
      return [sb.statement()!];
    }
  }

  function getWhileBodyStatements(whileCtx: WhileStatementContext): StatementContext[] {
    return getContainedStatements(whileCtx.statementOrBlock());
  }

  function getIfThenStatements(ifCtx: IfStatementContext): StatementContext[] {
    return getContainedStatements(ifCtx.statementOrBlock());
  }

  function getFunctionBodyStatements(funcCtx: FunctionDeclarationContext): StatementContext[] {
    return funcCtx.block().statement();
  }

  function getForBodyStatements(forCtx: ForStatementContext): StatementContext[] {
    return getContainedStatements(forCtx.statementOrBlock());
  }

  //==========================================================================
  // 1) Single-Statement If Without Braces
  //==========================================================================
  test('Edge Case 1: Single-Statement If Without Braces', () => {
    const input = `
      let x = 10;
      if (x > 5)
        x++;
      print(x);
    `;
    const tree = parseInput(input);

    // statement(0): let x = 10;
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe("x");
    expect(stmt0?.expression()?.text).toBe("10");

    // statement(1): if (x > 5) x++;
    const ifStmt = tree.statement(1).ifStatement();
    expect(ifStmt?.expression()?.text).toBe("x>5");

    // Because there's no block, we retrieve a single statement
    const thenStmts = getIfThenStatements(ifStmt!);
    // statement(0): x++;
    const incStmt = thenStmts[0].incrementDecrementStatement();
    expect(incStmt?.IDENTIFIER()?.text).toBe("x");

    // statement(2): print(x);
    const stmt2 = tree.statement(2).printStatement();
    expect(stmt2?.expression()?.text).toBe("x");
  });

  //==========================================================================
  // 2) Single-Statement While Without Braces
  //==========================================================================
  test('Edge Case 2: Single-Statement While Without Braces', () => {
    const input = `
      let count = 0;
      while (count < 3)
        count++;
      print(count);
    `;
    const tree = parseInput(input);

    // statement(0): let count = 0;
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe("count");
    expect(stmt0?.expression()?.text).toBe("0");

    // statement(1): while(count < 3) count++;
    const whileStmt = tree.statement(1).whileStatement();
    expect(whileStmt?.expression()?.text).toBe("count<3");

    const whileBody = getWhileBodyStatements(whileStmt!);
    // statement(0): count++;
    const incStmt = whileBody[0].incrementDecrementStatement();
    expect(incStmt?.IDENTIFIER()?.text).toBe("count");

    // statement(2): print(count);
    const stmt2 = tree.statement(2).printStatement();
    expect(stmt2?.expression()?.text).toBe("count");
  });

  //==========================================================================
  // 3) Negative Expressions and Function Return
  //==========================================================================
  test('Edge Case 3: Negative Expressions and Function Return', () => {
    const input = `
      function negate(x) {
        return -x;
      }
      let val = 5;
      let result = negate(-val);
      print(result);
    `;
    const tree = parseInput(input);

    // statement(0): function negate(x) { return -x; }
    const funcDecl = tree.statement(0).functionDeclaration();
    expect(funcDecl?.IDENTIFIER(0)?.text).toBe("negate");
    expect(funcDecl?.IDENTIFIER(1)?.text).toBe("x");

    const funcBodyStmts = getFunctionBodyStatements(funcDecl!);
    // statement(0): return -x;
    const returnStmt = funcBodyStmts[0].returnStatement();
    expect(returnStmt?.expression()?.text).toBe("-x");

    // statement(1): let val = 5;
    const stmt1 = tree.statement(1).variableDeclaration();
    expect(stmt1?.IDENTIFIER()?.text).toBe("val");
    expect(stmt1?.expression()?.text).toBe("5");

    // statement(2): let result = negate(-val);
    const stmt2 = tree.statement(2).variableDeclaration();
    expect(stmt2?.IDENTIFIER()?.text).toBe("result");
    expect(stmt2?.expression()?.text).toBe("negate(-val)");

    // statement(3): print(result);
    const stmt3 = tree.statement(3).printStatement();
    expect(stmt3?.expression()?.text).toBe("result");
  });

  //==========================================================================
  // 4) For Loop Without a Block
  //==========================================================================
  test('Edge Case 4: For Loop Without a Block', () => {
    const input = `
      let sum = 0;
      for (let i = 1; i <= 3; i++)
        sum += i;
      print(sum);
    `;
    const tree = parseInput(input);

    // statement(0): let sum = 0;
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe("sum");
    expect(stmt0?.expression()?.text).toBe("0");

    // statement(1): for (let i = 1; i <= 3; i++) sum += i;
    const forStmt = tree.statement(1).forStatement();
    expect(forStmt?.variableDeclaration()?.IDENTIFIER()?.text).toBe("i");
    expect(forStmt?.variableDeclaration()?.expression()?.text).toBe("1");
    expect(forStmt?.expression(0)?.text).toBe("i<=3");
    expect(forStmt?.incrementDecrementStatement()?.IDENTIFIER()?.text).toBe("i");

    // Single statement body => "sum += i;"
    const forBody = getForBodyStatements(forStmt!);
    const assignStmt = forBody[0].assignmentStatement();
    expect(assignStmt?.IDENTIFIER()?.text).toBe("sum");
    expect(assignStmt?.expression()?.text).toBe("i");

    // statement(2): print(sum);
    const stmt2 = tree.statement(2).printStatement();
    expect(stmt2?.expression()?.text).toBe("sum");
  });

  //==========================================================================
  // 5) Postfix Access: array literal -> .length -> (args)
  //==========================================================================
  test('Edge Case 5: Complex Postfix Access (member, function call)', () => {
    const input = `
      let arr = [1,2,3];
      print(arr.length(2, 4)); // e.g., pretending .length is a function
    `;
    // It's contrived, but tests multiple postfix ops: [1,2,3].length(2,4)

    const tree = parseInput(input);

    // statement(0): let arr = [1,2,3];
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe("arr");
    expect(stmt0?.expression()?.text).toBe("[1,2,3]");

    // statement(1): print(arr.length(2,4));
    const stmt1 = tree.statement(1).printStatement();
    // expression => arr.length(2,4)
    // Not an actual real JS method call, but it's valid postfix chaining in grammar
    expect(stmt1?.expression()?.text).toBe("arr.length(2,4)");
  });

  //==========================================================================
  // 6) Chained else-if with No Final else
  //==========================================================================
  test('Edge Case 6: Chained else-if with No Final else', () => {
    const input = `
      let val = 50;
      if (val > 60) {
        print("High");
      } else if (val == 60) {
        print("Exact");
      } else if (val >= 40) {
        print("Semi-High");
      }
      print("Done");
    `;
    const tree = parseInput(input);

    // statement(0): let val = 50;
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe("val");
    expect(stmt0?.expression()?.text).toBe("50");

    // statement(1): if (val > 60) ... elseIf (val == 60) ... elseIf (val >= 40) ...
    const ifStmt = tree.statement(1).ifStatement();
    expect(ifStmt?.expression()?.text).toBe("val>60");
    const ifThenStmts = getIfThenStatements(ifStmt!);
    // statement(0): print("High");
    const thenPrint = ifThenStmts[0].printStatement();
    expect(thenPrint?.expression()?.text).toBe("\"High\"");

    // elseIf(0): else if (val == 60)
    const elseIfs = ifStmt?.elseIfClause() || [];
    const eif1 = elseIfs[0];
    expect(eif1?.expression()?.text).toBe("val==60");
    const eif1Stmts = getContainedStatements(eif1.statementOrBlock());
    // statement(0): print("Exact");
    expect(eif1Stmts[0].printStatement()?.expression()?.text).toBe("\"Exact\"");

    // elseIf(1): else if (val >= 40)
    const eif2 = elseIfs[1];
    expect(eif2?.expression()?.text).toBe("val>=40");
    const eif2Stmts = getContainedStatements(eif2.statementOrBlock());
    expect(eif2Stmts[0].printStatement()?.expression()?.text).toBe("\"Semi-High\"");

    // No final else -> ifStmt.elseClause() is undefined, no error.

    // statement(2): print("Done");
    const stmt2 = tree.statement(2).printStatement();
    expect(stmt2?.expression()?.text).toBe("\"Done\"");
  });

  //==========================================================================
  // 7) Nested Function Calls: foo(bar(1,2), -3)
  //==========================================================================
  test('Edge Case 7: Nested Function Calls', () => {
    const input = `
      function bar(x, y) {
        return x + y;
      }
      function foo(a, b) {
        return a - b;
      }
      let result = foo(bar(1,2), -3);
      print(result);
    `;
    const tree = parseInput(input);

    // statement(0): function bar(x,y) { return x + y; }
    const barDecl = tree.statement(0).functionDeclaration();
    expect(barDecl?.IDENTIFIER(0)?.text).toBe("bar");
    const barBody = getFunctionBodyStatements(barDecl!);
    // statement(0): return x + y;
    expect(barBody[0].returnStatement()?.expression()?.text).toBe("x+y");

    // statement(1): function foo(a,b) { return a - b; }
    const fooDecl = tree.statement(1).functionDeclaration();
    expect(fooDecl?.IDENTIFIER(0)?.text).toBe("foo");
    const fooBody = getFunctionBodyStatements(fooDecl!);
    // statement(0): return a - b;
    expect(fooBody[0].returnStatement()?.expression()?.text).toBe("a-b");

    // statement(2): let result = foo(bar(1,2), -3);
    const decl2 = tree.statement(2).variableDeclaration();
    expect(decl2?.IDENTIFIER()?.text).toBe("result");
    // expression => foo(bar(1,2),-3)
    expect(decl2?.expression()?.text).toBe("foo(bar(1,2),-3)");

    // statement(3): print(result);
    const stmt3 = tree.statement(3).printStatement();
    expect(stmt3?.expression()?.text).toBe("result");
  });

  //==========================================================================
  // 8) Negative Array Indices (like arr[-1]), purely for grammar check
  //==========================================================================
  test('Edge Case 8: Negative Array Indexing', () => {
    const input = `
      let arr = [10, 20, 30];
      let value = arr[-1];
      print(value);
    `;
    // This might not be semantically valid in many languages,
    // but it tests your grammar's capacity for 'arr[-1]'.
    const tree = parseInput(input);

    // statement(0): let arr = [10,20,30];
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe("arr");
    expect(stmt0?.expression()?.text).toBe("[10,20,30]");

    // statement(1): let value = arr[-1];
    const stmt1 = tree.statement(1).variableDeclaration();
    expect(stmt1?.IDENTIFIER()?.text).toBe("value");
    // expression => arr[-1]
    // The grammar should parse "arr [ - 1 ]" via unary minus
    expect(stmt1?.expression()?.text).toBe("arr[-1]");

    // statement(2): print(value);
    const stmt2 = tree.statement(2).printStatement();
    expect(stmt2?.expression()?.text).toBe("value");
  });

  //==========================================================================
  // 9) While-If-Else with a break deep inside
  //==========================================================================
  test('Edge Case 9: While + If + Else with Deep Break', () => {
    const input = `
      let x = 0;
      while (true) {
        if (x < 2) {
          x++;
        } else {
          break;
        }
      }
      print(x);
    `;
    const tree = parseInput(input);

    // statement(0): let x = 0;
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe("x");
    expect(stmt0?.expression()?.text).toBe("0");

    // statement(1): while(true) { if(...) { x++; } else { break; } }
    const whileStmt = tree.statement(1).whileStatement();
    expect(whileStmt?.expression()?.text).toBe("true");
    const whileBody = getWhileBodyStatements(whileStmt!);

    // statement(0) => if (x < 2) { x++; } else { break; }
    const ifStmt = whileBody[0].ifStatement();
    expect(ifStmt?.expression()?.text).toBe("x<2");
    // if-part => x++;
    const ifThen = getIfThenStatements(ifStmt!);
    expect(ifThen[0].incrementDecrementStatement()?.IDENTIFIER()?.text).toBe("x");

    // else-part => break;
    const elseCl = ifStmt?.elseClause();
    const elseStmts = elseCl ? getContainedStatements(elseCl.statementOrBlock()) : [];
    expect(elseStmts[0].breakStatement()).toBeTruthy();

    // statement(2): print(x);
    const stmt2 = tree.statement(2).printStatement();
    expect(stmt2?.expression()?.text).toBe("x");
  });

  //==========================================================================
  // 10) Function with Zero Parameters & Return an Array
  //==========================================================================
  test('Edge Case 10: Zero-Parameter Function Returning an Array', () => {
    const input = `
      function getArray() {
        return [42, 100];
      }
      let arr = getArray();
      print(arr[0]);
    `;
    const tree = parseInput(input);

    // statement(0): function getArray() { return [42,100]; }
    const funcDecl = tree.statement(0).functionDeclaration();
    expect(funcDecl?.IDENTIFIER(0)?.text).toBe("getArray");
    // no parameters => zero IDs after 'getArray'

    const funcBodyStmts = getFunctionBodyStatements(funcDecl!);
    // statement(0): return [42,100];
    const returnStmt = funcBodyStmts[0].returnStatement();
    expect(returnStmt?.expression()?.text).toBe("[42,100]");

    // statement(1): let arr = getArray();
    const stmt1 = tree.statement(1).variableDeclaration();
    expect(stmt1?.IDENTIFIER()?.text).toBe("arr");
    expect(stmt1?.expression()?.text).toBe("getArray()");

    // statement(2): print(arr[0]);
    const stmt2 = tree.statement(2).printStatement();
    expect(stmt2?.expression()?.text).toBe("arr[0]");
  });
});
