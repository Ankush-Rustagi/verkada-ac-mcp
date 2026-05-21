import {
  BUILDER_EMAIL,
  BUILDER_NAME,
  PAGE_INTROS,
  type HubPage,
} from "@/data/content"
import { AC_PRIMARY } from "@/data/theme"
import { cn } from "@/lib/utils"

export function HubIntroBlock({ page, className }: { page: HubPage; className?: string }) {
  const intro = PAGE_INTROS[page]

  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card px-4 py-4 md:px-5 border-l-4",
        className,
      )}
      style={{ borderLeftColor: AC_PRIMARY }}
      aria-label="Introduction"
    >
      <div className="mb-4 pb-4 border-b border-border/60">
        <div className="text-[10px] font-semibold uppercase tracking-wider mb-1 text-[#FF8A3D]">
          Built by
        </div>
        <h2 className="text-lg font-semibold tracking-tight text-foreground">{BUILDER_NAME}</h2>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          <a href={`mailto:${BUILDER_EMAIL}`} className="text-[#FF8A3D] hover:underline">
            {BUILDER_EMAIL}
          </a>
          {" · "}
          Local MCP server on Verkada public Access Control APIs ({intro.toolsNote}).
        </p>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
          TL;DR · {intro.tabLabel}
        </div>
        <p className="text-sm text-foreground leading-relaxed mb-3">{intro.summary}</p>
        <ul className="space-y-2">
          {intro.sections.map((s) => (
            <li key={s.title} className="text-xs leading-relaxed">
              <span className="font-semibold text-foreground">{s.title}</span>
              <span className="text-muted-foreground">: {s.blurb}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
