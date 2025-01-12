import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
      rules: {
        "quotes": ["error", "double"], // Força o uso de aspas duplas
        "semi": ["error", "always"],  // Força o uso de ponto e vírgula
      },
    },
  ];

export default eslintConfig;
