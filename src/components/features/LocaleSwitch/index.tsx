"use client"

import { View } from "./View"
import { useFacade } from "./useFacade"

import type { FC } from "react"

export const LocaleSwitch: FC = () => {
  const props = useFacade()

  return <View {...props} />
}
