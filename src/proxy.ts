import { NextResponse, type NextRequest } from "next/server"
import createMiddleware from "next-intl/middleware"

import { handleStaticMaterials } from "./modules/handleStaticMaterials"
import { routing } from "./modules/i18n/routing"

const intl = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const url = req.nextUrl.clone()

  const resultForNext = handleStaticMaterials({
    pathname,
    regExp: /^\/[^/]+\/(?<directory>_next)\/(?<rest>.*)$/,
    url,
  })
  if (!resultForNext.isLeft) return NextResponse.rewrite(url)

  const resultForWellKnown = handleStaticMaterials({
    pathname,
    regExp: /^\/[^/]+\/(?<directory>\.well-known)\/(?<rest>.*)$/,
    url,
  })
  if (!resultForWellKnown.isLeft) return NextResponse.rewrite(url)

  return intl(req)
}

export const config = {
  matcher: String.raw`/((?!api|trpc|_next|_vercel|.*\..*).*)`,
}
