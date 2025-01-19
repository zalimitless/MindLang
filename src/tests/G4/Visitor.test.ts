import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { ConcreteMindLangVisitor } from '../../G4/ConcreteMindLangVisitor';
import { MindLangLexer } from '../../G4/MindLangLexer';
import { MindLangParser } from '../../G4/MindLangParser';
import { ASTNode } from '../../types/ast';

function ParseSourceCode(sourceCode: string) {
    // Step 1: Tokenization
    const inputStream = CharStreams.fromString(sourceCode);
    const lexer = new MindLangLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Step 2: Parsing
    const parser = new MindLangParser(tokenStream);
    const parseTree = parser.program();

    return parseTree;
}

function getChild(ast: ASTNode | undefined, index: number) {
    return ast?.children && ast.children[index];
}

function expectTypeValue(ast: ASTNode | undefined, type?: string, value?: string) {
    type && expect(ast?.type).toBe(type);
    value && expect(ast?.value).toBe(value);
}

function getProcessorBlock(ast: ASTNode) {
    let processorDeclaration = getChild(ast, 0);
    expect(processorDeclaration?.type).toBe('ProcessorDeclaration');
    
    let block = getChild(processorDeclaration, 0);
    expect(block?.type).toBe('Block');

    return block;
}

describe('Testing Visitor Functions', () => {
    let sourceCode: string;
    let parseTree: ParserRuleContext;
    let astVisitor: ConcreteMindLangVisitor;
    let ast: ASTNode;

    beforeEach(() => {
        astVisitor = new ConcreteMindLangVisitor();
    });

    beforeAll(() => {

        // The MindLangParser throws errors using the console.error function.
        // This is a workaround to prevent the error from being printed to the console.
        // And to fail the test if an error is thrown.
        jest.spyOn(console, 'error').mockImplementation((message) => {
          fail(`${message}`);
        });
      });
      
      afterAll(() => {
        jest.restoreAllMocks();
      });

    test('Test Processor Declaration and Internal Variable Declaration', () => {
        sourceCode = `processor MainProcessor { let x=0; }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);
        
        let processorBlock = getProcessorBlock(ast);

        // Check that internal Variable declaration is present
        let variableDeclaration = getChild(processorBlock, 0);
        expectTypeValue(variableDeclaration, 'VariableDeclaration', 'x');

        let numberLiteral = getChild(variableDeclaration, 0);
        expectTypeValue(numberLiteral, 'NumberLiteral', '0');
    });

    test('Test External Variable Declaration', () => {
        sourceCode = `let x=0;`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let variableDeclaration = getChild(ast, 0);
        expectTypeValue(variableDeclaration, 'VariableDeclaration', 'x');

        let numberLiteral = getChild(variableDeclaration, 0);
        expectTypeValue(numberLiteral, 'NumberLiteral', '0');
    });

    test('Test While Loop', () => {
        sourceCode = `processor MainProcessor { while(x<5) { print(x); } }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        // Check that the while loop is present
        const whileLoop = getChild(processorBlock, 0);
        expectTypeValue(whileLoop, 'WhileStatement');

        // Check that the condition in the while loop is present.
        const condition = getChild(whileLoop, 0);
        expectTypeValue(condition, 'BinaryExpression', '<');

        // Check the left and right side of the Binary Expression
        const leftSide_Indetifier = getChild(condition, 0);
        expectTypeValue(leftSide_Indetifier, 'Identifier', 'x');

        // Check the right side of the Binary Expression
        const rightSide_NumberLiteral = getChild(condition, 1);
        expectTypeValue(rightSide_NumberLiteral, 'NumberLiteral', '5');

        // TODO Test the body of the while loop

    });

    test('Test Print Statement', () => {
        sourceCode = `processor MainProcessor { print(x); }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        const printStatement = getChild(processorBlock, 0);
        expectTypeValue(printStatement, 'PrintStatement');
    });

    test('Test If Statement', () => {
        sourceCode = `processor MainProcessor { if(x<5) { print(x); } }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        const ifStatement = getChild(processorBlock, 0);
        expectTypeValue(ifStatement, 'IfStatement');
    });

    test('Test For Statement', () => {
        sourceCode = `processor MainProcessor { for(let i=0; i<10; i++) { print(i); } }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        const forStatement = getChild(processorBlock, 0);
        expectTypeValue(forStatement, 'ForStatement');
    });

    test('Test Function Declaration', () => {
        sourceCode = `function myFunc(a, b) { return a + b; }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        const functionDeclaration = getChild(ast, 0);
        expectTypeValue(functionDeclaration, 'FunctionDeclaration');
    });

    test('Test Function Call', () => {
        sourceCode = `processor MainProcessor { myFunc(1, 2); }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        const functionCall = getChild(processorBlock, 0);
        expectTypeValue(functionCall, 'FunctionCall');
    });

    test('Test Return Statement', () => {
        sourceCode = `function myFunc() { return 5; }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        const functionDeclaration = getChild(ast, 0);
        expectTypeValue(functionDeclaration, 'FunctionDeclaration');

        const functionParameter = getChild(functionDeclaration, 0);
        expectTypeValue(functionParameter, 'Parameters');

        const functionBlock = getChild(functionDeclaration, 1);
        expectTypeValue(functionBlock, 'Block');

        const returnStatement = getChild(functionBlock, 0);
        expectTypeValue(returnStatement, 'ReturnStatement');
    });

    test('Test Increment Decrement Statement', () => {
        sourceCode = `processor MainProcessor { x++; }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        const incrementDecrement = getChild(processorBlock, 0);
        expectTypeValue(incrementDecrement, 'IncrementDecrementStatement');
    });

    test('Test Break Statement', () => {
        sourceCode = `processor MainProcessor { while(true) break; }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);
        
        let processorBlock = getProcessorBlock(ast);

        const whileStatement = getChild(processorBlock, 0);
        expectTypeValue(whileStatement, 'WhileStatement');

        const breakStatement = getChild(whileStatement, 1);
        expectTypeValue(breakStatement, 'BreakStatement');
    });

    test('Test Switch Statement', () => {

        // TODO: Improve Grammar for switch statements
        sourceCode = `processor MainProcessor { switch(x) { case 1: { print(1); break; } default: print(0); } }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);
        
        let processorBlock = getProcessorBlock(ast);

        const switchStatement = getChild(processorBlock, 0);
        expectTypeValue(switchStatement, 'SwitchStatement');
    });

    test('Test Event Handler', () => {
        sourceCode = `processor MainProcessor { on("event", handler) { print("event triggered"); } }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);
        
        let processorBlock = getProcessorBlock(ast);
        
        const eventHandler = getChild(processorBlock, 0);
        expectTypeValue(eventHandler, 'EventHandler');
    });

    test('Test Try Catch', () => {
        sourceCode = `processor MainProcessor { try { print("try"); } catch(e) { print("catch"); } }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        const tryCatch = getChild(processorBlock, 0);
        expectTypeValue(tryCatch, 'TryCatch');
    });

    test('Test Throw Statement', () => {
        sourceCode = `processor MainProcessor { throw "error"; }`;
        parseTree = ParseSourceCode(sourceCode);
        ast = astVisitor.visit(parseTree);

        let processorBlock = getProcessorBlock(ast);

        const throwStatement = getChild(processorBlock, 0);
        expectTypeValue(throwStatement, 'ThrowStatement');
    });
});