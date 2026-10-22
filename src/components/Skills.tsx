import { skillCategories } from '../config/skills'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section-pad border-b border-line/60" aria-labelledby="skills-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technical capabilities"
          description="Organized by the areas most relevant to C++, Qt, SDR, and signal-processing roles."
        />

        <h3 id="skills-title" className="sr-only">
          Skills by category
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-line bg-panel/50 p-5 sm:p-6"
            >
              <h4 className="font-display text-lg font-semibold text-bright">{category.title}</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-navy/60 px-2.5 py-1.5 text-sm text-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
