module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'object-shorthand': ['error', 'always'],
    'prettier/prettier': 'error',
    'import/named': ['off'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-anonymous-default-export': ['off'],
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'crypto-js/*',
          'next/*',
          'next-auth/*',
          '**/modules/*',
          '**/components/*',
          '**/public/**/*',
          '**/store/*',
          '**/scenes/*',
          '**/generated/**/*',
          '**/generated/*',
        ],
      },
    ],
  },
  settings: {
    'import/ignore': 'node_modules',
    react: {
      version: 'detect',
    },
  },
};
