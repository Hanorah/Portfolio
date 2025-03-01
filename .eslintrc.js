module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },

  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // ✅ Ensure Prettier errors are flagged
    'react/jsx-filename-extension': 'off', // ✅ Equivalent to [0]
    'react/react-in-jsx-scope': 'off', // ✅ If using Next.js or React 17+
  },
};
