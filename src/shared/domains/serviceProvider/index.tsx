"use client"

import { createContext, useContext } from "react"

import type { User } from "@shared/domains/User"
import type { FcWithChildren } from "@shared/types/FcWithChildren"

type Service = {
  user: User | null
}

const Provider = createContext<Service>({
  user: null,
})

type Props = {
  service: Service
}

export const ServiceProvider: FcWithChildren<Props> = (props) => {
  const { children, service } = props

  return (
    <Provider value={service}>{children}</Provider>
  )
}

export const useService = () => useContext(Provider)
