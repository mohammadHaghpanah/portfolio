import { Mail } from 'lucide-react'
import { profile } from '../config/profile'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import { ExternalLink } from './ExternalLink'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="section-pad" aria-labelledby="contact-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Talk About Engineering"
          description="I am interested in opportunities involving C++, Qt, SDR, DSP, and telecommunications software in Germany. If you are recruiting for a relevant engineering position or would like to discuss my projects, feel free to get in touch."
        />

        <div
          className={`grid gap-4 sm:grid-cols-2 ${profile.linkedinUrl ? 'lg:grid-cols-3' : ''}`}
        >
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-xl border border-line bg-panel/60 p-5 transition hover:border-accent/40"
            >
              <Mail className="size-5 text-accent" aria-hidden="true" />
              <h3 id="contact-title" className="mt-4 font-display text-lg font-semibold text-bright">
                Email
              </h3>
              <p className="mt-2 break-all text-sm text-muted group-hover:text-soft">{profile.email}</p>
            </a>
          ) : null}

          <ExternalLink
            href={profile.githubUrl}
            className="group rounded-xl border border-line bg-panel/60 p-5 transition hover:border-accent/40"
          >
            <GitHubIcon className="size-5 text-accent" aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-semibold text-bright">GitHub</h3>
            <p className="mt-2 text-sm text-muted group-hover:text-soft">github.com/mohammadHaghpanah</p>
          </ExternalLink>

          {profile.linkedinUrl ? (
            <ExternalLink
              href={profile.linkedinUrl}
              className="group rounded-xl border border-line bg-panel/60 p-5 transition hover:border-accent/40"
            >
              <LinkedInIcon className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-bright">LinkedIn</h3>
              <p className="mt-2 text-sm text-muted group-hover:text-soft">View profile</p>
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </section>
  )
}
