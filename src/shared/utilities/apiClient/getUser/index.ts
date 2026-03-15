import { base } from "../base"

import type { User } from "@shared/domains/User"

// api を流用してユーザ情報を取得しているため、0に意図はない
const USER_INDEX = 0

export const getUser = async () => {
  const response = await base<User[]>("users")
  const maybeFirstUser = response?.at(USER_INDEX)

  if (maybeFirstUser === undefined) return null
  return maybeFirstUser
}
