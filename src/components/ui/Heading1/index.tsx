import styles from "./index.module.css"

import type { FcWithChildren } from "@shared/types/FcWithChildren"

export const Heading1: FcWithChildren = (props) => {
  const { children } = props

  return <h1 className={styles.root}>{children}</h1>
}
