import { defineRouting } from "next-intl/routing"

import { DEFAULT_LOCALE } from "@shared/domains/DEFAULT_LOCALE"

import type { Locale } from "@shared/domains/Locale"

const LOCALES = Object.keys(
  {
    en: undefined,
    ja: undefined,
  } as const satisfies Record<Locale, undefined>,
)

export const routing = defineRouting({
  defaultLocale: DEFAULT_LOCALE,
  locales: LOCALES,
})
