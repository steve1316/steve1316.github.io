/** A featured project. `repo` is the steve1316/<repo> slug used for the live star/fork counts and the link. */
export interface Project {
  /** Display name of the project. */
  name: string
  /** GitHub repo slug under github.com/steve1316 - drives the live stats and the card link. */
  repo: string
  /** Emoji shown next to the title. */
  emoji: string
  /** One-line, engineering-framed description. */
  description: string
  /** Short tech tags shown on the card. */
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Uma Android Automation',
    repo: 'uma-android-automation',
    emoji: '⭐',
    description:
      'Full-stack Android app that plays Uma Musume end-to-end - a React Native (Expo) UI over a Kotlin + OpenCV/YOLOv8 vision engine, with an on-device RAG chatbot (llama.rn).',
    tags: ['Kotlin', 'OpenCV', 'React Native'],
  },
  {
    name: 'Android CV Automation Library',
    repo: 'android-cv-automation-library',
    emoji: '🧩',
    description:
      'The reusable OpenCV + OCR engine behind my bots, published to JitPack so any project can build on it.',
    tags: ['Kotlin', 'OpenCV', 'JitPack'],
  },
  {
    name: 'Granblue Automation Statistics',
    repo: 'granblue-automation-statistics',
    emoji: '📈',
    description:
      'Full-stack MERN dashboard - React + Chart.js over a Node/Express + MongoDB API with JWT auth, Dockerized.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Granblue Automation',
    repo: 'granblue-automation-pyautogui',
    emoji: '🏆',
    description:
      'My most-starred project - a Tauri + React desktop GUI over a Python + OpenCV automation engine.',
    tags: ['Python', 'Tauri', 'React'],
  },
]

/** Link target for the "see more projects" line under the featured grid. */
export const moreProjectsUrl = 'https://github.com/steve1316?tab=repositories'
