import { translateToTarget } from "../../compiler/traverse";
import { IRNode } from "../../types/ir";

describe("translateToTarget", () => {
  it("should translate a Program node", () => {
    const ir: IRNode = {
      type: "Program",
      args: [],
      children: [
        {
          type: "PrintStatement",
          args: ["Hello, World!"],
        },
      ],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("print Hello, World!");
  });

  it("should translate a Function node", () => {
    const ir: IRNode = {
      type: "Function",
      args: ["myFunction"],
      children: [
        {
          type: "Return",
          args: ["42"],
        },
      ],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("label myFunction\nset result 42\njump return_2\nlabel return_2\nend");
  });

  it("should translate a VariableDeclaration node", () => {
    const ir: IRNode = {
      type: "VariableDeclaration",
      args: ["x", "10"],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("set x 10");
  });

  it("should translate an Assignment node", () => {
    const ir: IRNode = {
      type: "Assignment",
      args: ["x", "20"],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("set x 20");
  });

  it("should translate an Operation node", () => {
    const ir: IRNode = {
      type: "Operation",
      args: ["+", "temp", "x", "y"],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("op add temp x y");
  });

  it("should translate a UnaryExpression node", () => {
    const ir: IRNode = {
      type: "UnaryExpression",
      args: ["-", "x"],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("op - x");
  });

  it("should translate a Call node", () => {
    const ir: IRNode = {
      type: "Call",
      args: ["myFunction"],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("jump myFunction");
  });

  it("should translate an If node", () => {
    const ir: IRNode = {
      type: "If",
      args: ["x > 0"],
      children: [
        {
          type: "PrintStatement",
          args: ["Positive"],
        },
      ],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("jump cond_0 @notEqual x > 0 true\nlabel end_0\nprint Positive\nlabel cond_0");
  });

  it("should translate a WhileLoop node", () => {
    const ir: IRNode = {
      type: "WhileLoop",
      args: ["x > 0"],
      children: [
        {
          type: "PrintStatement",
          args: ["Looping"],
        },
      ],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("label loop_start_0\njump loop_end_0 @notEqual x > 0 true\nprint Looping\njump loop_start_0\nlabel loop_end_0");
  });

  it("should translate an IncrementDecrement node", () => {
    const ir: IRNode = {
      type: "IncrementDecrement",
      args: ["x", "++"],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("op add x x 1");
  });

  it("should translate a ForLoop node", () => {
    const ir: IRNode = {
      type: "ForLoop",
      args: [],
      children: [
        {
          type: "Assignment",
          args: ["i", "0"],
        },
        {
          type: "Operation",
          args: ["<", "i", "10"],
        },
        {
          type: "IncrementDecrement",
          args: ["i", "++"],
        },
      ],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("set i 0\nlabel for_start_0\nop less i 10 undefined\njump for_end_0 @notEqual condition_2 true\nop add i i 1\njump for_start_0\nlabel for_end_0");
  });

  it("should translate a Block node", () => {
    const ir: IRNode = {
      type: "Block",
      args: [],
      children: [
        {
          type: "PrintStatement",
          args: ["Block"],
        },
      ],
    };
    const result = translateToTarget(ir);
    expect(result).toBe("print Block");
  });
});
