import { EN } from "./constants/EN"
import { JA } from "./constants/JA"

import type { Locale } from "@shared/domains/Locale"
import type { Resource } from "@shared/types/Resource"

export const RESOURCES = {
  en: EN,
  ja: JA,
} as const satisfies Record<Locale, Resource>
