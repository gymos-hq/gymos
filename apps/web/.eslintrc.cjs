module.exports = {
  extends: ['@gymos/eslint-config', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // Allow default exports for Next.js pages
    'import/no-default-export': 'off',
  },
};