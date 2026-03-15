import type { InputHTMLAttributes } from "react"

/**
 * 任意の `bind` プロパティを持つオブジェクト型を表すユーティリティ型です。
 *
 * この `bind` プロパティは主にReact Hook Form の `register` が返す props を
 * 入力要素へ渡す用途で使用されることを想定しています。
 * UI コンポーネントでは `register` の戻り値を `bind` として受け取り、
 * input などの要素へそのまま展開することでフォームと連携します。
 *
 * `bind` がオプショナルになっているのは、Storybook などでコンポーネントを
 * 単体表示する際に `useForm` を使用しないケースを想定しているためです。
 * その場合でもフォームバインディングなしでコンポーネントを表示できます。
 *
 * @template E `HTMLElement` を拡張する型。
 * `bind` プロパティが特定の HTML 要素に対応する属性型を持つことを保証します。
 *
 * @property {InputHTMLAttributes<E> | undefined} [bind]
 * 指定した HTML 要素の属性をバインドするためのオプションプロパティ。
 * 主に React Hook Form の `register` が返す props を渡す用途で使用されます。
 */
export type WithBind<E extends HTMLElement> = {
  bind?: InputHTMLAttributes<E> | undefined
}
