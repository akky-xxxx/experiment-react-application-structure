import { DummyComponent } from "@shared/tests/DummyComponent"

import { Description } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof Description>

export default {
  component: Description,

  args: {
    children: <DummyComponent>children</DummyComponent>,
  },
} satisfies Meta<typeof Description>

export const Default: ThisStory = {}
