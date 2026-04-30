import { Suspense } from "react"

import { LocaleSwitch } from "@features/LocaleSwitch"
import { Menu } from "@features/Menu"
import { UserInformation } from "@layouts/FullSpecLayout/components/features/UserInformation"
import { RootLayout } from "@layouts/RootLayout"

import styles from "./index.module.css"

import type { FcWithChildren } from "@shared/types/FcWithChildren"

export const FullSpecLayout: FcWithChildren = (props) => {
  const { children } = props

  return (
    <RootLayout
      headerRightContentsElement={(
        <div className={styles.headerRightContentsElementWrapper}>
          <LocaleSwitch />

          <Suspense>
            <Menu />
          </Suspense>

          <UserInformation />
        </div>
      )}
    >
      {children}
    </RootLayout>
  )
}
