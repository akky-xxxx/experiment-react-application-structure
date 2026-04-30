import { DummyLink } from "@shared/tests/DummyLink"

import { View } from "./View"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

type ThisStory = StoryObj<typeof View>

export default {
  component: View,

  args: {
    Link: DummyLink,
    editLabel: "{{common.navigation.edit}}",
    listLabel: "{{common.navigation.list}}",
    postsLabel: "{{common.navigation.posts}}",
    registerLabel: "{{common.navigation.register}}",
  },
} satisfies Meta<typeof View>

export const NotLoggedIn: ThisStory = {
  args: {
    isLoggedIn: false,
  },
}

export const LoggedIn: ThisStory = {
  args: {
    isLoggedIn: true,
  },
}
