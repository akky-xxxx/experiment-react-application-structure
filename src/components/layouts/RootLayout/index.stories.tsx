import { DummyComponent } from "@shared/tests/DummyComponent"
import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"

import { RootLayout } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof RootLayout>

export default {
  component: RootLayout,

  args: {
    children: (
      <div>
        {Array.from({ length: 10 }, (_, index) => (
          <DummyComponent key={index} style={{ padding: 100 }}>
            children
            {index}
          </DummyComponent>
        ))}
      </div>
    ),
  },
} satisfies Meta<typeof RootLayout>

export const EnDefault: ThisStory = {
  ...EN_LOCALE_GLOBALS,
}

export const JaDefault: ThisStory = {
  ...JA_LOCALE_GLOBALS,
}
