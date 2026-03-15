import type { FC, PropsWithChildren } from "react"

export type FcWithChildren<P = Record<number | string | symbol, unknown>> = FC<PropsWithChildren<P>>
