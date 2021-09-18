module.exports = {
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-value-no-unknown-custom-properties'
  ],
  extends: [
    'stylelint-config-idiomatic-order',
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],
  rules: {
    'no-duplicate-selectors': [
      true,
      {
        severity: 'warning',
      },
    ],
    'no-descending-specificity': [
      true,
      {
        severity: 'warning',
      },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'plugin/declaration-block-no-ignored-properties': true,
    'csstools/value-no-unknown-custom-properties': true
  },
};
