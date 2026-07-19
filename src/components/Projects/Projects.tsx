import { Section } from '../Section/Section'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { projects, moreProjectsUrl } from '../../data/projects'
import styles from './Projects.module.css'

/**
 * "Featured projects" section: a responsive grid of project cards plus a link to the rest.
 * @returns The projects section.
 */
export function Projects() {
  return (
    <Section
      id="projects"
      title="featured projects"
      subtitle="Automation, computer vision, and the full-stack apps around them"
    >
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.repo} project={p} />
        ))}
      </div>
      <p className={styles.more}>
        &#8594;{' '}
        <a href={moreProjectsUrl} target="_blank" rel="noopener noreferrer">
          See more projects on GitHub
        </a>
      </p>
    </Section>
  )
}
