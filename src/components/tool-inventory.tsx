import { DOMAIN_ACCENTS } from "@/data/theme"
import { TOOL_DOMAINS } from "@/data/content"
import { DomainPieChart } from "@/components/domain-pie-chart"
import { cn } from "@/lib/utils"

export function ToolInventory() {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <aside className="lg:w-52 shrink-0 flex flex-col items-center lg:items-stretch">
        <DomainPieChart />
        <ul className="mt-3 space-y-1.5 w-full">
          {TOOL_DOMAINS.map((d) => {
            const style = DOMAIN_ACCENTS[d.color]
            return (
              <li key={d.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className={cn("size-2.5 rounded-sm shrink-0", style.swatchClass)} />
                <span>
                  {d.label} ({d.tools.length})
                </span>
              </li>
            )
          })}
        </ul>
      </aside>

      <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {TOOL_DOMAINS.map((domain) => {
          const style = DOMAIN_ACCENTS[domain.color]
          return (
            <section key={domain.label} className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={cn("size-3 rounded-sm shrink-0", style.swatchClass)} />
                <h4 className="text-sm font-semibold text-foreground">{domain.label}</h4>
                <span className="text-[10px] text-muted-foreground">({domain.tools.length})</span>
              </div>
              <ul
                className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 pl-3 border-l-2",
                  style.borderTint,
                )}
              >
                {domain.tools.map((tool) => (
                  <li key={tool.name} className="text-[11px] leading-snug pl-1 min-w-0">
                    <code className={cn("font-semibold block break-all", style.textClass)}>
                      {tool.name}
                    </code>
                    <span className="text-muted-foreground">{tool.desc}</span>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
