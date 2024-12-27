import { IRGenerator } from "../../compiler/irGenerator";
import { ASTNode } from "../../types/ast";

describe("IRGenerator", () => {
  let generator: IRGenerator;

  beforeEach(() => {
    generator = new IRGenerator();
  });

  test("generates IR for Program", () => {
    const ast: ASTNode = {
      type: "Program",
      children: [
        {
          type: "PrintStatement",
          children: [{ type: "Literal", value: "Hello, World!" }],
        },
      ],
    };

    const ir = generator.generateIR(ast);

    expect(ir).toEqual({
      type: "Program",
      args: [],
      children: [
        {
          type: "PrintStatement",
          args: ["Hello, World!"],
        },
      ],
    });
  });

  test("generates IR for FunctionDeclaration", () => {
    const ast: ASTNode = {
      type: "FunctionDeclaration",
      value: "add",
      children: [
        {
          type: "VariableDeclaration",
          value: "result",
          children: [
            {
              type: "BinaryExpression",
              value: "+",
              children: [
                { type: "Variable", value: "a" },
                { type: "Variable", value: "b" },
              ],
            },
          ],
        },
      ],
    };

    const ir = generator.generateIR(ast);

    expect(ir).toEqual({
      type: "FunctionDeclaration",
      args: ["add"],
      children: [
        {
          type: "VariableDeclaration",
          args: ["result", ""],
          children: [
            {
              type: "BinaryExpression",
              args: ["a", "+", "b"]
            }
          ]
        }
      ]
    });
  });

  test("generates IR for IfStatement", () => {
    const ast: ASTNode = {
      type: "IfStatement",
      children: [
        {
          type: "BinaryExpression",
          value: "==",
          children: [
            { type: "Variable", value: "x" },
            { type: "Literal", value: "10" },
          ],
        },
        {
          type: "PrintStatement",
          children: [{ type: "Literal", value: "Equal" }],
        },
      ],
    };

    const ir = generator.generateIR(ast);

    expect(ir).toEqual({
      type: "IfStatement",
      args: ["x == 10"],
      children: [
        {
          type: "PrintStatement",
          args: ["Equal"],
        },
      ],
    });
  });

  test("throws error for unknown node type", () => {
    const ast: ASTNode = {
      type: "UnknownNode",
    };

    expect(() => generator.generateIR(ast)).toThrow("Unknown AST node type: UnknownNode");
  });

  test("generates IR for ForLoop", () => {
    const ast: ASTNode = {
      type: "ForLoop",
      children: [
        { type: "VariableDeclaration", value: "i", children: [{ type: "Literal", value: "0" }] },
        {
          type: "BinaryExpression",
          value: "<",
          children: [
            { type: "Variable", value: "i" },
            { type: "Literal", value: "10" },
          ],
        },
        { type: "IncrementDecrement", value: "i", children: [] },
        { type: "PrintStatement", children: [{ type: "Variable", value: "i" }] },
      ],
    };

    const ir = generator.generateIR(ast);

    expect(ir).toEqual({
      type: "ForLoop",
      args: ["i = 0", "i < 10", "i++"],
      children: [
        {
          type: "PrintStatement",
          args: ["i"],
        },
      ],
    });
  });
});
