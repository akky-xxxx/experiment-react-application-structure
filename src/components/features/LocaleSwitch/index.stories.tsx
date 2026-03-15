import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"

import { View } from "./View"

import type { Locale } from "@shared/domains/Locale"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof View>
type DisplayLocales = Array<{
  isCurrent: boolean
  label: string
  locale: Locale
}>

export default {
  component: View,
} satisfies Meta<typeof View>

export const EnDefault: ThisStory = {
  ...EN_LOCALE_GLOBALS,
  args: {
    displayLocales: [
      { isCurrent: false, label: "日本語", locale: "ja" },
      { isCurrent: true, label: "English", locale: "en" },
    ] as const satisfies DisplayLocales,
  },
}

export const JaDefault: ThisStory = {
  ...JA_LOCALE_GLOBALS,
  args: {
    displayLocales: [
      { isCurrent: true, label: "日本語", locale: "ja" },
      { isCurrent: false, label: "English", locale: "en" },
    ] as const satisfies DisplayLocales,
  },
}
