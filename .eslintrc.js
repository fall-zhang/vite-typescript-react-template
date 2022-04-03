module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // js
    "no-else-return": 2,//如果 if 语句里面有 return ,后面不能跟 else 语句
    "arrow-body-style": 0,
    "jsx-a11y/label-has-for": 0,
    "max-lines-per-function": [
      2,
      { max: 320, skipComments: true, skipBlankLines: true },
    ],
    "semi": [2, "never"],//语句不使用分号结尾
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "no-console": 0,
    "no-param-reassign": [
      2,
      { props: true, ignorePropertyModificationsFor: ["draft"] },
    ],
    "react/no-this-in-sfc": 0,
    "react/prop-types": 0,
    "react/display-name": "off",
  },
}
