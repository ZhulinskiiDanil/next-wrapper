'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@/common/layout';
import { Header, Footer, Content } from '@layout/components'

function Component() {
  return <div className={styles.container}>
    <div className={styles.title}>
      next-wrapper
    </div>
    <div className={styles.description}>
      Wrapper for next.js 13 version with custom layout and app directory
    </div>
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