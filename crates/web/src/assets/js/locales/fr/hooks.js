// ── Hooks page English strings ───────────────────────────────

export default {
	// ── Page header & intro ─────────────────────────────────
	title: "Hooks",
	reloading: "Reloading\u2026",
	introDescriptionBody:
		"run shell commands in response to lifecycle events (tool calls, messages, sessions, etc.). They live in",
	introDescriptionSuffix: "directories.",
	introHookMdPrefix: "Each hook is a directory containing a",
	introHookMdMiddle:
		"file with TOML frontmatter (events, command, requirements) and optional documentation. Edit the content below and click",
	introHookMdSuffix: "to update.",
	flowEvent: "Event",
	flowHookScript: "Hook Script",
	flowResult: "Continue / Modify / Block",

	// ── Empty & loading states ──────────────────────────────
	emptyStatePrefix: "No hooks discovered. Create a",
	emptyStateSuffix: "to get started.",
	loadingHooks: "Loading hooks\u2026",

	// ── Status badges ───────────────────────────────────────
	statusIneligible: "Ineligible",
	statusDisabled: "Disabled",
	statusActive: "Active",

	// ── Source badges ───────────────────────────────────────
	sourceProject: "Project",
	sourceUser: "User",
	sourceBuiltin: "Built-in",

	// ── Card detail labels ──────────────────────────────────
	eventsLabel: "Events:",
	commandLabel: "Command:",
	priorityLabel: "Priority: {{value}}",
	timeoutLabel: "Timeout: {{value}}s",
	clickToCopyPath: "Click to copy path",

	// ── Card stats ──────────────────────────────────────────
	callCount: "{{count}} calls",
	callCountTitle: "Calls",
	failedCount: "{{count}} failed",
	avgLatency: "{{value}}ms avg",

	// ── Missing requirements ────────────────────────────────
	missingOs: "OS not supported",
	missingBins: "Missing: {{bins}}",
	missingEnv: "Env: {{vars}}",

	// ── Tabs ────────────────────────────────────────────────
	tabPreview: "Preview",
	tabSource: "Source",
	buttonEnable: "Enable",
	buttonDisable: "Disable",
	buttonSave: "Save",
	buttonReload: "Reload",
	loading: "Loading…",
	saving: "Saving…",
	reloading: "Reloading…",

	// ── Built-in card ───────────────────────────────────────
	viewSourceOnGitHub: "View source on GitHub \u2197",

	emptyStateFull:
		"No hooks discovered. Create a HOOK.md file in .moltis/hooks/my-hook/ or ~/.moltis/hooks/my-hook/ to get started.",

	// ── Toasts ──────────────────────────────────────────────
	hookEnabled: 'Hook "{{name}}" enabled',
	hookDisabled: 'Hook "{{name}}" disabled',
	failedAction: "Failed: {{error}}",
	savedHook: 'Saved "{{name}}"',
	failedToSave: "Failed to save: {{error}}",
	pathCopied: "Path copied",
	hooksReloaded: "Hooks reloaded",
	reloadFailed: "Reload failed: {{error}}",
	unknownError: "unknown error",
};
