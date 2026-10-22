import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../config/profile'
import { GitHubIcon } from './BrandIcons'
import { ExternalLink } from './ExternalLink'

export function Hero() {
  return (
    <section
      id="home"
      className="section-pad relative overflow-hidden border-b border-line/60"
      aria-labelledby="hero-name"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(36,48,71,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,48,71,0.35)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="reveal font-mono text-xs tracking-[0.24em] text-accent uppercase">
            {profile.location} · Engineering Portfolio
          </p>

          <h1
            id="hero-name"
            className="reveal reveal-delay-1 mt-5 font-display text-4xl font-bold tracking-tight text-bright text-balance sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>

          <p className="reveal reveal-delay-2 mt-5 max-w-2xl font-display text-xl font-medium text-soft text-balance sm:text-2xl">
            {profile.headline}
          </p>

          <p className="reveal reveal-delay-3 mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.supportingText}
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-dim"
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <ExternalLink
              href={profile.githubUrl}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-4 py-2.5 text-sm font-semibold text-bright transition hover:border-accent/40 hover:text-accent"
            >
              <GitHubIcon className="size-4" aria-hidden="true" />
              GitHub Profile
            </ExternalLink>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-soft transition hover:border-accent/40 hover:text-bright"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 justify-self-center lg:justify-self-end">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[1.35rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.35),transparent_35%,rgba(14,165,233,0.2),transparent_70%)] opacity-70 blur-sm"
              aria-hidden="true"
            />
            <img
              src={profile.profileImage}
              alt={profile.profileImageAlt}
              width={819}
              height={1024}
              className="relative aspect-[4/5] w-64 rounded-2xl border border-line object-cover object-top shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:w-72 lg:w-80"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
