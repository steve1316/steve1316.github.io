import { profile } from '../../data/profile'
import styles from './Footer.module.css'

/**
 * Page footer with copyright and a build credit.
 * @returns The footer element.
 */
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          &#169; {year} {profile.name} &middot; {profile.location}
        </span>
        <span>Built with Vite + React</span>
      </div>
    </footer>
  )
}
