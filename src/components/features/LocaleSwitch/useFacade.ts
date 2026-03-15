import { useLocale } from "use-intl"

import { DEFAULT_LOCALE } from "@shared/domains/DEFAULT_LOCALE"
import { isValidLocale } from "@shared/utilities/isValidLocale"

import { usePathname, useRouter } from "../../../modules/i18n/navigation"

import type { Locale } from "@shared/domains/Locale"

const DISPLAY_LOCALES = [
  { isCurrent: false, label: "日本語", locale: "ja" },
  { isCurrent: false, label: "English", locale: "en" },
] as const satisfies Array<{
  isCurrent: boolean
  label: string
  locale: Locale
}>

export const useFacade = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const validLocale = isValidLocale(locale) ? locale : DEFAULT_LOCALE
  const displayLocales = DISPLAY_LOCALES.map((displayLocale) => {
    const isCurrent = displayLocale.locale === validLocale
    return { ...displayLocale, isCurrent }
  })
  const router = useRouter()

  return {
    displayLocales,
    pathname,
    router,
  }
}
