import styles from "./index.module.css"

import type { WithBind } from "@shared/types/WithBind"
import type { FC } from "react"

type Props = WithBind<HTMLInputElement> & {
  placeholder?: string
}

export const TextInput: FC<Props> = (props) => {
  const { bind, placeholder } = props

  return <input {...bind} placeholder={placeholder} className={styles.root} type="text" />
}
