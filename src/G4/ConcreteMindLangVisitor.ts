import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  ProgramContext,
  BlockContext,
  StatementOrBlockContext,
  StatementContext,
  VariableDeclarationContext,
  AssignmentStatementContext,
  PrintStatementContext,
  IfStatementContext,
  ElseIfClauseContext,
  ElseClauseContext,
  WhileStatementContext,
  ForStatementContext,
  FunctionDeclarationContext,
  FunctionCallContext,
  ReturnStatementContext,
  IncrementDecrementStatementContext,
  BreakStatementContext,
  ExpressionContext,
  UnaryExpressionContext,
  PrimaryExpressionContext,
  BasePrimaryExpressionContext,
  PostfixOpContext,
  ProcessorDeclarationContext,
  ThrowStatementContext,
  TryCatchContext,
  EventHandlerContext,
  DefaultClauseContext,
  SwitchCaseContext,
  SwitchStatementContext,
} from "./MindLangParser";
import { MindLangVisitor } from "./MindLangVisitor";
import { ASTNode } from "../types/ast";

export class ConcreteMindLangVisitor
  extends AbstractParseTreeVisitor<ASTNode>
  implements MindLangVisitor<ASTNode>
{
  private contextStack: string[] = [];

  protected defaultResult(): ASTNode {
    return { type: "Unknown", children: [] };
  }

  visitProcessorDeclaration(ctx: ProcessorDeclarationContext): ASTNode {
    return {
      type: "ProcessorDeclaration",
      value: ctx.IDENTIFIER().text,
      children: [this.visitBlock(ctx.block())],
    };
  }

  visitProgram(ctx: ProgramContext): ASTNode {
    return {
      type: "Program",
      children: ctx.globalStatement().map((child) => this.visit(child)),
    };
  }

  visitSwitchStatement(ctx: SwitchStatementContext): ASTNode {
    this.contextStack.push("BreakableBlock");
    const result = {
      type: "SwitchStatement",
      children: [
        this.visit(ctx.expression()),
        ...ctx.switchBlock().switchCase().map((caseCtx) => this.visit(caseCtx)),
        ctx.switchBlock().defaultClause()
          ? this.visit(ctx.switchBlock().defaultClause()!)
          : null,
      ].filter((child) => child !== null),
    };
    this.contextStack.pop();

    return result;
  }

  visitCase(ctx: SwitchCaseContext): ASTNode {
    const result = {
      type: "Case",
      value: this.visit(ctx.expression()).value || "",
      children: [this.visit(ctx.statementOrBlock())],
    };
    return result;
  }

  visitDefault(ctx: DefaultClauseContext): ASTNode {
    return {
      type: "Default",
      children: [this.visit(ctx.statementOrBlock())],
    };
  }

  visitEventHandler(ctx: EventHandlerContext): ASTNode {
    return {
      type: "EventHandler",
      value: ctx.STRING().text,
      children: [
        { type: "Parameter", value: ctx.IDENTIFIER().text },
        this.visit(ctx.block()),
      ],
    };
  }

  visitTryCatch(ctx: TryCatchContext): ASTNode {
    return {
      type: "TryCatch",
      children: [
        this.visit(ctx.block(0)),
        {
          type: "Catch",
          value: ctx.IDENTIFIER().text,
          children: [this.visit(ctx.block(1))],
        },
      ],
    };
  }

  visitThrowStatement(ctx: ThrowStatementContext): ASTNode {
    return {
      type: "ThrowStatement",
      children: [this.visit(ctx.expression())],
    };
  }    

  visitBlock(ctx: BlockContext): ASTNode {
    return {
      type: "Block",
      children: ctx.statement().map((stmt) => this.visit(stmt)),
    };
  }

  visitStatementOrBlock(ctx: StatementOrBlockContext): ASTNode {
    if (ctx.block()) return this.visit(ctx.block()!);
    return this.visit(ctx.statement()!);
  }

  visitStatement(ctx: StatementContext): ASTNode {
    if (ctx.variableDeclaration()) {
      return this.visit(ctx.variableDeclaration()!);
    } else if (ctx.assignmentStatement()) {
      return this.visit(ctx.assignmentStatement()!);
    } else if (ctx.printStatement()) {
      return this.visit(ctx.printStatement()!);
    } else if (ctx.ifStatement()) {
      return this.visit(ctx.ifStatement()!);
    } else if (ctx.whileStatement()) {
      return this.visit(ctx.whileStatement()!);
    } else if (ctx.forStatement()) {
      return this.visit(ctx.forStatement()!);
    } else if (ctx.functionDeclaration()) {
      return this.visit(ctx.functionDeclaration()!);
    } else if (ctx.functionCall()) {
      return this.visit(ctx.functionCall()!);
    } else if (ctx.returnStatement()) {
      return this.visit(ctx.returnStatement()!);
    } else if (ctx.incrementDecrementStatement()) {
      return this.visit(ctx.incrementDecrementStatement()!);
    } else if (ctx.breakStatement()) {
      if (!this.contextStack.includes("BreakableBlock"))
        throw new Error("A Break Statement is not allowed outside of a for, while or a switch statement");
      return this.visit(ctx.breakStatement()!);
    } else if (ctx.switchStatement()) {
      return this.visit(ctx.switchStatement()!);
    } else if (ctx.throwStatement()) {
      return this.visit(ctx.throwStatement()!);
    } else if (ctx.tryCatch()) {
      return this.visit(ctx.tryCatch()!);
    } else if (ctx.eventHandler()) {
      return this.visit(ctx.eventHandler()!);
    }
    return this.defaultResult();
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext): ASTNode {
    return {
      type: "VariableDeclaration",
      value: ctx.IDENTIFIER().text,
      children: [this.visit(ctx.expression())],
    };
  }

  visitAssignmentStatement(ctx: AssignmentStatementContext): ASTNode {
    return {
      type: "AssignmentStatement",
      value: ctx.IDENTIFIER().text,
      children: [this.visit(ctx.expression())],
    };
  }

  visitPrintStatement(ctx: PrintStatementContext): ASTNode {
    const expressionNode = this.visit(ctx.expression());
  
    // If the node is a UnaryExpression, traverse its children to get the value
    const value = expressionNode.type === "UnaryExpression" && expressionNode.children?.length
      ? (expressionNode.children ? expressionNode.children[0].value : undefined)
      : expressionNode.value;
  
    return {
      type: "PrintStatement",
      args: [value || ""], // Ensure value is extracted correctly
    };
  }

  visitIfStatement(ctx: IfStatementContext): ASTNode {
    const isInsideBreakableBlock = this.contextStack.includes("BreakableBlock");
    const result = {
      type: "IfStatement",
      children: [
        this.visit(ctx.expression()),
        this.visit(ctx.statementOrBlock()),
        ...ctx.elseIfClause().map((clause) => this.visit(clause)),
        ctx.elseClause() ? this.visit(ctx.elseClause()!) : null,
      ].filter((child) => child !== null),
    };
    if (isInsideBreakableBlock) {
      this.contextStack.push("IfStatementInsideBreakableBlock");
    }
    return result;
  }

  visitElseIfClause(ctx: ElseIfClauseContext): ASTNode {
    return {
      type: "ElseIfClause",
      children: [this.visit(ctx.expression()), this.visit(ctx.statementOrBlock())],
    };
  }

  visitElseClause(ctx: ElseClauseContext): ASTNode {
    return {
      type: "ElseClause",
      children: [this.visit(ctx.statementOrBlock())],
    };
  }

  visitWhileStatement(ctx: WhileStatementContext): ASTNode {
    this.contextStack.push("BreakableBlock");
    let result = {
      type: "WhileStatement",
      children: [this.visit(ctx.expression()), this.visit(ctx.statementOrBlock())],
    };
    this.contextStack.pop();

    return result;
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): ASTNode {
    return {
      type: "FunctionDeclaration",
      value: ctx.IDENTIFIER(0).text,
      children: [
        {
          type: "Parameters",
          children: ctx.IDENTIFIER().slice(1).map((id) => ({
            type: "Parameter",
            value: id.text,
          })),
        },
        this.visit(ctx.block()),
      ],
    };
  }

  visitFunctionCall(ctx: FunctionCallContext): ASTNode {
    return {
      type: "FunctionCall",
      value: ctx.IDENTIFIER().text,
      children: ctx.expression().map((expr) => this.visit(expr)),
    };
  }

  visitReturnStatement(ctx: ReturnStatementContext): ASTNode {
    return {
      type: "ReturnStatement",
      children: [this.visit(ctx.expression())],
    };
  }

  visitIncrementDecrementStatement(ctx: IncrementDecrementStatementContext): ASTNode {
    return {
      type: "IncrementDecrementStatement",
      value: ctx.IDENTIFIER().text,
      args: [ctx.INCREMENT() ? "++" : "--"],
    };
  }

  visitBreakStatement(ctx: BreakStatementContext): ASTNode {
    return { type: "BreakStatement", children: [] };
  }
  
  visitPrimaryExpression(ctx: PrimaryExpressionContext): ASTNode {
    return this.visit(ctx.basePrimaryExpression());
  }

  visitForStatement(ctx: ForStatementContext): ASTNode {
    
    this.contextStack.push("BreakableBlock");
    const result = {
      type: "ForStatement",
      children: [
        this.visit(ctx.variableDeclaration()),
        this.visit(ctx.expression(0)),
        ctx.incrementDecrementStatement()
          ? this.visit(ctx.incrementDecrementStatement()!)
          : this.visit(ctx.expression(1)),
        this.visit(ctx.statementOrBlock()),
      ],
    };
    
    this.contextStack.pop();
    return result;
  }

  visitExpression(ctx: ExpressionContext): ASTNode {
    if (ctx.unaryExpression().length > 1) {
      return {
        type: "BinaryExpression",
        value: ctx.getChild(1)?.text || "", // Access the operator between unary expressions
        children: ctx.unaryExpression().map((expr) => this.visit(expr)),
      };
    }
    return this.visit(ctx.unaryExpression(0)!);
  }

    visitUnaryExpression(ctx: UnaryExpressionContext): ASTNode {
    return {
        type: "UnaryExpression",
        value: ctx.MINUS() ? "-" : undefined, // Safely access MINUS operator
        children: [this.visit(ctx.primaryExpression()!)],
    };
    }

    visitBasePrimaryExpression(ctx: BasePrimaryExpressionContext): ASTNode {
        if (ctx.IDENTIFIER()) {
          return { type: "Identifier", value: ctx.IDENTIFIER()!.text };
        } else if (ctx.NUMBER()) {
          return { type: "NumberLiteral", value: ctx.NUMBER()!.text };
        } else if (ctx.STRING()) {
          return { type: "StringLiteral", value: ctx.STRING()!.text };
        } else if (ctx.expression(0)) {
          return this.visit(ctx.expression(0)!);
        }
        return this.defaultResult();
      }

      visitPostfixOp(ctx: PostfixOpContext): ASTNode {
        if (ctx.DOT() && ctx.IDENTIFIER()) {
          return { type: "PostfixDot", value: ctx.IDENTIFIER()!.text };
        } else if (ctx.LPAREN()) {
          return {
            type: "PostfixCall",
            children: ctx.expression().map((expr) => this.visit(expr)),
          };
        } else if (ctx.LBRACKET() && ctx.expression(0)) {
          return {
            type: "PostfixIndex",
            children: [this.visit(ctx.expression(0)!)],
          };
        }
        return this.defaultResult();
      }
}
