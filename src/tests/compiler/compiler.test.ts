import { Compiler } from "../../compiler/compiler";

describe("Compiler", () => {
  let compiler: Compiler;

  beforeEach(() => {
    compiler = new Compiler();
  });

  it("should compile a basic program with variable declarations and print statements", () => {
    const input = `
      function main() {
        let x = 5;
        let y = 10;
        let z = x + y;
        print(z);
      }
    `;
    const output = compiler.compileToTarget(input);
    expect(output).toBe(
      `label main\n` +
      `set x 5\n` +
      `set y 10\n` +
      `op add gv_000 x y\n` +
      `set z gv_000\n` +
      `print z\n` +
      `end`
    );
  });

  it("should handle a function with parameters and a return statement", () => {
    const input = `
      function add(a, b) {
        let added = a + b;
        return added;
      }
    `;
    const output = compiler.compileToTarget(input);
    expect(output).toBe(
      'label add\n' +
      'op add gv_000 a b\n' +
      'set added gv_000\n' +
      'set result added\n' +
      'jump return_4\n' +
      'label return_4\n' +
      'end'
    );
  });

  // it("should compile an if statement", () => {
  //   const input = `
  //     function main() {
  //       let x = 5;
  //       if (x > 3) {
  //         print x;
  //       }
  //     }
  //   `;
  //   const output = compiler.compileToTarget(input);
  //   expect(output).toBe(
  //     `label main\n` +
  //     `set x 5\n` +
  //     `jump cond_2 @notEqual x > 3 true\n` +
  //     `print x\n` +
  //     `jump end_2\n` +
  //     `label cond_2\n` +
  //     `label end_2\n` +
  //     `end`
  //   );
  // });

  // it("should compile a while loop", () => {
  //   const input = `
  //     function main() {
  //       let x = 0;
  //       while (x < 5) {
  //         print x;
  //         x = x + 1;
  //       }
  //     }
  //   `;
  //   const output = compiler.compileToTarget(input);
  //   expect(output).toBe(
  //     `label main\n` +
  //     `set x 0\n` +
  //     `label loop_start_2\n` +
  //     `jump loop_end_2 @notEqual x < 5 true\n` +
  //     `print x\n` +
  //     `op add x x 1\n` +
  //     `jump loop_start_2\n` +
  //     `label loop_end_2\n` +
  //     `end`
  //   );
  // });

  // it("should compile a for loop", () => {
  //   const input = `
  //     function main() {
  //       for (let i = 0; i < 3; i = i + 1) {
  //         print i;
  //       }
  //     }
  //   `;
  //   const output = compiler.compileToTarget(input);
  //   expect(output).toBe(
  //     `label main\n` +
  //     `set i 0\n` +
  //     `label for_start_2\n` +
  //     `jump for_end_2 @notEqual i < 3 true\n` +
  //     `print i\n` +
  //     `op add i i 1\n` +
  //     `jump for_start_2\n` +
  //     `label for_end_2\n` +
  //     `end`
  //   );
  // });
});
