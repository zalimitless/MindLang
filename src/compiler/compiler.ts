import { CharStreams, CommonTokenStream } from "antlr4ts";
import { MindLangLexer } from "../G4/MindLangLexer";
import { MindLangParser } from "../G4/MindLangParser";
import { IRGenerator } from "./irGenerator";
import { ASTNode } from "../types/ast";
import { IRNode } from "../types/ir";
import { ConcreteMindLangVisitor } from "../G4/ConcreteMindLangVisitor";
import { translateToTarget } from "./traverse";
// import { Optimizer } from "./optimizer";

export class Compiler {

  compile(sourceCode: string): IRNode {
    // Step 1: Tokenization
    const inputStream = CharStreams.fromString(sourceCode);
    const lexer = new MindLangLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Step 2: Parsing
    const parser = new MindLangParser(tokenStream);
    const parseTree = parser.program();

    // Step 3: AST Generation via Visitor
    const astVisitor = new ConcreteMindLangVisitor(); // Use the concrete visitor
    const ast: ASTNode = astVisitor.visit(parseTree);

    // Step 4: IR Generation
    const irGenerator = new IRGenerator();
    let ir: IRNode = irGenerator.generateIR(ast);

    // Optional Step 5: Optimization (Not implemented yet)
    // ir = this.optimizer.optimize(ir);

    return ir;
  }

  compileToTarget(sourceCode: string): string {
    // Compile to IR first
    const ir = this.compile(sourceCode);

    // Translate IR to Target Code (e.g., MLog)
    return translateToTarget(ir);
  }
}