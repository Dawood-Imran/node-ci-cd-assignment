import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2021
    },
    rules: {
      "no-console": "off" // Keep this if you reverted to allowing console.log
    }
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: globals.jest
    }
  }
]);