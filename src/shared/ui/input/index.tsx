import styles from './main.module.scss'

// Types
import { ReactNode } from 'react'

type InputType = "default" | "primary" | "white"

interface IInput {
  children?: ReactNode
  value?: string
  placeholder?: string
  className?: string
  type?: InputType
  fill?: boolean
  hidden?: boolean
  [key: string]: any
}

export function Input({
  children, type, fill, hidden,
  className, ...props
}: IInput) {
  return <input
    {...props}
    className={[
      styles.btn,
      String(className),
      styles[String(`btn_` + type)],
      fill && styles.fill,
      hidden && styles.hidden
    ].join(" ")}
  />
}