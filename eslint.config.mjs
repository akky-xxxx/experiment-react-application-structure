import { defineConfig, globalIgnores } from "eslint/config";
import storybook from "eslint-plugin-storybook";
import eslintConfigSCTs from "eslint-config-sc-ts"
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import perfectionist from "eslint-plugin-perfectionist"

import { DISABLES } from "./config/eslint/DISABLES/index.mjs"

const eslintConfig = defineConfig([
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-object-types": "error",
    },
  },
  nextVitals,
  nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  storybook.configs["flat/recommended"],
  eslintConfigSCTs.configs.recommended,

  {
    files: ["**/*.tsx"],
    rules: {
      "max-lines": ["error", 150],
      "max-lines-per-function": ["error", {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      }],
    },
  },
  DISABLES,
]).flat();

export default eslintConfig;
