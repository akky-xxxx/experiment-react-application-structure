import { TextInput } from "../../../../../forms/TextInput"

import type { FC, HTMLAttributes } from "react"

type Props = {
  firstNameBind?: HTMLAttributes<HTMLInputElement>
  lastNameBind?: HTMLAttributes<HTMLInputElement>
}

export const NamesInput: FC<Props> = (props) => {
  const { firstNameBind, lastNameBind } = props

  return (
    <div>
      <TextInput bind={firstNameBind} />
      <TextInput bind={lastNameBind} />
    </div>
  )
}
