import { USE_CASES, type UseCase } from "@/data/content"
import { AC_PRIMARY } from "@/data/theme"
import { cn } from "@/lib/utils"

const CARD_MIN_H = "min-h-[6rem]"

interface UseCasePickerProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function UseCasePicker({ selectedId, onSelect }: UseCasePickerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {USE_CASES.map((uc) => (
        <UseCaseCard
          key={uc.id}
          uc={uc}
          selected={selectedId === uc.id}
          onSelect={() => onSelect(uc.id)}
        />
      ))}
    </div>
  )
}

function UseCaseCard({
  uc,
  selected,
  onSelect,
}: {
  uc: UseCase
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "text-left rounded-lg border p-3 transition-colors box-border",
        CARD_MIN_H,
        "bg-card hover:border-[#FF8A3D]/30",
        selected
          ? "border-[#FF8A3D]/50 bg-[#FF8A3D]/10 ring-1 ring-[#FF8A3D]/20"
          : "border-border",
      )}
    >
      <p
        className={cn(
          "text-sm font-semibold leading-snug mb-1",
          selected ? "text-[#FF8A3D]" : "text-foreground",
        )}
      >
        {uc.title}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed min-h-[2rem] mb-1.5">
        {uc.hook}
      </p>
      <span className="inline-block rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground">
        {uc.persona}
      </span>
    </button>
  )
}

export function TypicalFlowPanel({ useCaseId }: { useCaseId: string }) {
  const uc = USE_CASES.find((u) => u.id === useCaseId) ?? USE_CASES[0]

  return (
    <div className="rounded-lg border border-border bg-muted/20 p-3 border-t-2 border-t-[#FF8A3D]/50">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-semibold mb-0.5">Typical flow: {uc.title}</h3>
          <p className="text-xs text-muted-foreground max-w-prose leading-relaxed">{uc.summary}</p>
        </div>
        <span className="rounded-full border border-[#FF8A3D]/35 bg-[#FF8A3D]/10 px-2 py-0.5 text-[10px] text-[#FF8A3D]">
          {uc.persona}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        {uc.flow.map((step, i) => (
          <div
            key={i}
            className="flex gap-2 rounded-md border border-border bg-background/50 p-2"
          >
            <span
              className="flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: AC_PRIMARY }}
            >
              {i + 1}
            </span>
            <code className="text-[11px] leading-relaxed text-foreground/90 pt-0.5">{step}</code>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-muted-foreground">Tools:</span>
        {uc.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
