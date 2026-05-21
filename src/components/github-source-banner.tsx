import { ExternalLink } from "lucide-react"
import { GITHUB_TREE } from "@/data/content"
import { cn } from "@/lib/utils"

export function GithubSourceBanner({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-5", className)}>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-sm font-semibold text-foreground">Source on GitHub</span>
        <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          verkada/docs-vibes
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 max-w-prose leading-relaxed">
        Clone or browse the folder in the PM documentation repo, then wire it into your MCP config.
      </p>
      <a
        href={GITHUB_TREE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
      >
        github.com/verkada/docs-vibes/tree/main/35-custom-ac-mcp
        <ExternalLink className="size-3.5" aria-hidden />
      </a>
    </div>
  )
}
