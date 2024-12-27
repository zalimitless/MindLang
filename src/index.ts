import { Compiler } from "./compiler/compiler";

async function main() {
    const compiler = new Compiler();

    const input = `
      function main() {
        let x = 5;
        let y = 10;
        let z = x + y;
        print(z);
      }
    `;

    const output = compiler.compileToTarget(input);
    console.log(output);

}

main();