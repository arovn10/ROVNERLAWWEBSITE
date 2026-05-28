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
    ignores: [
      "src/generated/**/*",
      // Dead-code duplicate folder — Next.js routes from src/app/ only.
      // Scheduled for removal in a separate cleanup PR.
      "src/app 2/**/*",
      // One-off seed scripts run by hand via ts-node; not part of the app bundle.
      "src/scripts/**/*",
    ],
  },
  {
    files: ["src/components/ui/**/*"],
    rules: {
      "@typescript-eslint/no-empty-interface": "off"
    }
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      // Allow `_`-prefixed names to indicate intentionally-unused identifiers
      // (standard JS convention). Bare `error` / `err` in catch blocks is still
      // a lint error — use `} catch {` instead.
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
