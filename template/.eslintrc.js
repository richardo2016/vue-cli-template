module.exports = {
  root: true,
  parser: 'babel-eslint',
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    ecmaVersion: 7,
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  {{#if_eq lintConfig "standard"}}
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  // required to lint *.vue files
  "plugins": [
    "html",
    "react",
    "jsx-a11y"
  ],
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true,
    "jsx": true
  },

  "settings": {
    "react": {
      "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "0.14" // React version, default to the latest React stable release
    }
  },
  // add your custom rules here
  'rules': {
    {{#if_eq lintConfig "standard"}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    'import/no-unresolved': 0,
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Override our default settings just for this directory
    "eqeqeq": "warn",
    //  allows the opening and closing braces for a block to be on the same line
    // 'allowSingleLine': 0,
    // http://eslint.org/docs/rules/brace-style
    "brace-style": [
      'error',
      // 'stroustrup', 'allman'
      '1tbs',
      { "allowSingleLine": true }
    ],
    "camelcase": [0, {"properties": "never"}],
    // enable no-unused-vars when debug
    "no-unused-vars": [process.env.NODE_ENV !== 'production' || !DISABLE_PRODUCTION_NO_UNUSED_VARS ? 2 : 0],
    // "no-extra-semi": 2, // disallow unnecessary semicolons
    "semi": [0, "always"], // require or disallow use of semicolons instead of ASI
    "one-var": [0],
    "indent": ["error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }, "SwitchCase": 1 }],
    // forbid no multiple spaces except property of object, variable-declaration and import-declaration
    "no-multi-spaces": ["error", {
      exceptions: {
        "Property": true,
        "VariableDeclarator": true,
        "ImportDeclaration": true
      },
    }],
    //
    // Possible Errors
    //
    // The following rules point out areas where you might have made mistakes.
    //
    "comma-dangle": [2, 'only-multiline'], // disallow or enforce trailing commas
    "space-infix-ops": [2, {"int32Hint": false}],
    "operator-linebreak": [2, "after", { "overrides": { "?": "ignore", ":": "ignore", "||": "ignore" } }], // override `?` and `:` when use them to render under specified condition in JSX
    // "no-cond-assign": 2, // disallow assignment in conditional expressions
    // "no-console": 1, // disallow use of console (off by default in the node environment)
    // "no-constant-condition": 2, // disallow use of constant expressions in conditions
    // "no-control-regex": 2, // disallow control characters in regular expressions
    // "no-debugger": 2, // disallow use of debugger
    // "no-dupe-args": 2, // disallow duplicate arguments in functions
    // "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
    // "no-duplicate-case": 2, // disallow a duplicate case label.
    // "no-empty": 2, // disallow empty statements
    // "no-empty-class": 2, // disallow the use of empty character classes in regular expressions
    // "no-ex-assign": 2, // disallow assigning to the exception in a catch block
    // "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
    // "no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
    // "no-extra-semi": 2, // disallow unnecessary semicolons
    // "no-func-assign": 2, // disallow overwriting functions written as function declarations
    // "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
    // "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
    // "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
    // "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
    // "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
    // "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
    // "no-reserved-keys": 2, // disallow reserved words being used as object literal keys (off by default)
    // "no-sparse-arrays": 2, // disallow sparse arrays
    // "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
    // "use-isnan": 2, // disallow comparisons with the value NaN
    // "valid-jsdoc": 2, // Ensure JSDoc comments are valid (off by default)
    // "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string

    // Strict Mode
    //
    // These rules relate to using strict mode.
    //
    "strict": 0, // controls location of Use Strict Directives. 0: required by `babel-eslint`

    // babel-eslint
    "no-useless-constructor": [0], //disabled when React Component Template supply the constructor

    "no-useless-escape": [0],
    //
    // eslint-plugin-react
    //
    // React specific linting rules for ESlint
    "react/display-name": 0, // Prevent missing displayName in a React component definition
    // "react/jsx-quotes": [2, "double", "avoid-escape"], // Enforce quote style for JSX attributes
    "react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
    "react/jsx-sort-props": 0, // Enforce props alphabetical sorting
    "react/jsx-uses-react": 2, // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-vars": 2, // Prevent variables used in JSX to be incorrectly marked as unused
    "react/no-did-mount-set-state": 2, // Prevent usage of setState in componentDidMount
    "react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
    "react/no-multi-comp": 0, // Prevent multiple component definition per file
    "react/no-unknown-property": 2, // Prevent usage of unknown DOM property
    "react/prop-types": [0, { ignore: ['children']}], // disabled when React use xiaoduo customized redux-redux function: connectFactory // default:// Prevent missing props validation in a React component definition
    "react/react-in-jsx-scope": 2, // Prevent missing React when using JSX
    "react/self-closing-comp": 2, // Prevent extra closing tags for components without children
    "react/jsx-wrap-multilines": 2, // Prevent missing parentheses around multilines JSX // react/wrap-multilines is deprecated

    // jsx-ally
    //
    // "jsx-a11y/rule-name": 2
  }
}
