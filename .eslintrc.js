module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'prettier',
    'prettier/vue',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
