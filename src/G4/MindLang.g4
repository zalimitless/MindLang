grammar MindLang;

//This is where the Lexer code starts
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

// Operators and Symbols
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER: [0-9]+;
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
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACKET: '[';
RBRACKET: ']';
DOT: '.';
INCREMENT: '++';
DECREMENT: '--';

// Comments
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;

// Whitespace
WHITESPACE: [ \t\r\n]+ -> skip;

// This is where the Parser code starts
// Entry point
// ------------------------------------------------------------------
// 1) program: entry point
// ------------------------------------------------------------------
program
    : statement*
    ;

// ------------------------------------------------------------------
// 2) Block vs. single-statement
// ------------------------------------------------------------------
block
    : LBRACE statement* RBRACE
    ;

statementOrBlock
    : block
    | statement
    ;

// ------------------------------------------------------------------
// 3) statement: list of all possible top-level statements
// ------------------------------------------------------------------
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
    | incrementDecrementStatement SEMICOLON
    | breakStatement
    ;

// ------------------------------------------------------------------
// 4) Variable Declaration
// ------------------------------------------------------------------
variableDeclaration
    : LET IDENTIFIER ASSIGN expression SEMICOLON
    ;

// ------------------------------------------------------------------
// 5) Assignment Statement
// ------------------------------------------------------------------
assignmentStatement
    : IDENTIFIER ASSIGN expression SEMICOLON
    | IDENTIFIER PLUS_ASSIGN expression SEMICOLON
    ;

// ------------------------------------------------------------------
// 6) Print Statement
// ------------------------------------------------------------------
printStatement
    : PRINT LPAREN expression RPAREN SEMICOLON
    ;

// ------------------------------------------------------------------
// 7) If Statement with optional else if's
// ------------------------------------------------------------------
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
// 8) While Statement (allow single statement or block)
// ------------------------------------------------------------------
whileStatement
    : WHILE LPAREN expression RPAREN statementOrBlock
    ;

// ------------------------------------------------------------------
// 9) For Statement (likewise allow single statement or block)
// ------------------------------------------------------------------
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
// 10) Function Declaration
// ------------------------------------------------------------------
functionDeclaration
    : FUNCTION IDENTIFIER
      LPAREN (IDENTIFIER (COMMA IDENTIFIER)*)? RPAREN
      block
    ;

// ------------------------------------------------------------------
// 11) Function Call
// ------------------------------------------------------------------
functionCall
    : IDENTIFIER LPAREN (expression (COMMA expression)*)? RPAREN SEMICOLON
    ;

// ------------------------------------------------------------------
// 12) Return Statement
// ------------------------------------------------------------------
returnStatement
    : RETURN expression SEMICOLON
    ;

// ------------------------------------------------------------------
// 13) Increment/Decrement Statement
// ------------------------------------------------------------------
incrementDecrementStatement
    : IDENTIFIER (INCREMENT | DECREMENT)
    ;

// ------------------------------------------------------------------
// 14) Break Statement
// ------------------------------------------------------------------
breakStatement
    : BREAK SEMICOLON
    ;

// ------------------------------------------------------------------
// 15) Expression Handling (no left recursion)
// ------------------------------------------------------------------
//
//    expression -> unaryExpression ( (op) unaryExpression )*
//    unaryExpression -> (MINUS)? primaryExpression
//    primaryExpression -> basePrimaryExpression (postfixOp)*
//
//    This structure eliminates left recursion and allows negative
//    numbers (e.g. -10) plus postfix operators like .field, (args),
//    [index], etc.
// ------------------------------------------------------------------
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
    : MINUS unaryExpression
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
