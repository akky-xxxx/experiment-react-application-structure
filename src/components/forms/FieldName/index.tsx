import styles from "./index.module.css"

import type { FcWithChildren } from "@shared/types/FcWithChildren"

export const FieldName: FcWithChildren = (props) => {
  const { children } = props

  return <span className={styles.root}>{children}</span>
}
