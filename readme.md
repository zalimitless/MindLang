# MindLang

MindLang is a high-level programming language designed to simplify the creation and management of logic for the Mindustry game. It translates high-level constructs like functions, loops, and conditionals into MLog, the low-level programming language used in Mindustry.

For a better understanding on how MLog works, please refer to [Yruei](https://github.com/Yrueii)'s documentation at [Mlog Documentation](https://yrueii.github.io/Mlog%20Documentation/).

If you are considering a well-optimized programming language for Mindustry, please consider checking out [Cardillan's MindCode project](https://github.com/cardillan/mindcode).

## Features

- **Simplified Syntax:** Write human-readable code for complex logic.
- **Core Programming Constructs:** Includes support for variables, functions, loops, conditionals, and more.
- **Automatic Translation to MLog:** Generates efficient MLog code from high-level MindLang programs.
- **Custom Functions:** Create reusable functions with parameters and return values.
- **Integrated Compilation Pipeline:** From parsing to code generation, MindLang automates the process.

## Example Code

```mindlang
function main() {
    let x = 5;
    let y = 10;
    let z = x + y;
    print z;
}

function add(a, b) {
    return a + b;
}

function loopExample() {
    for (let i = 0; i < 3; i = i + 1) {
        print i;
    }
}
```

### Translated MLog Output

_This MLog example is expected to change as the language evolves._

```mlog
label main
set x 5
set y 10
op add z x y
print z
end

label add
set a arg0
set b arg1
op add result a b
set result result
jump return_4
label return_4
end

label loopExample
set i 0
label for_start_8
jump for_end_8 @notEqual i < 3 true
print i
op add i i 1
jump for_start_8
label for_end_8
end
```

## How It Works

1. **Lexer and Parser:**
   - Tokenizes the input code and parses it into an Abstract Syntax Tree (AST).
   - The Lexer and Parser code is generated using `antlr4ts`.

2. **Intermediate Representation (IR):**
   - Converts the AST into a simpler, flat structure suitable for code generation.

3. **Code Optimization:**
   - Removes unused variables, simplifies expressions, and performs other optimizations.

4. **Code Generation:**
   - Translates the IR into MLog instructions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/mindlang.git
   cd mindlang
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run the compiler:
   ```bash
   npm start out/src/index.js
   ```

## Development

- **Run Tests:**
  ```bash
  npm test
  ```

- **Generate MLog Code:**
  Use `compileToTarget` to generate MLog code from MindLang source.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

**All contributors must:**

   - Create a new branch for their changes.
    
   - Push the branch to the remote repository.
    
   - Open a pull request targeting the main branch.
    
A reviewer will review and approve the pull request before it can be merged.

**Please note:** All pull requests need to come with unit tests, regardless if it's new code or updated code.

## Reporting Issues

If you encounter any issues or bugs while using MindLang, please follow these steps:

1. **Check Existing Issues:**

    - Visit the Issues page to see if your issue has already been reported.

2. **Create a New Issue:**

    - If your issue is not listed, create a new issue with the following information:

        - **Description**: Clearly describe the problem.

        - **Steps to Reproduce**: Provide a minimal example or steps to replicate the issue.

        - **Expected Behavior**: Explain what you expected to happen.

        - **Actual Behavior**: Explain what actually happened.

        - **Environment**: Include relevant details like Node.js version, OS, etc.

3. **Submit a Pull Request (Optional):**

    - If you have a solution, feel free to submit a pull request along with the issue.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

```
MIT License

Copyright (c) 2024 MindLang Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```