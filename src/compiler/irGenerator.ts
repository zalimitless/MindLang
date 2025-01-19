import { IRNode } from "../types/ir";
import { ASTNode } from "../types/ast";

export class IRGenerator {
  private tempVarCounter = 0;

  private generateTempVar(): string {
    // gv = Generated Variable
    return `gv_${String(this.tempVarCounter++).padStart(3, '0')}`;
  }

  // Flatten an expression into a string.
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

  public generateIR(ast: ASTNode): IRNode {
    const handler = this.handlers[ast.type];
    if (!handler) {
      throw new Error(`Unknown AST node type: ${ast.type}`);
    }
    return handler(ast);
  }

  private handlers: { [key: string]: (ast: ASTNode) => IRNode } = {
    "Program": this.handleProgram.bind(this),
    "ProcessorDeclaration": this.handleProcessorDeclaration.bind(this),
    "FunctionDeclaration": this.handleFunctionDeclaration.bind(this),
    "VariableDeclaration": this.handleVariableDeclaration.bind(this),
    "AssignmentStatement": this.handleAssignmentStatement.bind(this),
    "IncrementDecrement": this.handleIncrementDecrement.bind(this),
    "UnaryExpression": this.handleUnaryExpression.bind(this),
    "BinaryExpression": this.handleBinaryExpression.bind(this),
    "PostfixOperation": this.handlePostfixOperation.bind(this),
    "IfStatement": this.handleIfStatement.bind(this),
    "WhileStatement": this.handleWhileStatement.bind(this),
    "ReturnStatement": this.handleReturnStatement.bind(this),
    "FunctionCall": this.handleFunctionCall.bind(this),
    "FunctionAccess": this.handleFunctionAccess.bind(this),
    "ForLoop": this.handleForLoop.bind(this),
    "Block": this.handleBlock.bind(this),
    "PrintStatement": this.handlePrintStatement.bind(this),
    "Literal": this.handleLiteral.bind(this),
    "Variable": this.handleVariable.bind(this),
    "Parameters": this.handleParameters.bind(this),
  };

  // The program is a program.
  // It has no arguments and its children are the children of the AST.
  // The Program itself does not do anything special.

  private handleProgram(ast: ASTNode): IRNode {
    return {
      type: "Program",
      args: [],
      children: ast.children?.map((child) => this.generateIR(child)) || [],
    };
  }

  /* 
    The Processor is a declaration of which processor is being used.
    Multiple processors can be specified in a program.
    - The compiler will compile each processor into its own file.
    Processor properties:
    - Functions written outside processors are added to each processor that uses them.
    - Variables declared outside processors can be used as static variables.
    - Variables declared inside processors are local to the processor.
  */
  // When the variable is stated to be global, it will require memory for cross-compiler communication.
  private handleProcessorDeclaration(ast: ASTNode): IRNode {
    return {
      type: "ProcessorDeclaration",
      args: [ast.value || ""],
      children: ast.children?.map((child) => this.generateIR(child)) || [],
    };
  }

  // The Function is a decleration of a function.
  // It can accept parameters and should be able to return value(s) as well.
  private handleFunctionDeclaration(ast: ASTNode): IRNode {
    return {
      type: "Function",
      args: [ast.value || ""],
      children: ast.children?.map((child) => this.generateIR(child)) || [],
    };
  }

  // The VariableDeclaration is a decleration of a variable.
  // The variable can be assigned a value at the time of decleration and modified throughout the program.
  // There are no constant variables at the moment.
  private handleVariableDeclaration(ast: ASTNode): IRNode {
    
    // TODO: There should be a better way to do this

    // If the variable is assigned using a binary expression value at the time of decleration, generate a temporary variable to hold the value.
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
            args: [operator, tempVar, left, right],
          },
          {
            type: "VariableDeclaration",
            args: [ast.value || "", tempVar],
            children: ast.children?.slice(1).map((child) => this.generateIR(child)) || [],
          },
        ],
      };
    } else {
      // If the variable is assigned a value at the time of decleration, assign the value directly.
      return {
        type: "VariableDeclaration",
        args: [ast.value || "", this.flattenExpression(ast.children?.[0]!) || ""],
        children: ast.children?.slice(1).map((child) => this.generateIR(child)) || [],
      };
    }
  }

  // Assign a value to a variable.
  private handleAssignmentStatement(ast: ASTNode): IRNode {
    // If the variable is assigned using a binary expression value, generate a temporary variable to hold the value.
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
            args: [operator, tempVar, left, right],
          },
          {
            type: "AssignmentStatement",
            args: [ast.value || "", tempVar],
          },
        ],
      };
    } else {
      // If the variable is assigned a value directly, assign the value directly.
      return {
        type: "AssignmentStatement",
        args: [ast.value || "", this.flattenExpression(ast.children?.[0]!) || ""],
      };
    }
  }

  // Increment or decrement a variable.
  // The operation can be either postfix or prefix.
  // Example: i++, --x
  private handleIncrementDecrement(ast: ASTNode): IRNode {
    return {
      type: "IncrementDecrement",
      args: [ast.value || "", ast.children?.[0]?.value || ""],
    };
  }

  // Perform a unary operation on a variable.
  // A unary operation is an operation with only one operand.
  // Example: -5, !true
  private handleUnaryExpression(ast: ASTNode): IRNode {
    return {
      type: "UnaryExpression",
      args: [ast.value || "", ast.children?.[0]?.value || ""],
    };
  }

  // Perform a binary operation on two variables.
  // A binary operation is an operation with two operands.
  // Example: 5 + 5, myVariable * 10
  private handleBinaryExpression(ast: ASTNode): IRNode {
    const tempVar = this.generateTempVar();
    const left = this.flattenExpression(ast.children?.[0]!);
    const operator = ast.value || "";
    const right = this.flattenExpression(ast.children?.[1]!);
    return {
      type: "Operation",
      args: [operator, tempVar, left, right],
    };
  }

  // Perform a postfix operation on a variable.
  // A postfix operation is an operation that is performed after the variable.
  // Example: i++, x--
  private handlePostfixOperation(ast: ASTNode): IRNode {
    return {
      type: "PostfixOperation",
      args: [ast.children?.[0]?.value || "", ast.children?.[1]?.value || ""],
    };
  }

  // Perform an if statement.
  // If the condition is true the children of the if statement are executed.
  // If the condition is false the children of the if statement are skipped.
  private handleIfStatement(ast: ASTNode): IRNode {
    return {
      type: "If",
      args: [this.flattenExpression(ast.children?.[0]!)],
      children: ast.children?.slice(1).map((child) => this.generateIR(child)) || [],
    };
  }

  // Perform a while loop.
  // While the condition is true the children of the while loop are executed.
  // If the condition is false the children of the while loop are skipped.
  private handleWhileStatement(ast: ASTNode): IRNode {
    return {
      type: "While",
      args: [this.flattenExpression(ast.children?.[0]!)],
      children: ast.children?.slice(1).map((child) => this.generateIR(child)) || [],
    };
  }

  // Perform a return statement.
  // The return statement is used to return a value from a function.
  // The value is optional.
  private handleReturnStatement(ast: ASTNode): IRNode {
    return {
      type: "Return",
      args: [this.flattenExpression(ast.children?.[0]!)],
    };
  }

  // Perform a call expression.
  // A call expression is used to call a function.
  // For example: myFunction(5, 10);
  private handleFunctionCall(ast: ASTNode): IRNode {
    return {
      type: "FunctionCall",
      args: [ast.value || "", ...(ast.children?.map((child) => this.flattenExpression(child)) || [])],
    };
  }

  private handleFunctionAccess(ast: ASTNode): IRNode {
    return {
      type: "FunctionAccess",
      args: [ast.value || "", ...(ast.children?.map((child) => this.flattenExpression(child)) || [])],
    };
  }

  // Perform a for loop.
  // The for loop is a combination of an initialization, condition, and increment/decrement.
  // The loop will continue to execute until the condition is false.
  private handleForLoop(ast: ASTNode): IRNode {
    return {
      type: "ForLoop",
      args: [
        this.flattenExpression(ast.children?.[0]!),
        this.flattenExpression(ast.children?.[1]!),
        this.flattenExpression(ast.children?.[2]!),
      ],
      children: ast.children?.slice(3).map((child) => this.generateIR(child)) || [],
    };
  }

  // Perform a block of code.
  // A block of code is a collection of statements.
  private handleBlock(ast: ASTNode): IRNode {
    return {
      type: "Block",
      args: [],
      children: ast.children?.map((child) => this.generateIR(child)) || [],
    };
  }

  // Perform a print statement.
  // The print statement is used to print a value to memory.
  // If there is a secondary boolean value, the value is printed to the console, depending on the boolean value.
  // Need to determine if the print function's secondary boolean should be true to print to screen, or if we need to consider implementing a function for printflush
  private handlePrintStatement(ast: ASTNode): IRNode {
    return {
      type: "PrintStatement",
      args: ast.args || [],
    };
  }

  // Is literally a value.
  // A literal value is a value that is not a variable, but is a value in nature.
  // For example: 5, "Hello, World!", true
  private handleLiteral(ast: ASTNode): IRNode {
    return {
      type: ast.type,
      args: [ast.value || ""],
    };
  }

  private handleVariable(ast: ASTNode): IRNode {
    return {
      type: ast.type,
      args: [ast.value || ""],
    };
  }

  // Parameters are the arguments that are passed into a function.
  // The parameters are used to pass values into the function.
  // For example: function myFunction(a, b) { return a + b; }. The (a, b) are the parameters.
  private handleParameters(ast: ASTNode): IRNode {
    return {
      type: "Parameters",
      args: ast.children?.map((child) => child.value || "") || [],
    };
  }

  // Validate the IRNode to ensure that it has a type.
  // The reason for why it needs a type is because it used in the generateIR function to determine how it needs to be formatted.
  public validateIR(ir: IRNode): void {
    if (!ir.type) {
      throw new Error("IRNode must have a type.");
    }

    if (ir.children) {
      ir.children.forEach((child) => this.validateIR(child));
    }
  }
}

// If you have reached this point and the AST node type is unknown to the irGenerator.
/*
  Here are some debugging steps to resolve your issue:
    1. Check if the AST node type is correctly spelled.
    2. Check if there is logic for the AST node type in the irGenerator.
    3. Run the unit tests to check where a problem might be.
    4. If you are still stuck, pull out a debugger and step through each line of code.
    5. If all hope is lost, here is a duck: 🦆
*/