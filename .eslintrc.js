module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-indent': [
      'error',
      4
    ],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}
