import type { ExperienceEntry } from '../types'

/**
 * Set isConfigured to true only after filling real employer, title, and dates.
 * Until then, the Experience section shows a summary — not a fabricated job card.
 */
export const experience: ExperienceEntry = {
  isConfigured: false,
  jobTitle: '',
  employer: '',
  location: '',
  startDate: '',
  endDate: '',
  description: '',
  achievements: [],
}

/** Confirmed high-level statement only (no invented employer names or dates). */
export const experienceSummary =
  'Approximately four years of professional experience in a private company, working on engineering software related to signal processing and software-defined radio systems. Detailed role information is available upon request.'
