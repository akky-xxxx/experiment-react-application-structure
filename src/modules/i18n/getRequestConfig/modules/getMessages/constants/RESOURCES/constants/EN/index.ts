import type { Resource } from "@shared/types/Resource"

const PAGE_NAMES = {
  EDIT: "Edit",
  LIST: "List",
  POSTS: "Posts",
  REGISTER: "Register",
  TOP: "Top",
} as const

export const EN = {
  common: {
    form: {
      requirement: {
        any: "Any",
        required: "Required",
      },
    },
    navigation: {
      edit: PAGE_NAMES.EDIT,
      list: PAGE_NAMES.LIST,
      posts: PAGE_NAMES.POSTS,
      register: PAGE_NAMES.REGISTER,
      top: PAGE_NAMES.TOP,
    },
    siteName: "Test",
  },
  pages: {
    edit: {
      aside: {
        requirementCount: "Requirement remaining count",
      },
      form: {
        description: {
          email: "Input the mail address",
          name: "Input the name",
          note: "Input the note when exist",
        },
        label: {
          email: "Mail",
          name: "Name",
          note: "Note",
          submit: "Confirm",
        },
      },
      pageDescription: `pageDescription for ${PAGE_NAMES.EDIT}`,
      pageTitle: PAGE_NAMES.EDIT,
    },
    list: {
      pageDescription: `pageDescription for ${PAGE_NAMES.LIST}`,
      pageTitle: PAGE_NAMES.LIST,
    },
    posts: {
      pageDescription: `pageDescription for ${PAGE_NAMES.POSTS}`,
      pageTitle: PAGE_NAMES.POSTS,
    },
    register: {
      aside: {
        requirementCount: "Requirement remaining count",
      },
      form: {
        description: {
          email: "Input the mail address",
          name: "Input the name",
          note: "Input the note when exist",
        },
        label: {
          email: "Mail",
          name: "Name",
          note: "Note",
          submit: "Confirm",
        },
      },
      pageDescription: `pageDescription for ${PAGE_NAMES.REGISTER}`,
      pageTitle: PAGE_NAMES.REGISTER,
    },
    top: {
      pageDescription: `pageDescription for ${PAGE_NAMES.TOP}`,
      pageTitle: PAGE_NAMES.TOP,
    },
  },
} as const satisfies Resource
