import { LocaleSwitch } from "@features/LocaleSwitch"
import { RootLayout } from "@layouts//RootLayout"

import type { FcWithChildren } from "@shared/types/FcWithChildren"

export const FocusedLayout: FcWithChildren = (props) => {
  const { children } = props

  return (
    <RootLayout headerRightContentsElement={<LocaleSwitch />}>
      {children}
    </RootLayout>
  )
}
