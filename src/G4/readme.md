# MindLang Grammar Development README

## Overview
MindLang uses **Antlr4ts** to generate the lexer and parser for the high-level language. The grammar file `MindLang.g4` is the primary source for defining language rules, while other files are auto-generated and should not be modified directly.

## Editable Files
The following files can be edited to make meaningful changes:

1. **MindLang.g4**
   - This is the core grammar definition file.
   - Any changes here directly impact the generated lexer and parser.
   - **Note:** Any changes to the grammar file will require rerunning the test files located in `src/tests/G4/**.tests.ts`. Additional modifications to these tests may be necessary to accommodate the grammar updates.
   - Changes may also require updates to the `ConcreteMindLangVisitor.ts` file, as they could affect the logic that generates the `ASTNode` objects.

2. **ConcreteMindLangVisitor.ts**
   - This file can be customized to add specific logic for visiting nodes in the parse tree.
   - Changes here are often required after updates to the grammar to ensure proper ASTNode creation.

3. **MindLangLexer.txt** and **MindLangParser.txt**
   - These files are separate components of `MindLang.g4` and can be tested independently in Antlr's lab.
   - They are combined into `MindLang.g4` during development.

## Testing Grammar Changes
To test modifications efficiently:

1. Use [Antlr's Lab](http://lab.antlr.org) to validate your grammar changes interactively.
   - **Note:** The tool collects data and stores it on the server. Avoid including personal information or commercial projects.

2. Alternatively, use the [local Antlr's Lab](https://github.com/antlr/antlr4-lab) for offline testing.

3. Rerun all test files located in `src/tests/G4/**.tests.ts` to ensure the changes are correctly handled. Update the tests as necessary.

## Important Notes
- Do **not** modify any of the auto-generated files. As changes will be lost.

- All changes should be restricted to the listed editable files for maintainability.

- Use `MindLangLexer.txt` and `MindLangParser.txt` for isolated testing before integrating changes into `MindLang.g4`.

## Workflow
1. Edit `MindLang.g4` or the other editable files as needed.
2. Validate grammar changes using Antlr's Lab or the local version.
3. Re-generate lexer and parser files using Antlr4ts after successful validation.
4. Test the new functionality with appropriate unit tests located in `src/tests/G4/**.tests.ts`.
5. Update `ConcreteMindLangVisitor.ts` as needed to handle changes in ASTNode logic.

By following this structure, we ensure a clean and maintainable codebase for MindLang development.
