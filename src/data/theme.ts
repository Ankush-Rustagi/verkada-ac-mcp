export type DomainColor = "green" | "orange" | "blue" | "yellow" | "red"

export type DomainAccent = {
  swatchClass: string
  borderTint: string
  bgTint: string
  textClass: string
}

const domainFill: Record<DomainColor, string> = {
  green: "#14BA74",
  orange: "#FF8A3D",
  blue: "#2064D6",
  yellow: "#F2B81A",
  red: "#DA5959",
}

export const DOMAIN_ACCENTS: Record<DomainColor, DomainAccent> = {
  green: {
    swatchClass: "bg-[#14BA74]",
    borderTint: "border-[#14BA74]/35",
    bgTint: "bg-[#14BA74]/10",
    textClass: "text-[#4FD19B]",
  },
  orange: {
    swatchClass: "bg-[#FF8A3D]",
    borderTint: "border-[#FF8A3D]/40",
    bgTint: "bg-[#FF8A3D]/10",
    textClass: "text-[#FF8A3D]",
  },
  blue: {
    swatchClass: "bg-[#2064D6]",
    borderTint: "border-[#2064D6]/35",
    bgTint: "bg-[#2064D6]/10",
    textClass: "text-[#5B8DEF]",
  },
  yellow: {
    swatchClass: "bg-[#F2B81A]",
    borderTint: "border-[#F2B81A]/35",
    bgTint: "bg-[#F2B81A]/10",
    textClass: "text-[#FFD959]",
  },
  red: {
    swatchClass: "bg-[#DA5959]",
    borderTint: "border-[#DA5959]/35",
    bgTint: "bg-[#DA5959]/10",
    textClass: "text-[#E58888]",
  },
}

export const DOMAIN_PIE_FILL: Record<DomainColor, string> = domainFill

export const HUB_GRADIENT =
  "radial-gradient(ellipse 70% 60% at 18% 22%, oklch(0.72 0.17 55 / 0.45), transparent), radial-gradient(ellipse 65% 55% at 82% 72%, oklch(0.55 0.18 230 / 0.4), transparent), linear-gradient(135deg, oklch(0.22 0.06 55), oklch(0.22 0.08 250))"

export const AC_PRIMARY = domainFill.orange
