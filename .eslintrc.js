module.exports = {
  env: {
    'browser': true,
    'node': true,
    'jest': true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@stylistic', 'prettier', 'import', 'jest'],
  rules: {
    'import/no-unresolved': 'error',
    'prettier/prettier': 'error',
    'no-trailing-spaces': 'off',
    '@stylistic/semi': 'error',
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/forbid-prop-types': ['error'],
    'react/destruction-assignment': [0, 'always', { ignoreClassFields: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': false,
        'minimumDescriptionLength': 5,
      },
    ],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'error',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'error',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object'],
        'newlines-between': 'always-and-inside-groups',
        'pathGroups': [
          {
            pattern: '@project/**',
            group: 'internal',
          },
          {
            pattern: '@velvet/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
  overrides: [],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    'react': {
      version: 'detect',
    },
  },
};
