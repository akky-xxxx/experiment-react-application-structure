import { base } from "../base"

import type { Post } from "@shared/domains/Post"
import type { User } from "@shared/domains/User"

const EMPTY_ARRAY_LENGTH = 0

type GetPosts = (userId: User["id"] | undefined) => Promise<Post[]>

export const getPosts: GetPosts = async (userId) => {
  const allRecords = await base<Post[]>("posts")
  const targetRecords = allRecords?.filter(
    (post) => post.userId === userId,
  ) ?? []
  if (targetRecords.length === EMPTY_ARRAY_LENGTH) return allRecords ?? []
  return targetRecords
}
