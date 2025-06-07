module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
