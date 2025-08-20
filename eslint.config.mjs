import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs}"],
  plugins: { js },
  extends: ["js/recommended"],
  languageOptions: {
    globals: globals.node,
    ecmaVersion: 2021
    // Remove sourceType here; it’s inferred from file contents or overridden per file if needed
  },
  rules: {
    // Add custom rules if needed
    "no-console": "off"
  }
});