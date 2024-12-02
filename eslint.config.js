module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  rules: {
    semi: ["error", "always"],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        semi: ["error", "always"],
      },
    },
  ],
};
