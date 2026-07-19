/** A single entry in the experience timeline (a role or a degree). */
export interface ExperienceItem {
  /** Date range shown as a small mono label. */
  date: string
  /** Job title or degree. */
  role: string
  /** Company or school (rendered in the accent color). */
  org: string
  /** Optional bullet points describing the role. */
  bullets?: string[]
}

export const experience: ExperienceItem[] = [
  {
    date: 'Jan 2023 - Present',
    role: 'Full-Stack Developer',
    org: 'Unified Patents',
    bullets: [
      'Small, autonomous 3-person team owning core software systems.',
      'Migrated legacy Kubernetes to AWS ECS Fargate - improved reliability, cut costs ~$12k/yr.',
      'Built CI/CD with GitHub Actions + AWS CloudFormation; scalable VPC networking (dual-stack IPv4/IPv6).',
      'Maintained large-scale MongoDB & BigQuery data stores; built customer-facing React components.',
    ],
  },
  {
    date: 'Jan 2022 - Dec 2025',
    role: 'Technical Support Engineer',
    org: 'Google (via HCL)',
    bullets: [
      'Triaged complex Pixel & ChromeOS issues; analyzed logs, crash reports, and diagnostics.',
      'Built internal automation scripts and tooling to improve team workflow efficiency.',
    ],
  },
  {
    date: '2020',
    role: 'B.S. Computer Science',
    org: 'San Francisco State University',
  },
]
