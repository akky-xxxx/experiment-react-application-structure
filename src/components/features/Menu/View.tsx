import { routes } from "@shared/utilities/routes"

import styles from "./index.module.css"

import type { ComponentType, FC, ReactNode } from "react"

type LinkProps = {
  children: ReactNode
  href: string
}

type Props = {
  editLabel: string
  isLoggedIn: boolean
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Link: ComponentType<LinkProps>
  listLabel: string
  postsLabel: string
  registerLabel: string
}

export const View: FC<Props> = (props) => {
  const {
    Link,
    editLabel,
    isLoggedIn,
    listLabel,
    postsLabel,
    registerLabel,
  } = props

  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link href={routes.list()}>{listLabel}</Link>
        </li>
        <li>
          <Link href={routes.register()}>{registerLabel}</Link>
        </li>
        <li>
          <Link href={routes.edit()}>{editLabel}</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link href={routes.posts()}>{postsLabel}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
