import { Section } from '../Section/Section'
import styles from './About.module.css'

/**
 * "About" section: a short engineering-framed intro pulled from the resume summary.
 * @returns The about section.
 */
export function About() {
  return (
    <Section id="about" title="about" subtitle="A quick intro">
      <p className={styles.body}>
        I'm a Full-Stack Developer on a small, autonomous engineering team, working across the stack - cloud
        infrastructure on AWS, data pipelines in MongoDB &amp; BigQuery, CI/CD, and customer-facing React frontends.
        Outside of work, I build computer-vision automation tools that have earned <strong>250+ GitHub stars</strong>,
        following best practices for clean, maintainable, scalable code.
      </p>
    </Section>
  )
}
