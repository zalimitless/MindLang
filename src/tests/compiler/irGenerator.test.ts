import { CharStreams, CommonTokenStream } from "antlr4ts";
import { IRGenerator } from "../../compiler/irGenerator";
import { MindLangLexer } from "../../G4/MindLangLexer";
import { MindLangParser } from "../../G4/MindLangParser";
import { ASTNode } from "../../types/ast";
import { ConcreteMindLangVisitor } from "../../G4/ConcreteMindLangVisitor";

// There is probably a better way to fail a test.
function fail(message: string) {
    if(message === "") { 
        expect(true).toBe(false);
     }
    expect(message).toEqual("");
}

// A function to assist in parsing source code and converting it for testing.
function ParseSourceCode(sourceCode: string) {
    // Step 1: Tokenization
    const inputStream = CharStreams.fromString(sourceCode);
    const lexer = new MindLangLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Step 2: Parsing
    const parser = new MindLangParser(tokenStream);
    const parseTree = parser.program();

    // Step 3: AST Generation via Visitor
    const astVisitor = new ConcreteMindLangVisitor(); // Use the concrete visitor
    const ast: ASTNode = astVisitor.visit(parseTree);

    // Step 4: IR Generation
    const generator = new IRGenerator();
    return generator.generateIR(ast);   
}

describe("IRGenerator", () => {

  beforeAll(() => {

    // The MindLangParser throws errors using the console.error function.
    // This is a workaround to prevent the error from being printed to the console.
    // And to fail the test if an error is thrown.
    jest.spyOn(console, 'error').mockImplementation((message) => {
      fail(`${message}`);
    });
  });
  
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("Test VariableDecleration", () => {
    const ir = ParseSourceCode(`processor MainProcessor { let x=0; }`);
    expect(ir).toEqual({
      type: "Program",
      args: [],
      children: [{
          type: "ProcessorDeclaration",
          args: ["MainProcessor"],
          children: [{
              type: "Block",
              args: [],
              children: [{
                  type: "VariableDeclaration",
                  args: [ "x", "0" ],
                  children: []
                }]
            }]
          }]
      });
  });

  test("Test FunctionDeclaration inside processor", () => {
    const ir = ParseSourceCode(`processor MainProcessor { function main() { let x=0; } }`);
    expect(ir).toEqual({

      // Start of the program
      type: "Program",
      args: [],
      children: [{

        // Declaring Processor
          type: "ProcessorDeclaration",
          args: ["MainProcessor"],
          children: [{

            // Processor Block
              type: "Block",
              args: [],
              children: [{

                // Declaring Function main
                  type: "FunctionDeclaration",
                  args: ["main"],
                  children: [{

                    // Function Parameters
                      type: "Parameters",
                      args: [],
                    },
                    {

                      // Function Block
                      type: "Block",
                      args: [],
                      children: [{

                        // Declaring Variable x = 0;
                          type: "VariableDeclaration",
                          args: [ "x", "0" ],
                          children: []
                        }]
                    }]
                }]
              }]
          }]
      });
    
  });

  test("Test FunctionDeclaration outside processor", () => {
    const ir = ParseSourceCode(`function main() { let x=0; }`);
    expect(ir).toEqual({

      // Start of the program
      type: "Program",
      args: [],
      children: [{

        // Declaring Function main
          type: "FunctionDeclaration",
          args: ["main"],
          children: [{

            // Function Parameters
              type: "Parameters",
              args: [],
            },{

              // Function Block
              type: "Block",
              args: [],
              children: [{

                // Declaring Variable x = 0;
                  type: "VariableDeclaration",
                  args: [ "x", "0" ],
                  children: []
              }]
          }]
        }]
    });
  });

  test("Test IF statement", () => {
    const ir = ParseSourceCode(`processor MainProcessor { let x=0; if (x > 3) { print(x); } }`);
    expect(ir).toEqual({

      // Start if the program
      type: "Program",
      args: [],
      children: [{

        // Declaring Processor
        type: "ProcessorDeclaration",
        args: ["MainProcessor"],
        children: [{

          // Processor Block
          type: "Block",
          args: [],
          children: [{

            // Declaring Variable x = 0;
            type: "VariableDeclaration",
            args: ["x","0"],
            children: [] 
          }, {

            // If Statement
            type: "IfStatement",
            args: ["x > 3"],
            children: [{

              // If Satement Block
              type: "Block",
              args: [],
              children: [{

                // Print Statement
                type: "PrintStatement",
                args: ["x"]
              }]
            }]
          }]
        }]
      }]
    });
  });

  test("throws error for unknown node type", () => {
    const generator = new IRGenerator();
    const ast: ASTNode = {
      type: "UnknownNode",
    };

    expect(() => generator.generateIR(ast)).toThrow("Unknown AST node type: UnknownNode");
  });
});
