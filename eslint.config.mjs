import { defineConfig } from "eslint/config"
import jsPlugin from "@eslint/js"
import tsPlugin from "typescript-eslint"
import reactConfig from "eslint-plugin-react/configs/recommended.js"
import globals from "globals"

// TypeScript 設定が存在するか安全に確認
const tsConfigs = tsPlugin.configs?.recommended ?? []

export default defineConfig([
  {
    languageOptions: {
      globals: globals?.node ?? {}
    }
  },
  // JavaScript 推奨設定
  jsPlugin.configs?.recommended ?? {},
  // TypeScript 推奨設定（存在する場合のみ展開）
  ...tsConfigs,
  // React 推奨設定
  reactConfig ?? {},
  // カスタムルール
  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "semi": [2, "never"],
      "comma-dangle": [2, "never"]
    }
  }
])
