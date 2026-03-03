export default {
	title: "Agents",
	newAgent: "New Agent",
	introLine1: "Create agent personas with different identities and personalities.",
	introLine2: "Each agent has its own memory and system prompt.",
	loading: "Loading…",
	configOnlyPresets: "Config-only Presets",
	configBadge: "config",

	form: {
		editTitle: "Edit {{name}}",
		createTitle: "Create Agent",
		idLabel: "ID (slug, cannot change later)",
		idPlaceholder: "e.g. writer, coder, researcher",
		nameLabel: "Name",
		namePlaceholder: "Creative Writer",
		emojiLabel: "Emoji",
		themeLabel: "Theme",
		themePlaceholder: "wise owl, chill fox, witty robot…",
		soulLabel: "Soul (system prompt personality)",
		soulPlaceholder: "You are a creative writing assistant…",
		spawnSettings: "Spawn Settings (TOML)",
		spawnSettingsHelp: "Configure how this agent behaves when spawned as a sub-agent via spawn_agent.",
		saving: "Saving…",
		save: "Save",
		create: "Create",
		cancel: "Cancel",
		nameRequired: "Name is required.",
		idRequired: "ID is required.",
		failedToSave: "Failed to save",
		failedToSavePreset: "Failed to save preset TOML",
	},

	card: {
		default: "Default",
		identitySettings: "Identity Settings",
		edit: "Edit",
		delete: "Delete",
		setDefault: "Set Default",
		deleteConfirm: 'Delete agent "{{name}}"? Sessions using this agent will be reassigned to the default agent.',
	},

	preset: {
		hide: "Hide",
		view: "View",
	},

	errors: {
		failedToLoadAgents: "Failed to load agents",
		failedToDelete: "Failed to delete",
		failedToSetDefault: "Failed to set default",
	},
};
