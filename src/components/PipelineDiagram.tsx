import { ChevronRight } from 'lucide-react'
import type { PipelineStage } from '../types'

interface PipelineDiagramProps {
  stages: PipelineStage[]
  caption?: string
}

export function PipelineDiagram({ stages, caption }: PipelineDiagramProps) {
  return (
    <figure className="mt-5 rounded-lg border border-line bg-navy/60 p-4">
      {caption ? (
        <figcaption className="mb-3 font-mono text-xs tracking-wide text-muted uppercase">
          {caption}
        </figcaption>
      ) : null}
      <ol className="flex flex-wrap items-center gap-2">
        {stages.map((stage, index) => (
          <li key={stage.label} className="flex items-center gap-2">
            <span className="rounded-md border border-line bg-panel px-2.5 py-1.5 text-xs font-medium text-soft sm:text-sm">
              {stage.label}
            </span>
            {index < stages.length - 1 ? (
              <ChevronRight
                className="size-3.5 shrink-0 text-accent/70"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  )
}
