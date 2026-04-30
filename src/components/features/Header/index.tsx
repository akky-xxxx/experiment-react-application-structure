"use client"

import { clsx } from "clsx"

import { routes } from "@shared/utilities/routes"
import { useTranslationsService } from "@shared/utilities/usedTranslations.service"

import styles from "./index.module.css"
import { Link } from "../../../modules/i18n/navigation"

import type { FC, ReactNode } from "react"

type Props = {
  className?: string
  rightContentsElement?: ReactNode
}

export const Header: FC<Props> = (props) => {
  const { className, rightContentsElement } = props
  const rootClasses = clsx(styles.root, className)
  const t = useTranslationsService()

  return (
    <header className={rootClasses}>
      <p>
        <Link href={routes.home()}>{t("common.siteName")}</Link>
      </p>

      {rightContentsElement !== undefined && (
        <div>{rightContentsElement}</div>
      )}
    </header>
  )
}
