import { Section } from '../Section/Section'
import { skillGroups } from '../../data/skills'
import styles from './Skills.module.css'

/**
 * "Tech stack" section: grouped rows of chips that each link to the technology's official site.
 * @returns The skills section.
 */
export function Skills() {
  return (
    <Section id="skills" title="tech stack" subtitle="What I build with">
      {skillGroups.map((group) => (
        <div key={group.category} className={styles.row}>
          <div className={styles.cat}>{group.category}</div>
          <div className={styles.chips}>
            {group.skills.map((s) => (
              <a key={s.label} className={styles.chip} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
