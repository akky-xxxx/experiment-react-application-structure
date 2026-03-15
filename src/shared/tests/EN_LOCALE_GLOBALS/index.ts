import type { LOCALES } from "../../domains/LOCALES"

export const EN_LOCALE_GLOBALS = {
  globals: {
    locale: "en",
  },
} as const satisfies { globals: { locale: (typeof LOCALES)[number] } }
