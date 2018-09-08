module.exports = {
    "env": {
        "jest": true,
        "node": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "jsx": true
          },
        "sourceType": "module"
    },
    "plugins": [
        "react"
      ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",    
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
