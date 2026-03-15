import { Divider } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof Divider>

export default {
  component: Divider,
} satisfies Meta<typeof Divider>

export const Default: ThisStory = {}
