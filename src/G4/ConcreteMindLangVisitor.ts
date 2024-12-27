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
} from "./MindLangParser";
import { MindLangVisitor } from "./MindLangVisitor";
import { ASTNode } from "../types/ast";

export class ConcreteMindLangVisitor
  extends AbstractParseTreeVisitor<ASTNode>
  implements MindLangVisitor<ASTNode>
{
  protected defaultResult(): ASTNode {
    return { type: "Unknown", children: [] };
  }

  visitProgram(ctx: ProgramContext): ASTNode {
    return {
      type: "Program",
      children: ctx.statement().map((child) => this.visit(child)),
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
      return this.visit(ctx.breakStatement()!);
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
    return {
      type: "IfStatement",
      children: [
        this.visit(ctx.expression()),
        this.visit(ctx.statementOrBlock()),
        ...ctx.elseIfClause().map((clause) => this.visit(clause)),
        ctx.elseClause() ? this.visit(ctx.elseClause()!) : null,
      ].filter((child) => child !== null),
    };
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
    return {
      type: "WhileStatement",
      children: [this.visit(ctx.expression()), this.visit(ctx.statementOrBlock())],
    };
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
    return {
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
