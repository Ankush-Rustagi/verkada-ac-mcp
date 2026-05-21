import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { HubIntroBlock } from "@/components/hub-intro-block"
import { SectionBlock } from "@/components/section-block"
import { UseCasePicker, TypicalFlowPanel } from "@/components/use-case-picker"
import { HowItWorks } from "@/components/how-it-works"
import { ToolInventory } from "@/components/tool-inventory"
import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"
import {
  API_DOCS,
  GITHUB_TREE,
  HUB_GRADIENT,
  INTERNALS_TABLE,
  MCP_CONFIG_SNIPPET,
  TOTAL_TOOLS,
  USE_CASES,
  type HubPage,
} from "@/data/content"
import { cn } from "@/lib/utils"

const TABS: { id: HubPage; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "tools", label: "AC MCP Tools" },
  { id: "technical", label: "Tech" },
  { id: "setup", label: "Setup" },
]

function HomePage() {
  const [useCaseId, setUseCaseId] = useState(USE_CASES[0].id)

  return (
    <div className="space-y-4">
      <SectionBlock
        title="What you can do"
        description="Six workflows in your local AI assistant. Pick a card to see the tool chain."
      >
        <UseCasePicker selectedId={useCaseId} onSelect={setUseCaseId} />
        <div className="mt-3">
          <TypicalFlowPanel useCaseId={useCaseId} />
        </div>
      </SectionBlock>

      <SectionBlock
        title="How it works"
        description="Chat to API on your machine; credentials never leave your laptop."
      >
        <HowItWorks />
      </SectionBlock>
    </div>
  )
}

function ToolsPage() {
  return (
    <SectionBlock title="AC MCP Tools" description={`${TOTAL_TOOLS} tools across five API domains.`}>
      <ToolInventory />
    </SectionBlock>
  )
}

function TechnicalPage() {
  return (
    <div className="space-y-4">
      <SectionBlock title="Overview">
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          TypeScript MCP server (verkada-ac-mcp, v0.1), {TOTAL_TOOLS} tools on documented Access
          Control REST APIs. Includes verkada-api skill for unwrapped endpoints.
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Not hosted by Verkada; not a Command replacement. Camera, guest, and webhook APIs out of
          scope.
        </p>
        <a
          href={GITHUB_TREE}
          className="inline-block text-xs text-[#4FBBE5] hover:underline mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/verkada/docs-vibes/tree/main/35-custom-ac-mcp
        </a>
      </SectionBlock>

      <SectionBlock title="Server internals">
        <div className="overflow-x-auto rounded-lg border border-border -mx-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-left">
                <th className="px-3 py-2 font-medium text-muted-foreground text-xs">File</th>
                <th className="px-3 py-2 font-medium text-muted-foreground text-xs">Role</th>
              </tr>
            </thead>
            <tbody>
              {INTERNALS_TABLE.map(([file, role]) => (
                <tr key={file} className="border-b border-border/50 last:border-0">
                  <td className="px-3 py-2 font-mono text-[11px] text-foreground/90">{file}</td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      <SectionBlock title="How it works (detail)">
        <HowItWorks showDetail />
      </SectionBlock>
    </div>
  )
}

function SetupPage() {
  return (
    <SectionBlock title="Setup">
      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold mb-1.5">1. Install and build</h4>
          <CodeBlock lang="bash">{`cd documentation/35-custom-ac-mcp
npm install
npm run build`}</CodeBlock>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Source:{" "}
            <a
              href={GITHUB_TREE}
              className="text-[#4FBBE5] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              docs-vibes/35-custom-ac-mcp
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold mb-1">2. Credentials</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            .env from .env.example: VERKADA_API_KEY and VERKADA_ORG_ID (Command → Admin →
            Organization).
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold mb-1.5">3. Wire MCP (local host)</h4>
          <CodeBlock lang="json">{MCP_CONFIG_SNIPPET}</CodeBlock>
        </div>
      </div>
      <Callout variant="warning" title="Agent safety rails" className="mt-4">
        Resolve IDs with read tools before writes; confirm before destructive operations.
      </Callout>
      <p className="text-[11px] text-muted-foreground mt-3">
        API:{" "}
        <a href={API_DOCS} className="text-[#4FBBE5] hover:underline" target="_blank" rel="noopener noreferrer">
          apidocs.verkada.com
        </a>
      </p>
    </SectionBlock>
  )
}

function PageContent({ page }: { page: HubPage }) {
  switch (page) {
    case "home":
      return <HomePage />
    case "tools":
      return <ToolsPage />
    case "technical":
      return <TechnicalPage />
    case "setup":
      return <SetupPage />
  }
}

export default function App() {
  const [page, setPage] = useState<HubPage>("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-10">
        <PageHeader
          title="Access Control MCP"
          subtitle="Talk to Verkada Access Control from any local AI assistant (Cursor, Claude Desktop, Copilot, and other MCP hosts): users, doors, groups, credentials, and schedules as MCP tools on public APIs."
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

        <nav className="flex flex-wrap gap-2 mb-4" aria-label="Page sections">
          {TABS.map((tab) => (
            <TabButton key={tab.id} active={page === tab.id} onClick={() => setPage(tab.id)}>
              {tab.label}
            </TabButton>
          ))}
        </nav>

        <HubIntroBlock page={page} className="mb-5" />

        <PageContent page={page} />

        <PageFooter
          author="Hub page by Ankush Rustagi"
          extra="MCP server by Jake Leichtling"
          builtDate="May 2026"
          className="mt-12"
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
