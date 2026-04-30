import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  href: string
}

/**
 * storybook で next-intl/navigation.Link の変わりに注入
 * @param props
 * @constructor
 */
export const DummyLink = (props: Props) => {
  const { children, ...linkProps } = props

  return <a {...linkProps}>{children}</a>
}
