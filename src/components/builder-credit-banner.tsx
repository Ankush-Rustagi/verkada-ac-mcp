import { BUILDER_EMAIL, BUILDER_NAME } from "@/data/content"
import { AC_PRIMARY } from "@/data/brand"
import { cn } from "@/lib/utils"

export function BuilderCreditBanner({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card p-5 md:p-6 border-l-4",
        className,
      )}
      style={{ borderLeftColor: AC_PRIMARY }}
      aria-label="Project creator"
    >
      <div className="text-xs font-semibold uppercase tracking-wider mb-3 text-[#FF8A3D]">
        Built by
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2">
        {BUILDER_NAME}
      </h2>
      <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
        {BUILDER_NAME} (
        <a
          href={`mailto:${BUILDER_EMAIL}`}
          className="text-[#FF8A3D] hover:underline"
        >
          {BUILDER_EMAIL}
        </a>
        ) designed and built this custom Access Control MCP server on top of Verkada's public web
        APIs.
      </p>
    </section>
  )
}
