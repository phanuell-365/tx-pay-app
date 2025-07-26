// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint';
// import { globalIgnores } from 'eslint/config';
// import reactX from 'eslint-plugin-react-x';
// import reactDom from 'eslint-plugin-react-dom';
//
// export default tseslint.config([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       parser: tseslint.parser,
//       parserOptions: {
//         project: ['./tsconfig.node.json', './tsconfig.app.json'],
//         tsconfigRootDir: import.meta.dirname,
//         ecmaVersion: 2020,
//         sourceType: 'module',
//       },
//       globals: globals.browser,
//     },
//     plugins: {
//       // 'react-refresh': reactRefresh,
//       // 'react-hooks': reactHooks,
//       // '@eslint-react': reactX,
//     },
//     extends: [
//       js.configs.recommended,
//     //   // tseslint.configs.recommended,
//     //   reactHooks.configs['recommended-latest'],
//     //   reactRefresh.configs.vite,
//     //   // Remove tseslint.configs.recommended and replace with this
//     //   ...tseslint.configs.recommendedTypeChecked,
//     //   // Alternatively, use this for stricter rules
//     //   ...tseslint.configs.strictTypeChecked,
//     //   // Optionally, add this for stylistic rules
//     //   ...tseslint.configs.stylisticTypeChecked,
//     //   reactX.configs['recommended-typescript'],
//     //   reactDom.configs.recommended,
//     // 'eslint:recommended',
//     // '@typescript-eslint/recommended',
//     // 'plugin:react-hooks/recommended',
//     // reactHooks.configs['recommended-latest'],
//     ],
//     ignores: ['dist', '.eslintrc.js'],
//     // parser: '@typescript-eslint/parser',
//     // plugins: ['react-refresh'],
//     rules: {
//       // 'react-refresh/only-export-components': 'warn',
//       // 'react-refresh/unsafe-component-rendering': 'warn',
//       // 'react-hooks/rules-of-hooks': 'error',
//       // 'react-hooks/exhaustive-deps': 'warn',
//       // // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//       // '@typescript-eslint/no-explicit-any': 'off',
//       // '@typescript-eslint/explicit-module-boundary-types': 'off',
//       // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//       // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//       // 'no-console': ['warn', { allow: ['warn', 'error'] }],
//       // 'react-refresh/unsafe-component-rendering': 'warn',
//       // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//       'react-hooks/rules-of-hooks': 'error',
//       'react-hooks/exhaustive-deps': 'warn',
//       '@typescript-eslint/no-explicit-any': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//       'no-console': ['warn', { allow: ['warn', 'error'] }],
//       // "@typescript-eslint/await-thenable": "error",
//     },
//     // languageOptions: {
//     //   ecmaVersion: 2020,
//     //   globals: globals.browser,
//     //   parserOptions: {
//     //     project: ['./tsconfig.node.json', './tsconfig.app.json'],
//     //     tsconfigRootDir: import.meta.dirname,
//     //   },
//     // },
//   },
//   ...tseslint.configs.recommendedTypeChecked,
//   // optional extras:
//   // ...tseslint.configs.strictTypeChecked,
//   // ...tseslint.configs.stylisticTypeChecked,
//   reactHooks.configs['recommended-latest'],
//   reactRefresh.configs.vite,
//   reactX.configs['recommended-typescript'],
//   reactDom.configs.recommended,
// ]);

// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint';
// import reactX from 'eslint-plugin-react-x';
// import reactDom from 'eslint-plugin-react-dom';
//
// export default tseslint.config([
//   // Global ignores
//   {
//     ignores: ['dist/**', 'node_modules/**']
//   },
//
//   // Base JavaScript configuration for all files
//   {
//     files: ['**/*.{js,jsx,ts,tsx}'],
//     extends: [js.configs.recommended],
//     languageOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//       globals: globals.browser,
//     },
//   },
//
//   // TypeScript-specific configuration
//   {
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       parser: tseslint.parser,
//       parserOptions: {
//         project: ['./tsconfig.node.json', './tsconfig.app.json'],
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//     extends: [
//       ...tseslint.configs.recommendedTypeChecked,
//       // Optional: add these for stricter rules
//       // ...tseslint.configs.strictTypeChecked,
//       // ...tseslint.configs.stylisticTypeChecked,
//     ],
//     rules: {
//       '@typescript-eslint/no-explicit-any': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//     },
//   },
//
//   // React-specific configuration
//   {
//     files: ['**/*.{jsx,tsx}'],
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     extends: [
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//       reactX.configs['recommended-typescript'],
//       reactDom.configs.recommended,
//     ],
//     rules: {
//       'react-hooks/rules-of-hooks': 'error',
//       'react-hooks/exhaustive-deps': 'warn',
//       'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//       'no-console': ['warn', { allow: ['warn', 'error'] }],
//     },
//   },
//
//   // Configuration files - no type checking needed
//   {
//     files: ['*.config.{js,ts}', '*.config.*.{js,ts}'],
//     extends: [js.configs.recommended],
//     languageOptions: {
//       globals: globals.node,
//     },
//     rules: {
//       'no-console': 'off',
//     },
//   },
// ]);
//
// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint';
// import reactX from 'eslint-plugin-react-x';
// import reactDom from 'eslint-plugin-react-dom';
//
// export default tseslint.config([
//   // Global ignores
//   {
//     ignores: ['dist/**', 'node_modules/**']
//   },
//
//   // Base JavaScript configuration for all files
//   {
//     files: ['**/*.{js,jsx,ts,tsx}'],
//     extends: [js.configs.recommended],
//     languageOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//       globals: globals.browser,
//     },
//   },
//
//   // TypeScript-specific configuration
//   {
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       parser: tseslint.parser,
//       parserOptions: {
//         project: ['./tsconfig.node.json', './tsconfig.app.json'],
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//     extends: [
//       ...tseslint.configs.recommendedTypeChecked,
//       // Optional: add these for stricter rules
//       // ...tseslint.configs.strictTypeChecked,
//       // ...tseslint.configs.stylisticTypeChecked,
//     ],
//     rules: {
//       '@typescript-eslint/no-explicit-any': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//     },
//   },
//
//   // React configurations - these include their own plugins
//   reactHooks.configs['recommended-latest'],
//   reactRefresh.configs.vite,
//
//   // React-specific configuration
//   {
//     files: ['**/*.{jsx,tsx}'],
//     extends: [
//       reactX.configs['recommended-typescript'],
//       reactDom.configs.recommended,
//     ],
//     rules: {
//       'react-hooks/rules-of-hooks': 'error',
//       'react-hooks/exhaustive-deps': 'warn',
//       'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//       'no-console': ['warn', { allow: ['warn', 'error'] }],
//     },
//   },
//
//   // Configuration files - no type checking needed
//   {
//     files: ['*.config.{js,ts}', '*.config.*.{js,ts}'],
//     extends: [js.configs.recommended],
//     languageOptions: {
//       globals: globals.node,
//     },
//     rules: {
//       'no-console': 'off',
//     },
//   },
// ]);

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  // Global ignores
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Base JavaScript configuration for all files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
  },

  // TypeScript-specific configuration (excluding config files)
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.config.{ts,js}', '**/*.config.*.{ts,js}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // Optional: add these for stricter rules
      // ...tseslint.configs.strictTypeChecked,
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  // React configurations - these include their own plugins
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,

  // React-specific configuration
  {
    files: ['**/*.{jsx,tsx}'],
    extends: [reactX.configs['recommended-typescript'], reactDom.configs.recommended],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Configuration files - TypeScript without type checking
  {
    files: ['**/*.config.{js,ts}', '**/*.config.*.{js,ts}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: globals.node,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // Basic TS rules without type checking
    ],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
