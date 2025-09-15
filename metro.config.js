import { getDefaultConfig } from "@expo/metro-config"

const defaultConfig = getDefaultConfig(import.meta.url)

// Firebase v10+ 用に .cjs を追加
defaultConfig.resolver.sourceExts.push("cjs")

// パッケージの exports による解決問題を無効化
defaultConfig.resolver.unstable_enablePackageExports = false

export default defaultConfig
