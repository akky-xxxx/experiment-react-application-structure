import type { Resource } from "@shared/types/Resource"
import type { ConvertToDotPaths } from "@shared/types/ResourceDotPaths/types/ConvertToDotPaths"

/**
 * `Resource` 型のネストされたプロパティ構造を、
 * ドット区切りの文字列パスへ変換した型を表します。
 *
 * この型は、ネストされたプロパティを
 * `"a.b.c"` のようなドット区切りのパス文字列として扱いたい場合に使用します。
 * 例えば、翻訳キーや設定キーのように、ネストされた構造を
 * 文字列で参照するケースで役立ちます。
 *
 * 内部では `ConvertToDotPaths` ユーティリティ型を利用し、
 * `Resource` 型に存在するすべてのプロパティパスを
 * ユニオン型の文字列リテラルとして生成します。
 *
 * 例:
 * `Resource` が次のような構造の場合
 *
 * {
 *   a: {
 *     b: {
 *       c: string;
 *     };
 *   };
 *   d: number;
 * }
 *
 * `ResourceDotPaths` は次の型になります
 *
 * "a.b.c" | "d"
 *
 * これにより、`Resource` のネストされたプロパティを
 * 型安全な文字列キーとして参照することが可能になります。
 */
export type ResourceDotPaths = ConvertToDotPaths<Resource>
