import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "use-intl"

import { routing } from "../routing"
import { getMessages } from "./modules/getMessages"

import type { RequestConfig } from "next-intl/server"

export default getRequestConfig(async (context) => {
  const { requestLocale } = context
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: getMessages(locale),
  } satisfies RequestConfig
})
