// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'projects/**/tsconfig.*.json'],
        tsconfigRootDir: './',
        sourceType: 'module',
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angular.configs.tsRecommended,
      eslintPluginPrettierRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/no-async-lifecycle-method': ['error'],
      '@angular-eslint/no-attribute-decorator': ['error'],
      '@angular-eslint/require-lifecycle-on-prototype': ['error'],
      '@angular-eslint/sort-lifecycle-methods': ['error'],
      '@angular-eslint/consistent-component-styles': ['error'],
      '@angular-eslint/contextual-decorator': ['error'],
      '@angular-eslint/directive-class-suffix': ['error'],
      '@angular-eslint/no-conflicting-lifecycle': ['error'],
      '@angular-eslint/no-duplicates-in-metadata-arrays': ['error'],
      '@angular-eslint/no-lifecycle-call': ['error'],
      '@angular-eslint/no-output-native': ['error'],
      '@angular-eslint/prefer-output-readonly': ['error'],
      '@angular-eslint/prefer-signals': [
        'warn',
        {
          useTypeChecking: true,
        },
      ],
      '@angular-eslint/relative-url-prefix': ['error'],
      '@angular-eslint/use-component-selector': ['error'],
      '@angular-eslint/use-pipe-transform-interface': ['error'],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      eslintPluginPrettierRecommended,
    ],
    rules: {},
  },
);
