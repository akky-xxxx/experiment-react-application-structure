import { RequirementLabel } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof RequirementLabel>

export default {
  component: RequirementLabel,
} satisfies Meta<typeof RequirementLabel>

export const Required: ThisStory = {
  args: {
    isRequired: true,
  },
}

export const Any: ThisStory = {}
