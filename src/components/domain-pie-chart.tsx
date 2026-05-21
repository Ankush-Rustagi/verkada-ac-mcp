import { DOMAIN_PIE_FILL, TOOL_DOMAINS } from "@/data/content"
import { cn } from "@/lib/utils"

const SIZE = 200
const R = 80
const CX = SIZE / 2
const CY = SIZE / 2

function slicePath(startAngle: number, endAngle: number): string {
  const x1 = CX + R * Math.cos(startAngle)
  const y1 = CY + R * Math.sin(startAngle)
  const x2 = CX + R * Math.cos(endAngle)
  const y2 = CY + R * Math.sin(endAngle)
  const large = endAngle - startAngle > Math.PI ? 1 : 0
  return `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`
}

export function DomainPieChart({ className }: { className?: string }) {
  const total = TOOL_DOMAINS.reduce((n, d) => n + d.tools.length, 0)
  let angle = -Math.PI / 2

  const slices = TOOL_DOMAINS.map((d) => {
    const sweep = (d.tools.length / total) * Math.PI * 2
    const start = angle
    const end = angle + sweep
    angle = end
    return { domain: d, path: slicePath(start, end) }
  })

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <p className="text-xs font-medium text-muted-foreground mb-3 w-full text-center">
        {total} MCP tools by domain
      </p>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-label={`Pie chart of ${total} tools across five API domains`}
      >
        {slices.map(({ domain, path }) => (
          <path
            key={domain.label}
            d={path}
            fill={DOMAIN_PIE_FILL[domain.color]}
            stroke="oklch(0.145 0 0)"
            strokeWidth={2}
          />
        ))}
        <circle cx={CX} cy={CY} r={36} fill="oklch(0.205 0 0)" />
        <text
          x={CX}
          y={CY - 4}
          textAnchor="middle"
          fill="oklch(0.985 0 0)"
          fontSize={22}
          fontWeight={700}
        >
          {total}
        </text>
        <text
          x={CX}
          y={CY + 14}
          textAnchor="middle"
          fill="oklch(0.708 0 0)"
          fontSize={10}
        >
          tools
        </text>
      </svg>
    </div>
  )
}
