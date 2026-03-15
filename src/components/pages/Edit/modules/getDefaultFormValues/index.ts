import type { RegisterForm } from "../../types/RegisterForm"
import type { User } from "@shared/domains/User"

type Input = {
  user: User | null
}
type Output = RegisterForm
type GetDefaultFormValues = (input: Input) => Output

// complexity: ロジックは入れず、 optional chaining, nullish coalescing で判定して初期値を返すだけ
// eslint-disable-next-line complexity
export const getDefaultFormValues: GetDefaultFormValues = (input) => {
  const { user } = input

  return {
    email: user?.address.zipcode ?? "",
    names: {
      firstName: user?.username ?? "",
      lastName: user?.name ?? "",
    },
  } satisfies RegisterForm
}
