type Input = Array<[Key: string, Value: string]>
const createQueryParameters = (...input: Input) => {
  const searchParameters = new URLSearchParams()
  input.forEach(([key, value]) => {
    searchParameters.set(key, value)
  })
  return searchParameters.toString()
}

type Routs = Record<string, (...args: any[]) => `/${string}`>

export const routes = {
  edit: () => "/edit",
  home: () => "/home",
  list: () => "/list",
  posts: () => "/posts",
  postsByAuthor: (
    authorId: number,
  ) => `/posts?${createQueryParameters(["authorId", authorId.toString()])}`,
  postsDetail: (postId: number) => (`/posts/${encodeURIComponent(postId)}`),
  register: () => "/register",
} as const satisfies Routs
