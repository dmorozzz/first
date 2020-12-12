module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true,
        "mocha": true
    },
    "plugins": [
        "node",
        "security",
        "chai-friendly"
    ],
    "extends": [ 
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:security/recommended",
        "plugin:chai-friendly/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
    }
};
