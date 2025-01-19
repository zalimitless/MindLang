import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Allow TypeScript and JavaScript files
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "G4/MindLangLexer.ts",
    "G4/MindLangParser.ts"
  ],
};

export default config;
