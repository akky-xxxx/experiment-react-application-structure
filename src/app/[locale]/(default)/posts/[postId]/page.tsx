import { notFound } from "next/navigation"

import { getPost } from "@shared/utilities/apiClient/getPost"
import { getTypedTranslations } from "@shared/utilities/getTypedTranslations"

import { Post } from "../../../../../components/pages/Post"

import type { Metadata } from "next"

type Props = {
  params: Promise<{ locale: string, postId: string }>
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const { locale, postId } = (await params)
  const t = await getTypedTranslations({ locale })
  const postTitleResult = await getPost(Number(postId))
  const postTitle = postTitleResult?.title ?? ""
  const title = [t("common.siteName"), postTitle].join(" / ")
  const description = [t("common.siteName"), postTitle].join(". ")

  return {
    description,
    title,
  }
}

const Page = async (props: Props) => {
  const { params } = props

  const { postId } = await params
  const post = await getPost(Number(postId))
  if (post === null) notFound()

  return <Post post={post} />
}

export default Page
