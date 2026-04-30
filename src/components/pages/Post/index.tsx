import { Author } from "@features/Author"
import { MainLayout } from "@layouts/MainLayout"
import { routes } from "@shared/utilities/routes"
import { Heading1 } from "@ui/Heading1"

import { EditButton } from "./components/features/EditButton"
import { Link } from "../../../modules/i18n/navigation"

import type { Post as PostRecord } from "@shared/domains/Post"
import type { FC } from "react"

type Props = {
  post: PostRecord
}

export const Post: FC<Props> = (props) => {
  const {
    post: { body, title, userId, id },
  } = props

  return (
    <MainLayout asideElement="{{asideElement for List page}}">
      <Heading1>{title}</Heading1>

      <p>
        <span>author:</span>
        <Link href={routes.postsByAuthor(userId)}>
          <Author userId={userId} />
        </Link>
        <EditButton id={id} userId={userId} />
        <span>
        </span>
      </p>
      <hr />
      <div>{body}</div>
    </MainLayout>
  )
}
