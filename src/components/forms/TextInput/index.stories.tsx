import { TextInput } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof TextInput>

export default {
  component: TextInput,
} satisfies Meta<typeof TextInput>

export const Default: ThisStory = {}
