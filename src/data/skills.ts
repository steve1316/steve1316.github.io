/** A single tech-stack chip that links out to the technology's official site. */
export interface Skill {
  /** Text shown on the chip. */
  label: string
  /** Official site the chip links to (opens in a new tab). */
  url: string
}

/** A labelled group of related skills (rendered as one row). */
export interface SkillGroup {
  /** Category label shown on the left of the row. */
  category: string
  /** Chips belonging to this category. */
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { label: 'Python', url: 'https://www.python.org' },
      { label: 'TypeScript', url: 'https://www.typescriptlang.org' },
      { label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { label: 'Kotlin', url: 'https://kotlinlang.org' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { label: 'React', url: 'https://react.dev' },
      { label: 'React Native', url: 'https://reactnative.dev' },
      { label: 'Expo', url: 'https://expo.dev' },
      { label: 'Tailwind CSS', url: 'https://tailwindcss.com' },
      { label: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { label: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { label: 'Node.js', url: 'https://nodejs.org' },
      { label: 'Express', url: 'https://expressjs.com' },
      { label: 'Ktor', url: 'https://ktor.io' },
      { label: 'MongoDB', url: 'https://www.mongodb.com' },
      { label: 'SQLite', url: 'https://www.sqlite.org' },
      { label: 'MySQL', url: 'https://www.mysql.com' },
      { label: 'BigQuery', url: 'https://cloud.google.com/bigquery' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { label: 'AWS (ECS, VPC)', url: 'https://aws.amazon.com/ecs/' },
      { label: 'CloudFormation', url: 'https://aws.amazon.com/cloudformation/' },
      { label: 'Docker', url: 'https://www.docker.com' },
      { label: 'Kubernetes', url: 'https://kubernetes.io' },
      { label: 'GitHub Actions', url: 'https://github.com/features/actions' },
    ],
  },
  {
    category: 'CV & AI',
    skills: [
      { label: 'OpenCV', url: 'https://opencv.org' },
      { label: 'YOLOv8', url: 'https://docs.ultralytics.com' },
      { label: 'ONNX Runtime', url: 'https://onnxruntime.ai' },
      { label: 'Tesseract', url: 'https://github.com/tesseract-ocr/tesseract' },
      { label: 'ML Kit', url: 'https://developers.google.com/ml-kit' },
      { label: 'llama.rn', url: 'https://github.com/mybigday/llama.rn' },
    ],
  },
  {
    category: 'Tooling',
    skills: [
      { label: 'Git', url: 'https://git-scm.com' },
      { label: 'Gradle', url: 'https://gradle.org' },
      { label: 'Jest', url: 'https://jestjs.io' },
    ],
  },
]
