import { CORE_PLATFORM_COLORS } from "@/data/brand"
import { cn } from "@/lib/utils"

export function BrandColorStrip({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-card/80 p-4", className)}>
      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Verkada brand palette (HEX configurator)
      </p>
      <div className="flex flex-wrap gap-3">
        {CORE_PLATFORM_COLORS.map((c) => (
          <div key={c.label} className="flex items-center gap-2 min-w-[7rem]">
            <span
              className={cn(
                "size-4 rounded-sm shrink-0 ring-1 ring-white/10",
                c.highlight && "ring-2 ring-[#FF8A3D]/60",
              )}
              style={{ backgroundColor: c.hex }}
              aria-hidden
            />
            <div className="min-w-0">
              <div
                className={cn(
                  "text-xs font-medium leading-tight",
                  c.highlight ? "text-[#FF8A3D]" : "text-foreground",
                )}
              >
                {c.label}
              </div>
              <div className="text-[10px] text-muted-foreground truncate">{c.product}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
