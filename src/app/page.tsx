'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

// Hooks
import { useEffect, useState } from 'react'

// Components
import * as UI from '@/shared/ui'
import { useClientRequest } from '@useClientRequest'

interface ITodo {
  id: number | string
  userId: number | string
  completed: boolean
  title: string
}

function Component() {
  const [todo, setTodo] = useState<ITodo>()
  const [request, status] = useClientRequest()

  function addTodo() {

  }

  useEffect(() => {
    (async () => {
      const response: ITodo = await request("https://jsonplaceholder.typicode.com/todos/2")

      if (response.userId) {
        setTodo(response)
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