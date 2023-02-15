/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["jsx-a11y"],
};
