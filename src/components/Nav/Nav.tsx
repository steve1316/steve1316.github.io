import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './Nav.module.css'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
]
const IDS = LINKS.map((l) => l.id)

/**
 * Sticky top navigation with anchor links that highlight the section currently in view.
 * @returns The nav element.
 */
export function Nav() {
  const active = useActiveSection(IDS)
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>Portfolio</a>
        <div className={styles.links}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? styles.active : ''}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
