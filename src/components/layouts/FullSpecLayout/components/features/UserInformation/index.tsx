"use client"

import { useService } from "@shared/domains/serviceProvider"

import type { FC } from "react"

export const UserInformation: FC = () => {
  const { user } = useService()
  const displayName = user?.username ?? "---"

  return (
    <div>
      logged in by
      {" "}
      {displayName}
    </div>
  )
}
