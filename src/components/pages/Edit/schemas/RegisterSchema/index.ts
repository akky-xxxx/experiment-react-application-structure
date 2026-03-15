import * as z from "zod/mini"

const MIN_STRING_LENGTH = 1

export const RegisterSchema = z.object({
  email: z.string().check(z.minLength(MIN_STRING_LENGTH)),
  names: z.object({
    firstName: z.string().check(z.minLength(MIN_STRING_LENGTH)),
    lastName: z.string().check(z.minLength(MIN_STRING_LENGTH)),
  }),
  note: z.optional(z.string()),
})
