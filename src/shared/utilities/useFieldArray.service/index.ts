import { useFieldArray } from "react-hook-form"

import type { ChangeToRequired } from "@shared/types/ChangeToRequired"
import type { FieldArrayPath, FieldValues, UseFieldArrayProps, UseFieldArrayReturn } from "react-hook-form"

/**
 * React Hook Form を使用してフォーム内のフィールド配列を管理するための
 * ユーティリティメソッドおよびプロパティを提供するフックサービス関数です。
 * この関数は、配列ベースの入力フィールドの操作・追加・削除・更新を簡単にし、
 * バリデーションおよび状態管理が適切に維持されるようにします。
 *
 * @template TFieldValues - フォームのフィールド値の型を表します。デフォルトは `FieldValues`。
 * @template TFieldArrayName - フォーム内のフィールド配列の名前を指定します。デフォルトは `FieldArrayPath<TFieldValues>`。
 * @template TKeyName - フィールド配列内の各要素を一意に識別するためのキー名を定義します。デフォルトは `"id"`。
 * @template TTransformedValues - フィールド配列の変換後の値の型を表します。デフォルトは `TFieldValues`。
 *
 * @param {ChangeToRequired<UseFieldArrayProps<TFieldValues, TFieldArrayName, TKeyName, TTransformedValues>, "control">} input
 * フィールド配列を設定するために必要な設定オブジェクトです。
 * `control` プロパティは必須であり、React Hook Form の `useFieldArray` 機能と
 * 正しく連携するために必ず渡す必要があります。
 *
 * @returns {UseFieldArrayReturn<TFieldValues, TFieldArrayName, TKeyName>}
 * フィールド配列を動的に管理するためのメソッドおよびプロパティを含むオブジェクトを返します。
 * これには、フィールド値の追加（append）、削除（remove）、挿入（insert）、
 * 更新（update）、並び替え（swap）などの操作が含まれます。
 * また、配列内アイテムに関するメタデータも含まれます。
 */
export const useFieldArrayService = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
  TKeyName extends string = "id", TTransformedValues = TFieldValues,
>(input: ChangeToRequired<UseFieldArrayProps<
  TFieldValues, TFieldArrayName, TKeyName, TTransformedValues
>, "control">): UseFieldArrayReturn<TFieldValues, TFieldArrayName, TKeyName> => useFieldArray(input)
