import { projects } from '../config/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad border-b border-line/60"
      aria-labelledby="projects-title"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Featured engineering work"
          description="Selected C++, Qt, GNU Radio, and SDR projects. Screenshots are taken from public repositories when available."
        />

        <h3 id="projects-title" className="sr-only">
          Featured projects
        </h3>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
