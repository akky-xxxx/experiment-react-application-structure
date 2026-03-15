import type { Resource } from "@shared/types/Resource"

const PAGE_NAMES = {
  EDIT: "編集",
  LIST: "一覧",
  REGISTER: "登録",
  TOP: "トップ",
} as const

export const JA = {
  common: {
    form: {
      requirement: {
        any: "任意",
        required: "必須",
      },
    },
    navigation: {
      edit: PAGE_NAMES.EDIT,
      list: PAGE_NAMES.LIST,
      register: PAGE_NAMES.REGISTER,
      top: PAGE_NAMES.TOP,
    },
    siteName: "テスト",
  },
  pages: {
    edit: {
      aside: {
        requirementCount: "必須項目入力数",
      },
      form: {
        description: {
          email: "メールアドレスを入力",
          name: "氏名を入力",
          note: "補足があれば入力",
        },
        label: {
          email: "メールアドレス",
          name: "氏名",
          note: "補足",
          submit: "確認",
        },
      },
      pageDescription: `${PAGE_NAMES.EDIT}ページディスプリプション`,
      pageTitle: PAGE_NAMES.EDIT,
    },
    list: {
      pageDescription: `${PAGE_NAMES.LIST}ページディスプリプション`,
      pageTitle: PAGE_NAMES.LIST,
    },
    register: {
      aside: {
        requirementCount: "必須項目入力数",
      },
      form: {
        description: {
          email: "メールアドレスを入力",
          name: "氏名を入力",
          note: "補足があれば入力",
        },
        label: {
          email: "メールアドレス",
          name: "氏名",
          note: "補足",
          submit: "確認",
        },
      },
      pageDescription: `${PAGE_NAMES.REGISTER}ページディスプリプション`,
      pageTitle: PAGE_NAMES.REGISTER,
    },
    top: {
      pageDescription: `${PAGE_NAMES.TOP}ページ用ページディスプリプション`,
      pageTitle: PAGE_NAMES.TOP,
    },
  },
} as const satisfies Resource
