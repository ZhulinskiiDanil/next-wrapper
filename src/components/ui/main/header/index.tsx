import styles from './main.module.scss'

export default function Header(props?: any) {
  return <header {...props} className={styles.header}>
    Header
  </header>
}