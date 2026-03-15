import { FullSpecLayout } from "@layouts/FullSpecLayout"

import type { FC, PropsWithChildren } from "react"

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return (
    <FullSpecLayout>
      {children}
    </FullSpecLayout>
  )
}

export default Layout
