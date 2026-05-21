export const BUILDER_NAME = "Jake Leichtling"
export const BUILDER_EMAIL = "jake.leichtling@verkada.com"

export const GITHUB_TREE =
  "https://github.com/verkada/docs-vibes/tree/main/35-custom-ac-mcp"

export const API_DOCS = "https://apidocs.verkada.com/reference/access-user-guide"

export type DomainColor = "blue" | "green" | "purple" | "orange" | "red"

export type ToolEntry = { name: string; desc: string }

export type ToolDomain = {
  label: string
  color: DomainColor
  tools: ToolEntry[]
}

export const TOOL_DOMAINS: ToolDomain[] = [
  {
    label: "Users",
    color: "blue",
    tools: [
      { name: "get_access_users", desc: "List all users; optionally include visitors" },
      { name: "get_access_user", desc: "Get one user by user_id, external_id, or email" },
      { name: "create_user", desc: "Create an org user" },
      { name: "set_access_user_pin", desc: "Set the door PIN for a user" },
    ],
  },
  {
    label: "Doors",
    color: "green",
    tools: [
      { name: "get_doors", desc: "List doors; filter by door_ids or site_ids" },
      { name: "unlock_door", desc: "Remotely unlock a door on behalf of a user" },
    ],
  },
  {
    label: "Groups",
    color: "purple",
    tools: [
      { name: "get_access_groups", desc: "List all access groups" },
      { name: "get_access_group", desc: "Get one access group" },
      { name: "create_access_group", desc: "Create an access group" },
      { name: "delete_access_group", desc: "Delete an access group" },
      { name: "get_group_members", desc: "List members of a group" },
      { name: "add_user_to_group", desc: "Add a user to a group" },
      { name: "remove_user_from_group", desc: "Remove a user from a group" },
    ],
  },
  {
    label: "Credentials",
    color: "orange",
    tools: [
      { name: "add_access_card", desc: "Add a card credential to a user" },
      { name: "activate_access_card", desc: "Activate a card credential" },
      { name: "delete_access_card", desc: "Delete a card credential" },
      { name: "add_license_plate", desc: "Add a license plate credential" },
      { name: "delete_license_plate", desc: "Delete a license plate credential" },
    ],
  },
  {
    label: "Access levels",
    color: "red",
    tools: [
      { name: "get_access_levels", desc: "List all access levels" },
      { name: "get_access_level", desc: "Get one access level by ID" },
      { name: "create_access_level", desc: "Create an access level" },
      { name: "delete_access_level", desc: "Delete an access level" },
      { name: "add_group_to_access_level", desc: "Grant a group access to a level" },
      { name: "remove_group_from_access_level", desc: "Revoke a group's access from a level" },
    ],
  },
]

export const TOTAL_TOOLS = TOOL_DOMAINS.reduce((n, d) => n + d.tools.length, 0)

export type UseCase = {
  id: string
  title: string
  persona: string
  hook: string
  summary: string
  flow: string[]
  tools: string[]
}

export const USE_CASES: UseCase[] = [
  {
    id: "onboard",
    title: "Employee onboarding",
    persona: "IT / Facilities",
    hook: "Provision access from chat, not admin clicks.",
    summary:
      "Create the user, assign groups, set PIN, and activate a card in one guided session.",
    flow: [
      "create_user",
      "add_user_to_group",
      "set_access_user_pin",
      "add_access_card → activate_access_card",
    ],
    tools: ["create_user", "add_user_to_group", "set_access_user_pin", "add_access_card"],
  },
  {
    id: "unlock",
    title: "Remote door unlock",
    persona: "Security / Front desk",
    hook: "Lockout or after-hours entry without opening Command.",
    summary: "Resolve door and user by name, then unlock on their behalf.",
    flow: ["get_doors", "get_access_user", "unlock_door"],
    tools: ["get_doors", "get_access_user", "unlock_door"],
  },
  {
    id: "audit",
    title: "Access audit",
    persona: "PM / Security ops",
    hook: "Who has access to what, answered in minutes.",
    summary: "Chain read-only tools across users, groups, members, and levels.",
    flow: [
      "get_access_users",
      "get_access_groups → get_group_members",
      "get_access_levels → get_access_level",
    ],
    tools: ["get_access_users", "get_access_groups", "get_group_members", "get_access_levels"],
  },
  {
    id: "offboard",
    title: "Contractor offboarding",
    persona: "IT",
    hook: "Revoke badges and group access in one pass.",
    summary: "Remove from groups and delete cards or license plates after lookup by email.",
    flow: ["get_access_user", "remove_user_from_group", "delete_access_card / delete_license_plate"],
    tools: ["remove_user_from_group", "delete_access_card", "delete_license_plate"],
  },
  {
    id: "levels",
    title: "Schedule changes",
    persona: "Facilities / PM",
    hook: "Door schedules without the Access Levels UI maze.",
    summary: "Create levels and attach groups after resolving door and group IDs.",
    flow: ["get_doors + get_access_groups", "create_access_level", "add_group_to_access_level"],
    tools: ["create_access_level", "add_group_to_access_level", "get_doors"],
  },
  {
    id: "pm-agent",
    title: "PM + agent workflows",
    persona: "Product / AI users",
    hook: "Ground escalations and runbooks in live org data.",
    summary: "Pair docs-vibes context with MCP reads; confirm before any destructive write.",
    flow: ["verkada-api skill + README", "Live JSON from your org", "Human confirm on deletes"],
    tools: ["get_access_users", "get_doors", "get_access_groups"],
  },
]

export type HowItWorksStep = {
  title: string
  tag: string
  context: string
  detail?: string
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "You ask in natural language",
    tag: "Cursor / Claude Desktop",
    context:
      "You describe the outcome in chat: unlock a door, list users in a group, or audit who has access. The AI interprets intent and picks an MCP tool name plus arguments.",
    detail:
      'Example: "Unlock the main entrance for jane@company.com" → unlock_door after resolving IDs.',
  },
  {
    title: "MCP client spawns the local server",
    tag: "~/.cursor/mcp.json",
    context:
      "Cursor (or another MCP host) starts verkada-ac-mcp as a child process over stdio. Your API key and org ID pass through the env block in config. Nothing runs on Verkada infrastructure.",
    detail: "command: node · args: dist/index.js · env: VERKADA_API_KEY, VERKADA_ORG_ID",
  },
  {
    title: "MCP server routes the tool call",
    tag: "verkada-ac-mcp · 24 tools",
    context:
      "The Node server receives a structured tool invocation (e.g. get_doors, add_user_to_group). It maps to one of five modules: users, doors, groups, credentials, or access levels.",
    detail:
      "src/index.ts registers tools; server instructions tell the model to read before write and confirm deletes.",
  },
  {
    title: "Tool handler validates and executes",
    tag: "src/tools/*.ts",
    context:
      "Inputs are validated (Zod schemas). Read tools fetch lists or single records so the agent can resolve human names to UUIDs before any write.",
    detail: "Destructive calls (delete, remove) should only run after you confirm in chat.",
  },
  {
    title: "HTTP client authenticates the request",
    tag: "src/client.ts",
    context:
      "client.ts exchanges your long-lived API key for a short-lived JWT via POST /token, caches it for ~30 minutes, then attaches x-verkada-auth on every REST call.",
    detail: "EU orgs set VERKADA_BASE_URL=https://api.eu.verkada.com",
  },
  {
    title: "Verkada Access Control API responds",
    tag: "api.verkada.com/access/v1",
    context:
      "The public REST API performs the operation in your org (list users, unlock door, update group membership, etc.). JSON flows back through the MCP server to the agent, which summarizes for you.",
    detail: "Same APIs documented at apidocs.verkada.com; MCP is a thin, agent-friendly wrapper.",
  },
]

export const INTERNALS_TABLE: [string, string][] = [
  ["src/index.ts", "MCP bootstrap, stdio transport, registers tool modules"],
  ["src/client.ts", "x-api-key → token, 30m cache, verkadaRequest()"],
  ["src/tools/users.ts", "User list/get/create, PIN"],
  ["src/tools/doors.ts", "List doors, remote unlock"],
  ["src/tools/groups.ts", "Groups and membership CRUD"],
  ["src/tools/credentials.ts", "Cards and license plates"],
  ["src/tools/access-levels.ts", "Schedules and group grants"],
]

export const MCP_CONFIG_SNIPPET = `"verkada-ac": {
  "command": "node",
  "args": ["/absolute/path/to/35-custom-ac-mcp/dist/index.js"],
  "env": {
    "VERKADA_API_KEY": "...",
    "VERKADA_ORG_ID": "..."
  }
}`

export const HUB_GRADIENT =
  "radial-gradient(ellipse 70% 60% at 25% 25%, oklch(0.55 0.22 290 / 0.9), transparent), radial-gradient(ellipse 60% 50% at 80% 80%, oklch(0.65 0.22 340 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.08 290), oklch(0.2 0.1 320))"

export const DOMAIN_SWATCH: Record<DomainColor, string> = {
  blue: "bg-sky-500",
  green: "bg-emerald-500",
  purple: "bg-violet-500",
  orange: "bg-amber-500",
  red: "bg-rose-500",
}

export const DOMAIN_PIE_FILL: Record<DomainColor, string> = {
  blue: "#38bdf8",
  green: "#34d399",
  purple: "#a78bfa",
  orange: "#fbbf24",
  red: "#fb7185",
}
