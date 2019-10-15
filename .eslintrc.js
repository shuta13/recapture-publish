module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  extends: [
    "react-app", 
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-extra-semi": "error",
    "no-undef": "warn",
    "no-console": "off",
    "space-before-blocks": ["warn", { "classes": "always", "functions": "always", "keywords": "always" }]
  }
}