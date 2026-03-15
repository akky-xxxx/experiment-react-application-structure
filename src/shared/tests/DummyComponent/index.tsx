import styles from "./index.module.css"

import type { CSSProperties, FC, PropsWithChildren } from "react"

type Props = {
  style?: CSSProperties
}

/**
 * storybook の element props にわたす用
 */
export const DummyComponent: FC<PropsWithChildren<Props>> = (props) => {
  const { children, style } = props

  return (
    <span className={styles.root} style={style}>
      {"{{"}
      {children}
      {"}}"}
    </span>
  )
}
