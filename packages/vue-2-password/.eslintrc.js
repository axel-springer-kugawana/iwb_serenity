module.exports = {
    root: true,
    env: {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "plugin:vue/recommended",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "indent": ["error", 4],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-unused-vars": 0,
        "no-console": "warn",
        "object-shorthand": ["error", "never"], /// https://eslint.org/docs/rules/object-shorthand
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4],
        "vue/attributes-order": 0,
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "any",
                "normal": "any",
                "component": "any"
            },
            "svg": "any"
        }],
        "vue/html-closing-bracket-newline": 0,
        "vue/max-attributes-per-line": ["error", {
            "singleline": 4,
        }],
        "vue/multiline-html-element-content-newline": 0,
        "vue/singleline-html-element-content-newline": 0,
        "vue/html-closing-bracket-spacing": 0,
        "no-prototype-builtins": 0,
        "vue/return-in-computed-property": 0,
        "vue/no-v-html": 0,
        "vue/no-use-v-if-with-v-for": 0,
        "@typescript-eslint/explicit-module-boundary-types": [
            1,
            {
                "allowedNames": ["getCriteria"]
            }
        ],
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
};
