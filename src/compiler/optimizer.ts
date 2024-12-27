import { IRNode } from "../types/ir";

// TODO: I doubt any of these work at the moment.
export class Optimizer {
  optimize(ir: IRNode): IRNode {
    // ir = this.removeUnusedVariables(ir);
    ir = this.simplifyConstants(ir);
    ir = this.propagateConstants(ir);
    ir = this.inlineFunctions(ir);
    ir = this.hoistLoopInvariants(ir);
    ir = this.eliminateDeadCode(ir);
    ir = this.peepholeOptimize(ir);
    ir = this.optimizeTailCalls(ir);
    ir = this.eliminateCommonSubexpressions(ir);
    return ir;
  }

//   private removeUnusedVariables(ir: IRNode): IRNode {
//     if (ir.type === "VariableDeclaration" && this.isUnused(ir)) {
//       return null as any;
//     }

//     if (ir?.children) {
//       ir.children = ir.children
//         .map((child) => this.removeUnusedVariables(child))
//         .filter(Boolean);
//     }

//     return ir;
//   }

//   private isUnused(ir: IRNode): boolean {
//     if (!ir || !ir.args || ir.args.length === 0) return true;
//     const variableName = ir.args[0];

//     // Look-ahead search to check if the variable is used in subsequent nodes
//     const isReferencedInSubsequentNodes = (root: IRNode, target: string): boolean => {
//       const queue: IRNode[] = [...(root.children || [])];

//       while (queue.length > 0) {
//         const node = queue.shift();
//         if (!node) continue;

//         // Check if this node references the target variable
//         if (node.type === "Identifier" && node.args[0] === target) {
//           return true;
//         }

//         // Add children to the queue for further inspection
//         if (node.children) {
//           queue.push(...node.children);
//         }
//       }

//       return false;
//     };

//     // Perform look-ahead search starting from the siblings of the current IR node
//     return !isReferencedInSubsequentNodes(ir, variableName);
//   }

  private simplifyConstants(ir: IRNode): IRNode {
    if (ir.type === "BinaryExpression") {
      const [left, operator, right] = ir.args;
      if (this.isConstant(left) && this.isConstant(right)) {
        const result = this.evaluateConstantExpression(left, operator, right);
        return {
          type: "Literal",
          args: [result],
          children: [],
        };
      }
    }

    if (ir.children) {
      ir.children = ir.children.map((child) => this.simplifyConstants(child));
    }

    return ir;
  }

  private isConstant(value: string): boolean {
    return !isNaN(Number(value));
  }

  private evaluateConstantExpression(left: string, operator: string, right: string): string {
    const leftNum = Number(left);
    const rightNum = Number(right);

    switch (operator) {
      case "+":
        return (leftNum + rightNum).toString();
      case "-":
        return (leftNum - rightNum).toString();
      case "*":
        return (leftNum * rightNum).toString();
      case "/":
        return (leftNum / rightNum).toString();
      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  }

  private propagateConstants(ir: IRNode, constants: Record<string, string> = {}): IRNode {
    if (ir.type === "VariableDeclaration") {
      const [name, value] = ir.args;
      if (this.isConstant(value)) {
        constants[name] = value;
      }
    }

    if (ir.type === "Identifier" && constants[ir.args[0]]) {
      return {
        type: "Literal",
        args: [constants[ir.args[0]]],
        children: [],
      };
    }

    if (ir.children) {
      ir.children = ir.children.map((child) => this.propagateConstants(child, { ...constants }));
    }

    return ir;
  }

  private inlineFunctions(ir: IRNode, functions: Record<string, IRNode> = {}): IRNode {
    if (ir.type === "FunctionDeclaration") {
      const [name] = ir.args;
      functions[name] = ir;
      return ir;
    }

    if (ir.type === "CallExpression" && functions[ir.args[0]]) {
      const funcBody = functions[ir.args[0]].children?.find((child) => child.type === "Block");
      return funcBody ? { ...funcBody } : ir;
    }

    if (ir.children) {
      ir.children = ir.children.map((child) => this.inlineFunctions(child, { ...functions }));
    }

    return ir;
  }

  private hoistLoopInvariants(ir: IRNode): IRNode {
    if (ir.type === "ForLoop") {
      const loopBody = ir.children || [];
      const invariants = loopBody.filter((child) => this.isLoopInvariant(child));
      ir.children = loopBody.filter((child) => !this.isLoopInvariant(child));
      return {
        type: "Block",
        args: [],
        children: [...invariants, ir],
      };
    }

    if (ir.children) {
      ir.children = ir.children.map((child) => this.hoistLoopInvariants(child));
    }

    return ir;
  }

  private isLoopInvariant(ir: IRNode): boolean {
    return false;
  }

  private eliminateDeadCode(ir: IRNode): IRNode {
    if (ir.children) {
      let foundReturn = false;
      ir.children = ir.children.filter((child) => {
        if (foundReturn) return false;
        if (child.type === "ReturnStatement") foundReturn = true;
        return true;
      });

      ir.children = ir.children.map((child) => this.eliminateDeadCode(child));
    }

    return ir;
  }

  private peepholeOptimize(ir: IRNode): IRNode {
    if (ir.children) {
      for (let i = 0; i < ir.children.length - 1; i++) {
        const current = ir.children[i];
        const next = ir.children[i + 1];

        if (current.type === "Assignment" && next.type === "Assignment" && current.args[0] === next.args[0]) {
          ir.children.splice(i, 1);
          i--;
        }
      }

      ir.children = ir.children.map((child) => this.peepholeOptimize(child));
    }

    return ir;
  }

  private optimizeTailCalls(ir: IRNode): IRNode {
    if (ir.type === "FunctionDeclaration") {
      const funcName = ir.args[0];
      const body = ir.children?.find((child) => child.type === "Block");
      if (body) {
        body.children = body.children?.map((child, index) => {
          if (child.type === "ReturnStatement" && this.isTailCall(child, funcName)) {
            return {
              type: "TailCall",
              args: child.args,
              children: [],
            };
          }
          return child;
        });
      }
    }

    if (ir.children) {
      ir.children = ir.children.map((child) => this.optimizeTailCalls(child));
    }

    return ir;
  }

  private isTailCall(ir: IRNode, funcName: string): boolean {
    return ir.type === "CallExpression" && ir.args[0] === funcName;
  }

  private eliminateCommonSubexpressions(ir: IRNode, seen: Map<string, string> = new Map()): IRNode {
    if (ir.type === "BinaryExpression") {
      const key = `${this.flattenExpression(ir.children?.[0]!)} ${ir.args[1]} ${this.flattenExpression(ir.children?.[1]!)}`;
      if (seen.has(key)) {
        return {
          type: "Identifier",
          args: [seen.get(key)!],
          children: [],
        };
      } else {
        const tempVar = `t${seen.size}`;
        seen.set(key, tempVar);
        return {
          type: "VariableDeclaration",
          args: [tempVar, key],
          children: [],
        };
      }
    }

    if (ir.children) {
      ir.children = ir.children.map((child) => this.eliminateCommonSubexpressions(child, new Map(seen)));
    }

    return ir;
  }

  private flattenExpression(ast: IRNode): string {
    return ast.args?.join(" ") || "";
  }
}
