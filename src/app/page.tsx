'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@/common/layout'
import { Header, Footer, Content } from '@layout/components'

// Hooks
import { useEffect, useState } from 'react'

// Components
import Button from '@ui/shared/button'
import { useClientRequest } from '@useClientRequest'

interface ITodo {
  id: number | string
  userId: number | string
  completed: boolean
  title: string
}

function Component() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState<ITodo>()
  const [request, status] = useClientRequest()

  function increment() {
    setCount(pre => pre + 1)
  }

  function decrement() {
    setCount(pre => pre > 0 ? pre - 1 : 0)
  }

  function clearCounter() {
    setCount(0)
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
    <section className={styles.counter}>
      <p className={styles.count}>{ count }</p>
      <div className={styles.buttons}>
        <Button
          onClick={increment}
          className={styles.button}
          content="Increment"
          type="primary"
        />
        <Button
          onClick={decrement}
          className={styles.button}
          content="Decrement"
        />
        <Button
          onClick={clearCounter}
          className={styles.button}
          content="Clear"
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