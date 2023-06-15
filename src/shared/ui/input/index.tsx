import styles from './main.module.scss'
import clsx from 'clsx'

// Types
import { ChangeEvent, ReactNode } from 'react'

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
  className, placeholder, ...props
}: IInput) {
  const classNames = clsx({
    [styles.input]: true,
    [String(className)]: true,
    
    // Dynamic class names
    [styles.fill]: fill,
    [styles.hidden]: hidden
  })

  return <input
    {...props}
    type={type || "text"}
    className={classNames}
    placeholder={placeholder || ""}
    {...props}
  />
}