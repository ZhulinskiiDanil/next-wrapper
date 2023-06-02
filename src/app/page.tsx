'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@/common/layout'
import { Header, Footer, Content } from '@layout/components'

// Hooks
import { useState } from 'react'

// Components
import Button from '@ui/shared/button'

function Component() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(pre => pre + 1)
  }

  function decrement() {
    setCount(pre => pre > 0 ? pre - 1 : 0)
  }

  function clearCounter() {
    setCount(0)
  }

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