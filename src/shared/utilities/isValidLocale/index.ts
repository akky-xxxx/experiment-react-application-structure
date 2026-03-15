import { LOCALES } from "../../domains/LOCALES"

import type { Locale } from "../../domains/Locale"

const localeSet = new Set<string>(LOCALES)

export const isValidLocale = (locale: string): locale is Locale => localeSet.has(locale)
