
  module.exports = {
    extends: [
      "react-app",
      "prettier",
      "prettier/@typescript-eslint",
      "prettier/react",
    ],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
    },
    overrides: [
      {
        files: ["**/*.ts?(x)"],
        rules: {
          "@typescript-eslint/no-unused-vars": "error",
        },
      },
    ],
  };