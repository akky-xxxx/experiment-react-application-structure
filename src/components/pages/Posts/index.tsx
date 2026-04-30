import { Author } from "@features/Author"
import { MainLayout } from "@layouts/MainLayout"
import { routes } from "@shared/utilities/routes"
import { useTranslationsService } from "@shared/utilities/usedTranslations.service"
import { Heading1 } from "@ui/Heading1"

import { Link } from "../../../modules/i18n/navigation"

import type { Post } from "@shared/domains/Post"
import type { FC } from "react"

type Props = {
  posts: Array<Pick<Post, "id" | "title" | "userId">>
}

export const Posts: FC<Props> = (props) => {
  const t = useTranslationsService()
  const { posts } = props

  return (
    <MainLayout asideElement="{{asideElement for List page}}">
      <Heading1>{t("pages.list.pageTitle")}</Heading1>

      {posts.map((post) => {
        const { id, title, userId } = post

        return (
          <Link key={id} href={routes.postsDetail(id)}>
            <div style={{ padding: 10 }}>
              <span>{title}</span>
              {" "}
              @
              {" "}
              <span>
                <Author userId={userId} />
              </span>
            </div>
          </Link>
        )
      })}
    </MainLayout>
  )
}
