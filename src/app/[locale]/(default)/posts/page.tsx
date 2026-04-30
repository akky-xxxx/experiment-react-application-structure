import { getPosts } from "@shared/utilities/apiClient/getPosts"
import { getTypedTranslations } from "@shared/utilities/getTypedTranslations"

import { Posts } from "../../../../components/pages/Posts"

import type { Metadata } from "next"

type Props = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ authorId: string }>
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const { locale } = (await params)
  const t = await getTypedTranslations({ locale })
  const title = [t("common.siteName"), t("pages.posts.pageTitle")].join(" / ")
  const description = [t("common.siteName"), t("pages.posts.pageDescription")].join(". ")

  return {
    description,
    title,
  }
}

const Page = async (props: Props) => {
  const { searchParams } = props
  const searchParameters = await searchParams
  const authorId = searchParameters?.authorId
  const posts = await getPosts(typeof authorId === "string" ? Number(authorId) : undefined)
  const postsForPage = posts.map((post) => {
    const { id, title, userId } = post
    return { id, title, userId }
  })

  return <Posts posts={postsForPage} />
}

export default Page
