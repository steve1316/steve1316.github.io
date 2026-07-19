/** A personal-interest card shown in the "off the clock" section. */
export interface Hobby {
  /** Emoji icon for the card. */
  icon: string
  /** Short title of the interest. */
  title: string
  /** One-line blurb. */
  blurb: string
}

export const hobbies: Hobby[] = [
  { icon: '🤖', title: 'Automation', blurb: 'Tinkering with bots & scripts for fun' },
  { icon: '🎮', title: 'Gacha Games', blurb: 'Uma Musume, Granblue & more' },
  { icon: '🇯🇵', title: 'Japanese Culture', blurb: 'Language, anime & media' },
  { icon: '🎧', title: 'Music', blurb: 'Always something playing' },
]
