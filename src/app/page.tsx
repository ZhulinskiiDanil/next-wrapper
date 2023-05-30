'use client';
import styles from './main.module.scss'
import { Layout } from '@/common/layout';
import { Header, Footer, Content } from '@layout/components'

export default Layout(
  function Component(props: any) {
    return <div {...props} className={styles.container}>
      <div className={styles.title}>
        next-wrapper
      </div>
      <div className={styles.description}>
        Wrapper for next.js 13 version with custom layout and app directory
      </div>
    </div>
  }, {
    imports: [
      Header({ onClick: () => console.log("TEST") }),
      Content,
      Footer,
    ],
    settings: () => ([
      
    ])
  }
)