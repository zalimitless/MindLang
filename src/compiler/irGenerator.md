# IRGenerator Documentation

The `IRGenerator` class is responsible for converting an Abstract Syntax Tree (AST) into an Intermediate Representation (IR). This IR serves as a bridge between high-level language constructs and the lower-level MLog code that the compiler will produce.

## Purpose

The `IRGenerator` takes in an `ASTNode` (representing parsed high-level code) and produces an `IRNode`, a simpler and structured representation of the code. This IR can then be optimized or directly translated into target code.

---

## Class Overview

### Import Dependencies
```typescript
import { IRNode } from "../types/ir";
import { ASTNode } from "../types/ast";
```
- **`IRNode`**: Defines the structure of the Intermediate Representation.
- **`ASTNode`**: Defines the structure of the Abstract Syntax Tree input.

### Methods

#### `generateIR(ast: ASTNode): IRNode`

Converts an `ASTNode` into an `IRNode` by processing the type and structure of the node.

- **Parameters**:
  - `ast`: The input AST node to be converted.

- **Returns**:
  - An `IRNode` representing the IR equivalent of the input AST.

- **Switch Cases**:
  - **`Program`**: Represents the root node of the program. Processes all child statements.
  - **`FunctionDeclaration`**: Handles function definitions, including parameters and body.
  - **`VariableDeclaration`**: Processes variable declarations with optional initial values.
  - **`Assignment`**: Handles assignment of values to variables.
  - **`IncrementDecrement`**: Handles `x++` and `x--` operations.
  - **`UnaryExpression`**: Processes unary operations (e.g., `-a`).
  - **`BinaryExpression`**: Handles binary operations (`a + b`, `a - b`, etc.).
  - **`PostfixOperation`**: Processes operations like `a[index]` or `a.method()`.
  - **`IfStatement`**: Handles conditional statements, including `else if` and `else` clauses.
  - **`WhileLoop`**: Processes `while` loops.
  - **`ForLoop`**: Handles `for` loops with initialization, condition, and increment.
  - **`Block`**: Represents a block of statements enclosed in `{}`.
  - **`PrintStatement`**: Handles print operations (e.g., `print("message")`).
  - **`Literal` / `Variable`**: Handles atomic values like literals (numbers, strings) and identifiers.
  - **Default**: Throws an error for unknown node types.

#### `validateIR(ir: IRNode): void`

Validates the structure of an `IRNode` to ensure it adheres to the expected format.

- **Parameters**:
  - `ir`: The IR node to validate.

- **Throws**:
  - An error if the `IRNode` does not have a type or contains invalid children.

---

## Example Usage

### Input AST
```typescript
const exampleAST: ASTNode = {
  type: "Program",
  children: [
    {
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
                { type: "Variable", value: "b" }
              ]
            }
          ]
        },
        {
          type: "ReturnStatement",
          children: [
            { type: "Variable", value: "result" }
          ]
        }
      ]
    }
  ]
};
```

### IR Generation
```typescript
const generator = new IRGenerator();
const ir = generator.generateIR(exampleAST);
console.log(JSON.stringify(ir, null, 2));
```

### Output IR
```json
{
  "type": "Program",
  "args": [],
  "children": [
    {
      "type": "FunctionDeclaration",
      "args": ["add"],
      "children": [
        {
          "type": "VariableDeclaration",
          "args": ["result", ""],
          "children": [
            {
              "type": "BinaryExpression",
              "args": ["a", "+", "b"]
            }
          ]
        },
        {
          "type": "ReturnStatement",
          "args": ["result"]
        }
      ]
    }
  ]
}
```

---

## Error Handling

The `generateIR` method throws an error if an unrecognized AST node type is encountered. This ensures that:
- Only valid and known AST nodes are processed.
- Debugging is easier by identifying missing cases during development.

The `validateIR` method recursively checks all nodes to ensure their correctness.

---

## Testing

### Unit Tests
Use a testing framework like Jest to validate functionality:

```typescript
test("IR generation for a simple function", () => {
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
              { type: "Variable", value: "b" }
            ]
          }
        ]
      },
      {
        type: "ReturnStatement",
        children: [
          { type: "Variable", value: "result" }
        ]
      }
    ]
  };

  const generator = new IRGenerator();
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
      },
      {
        type: "ReturnStatement",
        args: ["result"]
      }
    ]
  });
});
```

---

## Notes

- Ensure comprehensive test coverage for all AST node types.
- Extend functionality as the language evolves.
- Maintain clear error messages for easier debugging.
