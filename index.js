module.exports = {
  "extends": "airbnb-base",
  "env": {
    "es6": true,
    "jest": true,
  },
  "rules": {
    "space-in-parens": [ "error", "always" ],
    "no-console": "off",
    "no-param-reassign": "off",
    "quotes": "off",
    "quote-props": [ "error", "always" ],
    "class-methods-use-this": "off",
    "no-underscore-dangle": [ "error", { "allowAfterThis": true, "allowAfterSuper": true } ],
    "no-plusplus": "off",
    "no-lonely-if": "off",
    "max-len": "off",
  },
};