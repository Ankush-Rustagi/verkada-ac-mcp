import { BUILDER_EMAIL, BUILDER_NAME } from "@/data/content"
import { cn } from "@/lib/utils"

export function BuilderCreditBanner({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "rounded-xl border border-violet-500/40 bg-gradient-to-br from-violet-600/90 to-indigo-700/90 p-5 md:p-6 text-white shadow-lg shadow-violet-950/20",
        className,
      )}
      aria-label="Project creator"
    >
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <span className="rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">
          Built by
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{BUILDER_NAME}</h2>
      </div>
      <p className="text-sm md:text-base text-white/90 max-w-2xl leading-relaxed">
        {BUILDER_NAME} (
        <a
          href={`mailto:${BUILDER_EMAIL}`}
          className="underline underline-offset-2 hover:text-white"
        >
          {BUILDER_EMAIL}
        </a>
        ) designed and built this custom Access Control MCP server on top of Verkada's public web
        APIs.
      </p>
    </section>
  )
}
