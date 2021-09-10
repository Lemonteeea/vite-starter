module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "color-hex-length": "long",
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
