import styles from "./index.module.css"
import { useFacade } from "./useFacade"

import type { FC } from "react"

type Props = {
  requiredCount: number
  validCount: number
}

export const RemainingCount: FC<Props> = (props) => {
  const { requiredCount, validCount } = props
  const { t } = useFacade()

  return (
    <div className={styles.root}>
      <div>{t("pages.register.aside.requirementCount")}</div>

      <progress className={styles.progress} max={requiredCount} value={validCount} />

      <div>
        {validCount}
        /
        {requiredCount}
      </div>
    </div>
  )
}
