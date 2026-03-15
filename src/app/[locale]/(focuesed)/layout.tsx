import { FocusedLayout } from "@layouts/FocusedLayout"

import type { FC, PropsWithChildren } from "react"

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <FocusedLayout>
      {children}
    </FocusedLayout>
  )
}

export default Layout
