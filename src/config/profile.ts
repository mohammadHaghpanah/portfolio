import { assetUrl } from '../lib/assetUrl'
import type { NavItem, ProfileConfig } from '../types'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

/**
 * Edit contact fields here. Do not invent LinkedIn URLs.
 * Email was provided by the owner.
 */
export const profile: ProfileConfig = {
  name: 'Mohammad Haghpanah',
  headline: 'C++ / Qt Software Engineer | SDR & Digital Signal Processing',
  supportingText:
    'Electrical Engineering professional with approximately four years of industry experience, focused on C++ software development, Qt applications, software-defined radio, GNU Radio, and real-time signal processing.',
  location: 'Germany',
  githubUrl: 'https://github.com/mohammadHaghpanah',
  email: 'mohammad.haghpanah.eng@gmail.com',
  linkedinUrl: '',
  profileImage: assetUrl('assets/profile.jpg'),
  profileImageAlt: 'Portrait of Mohammad Haghpanah',
  about: [
    'I am an Electrical Engineering professional focused on software development for signal processing and software-defined radio systems.',
    'My technical work combines C++ development, Qt-based graphical applications, GNU Radio components, and practical SDR workflows. My interests include real-time spectrum analysis, signal visualization, digital communications, and engineering software that connects algorithms with hardware.',
    'I enjoy working across the signal-processing pipeline, from acquisition and filtering to analysis, visualization, and decoding.',
    'I am interested in opportunities in Germany involving C++, Qt, telecommunications, SDR, DSP, and related software systems.',
  ],
  targetRoles: [
    'C++ Software Engineer',
    'Qt Developer',
    'SDR Software Engineer',
    'Digital Signal Processing Engineer',
    'Software-Defined Radio Engineer',
    'Telecommunications Software Engineer',
    'Embedded Software Engineer',
  ],
}
