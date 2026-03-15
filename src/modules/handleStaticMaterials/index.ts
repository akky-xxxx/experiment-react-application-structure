/* eslint complexity: ["error", 10] */

import type { NextURL } from "next/dist/server/web/next-url"

type Input = {
  pathname: string
  regExp: RegExp
  url: NextURL
}
type OutputOfRight = {
  isLeft: false
}
type OutputOfLeft = {
  isLeft: true
}
type Output = OutputOfLeft | OutputOfRight
type HandleStaticMaterials = (input: Input) => Output

const RETURN_OF_RIGHT = { isLeft: false } as const satisfies OutputOfRight
const RETURN_OF_LEFT = { isLeft: true } as const satisfies OutputOfLeft

/**
 * middleware で使う、特定のディレクトリの資材を locale 配下にリダイレクトさせないための処理
 * @param input
 */
export const handleStaticMaterials: HandleStaticMaterials = (input) => {
  const { pathname, regExp, url } = input
  const matched = regExp.exec(pathname)

  if (!matched) return RETURN_OF_LEFT

  const rest = matched.groups?.["rest"]
  const directory = matched.groups?.["directory"]

  if (rest === undefined || directory === undefined) return RETURN_OF_LEFT

  url.pathname = `/${directory}/${rest}`
  return RETURN_OF_RIGHT
}
