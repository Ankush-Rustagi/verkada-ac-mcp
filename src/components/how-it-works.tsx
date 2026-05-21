import { HOW_IT_WORKS_STEPS } from "@/data/content"
import { AC_PRIMARY } from "@/data/theme"
import { cn } from "@/lib/utils"

export function HowItWorks({ showDetail = false }: { showDetail?: boolean }) {
  return (
    <div>
      <ol className="space-y-0">
        {HOW_IT_WORKS_STEPS.map((step, i) => {
          const isLast = i === HOW_IT_WORKS_STEPS.length - 1
          return (
            <li key={step.title} className="flex gap-3">
              <div className="flex flex-col items-center w-7 shrink-0">
                <span
                  className="flex size-6 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: AC_PRIMARY }}
                >
                  {i + 1}
                </span>
                {!isLast && (
                  <span
                    className="w-0.5 flex-1 min-h-4 my-1"
                    style={{ backgroundColor: `${AC_PRIMARY}55` }}
                    aria-hidden
                  />
                )}
              </div>
              <div className={cn("pb-3 flex-1 min-w-0", isLast && "pb-0")}>
                <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                  <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                  <span className="rounded-full border border-border bg-muted/50 px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono">
                    {step.tag}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.context}</p>
                {showDetail && step.detail && (
                  <p className="mt-1 text-[11px] font-mono text-muted-foreground/80 leading-relaxed">
                    {step.detail}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      <div className="flex flex-wrap gap-1.5 mt-3">
        <span className="rounded-full border border-[#0285C8]/30 bg-[#0285C8]/10 px-2 py-0.5 text-[10px] text-[#4FBBE5]">
          Credentials stay local
        </span>
        <span className="rounded-full border border-[#F2B81A]/35 bg-[#F2B81A]/10 px-2 py-0.5 text-[10px] text-[#FFD959]">
          Writes need your OK
        </span>
      </div>
    </div>
  )
}
