import { getTranslations } from "next-intl/server"

import type { ResourceDotPaths } from "@shared/types/ResourceDotPaths"

type Input = Parameters<typeof getTranslations>

/**
 * `generateMetadata` などのサーバーサイド処理向けに、
 * 型安全な翻訳取得関数を非同期で生成します。
 *
 * この関数は指定された引数をもとに翻訳リソースを取得し、
 * 翻訳キーを受け取って対応するローカライズ文字列を返す
 * カリー化された関数を返します。
 *
 * 主に `generateMetadata` のようにフックを利用できないコンテキストで、
 * 翻訳を型安全に扱いたい場合の利用を想定しています。
 *
 * なお、ライブラリ標準の翻訳関数ではリソースキーの型推論が十分に効かないため、
 * `ResourceDotPaths` 型を用いて拡張し、有効な翻訳キーのみを
 * 型安全に指定できるようにしています。
 *
 * @param {...Input} input
 * 翻訳を取得するために必要な引数。
 *
 * @returns {Promise<(key: ResourceDotPaths) => string>}
 * Promise は翻訳取得関数を返します。
 * 返された関数は `ResourceDotPaths` 型の翻訳キーを受け取り、
 * 対応する翻訳文字列を返します。
 */
export const getTypedTranslations = async (...input: Input) => {
  const t = await getTranslations(...input)

  return (key: ResourceDotPaths) => t(key)
}
