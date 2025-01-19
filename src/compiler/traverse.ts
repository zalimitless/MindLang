import { IRNode } from "../types/ir";

class Translator {
  private result: string[] = [];

  public translateToTarget(ir: IRNode): string {
    this.result = [];
    this.traverse(ir);
    return this.result.join("\n");
  }

  private traverse(node: IRNode): void {
    const handler = this.handlers[node.type];
    if (!handler) {
      throw new Error(`Unknown IRNode type: ${node.type}`);
    }
    handler.call(this, node);
  }

  private handlers: { [key: string]: (node: IRNode) => void } = {
    "Program": this.handleProgram,
    "PrintStatement": this.handlePrintStatement,
    "Function": this.handleFunction,
    "VariableDeclaration": this.handleVariableDeclaration,
    "Assignment": this.handleAssignment,
    "Operation": this.handleOperation,
    "BinaryExpression": this.handleBinaryExpression,
    "UnaryExpression": this.handleUnaryExpression,
    "Call": this.handleCall,
    "Return": this.handleReturn,
    "If": this.handleIf,
    "WhileLoop": this.handleWhileLoop,
    "IncrementDecrement": this.handleIncrementDecrement,
    "ForLoop": this.handleForLoop,
    "Parameters": this.handleParameters,
    "Block": this.handleBlock,
  };

  private handleProgram(node: IRNode): void {
    node.children?.forEach(this.traverse.bind(this));
  }

  private handlePrintStatement(node: IRNode): void {
    this.result.push(`print ${node.args?.join(" ")}`);
  }

  private handleFunction(node: IRNode): void {
    this.result.push(`label ${node.args?.[0]}`);
    node.children?.forEach(this.traverse.bind(this));
    this.result.push(`end`);
  }

  private handleVariableDeclaration(node: IRNode): void {
    this.result.push(`set ${node.args?.[0]} ${node.args?.[1]}`);
  }

  private handleAssignment(node: IRNode): void {
    this.result.push(`set ${node.args?.[0]} ${node.args?.[1]}`);
  }

  private handleOperation(node: IRNode): void {
    const operator = node.args?.[0];
    const tempVar = node.args?.[1];
    const left = node.args?.[2];
    const right = node.args?.[3];
    switch (operator) {
      case "+":
        this.result.push(`op add ${tempVar} ${left} ${right}`);
        break;
      case "-":
        this.result.push(`op sub ${tempVar} ${left} ${right}`);
        break;
      case "*":
        this.result.push(`op mul ${tempVar} ${left} ${right}`);
        break;
      case "/":
        this.result.push(`op div ${tempVar} ${left} ${right}`);
        break;
      case "%":
        this.result.push(`op mod ${tempVar} ${left} ${right}`);
        break;
      case "==":
        this.result.push(`op equal ${tempVar} ${left} ${right}`);
        break;
      case "<":
        this.result.push(`op less ${tempVar} ${left} ${right}`);
        break;
      case ">":
        this.result.push(`op greater ${tempVar} ${left} ${right}`);
        break;
      case "<=":
        this.result.push(`op lesseq ${tempVar} ${left} ${right}`);
        break;
      case ">=":
        this.result.push(`op greateq ${tempVar} ${left} ${right}`);
        break;
      default:
        throw new Error(`Unknown operator in Operation: ${operator}`);
    }
  }

  private handleBinaryExpression(node: IRNode): void {
    throw new Error("Unexpected BinaryExpression node in IR");
  }

  private handleUnaryExpression(node: IRNode): void {
    this.result.push(`op ${node.args?.[0]} ${node.args?.[1]}`);
  }

  private handleCall(node: IRNode): void {
    this.result.push(`jump ${node.args?.join(" ")}`);
  }

  private handleReturn(node: IRNode): void {
    this.result.push(`set result ${node.args?.[0]}`);
    const returnLabel = `return_${this.result.length}`;
    this.result.push(`jump ${returnLabel}`);
    this.result.push(`label ${returnLabel}`);
  }

  private handleIf(node: IRNode): void {
    const conditionLabel = `cond_${this.result.length}`;
    const endLabel = `end_${this.result.length}`;
    this.result.push(`jump ${conditionLabel} @notEqual ${node.args?.[0]} true`);
    this.result.push(`label ${endLabel}`);
    node.children?.forEach(this.traverse.bind(this));
    this.result.push(`label ${conditionLabel}`);
  }

  private handleWhileLoop(node: IRNode): void {
    const loopStart = `loop_start_${this.result.length}`;
    const loopEnd = `loop_end_${this.result.length}`;
    this.result.push(`label ${loopStart}`);
    this.result.push(`jump ${loopEnd} @notEqual ${node.args?.[0]} true`);
    node.children?.forEach(this.traverse.bind(this));
    this.result.push(`jump ${loopStart}`);
    this.result.push(`label ${loopEnd}`);
  }

  private handleIncrementDecrement(node: IRNode): void {
    const variable = node.args?.[0];
    const operation = node.args?.[1];
    if (operation === "++") {
      this.result.push(`op add ${variable} ${variable} 1`);
    } else if (operation === "--") {
      this.result.push(`op sub ${variable} ${variable} 1`);
    } else {
      throw new Error(`Unknown increment/decrement operation: ${operation}`);
    }
  }

  private handleForLoop(node: IRNode): void {
    const forInit = node.children?.[0];
    const forCondition = node.children?.[1];
    const forIncrement = node.children?.[2];
    const forBody = node.children?.slice(3);
    const forStart = `for_start_${this.result.length}`;
    const forEnd = `for_end_${this.result.length}`;
    if (forInit) this.traverse(forInit);
    this.result.push(`label ${forStart}`);
    if (forCondition) {
      const conditionVar = `condition_${this.result.length}`;
      this.traverse(forCondition);
      this.result.push(`jump ${forEnd} @notEqual ${conditionVar} true`);
    }
    forBody?.forEach(this.traverse.bind(this));
    if (forIncrement) this.traverse(forIncrement);
    this.result.push(`jump ${forStart}`);
    this.result.push(`label ${forEnd}`);
  }

  private handleParameters(node: IRNode): void {
    // Need to determine how parameters an be developed.
  }

  private handleBlock(node: IRNode): void {
    node.children?.forEach(this.traverse.bind(this));
  }
}

export const translateToTarget = (ir: IRNode): string => {
  const translator = new Translator();
  return translator.translateToTarget(ir);
};