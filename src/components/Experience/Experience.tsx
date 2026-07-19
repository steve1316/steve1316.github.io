import { Section } from '../Section/Section'
import { experience } from '../../data/experience'
import styles from './Experience.module.css'

/**
 * "Experience" section: a vertical timeline of roles and education.
 * @returns The experience section.
 */
export function Experience() {
  return (
    <Section id="experience" title="experience" subtitle="Where I've worked & studied">
      <div className={styles.timeline}>
        {experience.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.role}>
              {item.role} &middot; <span className={styles.org}>{item.org}</span>
            </div>
            {item.bullets && (
              <ul className={styles.bullets}>
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
