// LOCALES を upcast しないと has に string を渡せないため
import { LOCALES } from "@shared/domains/LOCALES"

import { RESOURCES } from "./constants/RESOURCES"

import type { Locale } from "@shared/domains/Locale"

const isValidLocale = (locale: string): locale is Locale => new Set<string>(LOCALES).has(locale)

export const getMessages = (locale: string) => {
  const validLocale = isValidLocale(locale) ? locale : "en"

  return RESOURCES[validLocale]
}
