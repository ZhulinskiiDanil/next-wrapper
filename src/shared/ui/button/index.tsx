import styles from './main.module.scss'
import clsx from 'clsx'

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
  const classNames = clsx({
    [styles.btn]: true,
    [String(className)]: true,
    [styles[`btn_${type}`]]: true,

    // Dynamic class names
    [styles.fill]: fill,
    [styles.hidden]: hidden
  })

  const button = createElement(semantic ? "button" : "div", {
    ...props, className: classNames
  }, children || content)

  if (link) {
    return <Link href={link}>
      { button }
    </Link>
  } else {
    return button
  }
}