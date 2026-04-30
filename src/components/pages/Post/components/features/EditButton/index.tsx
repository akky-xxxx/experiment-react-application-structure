"use client"

import { useService } from "@shared/domains/serviceProvider"
import { routes } from "@shared/utilities/routes"
import { useTranslationsService } from "@shared/utilities/usedTranslations.service"

import { Link } from "../../../../../../modules/i18n/navigation"

import type { Post } from "@shared/domains/Post"
import type { FcWithChildren } from "@shared/types/FcWithChildren"

type Props = Pick<Post, "id" | "userId">

export const EditButton: FcWithChildren<Props> = (props) => {
  const { id, userId } = props
  const { user } = useService()
  const t = useTranslationsService()

  if (userId !== user?.id) return null

  return (
    <Link href={routes.postDetail(id)}>
      {t("pages.postDetail.editButtonLabel")}
    </Link>
  )
}
