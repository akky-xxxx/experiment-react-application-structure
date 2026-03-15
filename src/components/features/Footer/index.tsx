import { clsx } from "clsx"

import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  className?: string
}

export const Footer: FC<Props> = (props) => {
  const { className } = props
  const rootStyles = clsx(styles.root, className)

  return (
    <header className={rootStyles}>
      <span>Copyright</span>
    </header>
  )
}
