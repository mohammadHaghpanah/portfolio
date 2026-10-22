import { profile } from '../config/profile'
import { ExternalLink } from './ExternalLink'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-navy/80">
      <div className="container-page flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="text-sm text-muted">
          © {CURRENT_YEAR} {profile.name}
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <ExternalLink
            href={profile.githubUrl}
            className="text-muted transition hover:text-accent"
          >
            GitHub
          </ExternalLink>
          {profile.linkedinUrl ? (
            <ExternalLink
              href={profile.linkedinUrl}
              className="text-muted transition hover:text-accent"
            >
              LinkedIn
            </ExternalLink>
          ) : null}
          {profile.email ? (
            <a href={`mailto:${profile.email}`} className="text-muted transition hover:text-accent">
              Email
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
