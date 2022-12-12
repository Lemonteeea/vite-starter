module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "color-hex-length": "long",
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
