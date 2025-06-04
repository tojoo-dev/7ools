/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.cjs"],
  extends: ["@7ools/eslint-config/index.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
