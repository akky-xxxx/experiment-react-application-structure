export const DISABLES = [
  {
    ignores: [
      "**/src/**/*.module.css.d.ts",
      "**/src/**/*.module.css.d.ts.map",
    ],
  },
  {
    files: [
      "**/*.stories.*",
      "**/app/**/{layout,page}.tsx",
      "**/modules/i18n/getRequestConfig/index.ts", // 文字列でファイル指定されるため
      "**/src/proxy.ts",
    ],
    rules: {
      "import/no-default-export": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
  {
    files: ["**/app/**/page.tsx",],
    rules: {
      "no-restricted-exports": "off",
    },
  },
]
