// ── Channels page Chinese (Simplified) strings ──────────────

export default {
	// ── Page & tabs ─────────────────────────────────────────
	title: "频道",
	tabs: {
		channels: "频道",
		senders: "发送者",
	},
	addTelegramBot: "+ 添加 Telegram 机器人",

	// ── Channel card ────────────────────────────────────────
	card: {
		defaultName: "Telegram",
		unknownStatus: "未知",
		editTitle: "编辑 {{name}}",
		removeTitle: "移除 {{name}}",
		noActiveSession: "无活跃会话",
		sessionInfo: "{{label}} ({{count}} 条消息)",
		removeConfirm: "移除 {{name}}？",
		fallbackName: "频道",
	},

	// ── Empty states ────────────────────────────────────────
	empty: {
		noBotsConnected: "未连接 Telegram 机器人。",
		addBotHint: '点击"+ 添加 Telegram 机器人"使用 @BotFather 的令牌连接一个。',
		noChannelsConfigured: "未配置频道。",
		noChannelsConnected: "暂无已连接频道。",
	},

	connect: {
		telegram: "连接 Telegram",
		msteams: "连接 Microsoft Teams",
		discord: "连接 Discord",
		slack: "连接 Slack",
		whatsapp: "连接 WhatsApp",
	},

	extra: {
		microsoftTeams: "Microsoft Teams",
		sendOnly: "仅发送",
		polling: "轮询",
		gateway: "网关",
		socketMode: "Socket 模式",
		webhook: "Webhook",
		webhookHint: "需要公网可访问的 URL。请在对应平台将事件发送到下方显示的端点。",
		pollingHint: "通过长轮询自动连接。无需公网 URL。",
		gatewayHint: "保持持久连接。无需公网 URL。",
		socketModeHint: "通过 Socket Mode 连接。无需公网 URL。",
		sendOnlyHint: "此频道仅发送，无法接收入站消息。",
		failedToConnectChannel: "连接频道失败。",
		connecting: "连接中…",
		enterAppIdFirst: "请先输入 App ID / Account ID。",
		enterValidBaseUrl: "请输入有效的公网基础 URL（例如：https://bot.example.com）。",
		teamsEndpointGenerated: "Teams 端点已生成",
		clipboardUnavailable: "剪贴板不可用",
		messagingEndpointCopied: "消息端点已复制",
		azureAppIdAlias: "Azure App ID 或别名",
		azureClientSecret: "Azure 客户端密钥",
		sharedSecretHint: "用于 ?secret=... 的共享密钥",
		messageContentIntent: "消息内容意图",
		discordAccountPlaceholder: "例如 my-discord-bot",
		discordTokenLabel: "Discord 机器人令牌",
		accountIdRequired: "Account ID 为必填项。",
		botTokenRequired: "Bot Token 为必填项。",
		appTokenRequired: "Socket Mode 需要 App Token。",
		signingSecretRequired: "Events API 模式需要 Signing Secret。",
		failedConnectSlack: "连接 Slack 失败。",
		slackAccountPlaceholder: "例如 my-slack-bot",
		slackSigningSecret: "Basic Information 中的 Signing secret",
		failedStartPairing: "启动配对失败。",
		startPairing: "开始配对",
		whatsappAccountPlaceholder: "例如 my-whatsapp",
		starting: "启动中…",
		failedUpdateChannel: "更新频道失败。",
		saving: "保存中…",
		whatsAppConnected: "WhatsApp 已连接！",
		pairingFailed: "配对失败",
	},

	// ── Senders tab ─────────────────────────────────────────
	senders: {
		accountLabel: "账户：",
		noMessagesYet: "此账户尚未收到消息。",
		colSender: "发送者",
		colUsername: "用户名",
		colMessages: "消息",
		colLastSeen: "最后活跃",
		colStatus: "状态",
		colAction: "操作",
		otpCopied: "OTP 验证码已复制",
		otpPrefix: "OTP：",
		allowed: "已允许",
		denied: "已拒绝",
		approve: "批准",
		deny: "拒绝",
	},

	// ── Allowlist input ─────────────────────────────────────
	allowlistPlaceholder: "输入用户名并按回车",

	// ── Add channel modal ───────────────────────────────────
	add: {
		modalTitle: "添加 Telegram 机器人",
		helpHeading: "如何创建 Telegram 机器人",
		helpStep1: "1. 在 Telegram 中打开 {{link}}",
		helpStep2: "2. 发送 /newbot 并按提示选择名称和用户名",
		helpStep3: "3. 复制机器人令牌（格式如 123456:ABC-DEF...）并粘贴到下方",
		helpSeeMore: "详见 {{link}}。",
		botFather: "@BotFather",
		telegramBotTutorial: "Telegram 机器人教程",
		botUsernameLabel: "机器人用户名",
		botUsernamePlaceholder: "例如 my_assistant_bot",
		botTokenLabel: "机器人令牌（来自 @BotFather）",
		botTokenPlaceholder: "123456:ABC-DEF...",
		connectingBtn: "连接中\u2026",
		connectBtn: "连接机器人",
		failedToConnect: "连接机器人失败。",
	},

	// ── Edit channel modal ──────────────────────────────────
	edit: {
		modalTitle: "编辑 Telegram 机器人",
		saveChangesBtn: "保存更改",
		failedToUpdate: "更新机器人失败。",
	},

	// ── Shared form labels ──────────────────────────────────
	form: {
		dmPolicyLabel: "私信策略",
		dmPolicyOpen: "开放（任何人）",
		dmPolicyAllowlist: "仅允许名单",
		dmPolicyDisabled: "已禁用",
		mentionModeLabel: "群组提及模式",
		mentionModeMention: "必须 @提及机器人",
		mentionModeAlways: "始终回复",
		mentionModeNone: "不在群组中回复",
		defaultModelLabel: "默认模型",
		modelDefault: "（默认：{{model}}）",
		modelServerDefault: "（服务器默认）",
		dmAllowlistLabel: "私信允许名单",
	},
};
