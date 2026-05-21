import { DOMAIN_STYLE } from "@/data/brand"
import { TOOL_DOMAINS, TOTAL_TOOLS } from "@/data/content"
import { DomainPieChart } from "@/components/domain-pie-chart"
import { cn } from "@/lib/utils"

export function ToolInventory() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      <aside className="lg:w-64 shrink-0 flex flex-col items-center lg:items-stretch">
        <DomainPieChart />
        <ul className="mt-4 space-y-2 w-full">
          {TOOL_DOMAINS.map((d) => {
            const style = DOMAIN_STYLE[d.color]
            return (
              <li key={d.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className={cn("size-3 rounded-sm shrink-0", style.swatchClass)} />
                <span>
                  {d.label} ({d.tools.length})
                </span>
              </li>
            )
          })}
        </ul>
      </aside>

      <div className="flex-1 min-w-0 space-y-8">
        {TOOL_DOMAINS.map((domain) => {
          const style = DOMAIN_STYLE[domain.color]
          return (
            <section key={domain.label}>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={cn("size-4 rounded-sm", style.swatchClass)} />
                <h4 className="text-sm font-bold text-foreground">{domain.label}</h4>
                <span
                  className={cn(
                    "text-[10px] rounded-full px-2 py-0.5 border",
                    style.borderTint,
                    style.bgTint,
                    style.textClass,
                  )}
                >
                  {style.label}
                </span>
              </div>
              <ul
                className={cn(
                  "space-y-2.5 pl-6 border-l-2 ml-1",
                  style.borderTint,
                )}
              >
                {domain.tools.map((tool) => (
                  <li key={tool.name} className="text-sm leading-relaxed pl-2">
                    <code className={cn("font-semibold text-xs", style.textClass)}>
                      {tool.name}
                    </code>
                    <span className="text-muted-foreground">: {tool.desc}</span>
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

export function ToolInventoryIntro() {
  return (
    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
      {TOTAL_TOOLS} tools across five Access Control API domains. Colors follow Verkada HEX
      product tokens (green, Access Control orange, blue, yellow, red).
    </p>
  )
}
