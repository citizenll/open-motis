// ── Channels page English strings ────────────────────────────

export default {
	// ── Page & tabs ─────────────────────────────────────────
	title: "Channels",
	tabs: {
		channels: "Channels",
		senders: "Senders",
	},
	addTelegramBot: "+ Add Telegram Bot",

	// ── Channel card ────────────────────────────────────────
	card: {
		defaultName: "Telegram",
		unknownStatus: "unknown",
		editTitle: "Edit {{name}}",
		removeTitle: "Remove {{name}}",
		noActiveSession: "No active session",
		sessionInfo: "{{label}} ({{count}} msgs)",
		removeConfirm: "Remove {{name}}?",
		fallbackName: "channel",
	},

	// ── Empty states ────────────────────────────────────────
	empty: {
		noBotsConnected: "No Telegram bots connected.",
		addBotHint: 'Click "+ Add Telegram Bot" to connect one using a token from @BotFather.',
		noChannelsConfigured: "No channels configured.",
		noChannelsConnected: "No channels connected.",
	},

	connect: {
		telegram: "Connect Telegram",
		msteams: "Connect Microsoft Teams",
		discord: "Connect Discord",
		slack: "Connect Slack",
		whatsapp: "Connect WhatsApp",
	},

	extra: {
		microsoftTeams: "Microsoft Teams",
		sendOnly: "Send only",
		polling: "Polling",
		gateway: "Gateway",
		socketMode: "Socket Mode",
		webhook: "Webhook",
		webhookHint:
			"Requires a publicly reachable URL. Configure your platform to send events to the endpoint shown below.",
		pollingHint: "Connects automatically via long-polling. No public URL needed.",
		gatewayHint: "Maintains a persistent connection. No public URL needed.",
		socketModeHint: "Connects via Socket Mode. No public URL needed.",
		sendOnlyHint: "This channel is send-only and cannot receive inbound messages.",
		failedToConnectChannel: "Failed to connect channel.",
		connecting: "Connecting…",
		enterAppIdFirst: "Enter App ID / Account ID first.",
		enterValidBaseUrl: "Enter a valid public base URL (example: https://bot.example.com).",
		teamsEndpointGenerated: "Teams endpoint generated",
		clipboardUnavailable: "Clipboard is unavailable",
		messagingEndpointCopied: "Messaging endpoint copied",
		azureAppIdAlias: "Azure App ID or alias",
		azureClientSecret: "Azure client secret",
		sharedSecretHint: "shared secret for ?secret=...",
		messageContentIntent: "Message Content Intent",
		discordAccountPlaceholder: "e.g. my-discord-bot",
		discordTokenLabel: "Discord bot token",
		accountIdRequired: "Account ID is required.",
		botTokenRequired: "Bot Token is required.",
		appTokenRequired: "App Token is required for Socket Mode.",
		signingSecretRequired: "Signing Secret is required for Events API mode.",
		failedConnectSlack: "Failed to connect Slack.",
		slackAccountPlaceholder: "e.g. my-slack-bot",
		slackSigningSecret: "Signing secret from Basic Information",
		failedStartPairing: "Failed to start pairing.",
		startPairing: "Start Pairing",
		whatsappAccountPlaceholder: "e.g. my-whatsapp",
		starting: "Starting…",
		failedUpdateChannel: "Failed to update channel.",
		saving: "Saving…",
		whatsAppConnected: "WhatsApp connected!",
		pairingFailed: "Pairing failed",
	},

	// ── Senders tab ─────────────────────────────────────────
	senders: {
		accountLabel: "Account:",
		noMessagesYet: "No messages received yet for this account.",
		colSender: "Sender",
		colUsername: "Username",
		colMessages: "Messages",
		colLastSeen: "Last Seen",
		colStatus: "Status",
		colAction: "Action",
		otpCopied: "OTP code copied",
		otpPrefix: "OTP: ",
		allowed: "Allowed",
		denied: "Denied",
		approve: "Approve",
		deny: "Deny",
	},

	// ── Allowlist input ─────────────────────────────────────
	allowlistPlaceholder: "Type a username and press Enter",

	// ── Add channel modal ───────────────────────────────────
	add: {
		modalTitle: "Add Telegram Bot",
		helpHeading: "How to create a Telegram bot",
		helpStep1: "1. Open {{link}} in Telegram",
		helpStep2: "2. Send /newbot and follow the prompts to choose a name and username",
		helpStep3: "3. Copy the bot token (looks like 123456:ABC-DEF...) and paste it below",
		helpSeeMore: "See the {{link}} for more details.",
		botFather: "@BotFather",
		telegramBotTutorial: "Telegram Bot Tutorial",
		botUsernameLabel: "Bot username",
		botUsernamePlaceholder: "e.g. my_assistant_bot",
		botTokenLabel: "Bot Token (from @BotFather)",
		botTokenPlaceholder: "123456:ABC-DEF...",
		connectingBtn: "Connecting\u2026",
		connectBtn: "Connect Bot",
		failedToConnect: "Failed to connect bot.",
	},

	// ── Edit channel modal ──────────────────────────────────
	edit: {
		modalTitle: "Edit Telegram Bot",
		saveChangesBtn: "Save Changes",
		failedToUpdate: "Failed to update bot.",
	},

	// ── Shared form labels ──────────────────────────────────
	form: {
		dmPolicyLabel: "DM Policy",
		dmPolicyOpen: "Open (anyone)",
		dmPolicyAllowlist: "Allowlist only",
		dmPolicyDisabled: "Disabled",
		mentionModeLabel: "Group Mention Mode",
		mentionModeMention: "Must @mention bot",
		mentionModeAlways: "Always respond",
		mentionModeNone: "Don't respond in groups",
		defaultModelLabel: "Default Model",
		modelDefault: "(default: {{model}})",
		modelServerDefault: "(server default)",
		dmAllowlistLabel: "DM Allowlist",
	},
};
