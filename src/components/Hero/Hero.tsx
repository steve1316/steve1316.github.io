import { profile } from '../../data/profile'
import styles from './Hero.module.css'

/**
 * Landing hero: terminal prompt motif, animated typing title, tagline, CTAs, and socials.
 * @returns The hero header element.
 */
export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className="container">
        <p className={styles.prompt}>
          <span className={styles.accent}>steve1316</span>@portfolio:<span className={styles.accent}>~</span>$ whoami
        </p>
        {/* Animated typing banner (same service as the profile README). Can be swapped for a native React typewriter later. */}
        <img className={styles.title} src={profile.heroSvg} alt="Hi, I'm Steve Tu" width={600} height={64} />
        <p className={styles.lead}>
          Full-Stack Developer who turns tedious, repetitive problems into <strong>reliable automation</strong> - and
          builds the <strong>full-stack apps</strong> around them. Python, TypeScript, and Kotlin, with a soft spot for
          computer vision.
        </p>
        <div className={styles.cta}>
          <a className="btn btn-primary" href="#projects">View Projects &#8595;</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
        <div className={styles.socials}>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">&#9657; GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">&#9657; LinkedIn</a>
          <a href={profile.socials.email}>&#9657; Email</a>
        </div>
      </div>
    </header>
  )
}
