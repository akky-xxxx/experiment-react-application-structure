import { clsx } from "clsx"

import styles from "./index.module.css"

import type { FcWithChildren } from "@shared/types/FcWithChildren"
import type { ReactNode } from "react"

type Props = {
  asideElement?: ReactNode
}

export const MainLayout: FcWithChildren<Props> = (props) => {
  const { asideElement, children } = props
  const hasAside = asideElement !== undefined
  const rootClasses = clsx(styles.root, hasAside && styles.rootTwoColumn)

  return (
    <div className={rootClasses}>
      <main className={styles.main}>{children}</main>

      {hasAside && (
        <div className={styles.asideElementWrapper}>{asideElement}</div>
      )}
    </div>
  )
}
