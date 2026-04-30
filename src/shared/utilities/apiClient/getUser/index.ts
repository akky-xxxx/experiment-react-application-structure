import { base } from "../base"

import type { User } from "@shared/domains/User"

// id === 1 のユーザをログイン済みユーザと仮定した値
const DEFAULT_USER_ID = 1

type GetUser = (userId?: number) => Promise<User | null>

export const getUser: GetUser = async (userId = DEFAULT_USER_ID) => {
  const response = await base<User[]>("users")
  const maybeFirstUser = response?.find(({ id }) => id === userId)

  if (maybeFirstUser === undefined) return null
  return maybeFirstUser
}
