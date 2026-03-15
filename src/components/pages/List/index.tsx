import { MainLayout } from "@layouts/MainLayout"
import { useTranslationsService } from "@shared/utilities/usedTranslations.service"
import { Heading1 } from "@ui/Heading1"

import type { FC } from "react"

export const List: FC = () => {
  const t = useTranslationsService()

  return (
    <MainLayout asideElement="{{asideElement for List page}}">
      <Heading1>{t("pages.list.pageTitle")}</Heading1>
      <div style={{ padding: 50 }}>1</div>
      <div style={{ padding: 50 }}>2</div>
      <div style={{ padding: 50 }}>3</div>
      <div style={{ padding: 50 }}>4</div>
      <div style={{ padding: 50 }}>5</div>
      <div style={{ padding: 50 }}>6</div>
      <div style={{ padding: 50 }}>7</div>
      <div style={{ padding: 50 }}>8</div>
    </MainLayout>
  )
}
