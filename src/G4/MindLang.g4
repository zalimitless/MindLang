grammar MindLang;

// Lexer Rules
// ------------------------------------------------------------------
// Keywords
LET: 'let';
WHILE: 'while';
PRINT: 'print';
IF: 'if';
ELSE: 'else';
FUNCTION: 'function';
FOR: 'for';
RETURN: 'return';
BREAK: 'break';
SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';
ON: 'on';
TRY: 'try';
CATCH: 'catch';
THROW: 'throw';
PROCESSOR: 'processor';

// Operators and Symbols
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER: [0-9]+ ('.' [0-9]+)?;
STRING: '"' .*? '"';  // Quoted string literals
PLUS: '+';
MINUS: '-';
MULT: '*';
DIV: '/';
MOD: '%';
ASSIGN: '=';
PLUS_ASSIGN: '+=';
EQ: '==';
LT: '<';
GT: '>';
LE: '<=';
GE: '>=';
SEMICOLON: ';';
COMMA: ',';
COLON: ':';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACKET: '[';
RBRACKET: ']';
DOT: '.';
INCREMENT: '++';
DECREMENT: '--';
NOT: '!';

// Comments
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;

// Whitespace
WHITESPACE: [ \t\r\n]+ -> skip;

// Parser Rules
// ------------------------------------------------------------------
// Entry point
program
    : globalStatement* // Allows processors and global functions
    ;

// ------------------------------------------------------------------
// Global statements
globalStatement
    : processorDeclaration
    | functionDeclaration
    | variableDeclaration
    ;

// ------------------------------------------------------------------
// Processor Declaration
processorDeclaration
    : PROCESSOR IDENTIFIER block
    ;

// ------------------------------------------------------------------
// Block vs. single-statement
block
    : LBRACE statement* RBRACE
    ;

statementOrBlock
    : block
    | statement
    ;

// ------------------------------------------------------------------
// List of all possible top-level statements
statement
    : variableDeclaration
    | assignmentStatement
    | printStatement
    | ifStatement
    | whileStatement
    | forStatement
    | functionDeclaration
    | functionCall
    | returnStatement
    | incrementDecrementStatement SEMICOLON?
    | switchStatement
    | eventHandler
    | tryCatch
    | throwStatement
    | breakStatement
    | functionAccessStatement SEMICOLON
    | notStatement SEMICOLON
    ;

// ------------------------------------------------------------------
// Variable Declaration
variableDeclaration
    : LET IDENTIFIER ASSIGN expression SEMICOLON
    ;

// ------------------------------------------------------------------
// Assignment Statement
assignmentStatement
    : IDENTIFIER ASSIGN expression SEMICOLON
    | IDENTIFIER PLUS_ASSIGN expression SEMICOLON
    ;

// ------------------------------------------------------------------
// Print Statement
printStatement
    : PRINT LPAREN expression RPAREN SEMICOLON
    ;

// ------------------------------------------------------------------
// If Statement with optional else if's
ifStatement
    : IF LPAREN expression RPAREN statementOrBlock
      (elseIfClause)* 
      (elseClause)?
    ;

elseIfClause
    : ELSE IF LPAREN expression RPAREN statementOrBlock
    ;

elseClause
    : ELSE statementOrBlock
    ;

// ------------------------------------------------------------------
// While Statement (allow single statement or block)
whileStatement
    : WHILE LPAREN expression RPAREN statementOrBlock
    ;

// ------------------------------------------------------------------
// For Statement (likewise allow single statement or block)
forStatement
    : FOR LPAREN
        variableDeclaration
        expression
        SEMICOLON
        (expression | incrementDecrementStatement)
      RPAREN
      statementOrBlock
    ;

// ------------------------------------------------------------------
// Function Declaration
functionDeclaration
    : FUNCTION IDENTIFIER
      LPAREN (IDENTIFIER (COMMA IDENTIFIER)*)? RPAREN
      block
    ;

// ------------------------------------------------------------------
// Function Call
functionCall
    : IDENTIFIER LPAREN (expression (COMMA expression)*)? RPAREN SEMICOLON
    ;

// Function Access Statement
functionAccessStatement
    : IDENTIFIER DOT IDENTIFIER LPAREN (expression (COMMA expression)*)? RPAREN
    ;

// ------------------------------------------------------------------
// Return Statement
returnStatement
    : RETURN expression? SEMICOLON // Modified to allow optional expression
    ;

// Not Statement
notStatement
    : NOT LPAREN expression RPAREN
    ;

// ------------------------------------------------------------------
// Increment/Decrement Statement
incrementDecrementStatement
    : IDENTIFIER (INCREMENT | DECREMENT)
    ;

// ------------------------------------------------------------------
// Break Statement
breakStatement
    : BREAK SEMICOLON
    ;

// ------------------------------------------------------------------
// Switch Statement
switchStatement
    : SWITCH expression switchBlock
    ;

switchBlock
    : LBRACE switchCase* defaultClause? RBRACE
    ;

switchCase
    : CASE expression COLON statementOrBlock
    ;

defaultClause
    : DEFAULT COLON statementOrBlock
    ;

// ------------------------------------------------------------------
// Event Handler
eventHandler
    : ON LPAREN STRING COMMA IDENTIFIER RPAREN block
    ;

// ------------------------------------------------------------------
// Try-Catch Block
tryCatch
    : TRY block CATCH LPAREN IDENTIFIER RPAREN block
    ;

// ------------------------------------------------------------------
// Throw Statement
throwStatement
    : THROW expression SEMICOLON
    ;

// ------------------------------------------------------------------
// Expression Handling (no left recursion)
expression
    : unaryExpression
      (
        (PLUS
        | MINUS
        | MULT
        | DIV
        | MOD
        | LT
        | GT
        | LE
        | GE
        | EQ
        )
        unaryExpression
      )*
    ;

unaryExpression
    : NOT unaryExpression // Added support for NOT operator
    | MINUS unaryExpression
    | primaryExpression
    ;

primaryExpression
    : basePrimaryExpression (postfixOp)*  // zero or more postfix ops
    ;

// The atomic forms of an expression:
basePrimaryExpression
    : IDENTIFIER
    | NUMBER
    | STRING
    | LPAREN expression RPAREN
    | LBRACKET (expression (COMMA expression)*)? RBRACKET  // array literal
    ;

// Postfix operations: .identifier, (args...), [index]
postfixOp
    : DOT IDENTIFIER
    | LPAREN (expression (COMMA expression)*)? RPAREN
    | LBRACKET expression RBRACKET
    ;
