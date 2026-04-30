import { View } from "@features/Menu/View"
import { getUser } from "@shared/utilities/apiClient"
import { getTypedTranslations } from "@shared/utilities/getTypedTranslations"

import { Link } from "../../../modules/i18n/navigation"

import type { ComponentProps } from "react"

export const Menu = async () => {
  const t = await getTypedTranslations()
  const user = await getUser()
  const props = {
    Link,
    editLabel: t("common.navigation.edit"),
    isLoggedIn: user !== null,
    listLabel: t("common.navigation.list"),
    postsLabel: t("common.navigation.posts"),
    registerLabel: t("common.navigation.register"),
  } as const satisfies ComponentProps<typeof View>

  return <View {...props} />
}
