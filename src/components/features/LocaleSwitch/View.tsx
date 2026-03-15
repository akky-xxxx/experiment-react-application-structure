"use client"

import styles from "./index.module.css"

import type { useFacade } from "./useFacade"
import type { FC } from "react"

type Props = ReturnType<typeof useFacade>

export const View: FC<Props> = (props) => {
  const {
    displayLocales,
    pathname,
    router,
  } = props

  return (
    <ul className={styles.root}>
      {displayLocales.map((displayLocale) => {
        const { isCurrent, label, locale: thisLocale } = displayLocale
        const handleClick = () => {
          router.replace(pathname, { locale: thisLocale })
        }
        const inner = isCurrent
          ? label
          : (<button className={styles.button} onClick={handleClick}>{label}</button>)

        return (
          <li key={thisLocale} className={styles.listItem}>
            {inner}
          </li>
        )
      })}
    </ul>
  )
}
