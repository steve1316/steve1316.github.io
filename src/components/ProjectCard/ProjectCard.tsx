import type { Project } from '../../data/projects'
import { useGitHubStats } from '../../hooks/useGitHubStats'
import styles from './ProjectCard.module.css'

/** Props for ProjectCard. */
interface ProjectCardProps {
  /** The project to render. */
  project: Project
}

/**
 * A featured-project card linking to the repo, with live star/fork counts pinned to the bottom.
 * @param props The project to display.
 * @returns The project card (an anchor to the GitHub repo).
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { stars, forks } = useGitHubStats(project.repo)
  const fmt = (n: number | null) => (n === null ? '-' : n.toLocaleString())

  return (
    <a
      className={styles.card}
      href={`https://github.com/steve1316/${project.repo}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className={styles.title}>
        <span className={styles.emoji}>{project.emoji}</span>
        {project.name}
      </h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.foot}>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.stats}>
          <span>&#9733; <b>{fmt(stars)}</b></span>
          <span>&#10547; <b>{fmt(forks)}</b></span>
        </div>
      </div>
    </a>
  )
}
