import { useTranslations } from "next-intl"

import type { ResourceDotPaths } from "@shared/types/ResourceDotPaths"

/**
 * 翻訳サービスを通してキーを翻訳するためのカスタムフックです。
 *
 * `useTranslationsService` フックは `useTranslations` フックをラップし、
 * アプリケーション内でリソースキーを翻訳するための
 * シンプルなインターフェースを提供します。
 *
 * また、ライブラリが提供する翻訳関数ではリソースキーの型推論が効かないため、
 * それを拡張し、`ResourceDotPaths` 型を使用することで
 * 有効な翻訳キーのみを型安全に指定できるようにしています。
 *
 * @returns {(key: ResourceDotPaths) => string}
 * `ResourceDotPaths` 型で定義されたリソースキーを受け取り、
 * 対応する翻訳文字列を返す関数。
 */
export const useTranslationsService = () => {
  const t = useTranslations()

  return (key: ResourceDotPaths) => t(key)
}
