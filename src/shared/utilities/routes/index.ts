import { createQueryParameters } from "./modules/createQueryParameters"

type Routs = Record<string, (...args: any[]) => `/${string}`>

export const routes = {
  edit: () => "/edit",
  home: () => "/home",
  list: () => "/list",
  postDetail: (articleId: number) => `/posts/${articleId.toString()}/edit`,
  posts: () => "/posts",
  postsByAuthor: (
    authorId: number,
  ) => `/posts?${createQueryParameters(["authorId", authorId.toString()])}`,
  postsDetail: (postId: number) => (`/posts/${encodeURIComponent(postId)}`),
  register: () => "/register",
} as const satisfies Routs
