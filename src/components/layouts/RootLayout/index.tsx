import { Footer } from "@features/Footer"
import { Header } from "@features/Header"

import styles from "./index.module.css"

import type { FcWithChildren } from "@shared/types/FcWithChildren"
import type { ReactNode } from "react"

type Props = {
  headerRightContentsElement?: ReactNode
}

export const RootLayout: FcWithChildren<Props> = (props) => {
  const { children, headerRightContentsElement } = props

  return (
    <div className={styles.root}>
      <Header className={styles.header} rightContentsElement={headerRightContentsElement} />

      <div className={styles.main}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  )
}
