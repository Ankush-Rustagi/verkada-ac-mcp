import { cn } from "@/lib/utils"

export function SectionBlock({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("rounded-xl border border-border bg-card p-4 md:p-5", className)}>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="text-xs text-muted-foreground mt-1 mb-3 leading-relaxed max-w-prose">
          {description}
        </p>
      ) : (
        <div className="mb-2" />
      )}
      {children}
    </section>
  )
}
