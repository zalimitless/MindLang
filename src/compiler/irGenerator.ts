import { IRNode } from "../types/ir";
import { ASTNode } from "../types/ast";

export class IRGenerator {
  private tempVarCounter = 0;

  private generateTempVar(): string {
    // gv = Generated Variable
    return `gv_${String(this.tempVarCounter++).padStart(3, '0')}`;
  }

  private flattenExpression(ast: ASTNode): string {
    if (!ast) return "";

    switch (ast.type) {
      case "BinaryExpression":
        const left = this.flattenExpression(ast.children?.[0]!);
        const right = this.flattenExpression(ast.children?.[1]!);
        return `${left} ${ast.value} ${right}`;

      case "UnaryExpression":
        return `${ast.value ?? ""}${this.flattenExpression(ast.children?.[0]!)}`;

      case "Identifier":
      case "NumberLiteral":
      case "StringLiteral":
        return ast.value || "";

      case "CallExpression":
        const args = ast.children?.map((child) => this.flattenExpression(child)).join(", ") || "";
        return `${ast.value}(${args})`;

      case "PostfixOperation":
        const baseExpression = this.flattenExpression(ast.children?.[0]!);
        const postfixOp = ast.children?.[1]?.value || "";
        return `${baseExpression}${postfixOp}`;

      default:
        return ast.value || "";
    }
  }

  generateIR(ast: ASTNode): IRNode {
    switch (ast.type) {
      case "Program":
        return {
          type: "Program",
          args: [],
          children: ast.children?.map((child) => this.generateIR(child)) || [],
        };

      case "FunctionDeclaration":
        return {
          type: "FunctionDeclaration",
          args: [ast.value || ""], // Function name
          children: ast.children?.map((child) => this.generateIR(child)) || [],
        };

      case "VariableDeclaration":
        if (ast.children?.[0]?.type === "BinaryExpression") {
          const tempVar = this.generateTempVar();
          const left = this.flattenExpression(ast.children?.[0]?.children?.[0]!);
          const operator = ast.children?.[0]?.value || "";
          const right = this.flattenExpression(ast.children?.[0]?.children?.[1]!);
          return {
            type: "Block",
            args: [],
            children: [
              {
                type: "Operation",
                args: [
                  operator,
                  tempVar,
                  left,
                  right
                ],
              },
              {
                type: "VariableDeclaration",
                args: [
                  ast.value || "", // Variable name
                  tempVar
                ],
                children: ast.children
                  ?.slice(1)
                  .map((child) => this.generateIR(child)) || [], // Process additional children
              }
            ]
          };
        } else {
          return {
            type: "VariableDeclaration",
            args: [
              ast.value || "", // Variable name
              this.flattenExpression(ast.children?.[0]!) || "" // Initial value (flattenExpression handles nested expressions)
            ],
            children: ast.children
              ?.slice(1)
              .map((child) => this.generateIR(child)) || [], // Process additional children
          };
        }

      case "Assignment":
        if (ast.children?.[0]?.type === "BinaryExpression") {
          const tempVar = this.generateTempVar();
          const left = this.flattenExpression(ast.children?.[0]?.children?.[0]!);
          const operator = ast.children?.[0]?.value || "";
          const right = this.flattenExpression(ast.children?.[0]?.children?.[1]!);
          return {
            type: "Block",
            args: [],
            children: [
              {
                type: "Operation",
                args: [
                  operator,
                  tempVar,
                  left,
                  right
                ],
              },
              {
                type: "Assignment",
                args: [
                  ast.value || "", // Variable name
                  tempVar
                ],
              }
            ]
          };
        } else {
          return {
            type: "Assignment",
            args: [
              ast.value || "", // Variable name
              this.flattenExpression(ast.children?.[0]!) || "" // Assigned value
            ],
          };
        }

      case "IncrementDecrement":
        return {
          type: "IncrementDecrement",
          args: [ast.value || "", ast.children?.[0]?.value || ""], // Variable and operation
        };

      case "UnaryExpression":
        return {
          type: "UnaryExpression",
          args: [ast.value || "", ast.children?.[0]?.value || ""], // Operator and operand
        };

      case "BinaryExpression":
        const tempVar = this.generateTempVar();
        const left = this.flattenExpression(ast.children?.[0]!);
        const operator = ast.value || "";
        const right = this.flattenExpression(ast.children?.[1]!);
        return {
          type: "Operation",
          args: [
            operator,
            tempVar,
            left,
            right
          ],
        };

      case "PostfixOperation":
        return {
          type: "PostfixOperation",
          args: [
            ast.children?.[0]?.value || "", // Base expression
            ast.children?.[1]?.value || ""  // Postfix operator
          ],
        };

      case "IfStatement":
        return {
          type: "IfStatement",
          args: [
            this.flattenExpression(ast.children?.[0]!) // Combine the condition into a string
          ],
          children: ast.children?.slice(1).map((child) => this.generateIR(child)) || [],
        };

      case "WhileLoop":
        return {
          type: "WhileLoop",
          args: [this.flattenExpression(ast.children?.[0]!)], // Condition
          children: ast.children?.slice(1).map((child) => this.generateIR(child)) || [],
        };

      case "ReturnStatement":
        return {
          type: "ReturnStatement",
          args: [this.flattenExpression(ast.children?.[0]!)], // Returned value
        };

      case "CallExpression":
        return {
          type: "CallExpression",
          args: [
            ast.value || "",
            ...(ast.children?.map((child) => child.value || "") || [])
          ],
        };

      case "ForLoop":
        return {
          type: "ForLoop",
          args: [
            this.flattenExpression(ast.children?.[0]!), // Initialization (e.g., "i = 0")
            this.flattenExpression(ast.children?.[1]!), // Condition (e.g., "i < 10")
            this.flattenExpression(ast.children?.[2]!)  // Increment (e.g., "i++")
          ],
          children: ast.children
            ?.slice(3)
            .map((child) => this.generateIR(child)) || [], // Process loop body
        };

      case "Block":
        return {
          type: "Block",
          args: [],
          children: ast.children?.map((child) => this.generateIR(child)) || [],
        };

      case "PrintStatement":
        return {
          type: "PrintStatement",
          args: ast.args || [],
        };

      case "Literal":
      case "Variable":
        return {
          type: ast.type,
          args: [ast.value || ""], // The literal value or variable name
        };

      case "Parameters":
        return {
          type: "Parameters",
          args: ast.children?.map((child) => child.value || "") || [], // List of parameter names
        };

      default:
        throw new Error(`Unknown AST node type: ${ast.type}`);
    }
  }

  validateIR(ir: IRNode): void {
    if (!ir.type) {
      throw new Error("IRNode must have a type.");
    }

    if (ir.children) {
      ir.children.forEach((child) => this.validateIR(child));
    }
  }
}