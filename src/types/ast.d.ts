export interface ASTNode {
    type: string; // Type of the AST node (e.g., 'Assignment', 'FunctionDeclaration')
    value?: string; // Value associated with the node (e.g., variable name, function name)
    children?: ASTNode[]; // Nested children of the AST node
    args?: string[]; // Optional arguments (specific to certain node types, like 'PrintStatement')
  }