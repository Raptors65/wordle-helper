module.exports = {
  'env': {
    'es2021': true,
    'node': true,
    'react-native/react-native': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-native',
    '@typescript-eslint'
  ],
  'rules': {
    'comma-dangle': ['error', 'never'],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'object-curly-spacing': ['error', 'always'],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
