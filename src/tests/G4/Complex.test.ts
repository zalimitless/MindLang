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

describe('MindLang Additional Complex Tests', () => {
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
      return '';
    }
    const startIndex = ctx.start.startIndex;
    const stopIndex = ctx.stop ? ctx.stop.stopIndex : startIndex;
    const interval = new Interval(startIndex, stopIndex);
    return ctx.start.inputStream?.getText(interval) ?? '';
  };

  //-------------------------------------------------------------------------
  // Helpers for retrieving statements inside statementOrBlock or block
  //-------------------------------------------------------------------------

  /**
   * Because `statementOrBlock` can either be a single statement
   * or a block { statement* }, we unify them with a helper.
   */
  function getContainedStatements(sb: StatementOrBlockContext): StatementContext[] {
    const blk = sb.block();
    if (blk) {
      // It's a brace-wrapped block; return all child statements
      return blk.statement();
    } else {
      // It's just a single statement
      return [sb.statement()!];
    }
  }

  /**
   * For a whileStatement, after `(condition)`, we have `statementOrBlock`.
   */
  function getWhileBodyStatements(whileCtx: WhileStatementContext): StatementContext[] {
    return getContainedStatements(whileCtx.statementOrBlock());
  }

  /**
   * For an ifStatement, after `(condition)`, we also have statementOrBlock
   * for the "then" part. If there's an else/elseIf, we find those via
   * `elseClause()` or `elseIfClause()`.
   */
  function getIfThenStatements(ifCtx: IfStatementContext): StatementContext[] {
    return getContainedStatements(ifCtx.statementOrBlock());
  }

  /**
   * For functionDeclaration, the grammar uses block() for the function body.
   */
  function getFunctionBodyStatements(funcCtx: FunctionDeclarationContext): StatementContext[] {
    return funcCtx.block().statement();
  }

  /**
   * For a forStatement, after the `)` we have a statementOrBlock for the body.
   */
  function getForBodyStatements(forCtx: ForStatementContext): StatementContext[] {
    return getContainedStatements(forCtx.statementOrBlock());
  }

  //----------------------------------------------------------------------------
  // Example 9: Nested If/Else with Multiple Conditions
  //----------------------------------------------------------------------------
  test('Example 9: Nested If/Else with Multiple Conditions', () => {
    const input = `
      let score = 75;
      if (score > 90) {
        print("A");
      } else if (score > 75) {
        print("B");
      } else if (score > 60) {
        print("C");
      } else {
        print("F");
      }
    `;
    const tree = parseInput(input);

    // Statement(0): "let score = 75;"
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe('score');
    expect(stmt0?.expression()?.text).toBe('75');

    // Statement(1): if (score > 90) {...} else if(...) else if(...) else {...}
    const ifStmt = tree.statement(1).ifStatement();
    expect(ifStmt?.expression()?.text).toBe('score>90');

    // 1) The 'then' block => get the child statements
    const ifThenStmts = ifStmt ? getIfThenStatements(ifStmt) : [];
    // e.g. statement(0) => "print("A");"
    const thenPrint = ifThenStmts[0].printStatement();
    expect(thenPrint?.expression()?.text).toBe('"A"');

    // 2) The first `elseIfClause`: else if (score > 75) ...
    const elseIfClauses = ifStmt?.elseIfClause() || [];
    // The first elseIf
    const elseIf1 = elseIfClauses[0];
    expect(elseIf1?.expression()?.text).toBe('score>75');
    // statementOrBlock inside elseIf1 => "print("B");"
    const elseIf1Body = getContainedStatements(elseIf1.statementOrBlock());
    const elseIf1Print = elseIf1Body[0].printStatement();
    expect(elseIf1Print?.expression()?.text).toBe('"B"');

    // 3) The second elseIf => else if (score > 60)
    const elseIf2 = elseIfClauses[1];
    expect(elseIf2?.expression()?.text).toBe('score>60');
    const elseIf2Body = getContainedStatements(elseIf2.statementOrBlock());
    const elseIf2Print = elseIf2Body[0].printStatement();
    expect(elseIf2Print?.expression()?.text).toBe('"C"');

    // 4) The final else
    const elseCl = ifStmt?.elseClause();
    const elseBody = elseCl ? getContainedStatements(elseCl.statementOrBlock()) : [];
    // statement(0) => "print("F");"
    const finalPrint = elseBody[0].printStatement();
    expect(finalPrint?.expression()?.text).toBe('"F"');
  });

  //----------------------------------------------------------------------------
  // Example 10: Function Calling Another Function + For Loop
  //----------------------------------------------------------------------------
  test('Example 10: Function Calling Another Function + For Loop', () => {
    const input = `
      function multiply(a, b) {
        return a * b;
      }
      function square(x) {
        return multiply(x, x);
      }
      let result = 0;
      for (let i = 1; i <= 5; i++) {
        result += square(i);
      }
      print(result);
    `;
    const tree = parseInput(input);

    // Statement(0): function multiply(a, b) { return a * b; }
    const funcDecl1 = tree.statement(0).functionDeclaration();
    expect(funcDecl1?.IDENTIFIER(0)?.text).toBe('multiply');
    expect(funcDecl1?.IDENTIFIER(1)?.text).toBe('a');
    expect(funcDecl1?.IDENTIFIER(2)?.text).toBe('b');
    // Body => statements
    const func1BodyStmts = funcDecl1 ? getFunctionBodyStatements(funcDecl1) : [];
    // statement(0): return a * b;
    const returnStmt1 = func1BodyStmts[0].returnStatement();
    expect(returnStmt1?.expression()?.text).toBe('a*b');

    // Statement(1): function square(x) { return multiply(x, x); }
    const funcDecl2 = tree.statement(1).functionDeclaration();
    expect(funcDecl2?.IDENTIFIER(0)?.text).toBe('square');
    expect(funcDecl2?.IDENTIFIER(1)?.text).toBe('x');
    const func2BodyStmts = funcDecl2 ? getFunctionBodyStatements(funcDecl2) : [];
    // statement(0): return multiply(x, x);
    const returnStmt2 = func2BodyStmts[0].returnStatement();
    expect(returnStmt2?.expression()?.text).toBe('multiply(x,x)');

    // Statement(2): let result = 0;
    const stmt2 = tree.statement(2).variableDeclaration();
    expect(stmt2?.IDENTIFIER()?.text).toBe('result');
    expect(stmt2?.expression()?.text).toBe('0');

    // Statement(3): for (let i = 1; i <= 5; i++) { result += square(i); }
    const forStmt = tree.statement(3).forStatement();
    // for init => "let i = 1;"
    expect(forStmt?.variableDeclaration()?.IDENTIFIER()?.text).toBe('i');
    expect(forStmt?.variableDeclaration()?.expression()?.text).toBe('1');
    // condition => i <= 5
    expect(forStmt?.expression(0)?.text).toBe('i<=5');
    // inc => i++
    const incStmt = forStmt?.incrementDecrementStatement();
    expect(incStmt?.IDENTIFIER()?.text).toBe('i');

    // inside for block => statementOrBlock
    const forBodyStmts = forStmt ? getForBodyStatements(forStmt) : [];
    // statement(0): result += square(i);
    const assignment = forBodyStmts[0].assignmentStatement();
    expect(assignment?.IDENTIFIER()?.text).toBe('result');
    expect(assignment?.expression()?.text).toBe('square(i)');

    // Statement(4): print(result);
    const stmt4 = tree.statement(4).printStatement();
    expect(stmt4?.expression()?.text).toBe('result');
  });

  //----------------------------------------------------------------------------
  // Example 11: Complex While with Multiple Breaks
  //----------------------------------------------------------------------------
  test('Example 11: Complex While with Multiple Breaks', () => {
    const input = `
      let counter = 0;
      let limit = 3;
      while (true) {
          if (counter == limit) {
              break;
          }
          counter++;
          if (counter == 2) {
              break;
          }
      }
      print(counter);
    `;
    const tree = parseInput(input);

    // Statement(0): "let counter = 0;"
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe('counter');
    expect(stmt0?.expression()?.text).toBe('0');

    // Statement(1): "let limit = 3;"
    const stmt1 = tree.statement(1).variableDeclaration();
    expect(stmt1?.IDENTIFIER()?.text).toBe('limit');
    expect(stmt1?.expression()?.text).toBe('3');

    // Statement(2): while(true) { ... }
    const whileStmt = tree.statement(2).whileStatement();
    expect(whileStmt?.expression()?.text).toBe('true');

    // The while's body
    const whileBody = whileStmt ? getWhileBodyStatements(whileStmt) : [];
    // statement(0): if (counter == limit) { break; }
    const ifStmt1 = whileBody[0].ifStatement();
    expect(ifStmt1?.expression()?.text).toBe('counter==limit');
    // inside if => statementOrBlock => statements
    const if1ThenStmts = ifStmt1 ? getIfThenStatements(ifStmt1) : [];
    const breakStmt1 = if1ThenStmts[0].breakStatement();
    expect(breakStmt1).toBeTruthy();

    // statement(1): counter++;
    const incStmt = whileBody[1].incrementDecrementStatement();
    expect(incStmt?.IDENTIFIER()?.text).toBe('counter');

    // statement(2): if (counter == 2) { break; }
    const ifStmt2 = whileBody[2].ifStatement();
    expect(ifStmt2?.expression()?.text).toBe('counter==2');
    const if2ThenStmts = getIfThenStatements(ifStmt2!);
    const breakStmt2 = if2ThenStmts[0].breakStatement();
    expect(breakStmt2).toBeTruthy();

    // Statement(3): "print(counter);"
    const stmt3 = tree.statement(3).printStatement();
    expect(stmt3?.expression()?.text).toBe('counter');
  });

  //----------------------------------------------------------------------------
  // Example 12: Array Searching with a Function
  //----------------------------------------------------------------------------
  test('Example 12: Array Searching with a Function', () => {
    const input = `
      let nums = [3, 1, 4, 1, 5, 9];
      function findValue(arr, val) {
          let index = 0;
          while (index < arr.length) {
              if (arr[index] == val) {
                  return index;
              }
              index++;
          }
          return -1;
      }
      let result = findValue(nums, 5);
      print(result);
    `;
    const tree = parseInput(input);

    // Statement(0): "let nums = [3, 1, 4, 1, 5, 9];"
    const stmt0 = tree.statement(0).variableDeclaration();
    expect(stmt0?.IDENTIFIER()?.text).toBe('nums');
    expect(stmt0?.expression()?.text).toBe('[3,1,4,1,5,9]');

    // Statement(1): function findValue(arr, val) { ... }
    const funcDecl = tree.statement(1).functionDeclaration();
    expect(funcDecl?.IDENTIFIER(0)?.text).toBe('findValue');
    expect(funcDecl?.IDENTIFIER(1)?.text).toBe('arr');
    expect(funcDecl?.IDENTIFIER(2)?.text).toBe('val');

    // Inside function body => multiple statements
    const fnBodyStmts = funcDecl ? getFunctionBodyStatements(funcDecl) : [];
    // statement(0): "let index = 0;"
    const fnStmt0 = fnBodyStmts[0].variableDeclaration();
    expect(fnStmt0?.IDENTIFIER()?.text).toBe('index');
    expect(fnStmt0?.expression()?.text).toBe('0');

    // statement(1): while (index < arr.length) { ... }
    const fnWhile = fnBodyStmts[1].whileStatement();
    expect(fnWhile?.expression()?.text).toBe('index<arr.length');
    const fnWhileBody = fnWhile ? getWhileBodyStatements(fnWhile) : [];

    //   statement(0): if (arr[index] == val) { return index; }
    const fnIf = fnWhileBody[0].ifStatement();
    expect(fnIf?.expression()?.text).toBe('arr[index]==val');
    // inside the if => "return index;"
    const fnIfThenStmts = getIfThenStatements(fnIf!);
    const fnReturn1 = fnIfThenStmts[0].returnStatement();
    expect(fnReturn1?.expression()?.text).toBe('index');

    //   statement(1): index++;
    const fnIndexInc = fnWhileBody[1].incrementDecrementStatement();
    expect(fnIndexInc?.IDENTIFIER()?.text).toBe('index');

    // statement(2): "return -1;"
    const fnReturn2 = fnBodyStmts[2].returnStatement();
    expect(fnReturn2?.expression()?.text).toBe('-1');

    // Statement(2): "let result = findValue(nums, 5);"
    const stmt2 = tree.statement(2).variableDeclaration();
    expect(stmt2?.IDENTIFIER()?.text).toBe('result');
    expect(stmt2?.expression()?.text).toBe('findValue(nums,5)');

    // Statement(3): "print(result);"
    const stmt3 = tree.statement(3).printStatement();
    expect(stmt3?.expression()?.text).toBe('result');
  });
});
