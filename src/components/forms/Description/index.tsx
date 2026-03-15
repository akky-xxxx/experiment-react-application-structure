import styles from "./index.module.css"

import type { FcWithChildren } from "@shared/types/FcWithChildren"

export const Description: FcWithChildren = (props) => {
  const {
    children,
  } = props

  return (
    <p className={styles.root}>{children}</p>
  )
}
