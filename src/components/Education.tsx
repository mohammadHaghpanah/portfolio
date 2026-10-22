import { education } from '../config/education'
import { SectionHeading } from './SectionHeading'

function metaLine(): string | null {
  const parts: string[] = []
  if (education.status) parts.push(education.status)
  if (education.startYear && education.graduationYear) {
    parts.push(`${education.startYear} – ${education.graduationYear}`)
  } else if (education.startYear) {
    parts.push(`Started ${education.startYear}`)
  } else if (education.graduationYear) {
    parts.push(`Graduation ${education.graduationYear}`)
  }
  return parts.length ? parts.join(' · ') : null
}

export function Education() {
  const meta = metaLine()

  return (
    <section
      id="education"
      className="section-pad border-b border-line/60"
      aria-labelledby="education-title"
    >
      <div className="container-page">
        <SectionHeading eyebrow="Education" title="Academic background" />


        <article className="overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel to-navy">
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex size-28 items-center justify-center rounded-xl border border-line bg-bright/95 p-3 sm:size-32">
              <img
                src={education.logoSrc}
                alt={education.logoAlt}
                width={250}
                height={288}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                Graduate studies
              </p>
              <h3
                id="education-title"
                className="mt-2 font-display text-2xl font-semibold text-bright sm:text-3xl"
              >
                {education.degree}
              </h3>
              <p className="mt-3 text-lg font-medium text-soft">{education.institution}</p>
              <p className="mt-1 text-muted">{education.department}</p>
              {meta ? (
                <p className="mt-4 inline-flex rounded-md border border-line bg-navy/70 px-3 py-1.5 font-mono text-xs text-soft">
                  {meta}
                </p>
              ) : null}
              <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted">
                University logo used solely to identify the educational institution. No
                endorsement by the university is implied.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
