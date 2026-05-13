module.exports = {
  root: true,
  extends: ['@gymos/eslint-config'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/', 'dist/', '.next/', 'build/', 'coverage/', '.husky/'],
};