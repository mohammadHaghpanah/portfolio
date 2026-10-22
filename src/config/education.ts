import { assetUrl } from '../lib/assetUrl'
import type { EducationEntry } from '../types'

/**
 * Edit status / years when confirmed.
 * status: '' | 'In Progress' | 'Completed'
 * startYear / graduationYear: leave empty until known.
 */
export const education: EducationEntry = {
  degree: 'M.Sc. in Telecommunications Systems',
  institution: 'K. N. Toosi University of Technology',
  department: 'Department of Electrical Engineering',
  logoSrc: assetUrl('assets/kntu-logo.png'),
  logoAlt: 'K. N. Toosi University of Technology logo',
  status: '',
  startYear: '',
  graduationYear: '',
}
