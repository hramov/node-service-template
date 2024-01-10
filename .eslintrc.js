module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/semi": [2, "always"],
        "@typescript-eslint/indent": [0, "tab"],
        "no-tabs": 0,
        "space-before-function-paren": 0,
        "@typescript-eslint/space-before-function-paren": 0,
        "@typescript-eslint/no-invalid-void-type": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "no-useless-return": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "no-console": "error"
    }
}
