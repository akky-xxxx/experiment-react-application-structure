import { getTypedTranslations } from "@shared/utilities/getTypedTranslations"

import type { Metadata } from "next"

export { Edit as default } from "../../../../components/pages/Edit"

type Props = {
  params: Promise<{ locale: string }>
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const { locale } = (await params)
  const t = await getTypedTranslations({ locale })
  const title = [t("common.siteName"), t("pages.edit.pageTitle")].join(" / ")
  const description = [t("common.siteName"), t("pages.edit.pageDescription")].join(". ")

  return {
    description,
    title,
  }
}
