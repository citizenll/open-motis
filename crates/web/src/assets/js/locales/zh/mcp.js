// ── MCP page Chinese (Simplified) strings ───────────────────

export default {
	// ── Page header & intro ─────────────────────────────────
	title: "MCP",
	refresh: "刷新",
	introTitle: "MCP（模型上下文协议）",
	introDescription: "工具通过外部能力扩展 AI 代理 \u2014 文件访问、网页获取、数据库查询、代码搜索等。",
	flowAgent: "代理",
	flowMoltis: "Moltis",
	flowLocalProcess: "本地 MCP 进程",
	flowExternalApi: "外部 API",
	introDetail:
		"每个工具在你的机器上作为 <strong>本地进程</strong> 运行（通过 npm/uvx 启动）。Moltis 通过 stdio 连接到它，进程使用你的令牌代你发起外部 API 调用。数据不会发送到第三方 MCP 主机。",

	// ── Security warning ────────────────────────────────────
	securityTitle: "\u26a0\ufe0f MCP 服务器作为本地进程运行 \u2014 启用前请仔细审查",
	securityPrivileges:
		"每个 MCP 服务器以 <strong>你的完整系统权限</strong> 运行。恶意或被入侵的服务器可以读取你的文件、窃取凭据或执行任意命令 \u2014 就像任何本地进程一样。",
	securityReview:
		"<strong>在启用任何 MCP 服务器之前，请仔细检查其源代码</strong>。仅安装来自你信任的作者的服务器，并保持更新。",
	securityTokens: "每个启用的服务器还会将工具定义添加到每个聊天会话的上下文中，消耗 token。仅启用你实际需要的服务器。",

	// ── Featured servers section ─────────────────────────────
	popularTitle: "热门 MCP 服务器",
	browseAll: "在 GitHub 上浏览所有服务器 \u2192",
	configRequired: "需要配置",
	adding: "添加中\u2026",
	confirm: "确认",

	// ── Featured server descriptions ────────────────────────
	featured: {
		filesystemDesc: "具有可配置访问控制的安全文件操作",
		filesystemHint: "最后一个参数是允许访问的目录路径",
		memoryDesc: "基于知识图谱的持久化记忆系统",
		githubDesc: "GitHub API 集成 \u2014 仓库、议题、PR、代码搜索",
		githubHint: "需要 GitHub 个人访问令牌",
	},

	// ── Config form ─────────────────────────────────────────
	argumentsLabel: "参数",
	envVarsLabel: "环境变量（每行一个 KEY=VALUE）",

	// ── Install box (custom server) ─────────────────────────
	addCustomTitle: "添加自定义 MCP 服务器",
	stdioLocal: "Stdio（本地）",
	sseRemote: "SSE（远程）",
	commandLabel: "命令",
	commandPlaceholder: "npx -y mcp-remote https://mcp.example.com/mcp",
	serverUrlLabel: "服务器 URL",
	serverUrlPlaceholder: "https://mcp.example.com/mcp",
	nameLabel: "名称：",
	editableAfterAdding: "（添加后可编辑）",
	hideEnvVars: "隐藏环境变量",
	showEnvVars: "+ 环境变量",
	envVarsPlaceholder: "API_KEY=sk-...",

	// ── Server card ─────────────────────────────────────────
	edit: "编辑",
	restart: "重启",
	toolCount: "{{count}} 个工具",
	toolCountPlural: "{{count}} 个工具",
	tokenEstimate: "约 {{tokens}} tokens",
	loadingTools: "加载工具中\u2026",
	noTools: "此服务器未暴露任何工具。",

	// ── Configured servers section ──────────────────────────
	configuredTitle: "已配置的 MCP 服务器",
	noServersConfigured: "未配置 MCP 工具。从上方热门列表中添加或输入自定义命令。",
	loadingServers: "加载 MCP 服务器中\u2026",

	// ── Toast messages ──────────────────────────────────────
	addedServer: '已添加 MCP 工具 "{{name}}"',
	failedToAdd: '添加 "{{name}}" 失败：{{error}}',
	failedGeneric: "失败：{{error}}",
	restarted: '已重启 "{{name}}"',
	updated: '已更新 "{{name}}"',
	failedToUpdate: "更新失败：{{error}}",
	removed: '已移除 "{{name}}"',
	removeConfirm: '这将停止并移除 MCP 工具 "{{name}}"。此操作无法撤销。',

	newUi: {
		unknownError: "未知错误",
		oauthUrlMissing: "响应中缺少 OAuth URL",
		linearDesc: "带浏览器 OAuth 的远程 Linear MCP 服务",
		linearHint: "添加后，点击启用并在浏览器完成 OAuth",
		transportSseRemote: "sse 远程",
		transportStdioLocal: "stdio 本地",
		missingUrl: "（缺少 URL）",
		flowLocalOrRemote: "本地进程 / 远程 MCP 主机",
		introDetailRemote:
			"Moltis 同时支持 <strong>本地 stdio MCP 进程</strong>（通过 npm/uvx 启动）和 <strong>远程 Streamable HTTP/SSE 服务</strong>。远程服务首次启用时可能会弹出浏览器 OAuth。",
		securityTitleTrust: "⚠️ 启用前请审查 MCP 信任边界",
		securityLocal:
			"本地 stdio 服务以 <strong>你的完整系统权限</strong> 运行。恶意或被入侵的本地服务可以读取文件、窃取凭据或执行命令。",
		securityRemote:
			"远程 SSE 服务可能接收你的工具输入，并在关联外部系统中执行操作。请仅使用可信主机并授予你确实需要的权限范围。",
		securityTokensNew: "每个启用的服务还会向聊天上下文注入工具定义并消耗 token，请仅启用你当前需要的服务。",
		add: "添加",
		configure: "配置",
		cancel: "取消",
		serverUrl: "服务器 URL",
		ifOAuth: "如果服务需要 OAuth，在你启用或重启时浏览器会打开登录。",
		authPending: "OAuth 待处理",
		authConnected: "OAuth 已连接",
		authFailed: "OAuth 失败",
		authNotRequired: "无需 OAuth",
		connectOAuth: "连接 OAuth",
		reAuth: "重新认证",
		enable: "启用",
		disable: "禁用",
		remove: "移除",
		transport: "传输方式",
		localStdioRequiresCommand: "本地 stdio 服务必须提供命令",
		remoteRequiresUrl: "远程 MCP 服务必须提供 URL",
		failedToReauth: "重新认证失败：{{error}}",
		failedToStartOAuth: "启动 OAuth 失败：{{error}}",
		oauthRequired: '“{{name}}” 需要 OAuth',
		oauthStarted: '“{{name}}” 已开始 OAuth',
		failedToToggle: "{{action}}失败：{{error}}",
		stateLabel: "{{state}}",
		toolCountText: "{{count}} 个工具",
		noServersConfiguredRemote:
			"尚未配置 MCP 工具。可从上方热门列表添加，或输入自定义 stdio 命令 / 远程 URL。",
		loadingServers: "加载 MCP 服务器中…",
	},
};
