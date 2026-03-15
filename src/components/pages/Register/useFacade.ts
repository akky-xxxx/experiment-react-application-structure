import { zodResolver } from "@hookform/resolvers/zod"
import { useWatch } from "react-hook-form"

import { useFormService } from "@shared/utilities/useForm.service"
import { useTranslationsService } from "@shared/utilities/usedTranslations.service"

import { getBinds } from "./modules/getBinds"
import { isValid } from "./modules/isValid"
import { RegisterSchema } from "./schemas/RegisterSchema"

import type { RegisterForm } from "./types/RegisterForm"
import type { FormHTMLAttributes } from "react"
import type { FieldPath, SubmitHandler } from "react-hook-form"

const handleSubmitMain: SubmitHandler<RegisterForm> = (data) => {
  // eslint-disable-next-line no-console
  console.log(data)
}

const REQUIRED_FIELD_NAMES: ReadonlyArray<FieldPath<RegisterForm>> = [
  "email",
  "names.firstName",
  "names.lastName",
]

export const useFacade = () => {
  const t = useTranslationsService()
  const { control, handleSubmit, register, getFieldState } = useFormService({
    resolver: zodResolver(RegisterSchema),
  })
  const validCount = useWatch({ control, name: REQUIRED_FIELD_NAMES })
    .filter(isValid(REQUIRED_FIELD_NAMES, getFieldState)).length
  const binds = getBinds(register)
  const handleSubmitHandler: FormHTMLAttributes<HTMLFormElement>["onSubmit"] = (event) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleSubmit(handleSubmitMain)(event)
  }

  return {
    binds,
    counts: {
      requiredCount: REQUIRED_FIELD_NAMES.length,
      validCount,
    },
    handleSubmitHandler,
    t,
  }
}
