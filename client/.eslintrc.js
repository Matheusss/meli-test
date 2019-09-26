module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'object-curly-spacing': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': ['error', 'windows'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
