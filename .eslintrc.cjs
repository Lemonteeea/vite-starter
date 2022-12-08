module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
};
