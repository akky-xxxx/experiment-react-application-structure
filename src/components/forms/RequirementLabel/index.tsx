import { clsx } from "clsx"

import { useTranslationsService } from "@shared/utilities/usedTranslations.service"

import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  isRequired: boolean
}

export const RequirementLabel: FC<Props> = (props) => {
  const { isRequired } = props
  const t = useTranslationsService()

  if (isRequired) return <span className={clsx(styles.base, styles.required)}>{t("common.form.requirement.required")}</span>

  return <span className={clsx(styles.base, styles.any)}>{t("common.form.requirement.any")}</span>
}
