import type { LOCALES } from "../../domains/LOCALES"

export const JA_LOCALE_GLOBALS = {
  globals: {
    locale: "ja",
  },
} as const satisfies { globals: { locale: (typeof LOCALES)[number] } }
