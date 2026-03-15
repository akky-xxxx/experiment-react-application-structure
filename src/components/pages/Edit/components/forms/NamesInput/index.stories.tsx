import { NamesInput } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof NamesInput>

export default {
  component: NamesInput,
} satisfies Meta<typeof NamesInput>

export const Default: ThisStory = {}
