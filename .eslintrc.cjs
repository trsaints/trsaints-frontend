module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser', // Use the TypeScript parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Add TypeScript plugin recommendations
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { 
    ecmaVersion: "latest", 
    sourceType: "module",
    project: "./tsconfig.json" // Specify your tsconfig.json path
  },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react-refresh",
    "@typescript-eslint" // Add TypeScript plugin
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
    // You can add or override TypeScript specific rules here
  },
};