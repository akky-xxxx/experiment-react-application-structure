import type { RegisterSchema } from "../../schemas/RegisterSchema"
import type * as z from "zod/mini"

export type RegisterForm = z.output<typeof RegisterSchema>
