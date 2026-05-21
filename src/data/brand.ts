/**
 * Verkada brand hex tokens from HEX Brand Token Configurator (hex-styling-configurator).
 * Product line colors + extended palette used for charts and accents on this page.
 */

export const VERKADA_HEX = {
  cyan500: "#0285C8",
  cyan600: "#007FAF",
  accessControl: "#FF8A3D",
  green500: "#14BA74",
  red500: "#DA5959",
  yellow600: "#F2B81A",
  yellow500: "#FFD959",
  blueExtended: "#2064D6",
  violet500: "#8A38F5",
  turquoise500: "#0FC0B5",
} as const

export type CorePlatformColor = {
  hex: string
  label: string
  product: string
  highlight?: boolean
}

/** Core platform strip (green, red, yellow, blue) plus Access Control orange for this MCP. */
export const CORE_PLATFORM_COLORS: CorePlatformColor[] = [
  { hex: VERKADA_HEX.green500, label: "Green", product: "Environmental / status" },
  { hex: VERKADA_HEX.red500, label: "Red", product: "Alarms" },
  { hex: VERKADA_HEX.yellow600, label: "Yellow", product: "Intercom" },
  { hex: VERKADA_HEX.blueExtended, label: "Blue", product: "Extended palette" },
  { hex: VERKADA_HEX.accessControl, label: "Access Control", product: "This MCP", highlight: true },
]

export type DomainColor = "green" | "orange" | "blue" | "yellow" | "red"

export type DomainStyle = {
  hex: string
  label: string
  swatchClass: string
  borderTint: string
  bgTint: string
  textClass: string
}

/** Tool-domain colors mapped to brand tokens (5 domains, 5 hues). */
export const DOMAIN_STYLE: Record<DomainColor, DomainStyle> = {
  green: {
    hex: VERKADA_HEX.green500,
    label: "Green · Users",
    swatchClass: "bg-[#14BA74]",
    borderTint: "border-[#14BA74]/35",
    bgTint: "bg-[#14BA74]/10",
    textClass: "text-[#4FD19B]",
  },
  orange: {
    hex: VERKADA_HEX.accessControl,
    label: "Orange · Doors",
    swatchClass: "bg-[#FF8A3D]",
    borderTint: "border-[#FF8A3D]/40",
    bgTint: "bg-[#FF8A3D]/10",
    textClass: "text-[#FF8A3D]",
  },
  blue: {
    hex: VERKADA_HEX.blueExtended,
    label: "Blue · Groups",
    swatchClass: "bg-[#2064D6]",
    borderTint: "border-[#2064D6]/35",
    bgTint: "bg-[#2064D6]/10",
    textClass: "text-[#5B8DEF]",
  },
  yellow: {
    hex: VERKADA_HEX.yellow600,
    label: "Yellow · Credentials",
    swatchClass: "bg-[#F2B81A]",
    borderTint: "border-[#F2B81A]/35",
    bgTint: "bg-[#F2B81A]/10",
    textClass: "text-[#FFD959]",
  },
  red: {
    hex: VERKADA_HEX.red500,
    label: "Red · Access levels",
    swatchClass: "bg-[#DA5959]",
    borderTint: "border-[#DA5959]/35",
    bgTint: "bg-[#DA5959]/10",
    textClass: "text-[#E58888]",
  },
}

export const DOMAIN_PIE_FILL: Record<DomainColor, string> = {
  green: VERKADA_HEX.green500,
  orange: VERKADA_HEX.accessControl,
  blue: VERKADA_HEX.blueExtended,
  yellow: VERKADA_HEX.yellow600,
  red: VERKADA_HEX.red500,
}

/** Page hero: Access Control orange + brand cyan. */
export const HUB_GRADIENT =
  "radial-gradient(ellipse 70% 60% at 18% 22%, oklch(0.72 0.17 55 / 0.45), transparent), radial-gradient(ellipse 65% 55% at 82% 72%, oklch(0.55 0.18 230 / 0.4), transparent), linear-gradient(135deg, oklch(0.22 0.06 55), oklch(0.22 0.08 250))"

export const AC_PRIMARY = VERKADA_HEX.accessControl
