import styles from "./index.module.css"

import type { FC, ReactNode } from "react"

type Props = {
  descriptionElement: ReactNode
  fieldNameElement: ReactNode
  inputElement: ReactNode
  requirementElement: ReactNode
}

export const FieldSet: FC<Props> = (props) => {
  const {
    descriptionElement, fieldNameElement, inputElement, requirementElement,
  } = props

  return (
    <fieldset className={styles.root}>
      <header className={styles.header}>
        {fieldNameElement}
        {requirementElement}
      </header>

      {descriptionElement}

      {inputElement}
    </fieldset>
  )
}
