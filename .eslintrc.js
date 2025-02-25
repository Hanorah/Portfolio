module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser', // 🔥 Use Babel parser
  parserOptions: {
    requireConfigFile: false, // 🔥 No need for a separate Babel config
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020, // 🔥 Supports modern JS (e.g., class fields)
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [0],
  },
};
