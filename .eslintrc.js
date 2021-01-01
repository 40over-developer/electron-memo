module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["standard", "vue", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "never",
      }
    ],
    "no-unused-vars": "warn",
    "space-before-function-paren": ["error", "never"],
    semi: ["error", "always"],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      }
    ],
    "space-in-parens": ["error", "never"],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "space-before-blocks": "error",
    "space-infix-ops": [
      "error",
      {
        int32Hint: false,
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: ["-", "+"],
      }
    ],
    "block-spacing": "error",
    "object-curly-spacing": ["error", "always"],
    "no-console": "warn",
    quotes: ["error", "double"],
    "arrow-parens": ["error", "always"],
  },
};