// Generated from ./MindLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./MindLangParser";
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
import { ExpressionContext } from "./MindLangParser";
import { UnaryExpressionContext } from "./MindLangParser";
import { PrimaryExpressionContext } from "./MindLangParser";
import { BasePrimaryExpressionContext } from "./MindLangParser";
import { PostfixOpContext } from "./MindLangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MindLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MindLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MindLangParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.statementOrBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementOrBlock?: (ctx: StatementOrBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.elseIfClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfClause?: (ctx: ElseIfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.elseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseClause?: (ctx: ElseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.incrementDecrementStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementDecrementStatement?: (ctx: IncrementDecrementStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.basePrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasePrimaryExpression?: (ctx: BasePrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MindLangParser.postfixOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixOp?: (ctx: PostfixOpContext) => Result;
}

