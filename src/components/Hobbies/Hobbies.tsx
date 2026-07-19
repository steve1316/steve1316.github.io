import { Section } from '../Section/Section'
import { hobbies } from '../../data/hobbies'
import styles from './Hobbies.module.css'

/**
 * "Off the clock" section: a grid of personal-interest cards.
 * @returns The hobbies section.
 */
export function Hobbies() {
  return (
    <Section id="hobbies" title="off the clock" subtitle="What I'm into when I'm not shipping">
      <div className={styles.grid}>
        {hobbies.map((h) => (
          <div key={h.title} className={styles.card}>
            <div className={styles.icon}>{h.icon}</div>
            <h4 className={styles.title}>{h.title}</h4>
            <p className={styles.blurb}>{h.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
