// @ts-check
import path from 'path';
import { fileURLToPath } from 'url';
import eslintJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import angularEslint from 'angular-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tsEslint.config(
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', '**/tsconfig.*.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    extends: [
      eslintJs.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
      ...angularEslint.configs.tsRecommended,
      eslintPluginPrettierRecommended,
    ],
    processor: angularEslint.processInlineTemplates,
    rules: {
      'unused-imports/no-unused-imports': 'error',
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
      ...angularEslint.configs.templateRecommended,
      ...angularEslint.configs.templateAccessibility,
      eslintPluginPrettierRecommended,
    ],
    rules: {},
  },
);
