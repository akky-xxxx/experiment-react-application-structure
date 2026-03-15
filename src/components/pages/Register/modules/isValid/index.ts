import type { RegisterForm } from "../../types/RegisterForm"
import type { FieldPath, UseFormGetFieldState } from "react-hook-form"

export const isValid = <T extends RegisterForm>(
  names: ReadonlyArray<FieldPath<T>>,
  getFieldState: UseFormGetFieldState<T>,
) => (_: unknown, index: number) => {
  const maybeTargetFieldName = names.at(index)
  if (maybeTargetFieldName === undefined) return false
  // console.log(maybeTargetFieldName, getFieldState(maybeTargetFieldName))
  const { invalid, isTouched } = getFieldState(maybeTargetFieldName)
  return isTouched && !invalid
}
