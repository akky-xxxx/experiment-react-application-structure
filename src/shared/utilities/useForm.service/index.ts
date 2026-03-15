import { useForm } from "react-hook-form"

import type { ChangeToRequired } from "@shared/types/ChangeToRequired"
import type { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form"

/**
 * `useForm` フックを使用して、指定した動作・バリデーションロジック・
 * 変換設定で構成されたフォームインスタンスを初期化し返します。
 *
 * @template TFieldValues - `FieldValues` を拡張する任意のジェネリックで、フォームフィールドの構造を表します。
 * @template TContext - フォームに関連付けられるコンテキストオブジェクトを定義する任意のジェネリック。デフォルトは `any`。
 * @template TTransformedValues - フォームから返される変換後の値を表す任意のジェネリック。デフォルトは `TFieldValues`。
 *
 * @param {ChangeToRequired<UseFormProps<TFieldValues, TContext, TTransformedValues>, "resolver">} input
 * `resolver` プロパティを必須にした `UseFormProps` を拡張した設定オブジェクト。
 * このオブジェクトでは、バリデーションの挙動、デフォルト値、コンテキストなど、
 * フォームのさまざまな設定を定義します。
 *
 * @returns {UseFormReturn<TFieldValues, TContext, TTransformedValues>}
 * フォームインスタンスを操作するためのユーティリティ関数およびプロパティを含む
 * オブジェクトを返します。
 * 戻り値には、フォーム状態の管理、バリデーション処理、送信処理などのための
 * 各種メソッドが含まれます。
 */
export const useFormService = <
  TFieldValues extends FieldValues = FieldValues,
  // @typescript-eslint/no-explicit-any: useForm の型定義を踏襲してる
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any,
  TTransformedValues = TFieldValues,
>(
  input: ChangeToRequired<UseFormProps<TFieldValues, TContext, TTransformedValues>, "resolver">,
): UseFormReturn<
  TFieldValues, TContext, TTransformedValues
> => {
  const {
    mode = "onChange",
    reValidateMode = "onChange",
    ...restProps
  } = input

  return useForm<TFieldValues, TContext, TTransformedValues>({
    mode,
    reValidateMode,
    ...restProps,
  })
}
