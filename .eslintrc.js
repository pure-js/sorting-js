module.exports = {
  parserOptions: {
    'ecmaVersion': 2017
  },
  extends: 'airbnb-base',
  plugins: [
    'import'
  ],
  env: {
    browser: true,
    jest: true
  }
};
