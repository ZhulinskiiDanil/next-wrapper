import styles from './main.module.scss'

// Hooks
import { useState } from 'react'

// Types
import { ITodo } from '@/shared/types'
import { ChangeEvent } from 'react'

export default function Todo({ todo }: { todo: ITodo }) {
  const [completed, setCompleted] = useState<boolean>(todo.completed)
  
  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setCompleted(e.target.checked)
  }

  return <label className={styles.todo}>
    <input
      type="checkbox"
      checked={completed}
      onChange={changeHandler}
      className={styles.checkbox}
    />
    <div className={styles.title}>
      { todo.title }
    </div>
  </label>
}