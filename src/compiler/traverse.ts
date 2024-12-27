import { IRNode } from "../types/ir";

export const translateToTarget = (ir: IRNode): string => {
    const result: string[] = [];

    function traverse(node: IRNode): void {
      switch (node.type) {
        case "Program":
          node.children?.forEach(traverse);
          break;

        case "PrintStatement":
          result.push(`print ${node.args?.join(" ")}`);
          break;

        case "FunctionDeclaration":
          result.push(`label ${node.args?.[0]}`);
          node.children?.forEach(traverse);
          result.push(`end`);
          break;

        case "VariableDeclaration":
          result.push(`set ${node.args?.[0]} ${node.args?.[1]}`);
          break;

        case "Assignment":
          result.push(`set ${node.args?.[0]} ${node.args?.[1]}`);
          break;

        case "Operation":
          const operator = node.args?.[0];
          const tempVar = node.args?.[1];
          const left = node.args?.[2];
          const right = node.args?.[3];
          // Translate the operator to the appropriate MLog operation
          switch (operator) {
            case "+":
              result.push(`op add ${tempVar} ${left} ${right}`);
              break;
            case "-":
              result.push(`op sub ${tempVar} ${left} ${right}`);
              break;
            case "*":
              result.push(`op mul ${tempVar} ${left} ${right}`);
              break;
            case "/":
              result.push(`op div ${tempVar} ${left} ${right}`);
              break;
            case "%":
              result.push(`op mod ${tempVar} ${left} ${right}`);
              break;
            case "==":
              result.push(`op equal ${tempVar} ${left} ${right}`);
              break;
            case "<":
              result.push(`op less ${tempVar} ${left} ${right}`);
              break;
            case ">":
              result.push(`op greater ${tempVar} ${left} ${right}`);
              break;
            case "<=":
              result.push(`op lesseq ${tempVar} ${left} ${right}`);
              break;
            case ">=":
              result.push(`op greateq ${tempVar} ${left} ${right}`);
              break;
            default:
              throw new Error(`Unknown operator in Operation: ${operator}`);
          }
          break;

        case "BinaryExpression":
          // This case should not be reached if the IR correctly uses Operation
          throw new Error("Unexpected BinaryExpression node in IR");

        case "UnaryExpression":
          result.push(`op ${node.args?.[0]} ${node.args?.[1]}`);
          break;

        case "CallExpression":
          result.push(`call ${node.args?.join(" ")}`);
          break;

        case "ReturnStatement":
          result.push(`set result ${node.args?.[0]}`);
          const returnLabel = `return_${result.length}`;
          result.push(`jump ${returnLabel}`);
          result.push(`label ${returnLabel}`);
          break;

        case "IfStatement":
          const conditionLabel = `cond_${result.length}`;
          const endLabel = `end_${result.length}`;
          result.push(`jump ${conditionLabel} @notEqual ${node.args?.[0]} true`);
          result.push(`label ${endLabel}`);
          node.children?.forEach(traverse);
          result.push(`label ${conditionLabel}`);
          break;

        case "WhileLoop":
          const loopStart = `loop_start_${result.length}`;
          const loopEnd = `loop_end_${result.length}`;
          result.push(`label ${loopStart}`);
          result.push(`jump ${loopEnd} @notEqual ${node.args?.[0]} true`);
          node.children?.forEach(traverse);
          result.push(`jump ${loopStart}`);
          result.push(`label ${loopEnd}`);
          break;

        case "IncrementDecrement":
          const variable = node.args?.[0];
          const operation = node.args?.[1];
          if (operation === "++") {
            result.push(`op add ${variable} ${variable} 1`);
          } else if (operation === "--") {
            result.push(`op sub ${variable} ${variable} 1`);
          } else {
            throw new Error(`Unknown increment/decrement operation: ${operation}`);
          }
          break;

        case "ForLoop":
          const forInit = node.children?.[0];
          const forCondition = node.children?.[1];
          const forIncrement = node.children?.[2];
          const forBody = node.children?.slice(3);
          const forStart = `for_start_${result.length}`;
          const forEnd = `for_end_${result.length}`;
          if (forInit) traverse(forInit);
          result.push(`label ${forStart}`);
          if (forCondition) {
            const conditionVar = `condition_${result.length}`;
            traverse(forCondition);
            result.push(`jump ${forEnd} @notEqual ${conditionVar} true`);
          }
          forBody?.forEach(traverse);
          if (forIncrement) traverse(forIncrement);
          result.push(`jump ${forStart}`);
          result.push(`label ${forEnd}`);
          break;

        case "Parameters":
          // Parameters are ignored as MLog does not have a direct equivalent; they are contextually used
          break;

        case "Block":
          node.children?.forEach(traverse);
          break;

        default:
          throw new Error(`Unknown IRNode type: ${node.type}`);
      }
    }

    traverse(ir);
    return result.join("\n");
};