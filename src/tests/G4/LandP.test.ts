import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { MindLangLexer } from '../../G4/MindLangLexer';
import {
  MindLangParser,
  ExpressionContext,
  WhileStatementContext,
  StatementContext,
  IfStatementContext,
  BlockContext,
  StatementOrBlockContext,
  FunctionDeclarationContext,
  ForStatementContext
} from '../../G4/MindLangParser';
import { Interval } from 'antlr4ts/misc/Interval';

describe('MindLang Lexer and Parser Tests', () => {
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
        // If there's no stop token, fallback to the start token.
        const stopIndex = ctx.stop ? ctx.stop.stopIndex : startIndex;
        const interval = new Interval(startIndex, stopIndex);
        return ctx.start.inputStream?.getText(interval) ?? "";
    };

    // A small helper to retrieve statements inside a statementOrBlock
    // If statementOrBlock is a single 'statement', we treat it like a list of length 1
    // If statementOrBlock is a 'block', we get them from the block
    function getContainedStatements(sb: StatementOrBlockContext): StatementContext[] {
        const blockNode = sb.block();
        if (blockNode) {
            return blockNode.statement();
        } else {
            // It's just a single statement
            return [sb.statement()!];
        }
    }

    // A helper to get statements from a WhileStatementContext
    // Because whileStatement() has: expression RPAREN statementOrBlock
    function getWhileBodyStatements(whileCtx: WhileStatementContext): StatementContext[] {
        const sb = whileCtx.statementOrBlock();
        return getContainedStatements(sb);
    }

    // A helper to get statements from an IfStatementContext's "then" block
    function getIfThenStatements(ifCtx: IfStatementContext): StatementContext[] {
        // statementOrBlock after the condition
        return getContainedStatements(ifCtx.statementOrBlock());
    }

    // For the final else, or the else-if, we also get statementOrBlock.
    // You can adapt these as needed.

    // A helper for functionDeclaration (which requires a block)
    function getFunctionBodyStatements(funcCtx: FunctionDeclarationContext): StatementContext[] {
        // functionDeclaration -> block
        // So do funcCtx.block().statement(...) to get all statements
        return funcCtx.block().statement();
    }

    // A helper for forStatement
    // forStatement() has 'statementOrBlock' after the RPAREN
    function getForBodyStatements(forCtx: ForStatementContext): StatementContext[] {
        return getContainedStatements(forCtx.statementOrBlock());
    }

    //-----------------------------------------------------------------------------------
    // Example 1: Basic Variable Declaration and While Loop
    //-----------------------------------------------------------------------------------
    test('Example 1: Basic Variable Declaration and While Loop', () => {
        const input = `let x = 0; let y = 0; while (x < 5) { x++; y = x + y; } print(y);`;
        const tree = parseInput(input);

        // statement(0): "let x = 0;"
        const stmt0 = tree.statement(0).variableDeclaration();
        expect(stmt0?.IDENTIFIER()?.text).toBe("x");
        expect(stmt0?.expression()?.text).toBe("0");

        // statement(1): "let y = 0;"
        const stmt1 = tree.statement(1).variableDeclaration();
        expect(stmt1?.IDENTIFIER()?.text).toBe("y");
        expect(stmt1?.expression()?.text).toBe("0");

        // statement(2): "while (x < 5) { ... }"
        const whileStmt = tree.statement(2).whileStatement();
        expect(whileStmt?.expression()?.text).toBe("x<5");

        // Inside the while: get statements from statementOrBlock
        const bodyStmts = whileStmt ? getWhileBodyStatements(whileStmt) : [];
        // statement(0): "x++;"
        const incStmt = bodyStmts[0].incrementDecrementStatement();
        expect(incStmt?.IDENTIFIER()?.text).toBe("x");

        // statement(1): "y = x + y;"
        const assignStmt = bodyStmts[1].assignmentStatement();
        expect(assignStmt?.IDENTIFIER()?.text).toBe("y");
        expect(assignStmt?.expression()?.text).toBe("x+y");

        // statement(3): "print(y);"
        const stmt3 = tree.statement(3).printStatement();
        expect(stmt3?.expression()?.text).toBe("y");
    });

    //-----------------------------------------------------------------------------------
    // Example 2: Conditional Statement
    //-----------------------------------------------------------------------------------
    test('Example 2: Conditional Statement', () => {
        const input = `
            let x = 10;
            let y = 20;
            if (x > y) {
                print("x is greater than y");
            } else {
                print("y is greater than or equal to x");
            }
        `;
        const tree = parseInput(input);

        // statement(0): "let x = 10;"
        const stmt0 = tree.statement(0).variableDeclaration();
        expect(stmt0?.IDENTIFIER()?.text).toBe("x");
        expect(stmt0?.expression()?.text).toBe("10");

        // statement(1): "let y = 20;"
        const stmt1 = tree.statement(1).variableDeclaration();
        expect(stmt1?.IDENTIFIER()?.text).toBe("y");
        expect(stmt1?.expression()?.text).toBe("20");

        // statement(2): if (x > y) { ... } else { ... }
        const ifStmt = tree.statement(2).ifStatement();
        expect(ifStmt?.expression()?.text).toBe("x>y");

        // The 'then' block => "print("x is greater than y");"
        const thenStmts = ifStmt ? getIfThenStatements(ifStmt) : [];
        const thenPrint = thenStmts[0].printStatement();
        expect(thenPrint?.expression()?.text).toBe("\"x is greater than y\"");

        // The optional elseClause: ifStmt.elseClause()?.statementOrBlock()
        // But easier to check if there's no elseIfClause => so the first else is the final block
        const elseCl = ifStmt?.elseClause();
        const elseSB = elseCl?.statementOrBlock();
        const elseBlockStmts = elseSB ? getContainedStatements(elseSB) : [];
        // "print("y is greater than or equal to x");"
        const elsePrint = elseBlockStmts[0].printStatement();
        expect(elsePrint?.expression()?.text).toBe("\"y is greater than or equal to x\"");
    });

    //-----------------------------------------------------------------------------------
    // Example 3: Nested Loops
    //-----------------------------------------------------------------------------------
    test('Example 3: Nested Loops', () => {
        const input = `
            let i = 1;
            while (i <= 10) {
                let j = 1;
                while (j <= 10) {
                    print(i * j);
                    j++;
                }
                i++;
            }
        `;
        const tree = parseInput(input);

        // statement(0): "let i = 1;"
        const stmt0 = tree.statement(0).variableDeclaration();
        expect(stmt0?.IDENTIFIER()?.text).toBe("i");
        expect(stmt0?.expression()?.text).toBe("1");

        // statement(1): "while (i <= 10) ..."
        const outerWhile = tree.statement(1).whileStatement();
        // Condition text
        const outerCondText = extractOriginalText(outerWhile?.expression()!);
        expect(outerCondText).toBe("i <= 10");

        const outerBody = outerWhile ? getWhileBodyStatements(outerWhile) : [];

        // statement(0): "let j = 1;"
        const stmtA = outerBody[0].variableDeclaration();
        expect(stmtA?.IDENTIFIER()?.text).toBe("j");
        expect(stmtA?.expression()?.text).toBe("1");

        // statement(1): "while (j <= 10) { ... }"
        const innerWhileCtx = outerBody[1].whileStatement();
        const innerCondText = extractOriginalText(innerWhileCtx?.expression()!);
        expect(innerCondText).toBe("j <= 10");

        // Inside that while
        const innerBodyStmts = innerWhileCtx ? getWhileBodyStatements(innerWhileCtx) : [];
        // statement(0): "print(i * j);"
        const printStmt = innerBodyStmts[0].printStatement();
        expect(printStmt?.expression()?.text).toBe("i*j");

        // statement(1): "j++;"
        const incrStmt = innerBodyStmts[1].incrementDecrementStatement();
        expect(incrStmt?.IDENTIFIER()?.text).toBe("j");

        // statement(2): "i++;"
        const outerIncr = outerBody[2].incrementDecrementStatement();
        expect(outerIncr?.IDENTIFIER()?.text).toBe("i");
    });

    //-----------------------------------------------------------------------------------
    // Example 4: Fibonacci Sequence
    //-----------------------------------------------------------------------------------
    test('Example 4: Fibonacci Sequence', () => {
        const input = `
            let n = 10;
            let a = 0;
            let b = 1;
            while (n > 0) {
                let temp = a + b;
                a = b;
                b = temp;
                n--;
            }
            print(a);
        `;
        const tree = parseInput(input);

        // statement(0): "let n = 10;"
        const stmt0 = tree.statement(0).variableDeclaration();
        expect(stmt0?.IDENTIFIER()?.text).toBe("n");
        expect(stmt0?.expression()?.text).toBe("10");

        // statement(1): "let a = 0;"
        const stmt1 = tree.statement(1).variableDeclaration();
        expect(stmt1?.IDENTIFIER()?.text).toBe("a");
        expect(stmt1?.expression()?.text).toBe("0");

        // statement(2): "let b = 1;"
        const stmt2 = tree.statement(2).variableDeclaration();
        expect(stmt2?.IDENTIFIER()?.text).toBe("b");
        expect(stmt2?.expression()?.text).toBe("1");

        // statement(3): "while (n > 0) { ... }"
        const whileStmt = tree.statement(3).whileStatement();
        expect(whileStmt?.expression()?.text).toBe("n>0");

        // Inside that while
        const whileBodyStmts = whileStmt ? getWhileBodyStatements(whileStmt) : [];
        // statement(0): "let temp = a + b;"
        const stmtA = whileBodyStmts[0].variableDeclaration();
        expect(stmtA?.IDENTIFIER()?.text).toBe("temp");
        expect(stmtA?.expression()?.text).toBe("a+b");

        // statement(1): "a = b;"
        const stmtB = whileBodyStmts[1].assignmentStatement();
        expect(stmtB?.IDENTIFIER()?.text).toBe("a");
        expect(stmtB?.expression()?.text).toBe("b");

        // statement(2): "b = temp;"
        const stmtC = whileBodyStmts[2].assignmentStatement();
        expect(stmtC?.IDENTIFIER()?.text).toBe("b");
        expect(stmtC?.expression()?.text).toBe("temp");

        // statement(3): "n--;"
        const stmtD = whileBodyStmts[3].incrementDecrementStatement();
        expect(stmtD?.IDENTIFIER()?.text).toBe("n");

        // statement(4): "print(a);"
        const stmt4 = tree.statement(4).printStatement();
        expect(stmt4?.expression()?.text).toBe("a");
    });

    //-----------------------------------------------------------------------------------
    // Example 5: Factorial Calculation
    //-----------------------------------------------------------------------------------
    test('Example 5: Factorial Calculation', () => {
        const input = `
            let n = 5;
            let factorial = 1;
            while (n > 0) {
                factorial = factorial * n;
                n--;
            }
            print(factorial);
        `;
        const tree = parseInput(input);

        // statement(0): "let n = 5;"
        const stmt0 = tree.statement(0).variableDeclaration();
        expect(stmt0?.IDENTIFIER()?.text).toBe("n");
        expect(stmt0?.expression()?.text).toBe("5");

        // statement(1): "let factorial = 1;"
        const stmt1 = tree.statement(1).variableDeclaration();
        expect(stmt1?.IDENTIFIER()?.text).toBe("factorial");
        expect(stmt1?.expression()?.text).toBe("1");

        // statement(2): "while (n > 0) { ... }"
        const whileStmt = tree.statement(2).whileStatement();
        expect(whileStmt?.expression()?.text).toBe("n>0");

        // Inside while
        const whileBody = whileStmt ? getWhileBodyStatements(whileStmt) : [];
        // statement(0): "factorial = factorial * n;"
        const stmtA = whileBody[0].assignmentStatement();
        expect(stmtA?.IDENTIFIER()?.text).toBe("factorial");
        expect(stmtA?.expression()?.text).toBe("factorial*n");

        // statement(1): "n--;"
        const stmtB = whileBody[1].incrementDecrementStatement();
        expect(stmtB?.IDENTIFIER()?.text).toBe("n");

        // statement(3): "print(factorial);"
        const stmt3 = tree.statement(3).printStatement();
        expect(stmt3?.expression()?.text).toBe("factorial");
    });

    //-----------------------------------------------------------------------------------
    // Example 6: Simulated Functions
    //-----------------------------------------------------------------------------------
    test('Example 6: Simulated Functions', () => {
        const input = `
            function add(a, b) {
                return a + b;
            }
            let x = 10;
            let y = 20;
            let result = add(x, y);
            print(result);
        `;
        const tree = parseInput(input);

        // statement(0): "function add(a, b) { ... }"
        const funcDecl = tree.statement(0).functionDeclaration();
        expect(funcDecl?.IDENTIFIER(0)?.text).toBe("add");
        // Parameters: a, b
        expect(funcDecl?.IDENTIFIER(1)?.text).toBe("a");
        expect(funcDecl?.IDENTIFIER(2)?.text).toBe("b");

        // function body => block => statements
        const funcBodyStmts = funcDecl ? getFunctionBodyStatements(funcDecl) : [];
        // statement(0): "return a + b;"
        const returnStmt = funcBodyStmts[0].returnStatement();
        expect(returnStmt?.expression()?.text).toBe("a+b");

        // statement(1): "let x = 10;"
        const stmt1 = tree.statement(1).variableDeclaration();
        expect(stmt1?.IDENTIFIER()?.text).toBe("x");
        expect(stmt1?.expression()?.text).toBe("10");

        // statement(2): "let y = 20;"
        const stmt2 = tree.statement(2).variableDeclaration();
        expect(stmt2?.IDENTIFIER()?.text).toBe("y");
        expect(stmt2?.expression()?.text).toBe("20");

        // statement(3): "let result = add(x, y);"
        const stmt3 = tree.statement(3).variableDeclaration();
        expect(stmt3?.IDENTIFIER()?.text).toBe("result");
        expect(stmt3?.expression()?.text).toBe("add(x,y)");

        // statement(4): "print(result);"
        const stmt4 = tree.statement(4).printStatement();
        expect(stmt4?.expression()?.text).toBe("result");
    });

    //-----------------------------------------------------------------------------------
    // Example 7: Handling Arrays
    //-----------------------------------------------------------------------------------
    test('Example 7: Handling Arrays', () => {
        const input = `
            let array = [10, 20, 30, 40, 50];
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            print(sum);
        `;
        const tree = parseInput(input);

        // statement(0): "let array = [10, 20, 30, 40, 50];"
        const stmt0 = tree.statement(0).variableDeclaration();
        expect(stmt0?.IDENTIFIER()?.text).toBe("array");
        expect(stmt0?.expression()?.text).toBe("[10,20,30,40,50]");

        // statement(1): "let sum = 0;"
        const stmt1 = tree.statement(1).variableDeclaration();
        expect(stmt1?.IDENTIFIER()?.text).toBe("sum");
        expect(stmt1?.expression()?.text).toBe("0");

        // statement(2): "for (let i = 0; i < array.length; i++) { sum += array[i]; }"
        const forStmt = tree.statement(2).forStatement();
        // variableDeclaration: "let i = 0;"
        expect(forStmt?.variableDeclaration()?.IDENTIFIER()?.text).toBe("i");
        expect(forStmt?.variableDeclaration()?.expression()?.text).toBe("0");

        // Condition: i < array.length
        expect(forStmt?.expression(0)?.text).toBe("i<array.length");

        // Increment: i++
        const incStmt = forStmt?.incrementDecrementStatement();
        expect(incStmt?.IDENTIFIER()?.text).toBe("i");

        // Inside the for block => statementOrBlock => statements
        const forBodyStmts = forStmt ? getForBodyStatements(forStmt) : [];
        // statement(0): "sum += array[i];"
        const sumAssign = forBodyStmts[0].assignmentStatement();
        expect(sumAssign?.IDENTIFIER()?.text).toBe("sum");
        expect(sumAssign?.expression()?.text).toBe("array[i]");

        // statement(3): "print(sum);"
        const stmt3 = tree.statement(3).printStatement();
        expect(stmt3?.expression()?.text).toBe("sum");
    });

    //-----------------------------------------------------------------------------------
    // Example 8: Prime Numbers
    //-----------------------------------------------------------------------------------
    test('Example 8: Prime Numbers', () => {
        const input = `
            let limit = 10;
            let num = 2;
            while (num <= limit) {
                let isPrime = true;
                let divisor = 2;
                while (divisor * divisor <= num) {
                    if (num % divisor == 0) {
                        isPrime = false;
                        break;
                    }
                    divisor++;
                }
                if (isPrime) {
                    print(num);
                }
                num++;
            }
        `;
        const tree = parseInput(input);

        // statement(0): "let limit = 10;"
        const stmt0 = tree.statement(0).variableDeclaration();
        expect(stmt0?.IDENTIFIER()?.text).toBe("limit");
        expect(stmt0?.expression()?.text).toBe("10");

        // statement(1): "let num = 2;"
        const stmt1 = tree.statement(1).variableDeclaration();
        expect(stmt1?.IDENTIFIER()?.text).toBe("num");
        expect(stmt1?.expression()?.text).toBe("2");

        // statement(2): "while (num <= limit) { ... }"
        const outerWhile = tree.statement(2).whileStatement();
        expect(outerWhile?.expression()?.text).toBe("num<=limit");

        // Outer while body
        const outerWhileBody = outerWhile ? getWhileBodyStatements(outerWhile) : [];
        // statement(0): "let isPrime = true;"
        const stmtA = outerWhileBody[0].variableDeclaration();
        expect(stmtA?.IDENTIFIER()?.text).toBe("isPrime");
        expect(stmtA?.expression()?.text).toBe("true");

        // statement(1): "let divisor = 2;"
        const stmtB = outerWhileBody[1].variableDeclaration();
        expect(stmtB?.IDENTIFIER()?.text).toBe("divisor");
        expect(stmtB?.expression()?.text).toBe("2");

        // statement(2): inner while (divisor * divisor <= num)
        const innerWhile = outerWhileBody[2].whileStatement();
        expect(innerWhile?.expression()?.text).toBe("divisor*divisor<=num");

        // Inside inner while
        const innerWhileBody = innerWhile ? getWhileBodyStatements(innerWhile) : [];
        // statement(0): if (num % divisor == 0) { isPrime = false; break; }
        const innerIf = innerWhileBody[0].ifStatement();
        expect(innerIf?.expression()?.text).toBe("num%divisor==0");

        // The 'then' block => statements
        const innerIfThen = getIfThenStatements(innerIf!);
        // statement(0): "isPrime = false;"
        const innerAssign = innerIfThen[0].assignmentStatement();
        expect(innerAssign?.IDENTIFIER()?.text).toBe("isPrime");
        expect(innerAssign?.expression()?.text).toBe("false");

        // statement(1): "break;"
        const breakStmt = innerIfThen[1].breakStatement();
        expect(breakStmt).toBeTruthy();

        // statement(1): "divisor++;"
        const divInc = innerWhileBody[1].incrementDecrementStatement();
        expect(divInc?.IDENTIFIER()?.text).toBe("divisor");

        // statement(3): "if (isPrime) { print(num); }"
        const outerIf = outerWhileBody[3].ifStatement();
        expect(outerIf?.expression()?.text).toBe("isPrime");

        // inside that if => statement(0): "print(num);"
        const outerIfThen = getIfThenStatements(outerIf!);
        const primePrint = outerIfThen[0].printStatement();
        expect(primePrint?.expression()?.text).toBe("num");

        // statement(4): "num++;"
        const numInc = outerWhileBody[4].incrementDecrementStatement();
        expect(numInc?.IDENTIFIER()?.text).toBe("num");
    });
});
