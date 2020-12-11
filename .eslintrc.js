module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "plugins": [
        "node",
        "security"
    ],
    "extends": [ 
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:security/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
    }
};
