import { experience, experienceSummary } from '../config/experience'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad border-b border-line/60"
      aria-labelledby="experience-title"
    >
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Professional background" />


        {experience.isConfigured ? (
          <article className="rounded-2xl border border-line bg-panel/60 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 id="experience-title" className="font-display text-2xl font-semibold text-bright">
                  {experience.jobTitle}
                </h3>
                <p className="mt-2 text-lg text-soft">{experience.employer}</p>
                {experience.location ? (
                  <p className="mt-1 text-sm text-muted">{experience.location}</p>
                ) : null}
              </div>
              {(experience.startDate || experience.endDate) && (
                <p className="font-mono text-sm text-muted">
                  {[experience.startDate, experience.endDate].filter(Boolean).join(' – ')}
                </p>
              )}
            </div>
            {experience.description ? (
              <p className="mt-5 leading-relaxed text-soft">{experience.description}</p>
            ) : null}
            {experience.achievements.length > 0 ? (
              <ul className="mt-5 space-y-2">
                {experience.achievements.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ) : (
          <div className="rounded-2xl border border-dashed border-line bg-panel/40 p-6 sm:p-8">
            <h3 id="experience-title" className="font-display text-xl font-semibold text-bright">
              Industry experience
            </h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-soft">{experienceSummary}</p>
          </div>
        )}
      </div>
    </section>
  )
}
