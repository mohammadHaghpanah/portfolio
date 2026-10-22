import { profile } from '../config/profile'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section-pad border-b border-line/60" aria-labelledby="about-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Engineering software for signals and radio systems"
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base leading-relaxed text-soft sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <aside className="rounded-xl border border-line bg-panel/70 p-6" aria-labelledby="about-title">
            <h3 id="about-title" className="font-display text-lg font-semibold text-bright">
              Target roles
            </h3>
            <ul className="mt-4 space-y-2">
              {profile.targetRoles.map((role) => (
                <li
                  key={role}
                  className="border-l-2 border-accent/50 pl-3 text-sm text-muted sm:text-base"
                >
                  {role}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
