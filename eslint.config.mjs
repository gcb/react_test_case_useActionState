import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ["next/core-web-vitals", "next/typescript"],
		rules: {
			"@typescript-eslint/no-unused-vars": "warn",
//			"react/prop-types": "off",
//			"react/react-in-jsx-scope": "off",
//			"@typescript-eslint/no-empty-object-type": "off", // remove
//			"no-prototype-builtins": "off", // explore
//			"no-unused-vars": "warn",
//			"no-undef": "warn",
		},
		"overrides": [
			{
				"files": ["lib/generated_prisma/**/**.ts", "lib/generated_prisma/**/**.js"], // Or *.test.js
				"rules": {
					"require-jsdoc": "off",
					"@typescript-eslint/no-empty-object-type": "off",
					"@typescript-eslint/no-explicit-any": "off",
					"@typescript-eslint/no-require-imports": "off",
					"@typescript-eslint/no-this-alias": "off",
					"@typescript-eslint/no-unnecessary-type-constraint": "off",
					"@typescript-eslint/no-unsafe-function-type": "off",
					"@typescript-eslint/no-unused-expressions": "off",
					"@typescript-eslint/no-unused-vars": "off",
					"@typescript-eslint/no-unused-vars": "off",
					"@typescript-eslint/no-wrapper-object-types": "off",
				}
			}
		],
	}),
];

export default eslintConfig;
