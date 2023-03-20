module.exports = {
  plugins: ['solid', '@typescript-eslint', 'import', 'prettier'],

  extends: [
    // 'eslint:recommended',
    'plugin:solid/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
    createDefaultProgram: true,
    sourceType: 'module',
  },

  rules: {
    // 'prettier/prettier': 'error',
    'solid/reactivity': 'warn',
    'solid/no-destructure': 'warn',
    'solid/jsx-no-undef': 'error',
    'max-len': [
      'error',
      {
        code: 130,
        ignoreUrls: true,
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'padded-blocks': ['error', 'never'],
    'no-multi-spaces': ['error', { exceptions: { ImportDeclaration: true } }],
    'no-cond-assign': ['error', 'always'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'brace-style': ['error', 'stroustrup'],
    'no-duplicate-imports': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'key-spacing': ['error', { afterColon: true }],
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    curly: ['error', 'multi'],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
    'no-restricted-imports': ['error', { patterns: ['./*', '../*'] }],
    'quote-props': ['error', 'as-needed'],
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
