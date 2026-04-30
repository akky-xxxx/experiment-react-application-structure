import { base } from "../base"

import type { Post } from "@shared/domains/Post"
import type { User } from "@shared/domains/User"

type GetPost = (postId: User["id"] | undefined) => Promise<Post | null>

export const getPost: GetPost = async (postId) => {
  const response = await base<Post[]>("posts")
  return response?.find(
    (post) => post.id === postId,
  ) ?? null
}
