import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"
import { ON_NEXT_APP_DIRECTORY } from "@shared/tests/ON_NEXT_APP_DIRECTORY"

import { RemainingCount } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof RemainingCount>

export default {
  component: RemainingCount,

  args: {
    requiredCount: 10,
    validCount: 1,
  },
} satisfies Meta<typeof RemainingCount>

export const EnDefault: ThisStory = {
  ...EN_LOCALE_GLOBALS,
  ...ON_NEXT_APP_DIRECTORY,
}

export const JaDefault: ThisStory = {
  ...JA_LOCALE_GLOBALS,
  ...ON_NEXT_APP_DIRECTORY,
}
