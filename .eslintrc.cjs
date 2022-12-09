module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: "tsconfig.eslint.json",
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
};
