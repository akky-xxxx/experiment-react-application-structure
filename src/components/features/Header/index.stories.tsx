import { DummyComponent } from "@shared/tests/DummyComponent"
import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"

import { Header } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof Header>

export default {
  component: Header,
} satisfies Meta<typeof Header>

export const EnHasRightContents: ThisStory = {
  ...EN_LOCALE_GLOBALS,
}

export const JaHasRightContents: ThisStory = {
  ...JA_LOCALE_GLOBALS,
}

export const EnNotHasRightContents: ThisStory = {
  ...EN_LOCALE_GLOBALS,
  args: {
    rightContentsElement: <DummyComponent>rightContentsElement</DummyComponent>,
  },
}

export const JaNotHasRightContents: ThisStory = {
  ...JA_LOCALE_GLOBALS,
  args: {
    rightContentsElement: <DummyComponent>rightContentsElement</DummyComponent>,
  },
}
