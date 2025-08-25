// eslint.config.mjs
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      // 패키지 타입이 commonjs라면 아래 유지
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        process: "readonly",
      },
    },
    rules: {
      // 필요 규칙을 여기서 추가하세요
      // "no-console": "off",
    },
  },
];
