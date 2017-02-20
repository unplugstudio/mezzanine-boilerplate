module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  rules: {
    indent: [
      'error',
      'tab',
      {
        MemberExpression: 1,
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-tabs': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
  },
}
