import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
	importPlugin.flatConfigs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: {react: pluginReact, prettier: eslintPluginPrettierRecommended},
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
