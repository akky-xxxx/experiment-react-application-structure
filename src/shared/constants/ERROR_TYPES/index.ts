/**
 * バリデーションや処理時のエラー種別を定義するオブジェクトです。
 *
 * 各キーはエラーカテゴリを表す大文字の文字列で、
 * 値は具体的なエラー種別を示す文字列識別子です。
 *
 * この構造は厳密に型付けされており、
 * すべてのキーが大文字の文字列であること、
 * 値が文字列であることを保証します。
 *
 * プロパティ:
 * - CUSTOM: カスタムエラーを表します。
 * - INVALID_FORMAT: 入力値のフォーマットが不正であることを示します。
 * - INVALID_VALUE: 入力された値が許可されていない、または不正であることを示します。
 * - TOO_SMALL: 値が許容される最小値より小さいことを示します。
 */
export const ERROR_TYPES = {
  CUSTOM: "custom",
  INVALID_FORMAT: "invalid_format",
  INVALID_VALUE: "invalid_value",
  TOO_SMALL: "too_small",
} as const satisfies Record<Uppercase<string>, string>
