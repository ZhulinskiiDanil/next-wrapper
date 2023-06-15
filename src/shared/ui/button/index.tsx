import styles from './main.module.scss'

// Types
import { ReactNode, createElement } from 'react'

// Compoennts
import Link from 'next/link'

type ButtonType = "default" | "primary" | "white"

interface IButton {
  children?: ReactNode
  content?: ReactNode | string
  semantic?: boolean
  className?: string
  link?: string
  type?: ButtonType
  fill?: boolean
  hidden?: boolean
  [key: string]: any
}

export function Button({
  children, content, link, type, fill, hidden,
  className, semantic = true, ...props
}: IButton) {
  const button = createElement(semantic ? "button" : "div", {
    ...props,
    className: [
      styles.btn,
      String(className),
      styles[String(`btn_` + type)],
      fill && styles.fill,
      hidden && styles.hidden
    ].join(" ")
  }, children || content)

  if (link) {
    return <Link href={link}>
      { button }
    </Link>
  } else {
    return button
  }
}