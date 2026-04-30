import type { Register } from "@shared/types/Resource/Register"

type PageCommon = {
  pageDescription: string
  pageTitle: string
}

/**
 * Web アプリケーションで使用するリソース文字列をまとめた構造化オブジェクトを表します。
 *
 * この型には、ラベル、エラーメッセージ、ページタイトル、フォーム関連の文言など、
 * アプリケーション内で使用されるテキストリソースが含まれます。
 *
 * リソースは、アプリケーション全体で共通して使用されるものと、
 * 特定のページで使用されるものに分けて構成されています。
 */
export type Resource = {
  common: {
    form: {
      requirement: {
        any: string
        required: string
      }
    }
    navigation: {
      edit: string
      list: string
      posts: string
      register: string
      top: string
    }
    siteName: string
  }
  pages: {
    edit: PageCommon & Register
    list: PageCommon
    posts: PageCommon
    register: PageCommon & Register
    top: PageCommon
  }
}
