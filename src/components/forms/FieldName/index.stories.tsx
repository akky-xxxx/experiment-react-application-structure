import { DummyComponent } from "@shared/tests/DummyComponent"
import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"
import { ON_NEXT_APP_DIRECTORY } from "@shared/tests/ON_NEXT_APP_DIRECTORY"

import { FieldName } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof FieldName>

export default {
  component: FieldName,

  args: {
    children: (
      <DummyComponent>
        children
      </DummyComponent>
    ),
  },
} satisfies Meta<typeof FieldName>

export const EnDefault: ThisStory = {
  ...EN_LOCALE_GLOBALS,
  ...ON_NEXT_APP_DIRECTORY,
}

export const JaDefault: ThisStory = {
  ...JA_LOCALE_GLOBALS,
  ...ON_NEXT_APP_DIRECTORY,
}
