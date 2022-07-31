module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-duplicate-imports': 2,
    '@typescript-eslint/no-unused-vars': 2,
    'no-console': 1,
    'prefer-const': 1,
    'sort-imports': 2,
  },
};
