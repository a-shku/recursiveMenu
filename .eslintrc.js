module.exports = {
    overrides: [
        {
            files: ["*.ts"],
            extends: [
                "plugin:@angular-eslint/recommended",
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "plugin:@angular-eslint/template/process-inline-templates",
            ],
            plugins: ["prefer-arrow"],
            parserOptions: {
                project: ["tsconfig.json"],
            },
            settings: {
                "import/parsers": {
                    "@typescript-eslint/parser": [".ts", ".html"],
                },
            },
            rules: {
                /******************************
                 * Angular-specific rules
                 *******************************/
                "@angular-eslint/no-empty-lifecycle-method": "off",
                "@angular-eslint/no-conflicting-lifecycle": "off",
                "@angular-eslint/contextual-lifecycle": "off",
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        type: "element",
                        prefix: "sem",
                        style: "kebab-case",
                    },
                ],
                "@angular-eslint/directive-class-suffix": "error",
                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        type: "attribute",
                        prefix: "sem",
                        style: "camelCase",
                    },
                ],
                "@angular-eslint/no-host-metadata-property": "off",
                "@angular-eslint/component-class-suffix": [
                    "error",
                    {
                        suffixes: ["Component", "ComponentStub"], // Is only Component by default, but Stubs are required in some tests
                    },
                ],

                /******************************
                 * Typescript-specific rules
                 *******************************/
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/promise-function-async": "warn",
                "no-case-declarations": "error",
                // Must disable the base rule as it can report incorrect errors
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": [
                    "error",
                    {
                        allow: [
                            "private-constructors",
                            "protected-constructors",
                            "decoratedFunctions",
                            "methods",
                            "constructors",
                            "functions",
                            "arrowFunctions",
                            "asyncFunctions",
                            "asyncMethods",
                        ],
                    },
                ],
                // Must disable the base rule as it can report incorrect errors
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "warn",
                    {
                        args: "none",
                        ignoreRestSiblings: true,
                    },
                ],
                "@typescript-eslint/restrict-template-expressions": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                // Must disable the base rule as it can report incorrect errors
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": [
                    "error",
                    {
                        allowTernary: true,
                    },
                ],
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/ban-ts-comment": "off",
                //Todo turn on and fix all warnings
                "@typescript-eslint/explicit-module-boundary-types": [
                    "off",
                    {
                        allowArgumentsExplicitlyTypedAsAny: true,
                        allowTypedFunctionExpressions: false,
                    },
                ],
                "@typescript-eslint/no-type-alias": [
                    "error",
                    {
                        allowAliases: "always",
                        allowConditionalTypes: "always",
                        allowMappedTypes: "always",
                        allowCallbacks: "always",
                        allowLiterals: "always",
                        allowGenerics: "always",
                    },
                ],
                "@typescript-eslint/no-empty-interface": [
                    "error",
                    {
                        allowSingleExtends: true,
                    },
                ],
                "@typescript-eslint/no-floating-promises": "off",
                "@typescript-eslint/no-misused-promises": "off",
                "@typescript-eslint/no-this-alias": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/prefer-regexp-exec": "off",
                "@typescript-eslint/unbound-method": "off",
                "@typescript-eslint/member-ordering": [
                    "error",
                    {
                        default: [
                            "static-field",
                            "static-method",
                            "instance-field",
                            "instance-method",
                        ],
                    },
                ],
                "@typescript-eslint/unified-signatures": "error",
                "@typescript-eslint/type-annotation-spacing": "error",
                "@typescript-eslint/restrict-plus-operands": "off",

                "require-await": "off",
                "@typescript-eslint/require-await": "off",
                "@typescript-eslint/no-unnecessary-type-assertion": "off",
                "@typescript-eslint/triple-slash-reference": "off",
                // Substitutes the 'callable-types' tslint rule
                "@typescript-eslint/prefer-function-type": "error",

                semi: "off",
                "@typescript-eslint/semi": ["error"],
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                    {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: "comma",
                            requireLast: false,
                        },
                    },
                ],
                // Substitutes the 'class-name' tslint rule.
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: "variable",
                        format: ["camelCase", "UPPER_CASE", "PascalCase"],
                        leadingUnderscore: "allow",
                    },
                ],

                /******************************
                 * ESLint rules
                 *******************************/
                // Substitutes the 'arrow-return-shorthand' tslint rule
                "arrow-body-style": [
                    "off", // Is "error" in Nova, but would require a lot of changes in our code, often with worse readability
                    "as-needed",
                ],
                "brace-style": [
                    "error",
                    "1tbs",
                    {
                        allowSingleLine: true,
                    },
                ],
                curly: "error",
                "guard-for-in": "error",
                "eol-last": "error",
                eqeqeq: ["error", "smart"],
                "import/export": "off",
                // Substitutes the 'deprecation' tslint rule
                "import/no-deprecated": "warn",
                "import/no-duplicates": "error",
                "import/no-named-as-default-member": "off",
                "import/no-named-as-default": "off",
                "import/no-unresolved": "off", // Added because the linter shows a lot of false positives and it causes during build anyway
                "import/order": [
                    "off",
                    {
                        "newlines-between": "always",
                    },
                ],
                "max-len": [
                    "error",
                    {
                        code: 160,
                        ignorePattern: "^import .*",
                    },
                ],
                "no-bitwise": "error",
                "no-caller": "error",
                "no-fallthrough": "error",
                "no-eval": "error",
                "no-console": [
                    "error",
                    {
                        allow: [
                            "log",
                            "warn",
                            "dir",
                            "timeLog",
                            "assert",
                            "clear",
                            "count",
                            "countReset",
                            "group",
                            "groupEnd",
                            "table",
                            "dirxml",
                            "error",
                            "groupCollapsed",
                            "Console",
                            "profile",
                            "profileEnd",
                            "timeStamp",
                            "context",
                        ],
                    },
                ],
                "no-empty": [
                    "error",
                    {
                        allowEmptyCatch: true,
                    },
                ],
                "no-new-wrappers": "error",
                "no-redeclare": "error",
                "no-restricted-imports": ["warn"],
                "no-trailing-spaces": [
                    "error",
                    {
                        skipBlankLines: true,
                    },
                ],
                "no-prototype-builtins": "off",
                "no-shadow": [
                    "off",
                    {
                        hoist: "all",
                    },
                ],
                "no-throw-literal": "error",
                "no-var": "error",
                "id-denylist": [
                    "error",
                    "any",
                    "string",
                    "boolean",
                    "undefined",
                ],
                "id-match": "error",
                "no-undef-init": "error",
                "no-underscore-dangle": "off",
                "no-useless-escape": "off",
                "no-control-regex": "off",
                "prefer-arrow/prefer-arrow-functions": [
                    "off",
                    {
                        allowStandaloneDeclarations: true,
                        singleReturnOnly: true,
                    },
                ],
                "prefer-const": [
                    "error",
                    {
                        ignoreReadBeforeAssign: true,
                    },
                ],
                quotes: [
                    "error",
                    "double",
                    {
                        allowTemplateLiterals: true,
                    },
                ],
                radix: "error",
                "sort-imports": "off",
                // Substitutes the 'comment-format' tslint rule
                "spaced-comment": [
                    "error",
                    "always",
                    {
                        line: {
                            markers: ["/"],
                        },
                        block: {
                            markers: ["/"],
                            exceptions: ["*"],
                            balanced: true,
                        },
                    },
                ],
                //Todo turn on and fix all warnings
                "@typescript-eslint/no-unsafe-argument": "off",
            },
        },
        {
            files: ["*.spec.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./src/tsconfig.spec.json",
                ecmaVersion: 2020,
                sourceType: "module",
            },
            rules: {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-unsafe-argument": "off",
            },
        },
        {
            files: ["*.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {
                "@angular-eslint/template/no-negated-async": "off",
            },
        },
        {
            files: ["*.js"],
            env: {
                es6: true,
            },
        },
    ],
};
