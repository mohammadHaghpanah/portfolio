export type DegreeStatus = 'In Progress' | 'Completed' | ''

export interface NavItem {
  id: string
  label: string
}

export interface ProfileConfig {
  name: string
  headline: string
  supportingText: string
  location: string
  githubUrl: string
  /** Leave empty until confirmed — do not invent. */
  email: string
  /** Leave empty until confirmed — do not invent. */
  linkedinUrl: string
  profileImage: string
  profileImageAlt: string
  about: string[]
  targetRoles: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  department: string
  logoSrc: string
  logoAlt: string
  /** Set to "In Progress" or "Completed" when known. */
  status: DegreeStatus
  /** Optional start year (e.g. "2022"). Leave empty if unknown. */
  startYear: string
  /** Optional graduation year. Leave empty if unknown. */
  graduationYear: string
}

export interface ExperienceEntry {
  /**
   * When false, the section shows a summary note instead of a job card.
   * Set to true only after filling real employer/title/dates.
   */
  isConfigured: boolean
  jobTitle: string
  employer: string
  location: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
}

export interface ProjectHighlight {
  text: string
}

export interface PipelineStage {
  label: string
}

export interface Project {
  id: string
  title: string
  description: string
  /** Public repository URL, or empty string if not public / not yet set. */
  repositoryUrl: string
  /** True when the project source is private. */
  isPrivate: boolean
  visibilityLabel?: string
  technologies: string[]
  highlights: ProjectHighlight[]
  /** Local screenshot path under /public, or null when no verified screenshot. */
  screenshotSrc: string | null
  screenshotAlt: string
  pipeline?: PipelineStage[]
  /** Clarifying notes shown under highlights (not claimed as features). */
  notes?: string[]
  /** Technical glossary terms for private / overview projects. */
  technicalTerms?: string[]
  contactForDetails?: boolean
}

export interface SkillCategory {
  title: string
  skills: string[]
}
