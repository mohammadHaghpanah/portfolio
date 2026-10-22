import { ExternalLink as ExternalLinkIcon, Lock, MessageSquare } from 'lucide-react'
import type { Project } from '../types'
import { GitHubIcon } from './BrandIcons'
import { ExternalLink } from './ExternalLink'
import { PipelineDiagram } from './PipelineDiagram'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/60 transition hover:border-accent/30">
      {project.screenshotSrc ? (
        <div className="border-b border-line bg-navy">
          <img
            src={project.screenshotSrc}
            alt={project.screenshotAlt}
            loading="lazy"
            className="aspect-video w-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center border-b border-line bg-navy/80 px-6 text-center">
          <p className="max-w-xs text-sm text-muted">
            {project.isPrivate
              ? 'Private application — no public screenshots published.'
              : 'Screenshot not published yet. Add a verified image under public/assets when available.'}
          </p>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-bright">{project.title}</h3>
          {project.visibilityLabel ? (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent uppercase">
              <Lock className="size-3" aria-hidden="true" />
              {project.visibilityLabel}
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-navy/70 px-2.5 py-1 font-mono text-[11px] text-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((item) => (
            <li key={item.text} className="flex gap-2 text-sm text-soft">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        {project.pipeline ? (
          <PipelineDiagram stages={project.pipeline} caption="Processing pipeline" />
        ) : null}

        {project.technicalTerms ? (
          <div className="mt-5">
            <p className="font-mono text-xs tracking-wide text-muted uppercase">
              Relevant technical terms
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.technicalTerms.map((term) => (
                <li
                  key={term}
                  className="rounded-md border border-dashed border-line px-2.5 py-1 text-xs text-muted"
                >
                  {term}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.notes?.map((note) => (
          <p key={note} className="mt-4 text-xs leading-relaxed text-muted">
            {note}
          </p>
        ))}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.repositoryUrl ? (
            <ExternalLink
              href={project.repositoryUrl}
              className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium text-bright transition hover:border-accent/40 hover:text-accent"
            >
              <GitHubIcon className="size-4" aria-hidden="true" />
              Repository
              <ExternalLinkIcon className="size-3.5 opacity-70" aria-hidden="true" />
            </ExternalLink>
          ) : null}

          {project.contactForDetails ? (
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent/15 px-3 py-2 text-sm font-medium text-accent transition hover:bg-accent/25"
            >
              <MessageSquare className="size-4" aria-hidden="true" />
              Technical Details Available Upon Request
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
