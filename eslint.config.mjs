import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
	importPlugin.flatConfigs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: {
			react: pluginReact, 
			prettier: eslintPluginPrettierRecommended,
			"simple-import-sort": simpleImportSort,
		},
		languageOptions: {
			globals: globals.browser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			...prettierConfig.rules,
			'prettier/prettier': 'error',
			'import/no-unresolved': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'import/no-named-as-default-member': 'off',
			'import/no-dynamic-require': 'warn',
			'import/no-nodejs-modules': 'warn',
			"simple-import-sort/exports": "error",
			"simple-import-sort/imports": [
				"error",
				{
					"groups": [
						["^react", "^redux"],
						["^@?\\w"],
						["^#"],
						["^\\.\\.(?!/?$)", "^\\.\\./?$"],
						["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
						["^.+\\.s?css$"]
					]
				}
			],
		},
		settings: {
			react: {
				version: "detect",
			},
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: 'tsconfig.json',
				},
			},
		},
		ignores: ['./eslint.config.mjs'],
	},
];
