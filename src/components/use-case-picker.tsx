import { USE_CASES, type UseCase } from "@/data/content"
import { cn } from "@/lib/utils"

const CARD_MIN_H = "min-h-[7.5rem]"

interface UseCasePickerProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function UseCasePicker({ selectedId, onSelect }: UseCasePickerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
        "text-left rounded-lg border p-3.5 transition-colors box-border",
        CARD_MIN_H,
        "bg-card hover:border-foreground/25",
        selected
          ? "border-violet-500 shadow-[inset_3px_0_0_0] shadow-violet-500"
          : "border-border",
      )}
    >
      <p
        className={cn(
          "text-sm font-semibold leading-snug mb-1.5",
          selected ? "text-violet-300" : "text-foreground",
        )}
      >
        {uc.title}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed min-h-[2.5rem] mb-2">
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
    <div className="rounded-xl border border-border bg-card p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">Typical flow: {uc.title}</h3>
          <p className="text-sm text-muted-foreground max-w-prose">{uc.summary}</p>
        </div>
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-xs text-violet-300">
          {uc.persona}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {uc.flow.map((step, i) => (
          <div
            key={i}
            className="flex gap-3 rounded-lg border border-border bg-muted/20 p-3.5"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              {i + 1}
            </span>
            <code className="text-xs leading-relaxed text-foreground/90 pt-1">{step}</code>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground mr-1">Tools:</span>
        {uc.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
