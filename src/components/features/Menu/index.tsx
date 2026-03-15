import { useTranslationsService } from "@shared/utilities/usedTranslations.service"

import styles from "./index.module.css"
import { Link } from "../../../modules/i18n/navigation"

export const Menu = () => {
  const t = useTranslationsService()

  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link href="/list">{t("common.navigation.list")}</Link>
        </li>
        <li>
          <Link href="/register">{t("common.navigation.register")}</Link>
        </li>
        <li>
          <Link href="/edit">{t("common.navigation.edit")}</Link>
        </li>
      </ul>
    </nav>
  )
}
