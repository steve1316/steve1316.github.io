import type { ReactNode } from 'react'
import styles from './Section.module.css'

/** Props for Section. */
interface SectionProps {
  /** Anchor id used by the nav links. */
  id: string
  /** Section title, rendered after a "// " accent prefix. */
  title: string
  /** Optional secondary line under the title. */
  subtitle?: string
  /** Centers the heading and subtitle (used by Contact). */
  center?: boolean
  /** Extra class applied to the `<section>` (e.g. a background variant). */
  className?: string
  /** Section body. */
  children: ReactNode
}

/**
 * Standard page section with a monospace "// title" heading and optional subtitle.
 * @param props The section id, title, optional subtitle/center/className, and body.
 * @returns The section element.
 */
export function Section({ id, title, subtitle, center, className, children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className ?? ''}`}>
      <div className="container">
        <h2 className={`${styles.heading} ${center ? styles.center : ''}`}>{title}</h2>
        {subtitle && <p className={`${styles.sub} ${center ? styles.center : ''}`}>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
