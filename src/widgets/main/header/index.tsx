import styles from './main.module.scss'
import { pages } from '@pages'

export default function Header() {
  const headerLinks = pages.includes({ name: "header" })
  
  return <header className={styles.header}>
    <nav className={styles.nav}>
      {headerLinks.map(link => (
        <div key={link.key} className={styles.nav__item}>
          <a key={link.path} href={link.path}>
            { link.name.en }
          </a>
        </div>
      ))}
    </nav>
  </header>
}