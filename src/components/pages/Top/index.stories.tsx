import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"

import { Top } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof Top>

export default {
  component: Top,
} satisfies Meta<typeof Top>

export const EnDefault: ThisStory = {
  ...EN_LOCALE_GLOBALS,
}

export const JaDefault: ThisStory = {
  ...JA_LOCALE_GLOBALS,
}
