module.exports = {
  extends: [
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/named': ['off'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-anonymous-default-export': ['off'],
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'next/*',
          '**/modules/*',
          '**/components/*',
          '**/public/**/*',
          '**/store/*',
          '**/scenes/*',
        ],
      },
    ],
  },
};
