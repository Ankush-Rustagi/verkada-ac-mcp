import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { TldrCard } from "@/components/tldr-card"
import { BrandColorStrip } from "@/components/brand-color-strip"
import { BuilderCreditBanner } from "@/components/builder-credit-banner"
import { GithubSourceBanner } from "@/components/github-source-banner"
import { UseCasePicker, TypicalFlowPanel } from "@/components/use-case-picker"
import { HowItWorks } from "@/components/how-it-works"
import { ToolInventory, ToolInventoryIntro } from "@/components/tool-inventory"
import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"
import {
  API_DOCS,
  BUILDER_NAME,
  GITHUB_TREE,
  HUB_GRADIENT,
  INTERNALS_TABLE,
  MCP_CONFIG_SNIPPET,
  TOTAL_TOOLS,
  USE_CASES,
} from "@/data/content"
import { cn } from "@/lib/utils"

type Page = "home" | "technical"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold mt-10 mb-3 text-foreground scroll-mt-6 border-b border-border/60 pb-2">
      {children}
    </h2>
  )
}

function HomePage({ onTechnical }: { onTechnical: () => void }) {
  const [useCaseId, setUseCaseId] = useState(USE_CASES[0].id)

  return (
    <div className="space-y-0">
      <GithubSourceBanner className="mb-8" />

      <SectionHeading>What you can do</SectionHeading>
      <p className="text-sm text-muted-foreground mb-4 max-w-prose leading-relaxed">
        Six workflows for PMs, IT, and security in Cursor. Select a card to see the typical tool chain
        below.
      </p>
      <UseCasePicker selectedId={useCaseId} onSelect={setUseCaseId} />
      <div className="mt-5 mb-2">
        <TypicalFlowPanel useCaseId={useCaseId} />
      </div>

      <SectionHeading>How it works</SectionHeading>
      <HowItWorks />

      <SectionHeading>Tool inventory</SectionHeading>
      <ToolInventoryIntro />
      <ToolInventory />

      <div className="mt-10 space-y-4">
        <Callout variant="info" title="Technical details and setup">
          Server internals, auth env vars, npm build, and mcp.json wiring are on a separate page.
        </Callout>
        <button
          type="button"
          onClick={onTechnical}
          className="inline-flex items-center justify-center rounded-lg bg-[#FF8A3D] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Open technical and setup page
        </button>
      </div>
    </div>
  )
}

function TechnicalPage({ onHome }: { onHome: () => void }) {
  return (
    <div className="space-y-0">
      <button
        type="button"
        onClick={onHome}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        ← Back to home
      </button>

      <Callout variant="info" title="Repository">
        <a
          href={GITHUB_TREE}
          className="text-foreground hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          verkada/docs-vibes · 35-custom-ac-mcp
        </a>
      </Callout>

      <h3 className="text-base font-semibold mt-8 mb-2">What it is</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
        TypeScript MCP server (verkada-ac-mcp, v0.1) registering {TOTAL_TOOLS} tools mapped to
        documented Verkada Access Control REST endpoints. Includes a Cursor skill (verkada-api) for
        apidocs.verkada.com when you need endpoints not yet wrapped.
      </p>
      <h3 className="text-base font-semibold mt-6 mb-2">What it is not</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
        Not hosted by Verkada. Not a Command replacement for badge printing or live video. Camera,
        guest, and webhook APIs are out of scope today.
      </p>

      <SectionHeading>Server internals</SectionHeading>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-left">
              <th className="px-4 py-2.5 font-medium text-muted-foreground">File</th>
              <th className="px-4 py-2.5 font-medium text-muted-foreground">Role</th>
            </tr>
          </thead>
          <tbody>
            {INTERNALS_TABLE.map(([file, role]) => (
              <tr key={file} className="border-b border-border/50 last:border-0">
                <td className="px-4 py-2.5 font-mono text-xs text-foreground/90">{file}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading>How it works (step-by-step)</SectionHeading>
      <HowItWorks showDetail />

      <Callout variant="warning" title="Agent safety rails">
        Server instructions: resolve door/user IDs with read tools before writes; confirm with the
        human before destructive operations.
      </Callout>

      <SectionHeading>Setup</SectionHeading>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold mb-2">1. Install and build</h4>
          <CodeBlock lang="bash">{`cd documentation/35-custom-ac-mcp
npm install
npm run build`}</CodeBlock>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">2. Credentials</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Copy .env.example to .env. Set VERKADA_API_KEY and VERKADA_ORG_ID from Command → Admin →
            Organization (API + General).
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">3. Wire MCP (Cursor)</h4>
          <CodeBlock lang="json">{MCP_CONFIG_SNIPPET}</CodeBlock>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-8">
        API reference:{" "}
        <a
          href={API_DOCS}
          className="text-foreground hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          apidocs.verkada.com
        </a>
      </p>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <PageHeader
          title="Access Control MCP"
          subtitle="Talk to Verkada Access Control from Cursor: users, doors, groups, credentials, and schedules as MCP tools on public APIs."
          type="PM Hub · Tool"
          createdDate="May 20, 2026"
          modifiedDate="May 20, 2026"
          gradient={HUB_GRADIENT}
          stats={[
            { label: "MCP tools", value: TOTAL_TOOLS },
            { label: "Use cases", value: USE_CASES.length },
            { label: "API domains", value: 5 },
          ]}
        />

        <BuilderCreditBanner className="mb-6" />

        <BrandColorStrip className="mb-8" />

        <TldrCard
          title="TL;DR"
          items={[
            `${BUILDER_NAME} built a local MCP server that wraps Verkada public Access Control APIs for Cursor and other MCP clients.`,
            "24 tools cover users, doors, groups, credentials, and access levels. Your API key stays on your machine.",
            "Use natural language for onboarding, unlocks, audits, offboarding, and schedule changes. Confirm before destructive writes.",
            `Source and setup live in docs-vibes under 35-custom-ac-mcp.`,
          ]}
        />

        <nav className="flex flex-wrap gap-2 mb-8" aria-label="Page sections">
          <TabButton active={page === "home"} onClick={() => setPage("home")}>
            Home
          </TabButton>
          <TabButton active={page === "technical"} onClick={() => setPage("technical")}>
            Technical and setup
          </TabButton>
        </nav>

        {page === "home" ? (
          <HomePage onTechnical={() => setPage("technical")} />
        ) : (
          <TechnicalPage onHome={() => setPage("home")} />
        )}

        <PageFooter
          author="Hub page by Ankush Rustagi"
          extra={`MCP server by ${BUILDER_NAME}`}
          builtDate="May 2026"
        />
      </main>
    </div>
  )
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-[#FF8A3D] text-white"
          : "border border-border text-muted-foreground hover:text-foreground hover:border-[#FF8A3D]/30",
      )}
    >
      {children}
    </button>
  )
}
