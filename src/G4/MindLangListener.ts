// Generated from src/G4/MindLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./MindLangParser";
import { GlobalStatementContext } from "./MindLangParser";
import { ProcessorDeclarationContext } from "./MindLangParser";
import { BlockContext } from "./MindLangParser";
import { StatementOrBlockContext } from "./MindLangParser";
import { StatementContext } from "./MindLangParser";
import { VariableDeclarationContext } from "./MindLangParser";
import { AssignmentStatementContext } from "./MindLangParser";
import { PrintStatementContext } from "./MindLangParser";
import { IfStatementContext } from "./MindLangParser";
import { ElseIfClauseContext } from "./MindLangParser";
import { ElseClauseContext } from "./MindLangParser";
import { WhileStatementContext } from "./MindLangParser";
import { ForStatementContext } from "./MindLangParser";
import { FunctionDeclarationContext } from "./MindLangParser";
import { FunctionCallContext } from "./MindLangParser";
import { ReturnStatementContext } from "./MindLangParser";
import { IncrementDecrementStatementContext } from "./MindLangParser";
import { BreakStatementContext } from "./MindLangParser";
import { SwitchStatementContext } from "./MindLangParser";
import { SwitchBlockContext } from "./MindLangParser";
import { SwitchCaseContext } from "./MindLangParser";
import { DefaultClauseContext } from "./MindLangParser";
import { EventHandlerContext } from "./MindLangParser";
import { TryCatchContext } from "./MindLangParser";
import { ThrowStatementContext } from "./MindLangParser";
import { ExpressionContext } from "./MindLangParser";
import { UnaryExpressionContext } from "./MindLangParser";
import { PrimaryExpressionContext } from "./MindLangParser";
import { BasePrimaryExpressionContext } from "./MindLangParser";
import { PostfixOpContext } from "./MindLangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MindLangParser`.
 */
export interface MindLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MindLangParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.globalStatement`.
	 * @param ctx the parse tree
	 */
	enterGlobalStatement?: (ctx: GlobalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.globalStatement`.
	 * @param ctx the parse tree
	 */
	exitGlobalStatement?: (ctx: GlobalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.processorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterProcessorDeclaration?: (ctx: ProcessorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.processorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitProcessorDeclaration?: (ctx: ProcessorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.statementOrBlock`.
	 * @param ctx the parse tree
	 */
	enterStatementOrBlock?: (ctx: StatementOrBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.statementOrBlock`.
	 * @param ctx the parse tree
	 */
	exitStatementOrBlock?: (ctx: StatementOrBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.printStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.printStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintStatement?: (ctx: PrintStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.elseIfClause`.
	 * @param ctx the parse tree
	 */
	enterElseIfClause?: (ctx: ElseIfClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.elseIfClause`.
	 * @param ctx the parse tree
	 */
	exitElseIfClause?: (ctx: ElseIfClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.elseClause`.
	 * @param ctx the parse tree
	 */
	enterElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.elseClause`.
	 * @param ctx the parse tree
	 */
	exitElseClause?: (ctx: ElseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.incrementDecrementStatement`.
	 * @param ctx the parse tree
	 */
	enterIncrementDecrementStatement?: (ctx: IncrementDecrementStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.incrementDecrementStatement`.
	 * @param ctx the parse tree
	 */
	exitIncrementDecrementStatement?: (ctx: IncrementDecrementStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlock?: (ctx: SwitchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlock?: (ctx: SwitchBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.switchCase`.
	 * @param ctx the parse tree
	 */
	enterSwitchCase?: (ctx: SwitchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.switchCase`.
	 * @param ctx the parse tree
	 */
	exitSwitchCase?: (ctx: SwitchCaseContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultClause?: (ctx: DefaultClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.eventHandler`.
	 * @param ctx the parse tree
	 */
	enterEventHandler?: (ctx: EventHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.eventHandler`.
	 * @param ctx the parse tree
	 */
	exitEventHandler?: (ctx: EventHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.tryCatch`.
	 * @param ctx the parse tree
	 */
	enterTryCatch?: (ctx: TryCatchContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.tryCatch`.
	 * @param ctx the parse tree
	 */
	exitTryCatch?: (ctx: TryCatchContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.basePrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBasePrimaryExpression?: (ctx: BasePrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.basePrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBasePrimaryExpression?: (ctx: BasePrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MindLangParser.postfixOp`.
	 * @param ctx the parse tree
	 */
	enterPostfixOp?: (ctx: PostfixOpContext) => void;
	/**
	 * Exit a parse tree produced by `MindLangParser.postfixOp`.
	 * @param ctx the parse tree
	 */
	exitPostfixOp?: (ctx: PostfixOpContext) => void;
}

