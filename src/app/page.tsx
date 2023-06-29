'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

// Types
import { ITodo } from '@/shared/types'

// Hooks
import { useCallback, useEffect, useState } from 'react'

// Components
import * as UI from '@/shared/ui'
import { useClientRequest } from '@useClientRequest'
import TodosList from '@/entities/todos/list'

function Component() {
  const [todos, setTodos] = useState<ITodo[]>()
  const [request, status] = useClientRequest()

  const addTodo = useCallback(function addTodo() {
    if (Array.isArray(todos)) {
      const lastTodo: ITodo = todos.slice(-1)[0]

      setTodos([ ...todos, {
        ...lastTodo,
        id: todos.length + 1
      }])
    }
  }, [todos])
  
  useEffect(() => {
    (async () => {
      const response: ITodo[] = await request("https://jsonplaceholder.typicode.com/todos?_limit=10")

      if (response?.length > 0) {
        setTodos(response)
      }
    })()
  }, [request])

  return <div className={styles.container}>
    <div className={styles.title}>
      next-wrapper
    </div>
    <div className={styles.description}>
      Wrapper for next.js 13 version with custom layout and app directory
    </div>
    <section className={styles.todos}>
      <p className={styles.todos__title}>
        Todos
      </p>
      <div className={styles.buttons}>
        <UI.Button
          onClick={addTodo}
          className={styles.button}
          content="Add todo"
          type="primary"
        />
      </div>
      <div className="list">
        <TodosList todos={todos} />
      </div>
    </section>
  </div>
}

export default PageLayout(
  Component, {
    imports: () => [
      Header,
      Content,
      Footer,
    ],
    settings: []
  }
)