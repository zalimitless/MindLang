export interface IRNode {
  type: string; // Type of the IR node (e.g., 'Assignment', 'FunctionDeclaration')
  args: string[]; // List of arguments or parameters for the node
  children?: IRNode[]; // Nested child nodes for constructs like loops or functions
}