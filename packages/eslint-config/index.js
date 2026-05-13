/** @type {import('eslint').Linter.Config} */

module_exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    env: {
        node: true,
        es2022: true,
    },

    rules: {
        // Catch unused stuff
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
        }],

        // No console.log in production code
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        // Require explicit return types on exported functions
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        // No 'any' without a comment explaining why
        '@typescript-eslint/no-explicit-any': 'warn',
        // Prefer const over let when possible
        'prefer-const': 'error',
        // No var ever
        'no-var': 'error',
    },
    ignorePatterns: ['node_modules/', 'dist/', '.next/', 'build/', 'coverage/'],
};