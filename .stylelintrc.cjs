module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "color-hex-length": "long",
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
