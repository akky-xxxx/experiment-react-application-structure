import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"

import { Register } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof Register>

export default {
  component: Register,
} satisfies Meta<typeof Register>

export const EnDefault: ThisStory = {
  ...EN_LOCALE_GLOBALS,
}

export const JaDefault: ThisStory = {
  ...JA_LOCALE_GLOBALS,
}
