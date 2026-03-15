/**
 * オブジェクト型の特定のプロパティを必須プロパティに変換するユーティリティ型です。
 *
 * この型は、オブジェクト型 `O` とキーのユニオン型 `K` を受け取り、
 * `K` に含まれるプロパティを必須 (required) に変換します。
 * それ以外のプロパティは元の定義のまま変更されません。
 *
 * @template O - 元となるオブジェクト型。
 * @template K - 必須プロパティに変換する `O` のキー。
 */
export type ChangeToRequired<
  O extends Record<number | string | symbol, unknown>,
  K extends keyof O,
> = Omit<O, K> & Required<Pick<O, K>>
