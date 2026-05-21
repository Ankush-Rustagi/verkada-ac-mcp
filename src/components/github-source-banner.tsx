import { ExternalLink } from "lucide-react"
import { GITHUB_TREE } from "@/data/content"
import { cn } from "@/lib/utils"

export function GithubSourceBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-sky-500/40 bg-sky-500/5 p-5",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-sm font-bold text-foreground">Source on GitHub</span>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
          verkada/docs-vibes
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 max-w-prose">
        Clone or browse the folder in the PM documentation repo, then wire it into your MCP config.
      </p>
      <a
        href={GITHUB_TREE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
      >
        github.com/verkada/docs-vibes/tree/main/35-custom-ac-mcp
        <ExternalLink className="size-3.5" aria-hidden />
      </a>
    </div>
  )
}
