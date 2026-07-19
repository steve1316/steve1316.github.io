import { Section } from '../Section/Section'
import { profile } from '../../data/profile'
import styles from './Contact.module.css'

/**
 * "Get in touch" section: a centered call-to-action with email + social buttons.
 * @returns The contact section.
 */
export function Contact() {
  return (
    <Section
      id="contact"
      title="get in touch"
      subtitle="Open to full-stack & software roles."
      center
      className={styles.contactBg}
    >
      <div className={styles.cta}>
        <a className="btn btn-primary" href={profile.socials.email}>
          &#9993; {profile.email}
        </a>
        <a className="btn btn-ghost" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </Section>
  )
}
