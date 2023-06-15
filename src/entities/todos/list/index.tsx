import styles from './main.module.scss'

// Types
import { ITodo } from '@/shared/types'

// Components
import Todo from '@entities/todos/todo'

export default function TodosList({ todos }: {
  todos: ITodo[] | any
}) {
  if (Array.isArray(todos)) {
    return <div className={styles.list}>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  } else {
    return <></>
  }
}