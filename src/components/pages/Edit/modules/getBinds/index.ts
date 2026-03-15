import type { RegisterForm } from "../../types/RegisterForm"
import type { UseFormRegister } from "react-hook-form"

export const getBinds = (register: UseFormRegister<RegisterForm>) => ({
  emailBind: register("email"),
  firstNameBind: register("names.firstName"),
  lastNameBind: register("names.lastName"),
  noteBind: register("note"),
})
