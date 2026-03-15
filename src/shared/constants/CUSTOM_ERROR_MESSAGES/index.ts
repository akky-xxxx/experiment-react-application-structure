/**
 * カスタムエラーメッセージを格納した定数オブジェクトです。
 *
 * このオブジェクトは、キーがすべて大文字の文字列であること、
 * かつ値が文字列であることを制約として持ちます。
 * 各キーは特定のバリデーションエラーに対応するメッセージを表します。
 *
 * プロパティ:
 * - NO_CHECKED: 何もチェックされていないことを示すエラーメッセージ。
 * - TOO_FEW_ARRAY: 配列要素が不足していることを示すエラーメッセージ。
 * - TOO_FEW_STRING: 文字列の数が不足していることを示すエラーメッセージ。
 * - TOO_MANY_ARRAY: 配列要素が多すぎることを示すエラーメッセージ。
 */
export const CUSTOM_ERROR_MESSAGES = {
  NO_CHECKED: "no checked",
  TOO_FEW_ARRAY: "too few array",
  TOO_FEW_STRING: "too few string",
  TOO_MANY_ARRAY: "too many array",
} as const satisfies Record<Uppercase<string>, string>
