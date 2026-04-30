import { getUser } from "@shared/utilities/apiClient"

type Props = {
  userId?: number
}

export const Author = async (props: Props) => {
  const { userId } = props
  const user = await getUser(userId)

  return user?.username ?? "---"
}
