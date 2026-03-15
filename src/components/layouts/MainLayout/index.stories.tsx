import { DummyComponent } from "@shared/tests/DummyComponent"
import { EN_LOCALE_GLOBALS } from "@shared/tests/EN_LOCALE_GLOBALS"
import { JA_LOCALE_GLOBALS } from "@shared/tests/JA_LOCALE_GLOBALS"

import { MainLayout } from "./index"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof MainLayout>

export default {
  component: MainLayout,

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
} satisfies Meta<typeof MainLayout>

export const EnNotHasAside: ThisStory = {
  ...EN_LOCALE_GLOBALS,
}

export const JaNotHasAside: ThisStory = {
  ...JA_LOCALE_GLOBALS,
}

export const EnHasAside: ThisStory = {
  ...EN_LOCALE_GLOBALS,
  args: {
    asideElement: <DummyComponent>asideElement</DummyComponent>,
  },
}

export const JaHasAside: ThisStory = {
  ...JA_LOCALE_GLOBALS,
  args: {
    asideElement: <DummyComponent>asideElement</DummyComponent>,
  },
}
