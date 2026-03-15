import { DummyComponent } from "@shared/tests/DummyComponent"
import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"
import { ON_NEXT_APP_DIRECTORY } from "@shared/tests/ON_NEXT_APP_DIRECTORY"

import { FieldSet } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof FieldSet>

export default {
  component: FieldSet,

  args: {
    descriptionElement: <DummyComponent>descriptionElement</DummyComponent>,
    fieldNameElement: <DummyComponent>fieldNameElement</DummyComponent>,
    inputElement: <DummyComponent>inputElement</DummyComponent>,
    requirementElement: <DummyComponent>requirementElement</DummyComponent>,
  },
} satisfies Meta<typeof FieldSet>

export const EnDefault: ThisStory = {
  ...EN_LOCALE_GLOBALS,
  ...ON_NEXT_APP_DIRECTORY,
}

export const JaDefault: ThisStory = {
  ...JA_LOCALE_GLOBALS,
  ...ON_NEXT_APP_DIRECTORY,
}
