// ── Lightweight WebUI i18n runtime ─────────────────────────
//
// Supports:
// - Browser-language default (first load)
// - User override via localStorage
// - Global DOM translation (en <-> zh-CN)
// - Runtime locale switch events

export var LOCALE_STORAGE_KEY = "moltis-ui-locale";
export var SUPPORTED_LOCALES = ["en", "zh-CN"];

var LOCALE_LABELS = {
	en: "English",
	"zh-CN": "简体中文",
};

var KEY_STRINGS = {
	en: {
		"settings.language.label": "WebUI Language",
		"settings.language.help": "Default follows your browser language on first load.",
	},
	"zh-CN": {
		"settings.language.label": "WebUI 语言",
		"settings.language.help": "首次加载时默认跟随浏览器语言。",
	},
};

// Exact-phrase translations used by the automatic DOM translator.
var ZH_TEXT_MAP = {
	Settings: "设置",
	"Report issue": "反馈问题",
	"Sign out": "退出登录",
	Sessions: "会话",
	Menu: "菜单",
	"Open menu": "打开菜单",
	"Process memory · System free memory": "进程内存 · 系统可用内存",
	"Light theme": "浅色主题",
	"System theme": "跟随系统主题",
	"Dark theme": "深色主题",
	disconnected: "未连接",
	"Back to chat sessions": "返回聊天会话",
	"Back to Chats": "返回聊天",
	"Hide Sections": "隐藏分区",
	Sections: "分区",
	General: "通用",
	Identity: "身份",
	Environment: "环境",
	Memory: "记忆",
	Notifications: "通知",
	Crons: "定时任务",
	Heartbeat: "心跳",
	Security: "安全",
	Tailscale: "Tailscale",
	Integrations: "集成",
	Channels: "渠道",
	Hooks: "钩子",
	LLMs: "LLM",
	MCP: "MCP",
	Skills: "技能",
	Voice: "语音",
	Systems: "系统",
	Terminal: "终端",
	Sandboxes: "沙箱",
	Monitoring: "监控",
	Logs: "日志",
	GraphQL: "GraphQL",
	Configuration: "配置",
	"Authentication is disabled. Anyone with network access can control moltis and your computer.":
		"认证已关闭。任何可访问网络的人都可以控制 moltis 和你的电脑。",
	"Set up authentication": "设置认证",
	"An update is available": "有可用更新",
	"View release": "查看发布",
	Dismiss: "忽略",
	Install: "安装",
	"Not now": "暂不",
	"All sessions": "全部会话",
	"Search projects…": "搜索项目…",
	"Search sessions…": "搜索会话…",
	"New session": "新建会话",
	Clear: "清空",
	"Clear all sessions": "清空全部会话",
	"Toggle sessions": "切换会话面板",
	"Type a message...": "输入消息...",
	"Type a message or use": "输入消息，或使用",
	"for commands": "查看命令",
	"No LLMs Connected": "未连接 LLM",
	"You have not connected any LLM providers yet. Add one to start chatting.": "你还没有连接任何 LLM 提供商。先添加一个再开始聊天。",
	"Go to LLMs": "前往 LLM 设置",
	"Install with any of:": "可使用以下方式安装：",
	"Chat-only mode": "仅聊天模式",
	Model: "模型",
	"Tools disabled — file operations, shell commands, and memory search are not available.":
		"工具已禁用：文件操作、Shell 命令和记忆搜索不可用。",
	"Command requires approval:": "命令需要审批：",
	Allow: "允许",
	Deny: "拒绝",
	"running…": "运行中…",
	expired: "已过期",
	Allowed: "已允许",
	Denied: "已拒绝",
	"Loading…": "加载中…",
	"System requirements met": "系统要求已满足",
	"System requirements not met": "系统要求未满足",
	Detected: "检测到",
	"Welcome! Set up your agent's identity to get started.": "欢迎！先设置你的代理身份开始使用。",
	Agent: "代理",
	"Saved to": "已保存到",
	"Name *": "名称 *",
	Emoji: "表情",
	Theme: "主题",
	"e.g. Rex": "例如：Rex",
	"e.g. wise owl, chill fox": "例如：智慧猫头鹰、慵懒狐狸",
	"Your name *": "你的名字 *",
	"e.g. Alice": "例如：Alice",
	Soul: "灵魂设定",
	"Good default": "使用默认",
	Reset: "重置",
	"Save changes": "保存更改",
	"Reload now": "立即刷新",
	"Voice settings are unavailable in this build. Start a binary with the voice feature enabled to configure STT/TTS providers.":
		"当前构建未启用语音设置。请使用启用 voice 特性的二进制启动，以配置 STT/TTS 提供商。",
	"Default follows your browser language on first load.": "首次加载时默认跟随浏览器语言。",
	"WebUI Language": "WebUI 语言",
	"Back to Chats": "返回聊天",
	"No devices subscribed yet.": "尚无已订阅设备。",
	"Running on:": "当前分支：",
	"Install with any of": "可使用以下方式安装",
	"Saved to": "已保存到",
	"in your workspace root.": "（位于工作区根目录）。",
	User: "用户",
	"Your name *": "你的名字 *",
	"Good default": "使用默认",
	Reset: "重置",
	"Save changes": "保存更改",
	Save: "保存",
	Saving: "保存中",
	"Saving…": "保存中…",
	Saved: "已保存",
	"Failed to save": "保存失败",
	"Failed to save emoji": "保存表情失败",
	"Agent name is required.": "代理名称不能为空。",
	"Your name is required.": "你的名字不能为空。",
	"Personality and tone injected into every conversation. Saved to": "该设定会注入到每次对话。已保存到",
	"Leave empty for the default.": "留空则使用默认值。",
	"favicon updates requires reload and may be cached for minutes,": "favicon 更新需要刷新，且可能会被缓存几分钟，",
	"requires reload": "需要刷新",
	"Environment Variables": "环境变量",
	"No environment variables set.": "尚未设置环境变量。",
	"Add Variable": "添加变量",
	"New value": "新值",
	Update: "更新",
	Delete: "删除",
	"Variable saved.": "变量已保存。",
	"Key is required.": "键名不能为空。",
	"Key must contain only letters, digits, and underscores.": "键名只能包含字母、数字和下划线。",
	Security: "安全",
	"Current password": "当前密码",
	Password: "密码",
	"New password": "新密码",
	"Confirm password": "确认密码",
	"Set Password": "设置密码",
	"Change Password": "修改密码",
	"Change password": "修改密码",
	"Set password": "设置密码",
	"Password changed.": "密码已修改。",
	"Password set.": "密码已设置。",
	"Passkeys will work when visiting:": "Passkey 可在以下地址使用：",
	Passkeys: "Passkey",
	Rename: "重命名",
	"Passkey name (e.g. MacBook Touch ID)": "Passkey 名称（例如 MacBook Touch ID）",
	"No passkeys registered.": "尚未注册 Passkey。",
	"API Keys": "API 密钥",
	"No API keys.": "暂无 API 密钥。",
	"Copy this key now. It won't be shown again.": "请立即复制此密钥，后续将不再显示。",
	"Key label (e.g. CLI tool)": "密钥标签（例如 CLI 工具）",
	"Full access (all permissions)": "完全访问（所有权限）",
	"Select permissions:": "选择权限：",
	"View data and status": "查看数据与状态",
	"Create, update, delete": "创建、更新、删除",
	"Handle exec approvals": "处理执行审批",
	"Device/node pairing": "设备/节点配对",
	"Danger Zone": "危险区域",
	"Yes, remove all auth": "是，移除所有认证",
	"GraphQL server": "GraphQL 服务",
	"GraphiQL Playground": "GraphiQL 控制台",
	Configuration: "配置",
	Warnings: "警告",
	"Reset to defaults": "恢复默认",
	"Load Template": "加载模板",
	Apply: "应用",
	Testing: "测试中",
	"Loading context…": "正在加载上下文…",
	"Building full context…": "正在构建完整上下文…",
	"Failed to load context": "加载上下文失败",
	"Failed to build context": "构建完整上下文失败",
	"Compacting conversation…": "正在压缩对话…",
	"Compact failed": "压缩失败",
	"Context failed": "上下文获取失败",
	"Request failed": "请求失败",
	Copy: "复制",
	"Copied!": "已复制！",
	Download: "下载",
	"LLM output": "LLM 输出",
	"Hide LLM output": "隐藏 LLM 输出",
	"Search models…": "搜索模型…",
	"Toggle sandbox mode": "切换沙箱模式",
	"More controls": "更多控制",
	"Sandbox image": "沙箱镜像",
	"Toggle MCP tools for this session": "切换本会话 MCP 工具",
	"Show context debug info": "显示上下文调试信息",
	"Show full LLM context (system prompt + history)": "显示完整 LLM 上下文（系统提示词 + 历史）",
	"Command prompt symbol": "命令提示符",
	"Click to start recording": "点击开始录音",
	Send: "发送",
	Reasoning: "推理",
	Queued: "已排队",
	"Cancel all queued": "取消全部排队",
	"MCP off": "MCP 关闭",
	"MCP tools enabled — click to disable for this session": "MCP 工具已启用，点击可为本会话禁用",
	"MCP tools disabled — click to enable for this session": "MCP 工具已禁用，点击可为本会话启用",
	Session: "会话",
	Key: "键",
	Messages: "消息",
	Model: "模型",
	Provider: "提供商",
	Label: "标签",
	"Tool Support": "工具支持",
	Disabled: "关闭",
	Enabled: "开启",
	Project: "项目",
	Name: "名称",
	Directory: "目录",
	"System Prompt": "系统提示词",
	"No project bound to this session": "当前会话未绑定项目",
	Tools: "工具",
	"No tools registered": "未注册工具",
	"Skills & Plugins": "技能与插件",
	"No skills or plugins enabled": "未启用技能或插件",
	"MCP Tools": "MCP 工具",
	"MCP tools disabled — model doesn't support tool calling": "MCP 工具已禁用：当前模型不支持工具调用",
	"MCP tools disabled for this session": "本会话已禁用 MCP 工具",
	"No MCP tools running": "没有运行中的 MCP 工具",
	Sandbox: "沙箱",
	"Command route": "命令路由",
	Backend: "后端",
	Mode: "模式",
	Scope: "范围",
	"Workspace Mount": "工作区挂载",
	Image: "镜像",
	Container: "容器",
	"Token Usage": "Token 使用",
	"Session input": "会话输入",
	"Session output": "会话输出",
	"Session total": "会话总计",
	"Current input": "当前输入",
	"Current output": "当前输出",
	"Current total": "当前总计",
	"Estimated next input": "预计下次输入",
	"Context left": "剩余上下文",
	"Before compact": "压缩前",
	"After compact": "压缩后",
	Status: "状态",
	"Total tokens": "总 Token",
	"Context usage": "上下文使用率",
	"Conversation history replaced with a summary": "对话历史已替换为摘要",
	"Conversation compacted": "对话已压缩",
	Transcribing: "转写中",
	"Transcribing...": "转写中...",
	"Playing audio...": "正在播放音频...",
	"Speech-to-Text (Voice Input)": "语音转文字（语音输入）",
	"Text-to-Speech (Audio Responses)": "文字转语音（语音回复）",
	Connecting: "连接中",
	"Connecting…": "连接中…",
	"Testing…": "测试中…",
	"Provide an API key or at least one voice setting.": "请提供 API Key，或至少配置一项语音设置。",
	"Failed to save key": "保存密钥失败",
	"Failed to fetch ElevenLabs voice catalog.": "获取 ElevenLabs 语音目录失败。",
	"Checking system requirements…": "正在检查系统要求…",
	yes: "是",
	no: "否",
	default: "默认",
	unknown: "未知",
	"(unnamed)": "（未命名）",
	"Hello,": "你好，",
	"I'm": "我是",
	". How can I help?": "。我可以帮你做什么？",
	"How can I help?": "我可以帮你做什么？",
	"Cron Jobs": "定时任务",
	"+ Add Job": "+ 新建任务",
	"No cron jobs configured.": "尚未配置任何定时任务。",
	Running: "运行中",
	Stopped: "已停止",
	"Run Now": "立即运行",
	"Recent Runs": "最近运行",
	"Run History": "运行历史",
	"No runs yet.": "暂无运行记录。",
	Schedule: "调度",
	Delivery: "投递",
	Execution: "执行方式",
	"Next Run": "下次运行",
	Actions: "操作",
	Edit: "编辑",
	Run: "运行",
	History: "历史",
	Close: "关闭",
	Create: "创建",
	Cancel: "取消",
	"Context left before auto-compact": "自动压缩前剩余上下文",
	"Tools: disabled": "工具: 已禁用",
	"Execute:": "执行:",
	sandboxed: "沙箱",
	host: "主机",
	"Run shell command…": "执行 Shell 命令…",
	"Command input": "命令输入",
	"Chat input": "聊天输入",
	"At least 8 characters": "至少 8 个字符",
	Confirm: "确认",
	"Confirm password": "确认密码",
	"Confirm new password": "确认新密码",
	"Set Password": "设置密码",
	"Set password": "设置密码",
	"Change Password": "修改密码",
	"Change password": "修改密码",
	"Current password": "当前密码",
	"New password": "新密码",
	"Password must be at least 8 characters.": "密码至少 8 个字符。",
	"Passwords do not match.": "两次输入的密码不一致。",
	Passkey: "Passkey",
	Passkeys: "Passkey",
	"Add passkey": "添加 Passkey",
	"No passkeys registered.": "尚未注册 Passkey。",
	"Passkey added.": "Passkey 已添加。",
	"Passkeys require a domain name. Use localhost instead of": "Passkey 需要域名。请使用 localhost，当前为",
	"Passkeys will work when visiting:": "Passkey 可在以下地址使用：",
	"Passkey name (e.g. MacBook Touch ID)": "Passkey 名称（例如 MacBook Touch ID）",
	"API Keys": "API 密钥",
	"No API keys.": "暂无 API 密钥。",
	"Generate key": "生成密钥",
	"Key label (e.g. CLI tool)": "密钥标签（例如 CLI 工具）",
	"Full access": "完全访问",
	"Full access (all permissions)": "完全访问（所有权限）",
	Revoke: "撤销",
	Remove: "删除",
	"Select permissions:": "选择权限：",
	"View data and status": "查看数据与状态",
	"Create, update, delete": "创建、更新、删除",
	"Handle exec approvals": "处理执行审批",
	"Device/node pairing": "设备/节点配对",
	"Authentication is disabled": "认证已关闭",
	"Set up authentication": "设置认证",
	"Localhost bypass is active. Until you add a password or passkey, this browser has full access and Sign out has no effect.":
		"localhost 免登录已启用。在你添加密码或 Passkey 之前，此浏览器拥有完全访问权限，退出登录不会生效。",
	"Add credentials to require login on localhost and before exposing Moltis to your network.":
		"请添加认证信息，以便在 localhost 下也需要登录，并在将 Moltis 暴露到你的网络前启用保护。",
	"Localhost-only access is safe, but localhost bypass is active. Until you add a password or passkey, this browser has full access and Sign out has no effect.":
		"仅 localhost 访问通常安全，但 localhost 免登录已启用。在你添加密码或 Passkey 之前，此浏览器拥有完全访问权限，退出登录不会生效。",
	"Anyone with network access can control moltis and your computer. Set up a password to protect your instance.":
		"任何可访问网络的人都可以控制 moltis 和你的电脑。请设置密码保护你的实例。",
	"API keys authenticate external tools and scripts connecting to moltis over the WebSocket protocol. Pass the key as the":
		"API 密钥用于认证通过 WebSocket 协议连接到 moltis 的外部工具和脚本。请将该密钥作为",
	"field in the": "字段，写入",
	"object of the": "对象中的",
	handshake: "握手",
	"Danger Zone": "危险区域",
	"Remove all authentication": "移除所有认证",
	"Are you sure? This cannot be undone.": "确认吗？此操作不可撤销。",
	"Yes, remove all auth": "是，移除全部认证",
	"Remove all authentication": "移除所有认证",
	"Removing…": "移除中…",
	Note: "注意：",
	"Fork session": "分叉会话",
	"Share snapshot": "分享快照",
	"Stop generation": "停止生成",
	"Clear session": "清空会话",
	"Delete session": "删除会话",
	Fork: "分叉",
	Share: "分享",
	Stop: "停止",
	Clearing: "清空中",
	"Clearing…": "清空中…",
	Delete: "删除",
	"Click to rename": "点击重命名",
	"Delete this session?": "删除这个会话？",
	"Share link copied": "分享链接已复制",
	"Failed to stop response": "停止响应失败",
	"Failed to create share link": "创建分享链接失败",
	"Private link includes a key, share it only with trusted people": "私密链接包含访问密钥，请仅分享给可信对象",
	"Context left before auto-compact:": "自动压缩前剩余上下文:",
	Enable: "启用",
	Disable: "禁用",
	"Heartbeat is disabled. Enable it to allow manual runs.": "心跳已禁用。启用后才可手动运行。",
	"Heartbeat is inactive because no prompt is configured. Add a custom prompt or write actionable content in HEARTBEAT.md.":
		"心跳处于未激活状态，因为未配置提示词。请添加自定义提示词，或在 HEARTBEAT.md 中编写可执行内容。",
	"Heartbeat has no active cron job yet. Save the heartbeat settings to recreate it.": "心跳尚无有效定时任务。请保存心跳设置以重新创建任务。",
	"Periodic AI check-in that monitors your environment and reports status.": "周期性 AI 检查，将监控你的环境并汇报状态。",
	"Heartbeat inactive:": "心跳未激活：",
	Interval: "间隔",
	"Custom Prompt (optional)": "自定义提示词（可选）",
	"Leave blank to use default heartbeat prompt": "留空则使用默认心跳提示词",
	"Effective prompt source:": "当前生效提示词来源：",
	"config custom prompt": "配置中的自定义提示词",
	"none (heartbeat inactive)": "无（心跳未激活）",
	"Max Response Characters": "最大响应字符数",
	"Active Hours": "活跃时段",
	"Only run heartbeat during these hours.": "仅在这些时段运行心跳。",
	Start: "开始",
	End: "结束",
	Timezone: "时区",
	Local: "本地",
	"Run heartbeat commands in an isolated container.": "在隔离容器中运行心跳命令。",
	"Enable sandbox": "启用沙箱",
	"Sandbox Image": "沙箱镜像",
	"Default image": "默认镜像",
	Enabled: "已启用",
	Disabled: "已禁用",
	"Last Status": "上次状态",
	"Last:": "上次：",
	"Next:": "下次：",
	"(server default)": "（服务器默认）",
	"sandbox (default)": "沙箱（默认）",
	"Edit Job": "编辑任务",
	"Add Job": "添加任务",
	"Job name": "任务名称",
	"Schedule Type": "调度类型",
	"At (one-shot)": "指定时间（一次）",
	"Every (interval)": "固定间隔",
	"Cron (expression)": "Cron 表达式",
	"Payload Type": "负载类型",
	"System Event": "系统事件",
	"Agent Turn": "代理轮次",
	"Message text": "消息文本",
	"Model (Agent Turn)": "模型（代理轮次）",
	"Only used for Agent Turn jobs.": "仅用于“代理轮次”任务。",
	"Deliver output to channel": "将输出发送到渠道",
	"Channel Account": "渠道账号",
	"Select channel account": "选择渠道账号",
	"Chat ID (recipient)": "聊天 ID（接收方）",
	"The Telegram chat ID where output will be sent.": "输出将发送到该 Telegram chat_id。",
	"Session Target": "会话目标",
	Isolated: "隔离",
	Main: "主会话",
	"Execution Target": "执行目标",
	Host: "主机",
	"Used only when execution target is Sandbox.": "仅在执行目标为“沙箱”时生效。",
	"Delete after run": "运行后删除",
	"Interval in seconds": "间隔（秒）",
	"Timezone (optional, e.g. Europe/Paris)": "时区（可选，例如 Europe/Paris）",
	"Search channels…": "搜索渠道…",
	"Search images…": "搜索镜像…",
	"New password must be at least 8 characters.": "新密码至少需要 8 个字符。",
	"Failed to add passkey": "添加 Passkey 失败",
	"Failed to load GraphQL config": "加载 GraphQL 配置失败",
	"GraphQL updated for this runtime, but failed to persist to config. It may revert on restart.": "GraphQL 已在当前运行时更新，但持久化到配置失败。重启后可能回滚。",
	"Failed to update GraphQL setting": "更新 GraphQL 设置失败",
	"Configuration is valid.": "配置有效。",
	"Configuration saved. Restart required for changes to take effect.": "配置已保存。需要重启后生效。",
	"Restarting moltis...": "正在重启 moltis...",
	"Server did not come back up. Check if moltis is running.": "服务未恢复。请检查 moltis 是否正在运行。",
	"Replace current config with the default template?\n\nThis will show all available options with documentation. Your current values will be lost unless you copy them first.":
		"是否用默认模板替换当前配置？\n\n这会显示所有可用选项及文档说明。除非你先备份，否则当前配置值会丢失。",
	"Loaded default template with all options. Review and save when ready.": "已加载包含全部选项的默认模板。确认无误后请保存。",
	"Tailscale feature is not enabled. Rebuild with --features tailscale.": "未启用 Tailscale 功能。请使用 --features tailscale 重新构建。",
	"Failed to remove subscription": "移除订阅失败",
	"Failed to unsubscribe": "取消订阅失败",
	"Failed to subscribe": "订阅失败",
	"Push notifications are not supported in this browser.": "当前浏览器不支持推送通知。",
	"Try using Safari, Chrome, or Firefox on a device that supports web push.": "请在支持 Web Push 的设备上使用 Safari、Chrome 或 Firefox。",
	"Push notifications are not configured on the server.": "服务端未配置推送通知。",
	"Receive push notifications when the agent completes a task or needs your attention.": "当代理完成任务或需要你关注时接收推送通知。",
	"Push Notifications": "推送通知",
	"Add this app to your Dock to enable notifications.": "请将此应用添加到 Dock 以启用通知。",
	"You will receive notifications on this device.": "你将在此设备上接收通知。",
	"Notifications are blocked. Enable them in browser settings.": "通知已被阻止。请在浏览器设置中启用。",
	"Enable to receive notifications on this device.": "启用后可在此设备上接收通知。",
	"Installation required": "需要安装",
	"Notifications are blocked": "通知已被阻止",
	"You previously blocked notifications for this site. To enable them, you'll need to update your browser's site settings and allow notifications for this origin.":
		"你此前已阻止该站点通知。要重新启用，请在浏览器站点设置中允许此来源的通知。",
	"Subscribed Devices": "已订阅设备",
	"Loading… this can take a few seconds.": "加载中…这可能需要几秒钟。",
	"Failed to connect to server. Please check if moltis is running.": "连接服务器失败。请检查 moltis 是否正在运行。",
	"Invalid JSON response": "JSON 响应无效",
	"Invalid JSON response from server": "服务端返回了无效 JSON 响应",
	"Network error": "网络错误",
	"Failed to connect to server": "连接服务器失败",
	"Failed to toggle provider": "切换提供商失败",
	"Test voice output": "测试语音输出",
	"Test voice input": "测试语音输入",
	"Add Voice Provider": "添加语音提供商",
	"Leave blank to keep existing key": "留空则保留现有密钥",
	"voice id / name (optional)": "语音 ID / 名称（可选）",
	"model (optional)": "模型（可选）",
	"en-US (optional)": "en-US（可选）",
	", no Python": "，无 Python",
	", no CUDA GPU": "，无 CUDA GPU",
	"Model detection failed.": "模型检测失败。",
	"Failed to detect model availability.": "检测模型可用性失败。",
	"Failed to delete provider.": "删除提供商失败。",
	"Failed to update model state.": "更新模型状态失败。",
	"Detecting Models...": "正在检测模型...",
	"Detect All Models": "检测全部模型",
	"Deleting...": "删除中...",
	"Connecting…": "连接中…",
	Telegram: "Telegram",
	"No active session": "无活动会话",
	"+ Add Telegram Bot": "+ 添加 Telegram 机器人",
	"OTP code copied": "OTP 代码已复制",
	"Type a username and press Enter": "输入用户名并按回车",
	"Failed to connect bot.": "连接机器人失败。",
	"Add Telegram Bot": "添加 Telegram 机器人",
	"e.g. my_assistant_bot": "例如 my_assistant_bot",
	"Connect Bot": "连接机器人",
	"Failed to update bot.": "更新机器人失败。",
	"Edit Telegram Bot": "编辑 Telegram 机器人",
	"Save Changes": "保存更改",
	"Built-in": "内置",
	Calls: "调用次数",
	"Click to copy path": "点击复制路径",
	"Path copied": "路径已复制",
	"OS not supported": "不支持的操作系统",
	Reload: "重载",
	"Reloading…": "重载中…",
	"Hooks reloaded": "钩子已重载",
	"unknown error": "未知错误",
	"OAuth URL missing from response": "响应中缺少 OAuth URL",
	"Secure file operations with configurable access controls": "具有可配置访问控制的安全文件操作",
	"Last arg is the allowed directory path": "最后一个参数是允许访问的目录路径",
	"Knowledge graph-based persistent memory system": "基于知识图谱的持久记忆系统",
	"GitHub API integration — repos, issues, PRs, code search": "GitHub API 集成：仓库、Issue、PR、代码搜索",
	"Requires a GitHub personal access token": "需要 GitHub 个人访问令牌",
	"Remote Linear MCP server with browser OAuth": "通过浏览器 OAuth 的远程 Linear MCP 服务",
	"After adding, click Enable and complete OAuth in your browser": "添加后请点击“启用”，并在浏览器中完成 OAuth",
	"sse remote": "远程 SSE",
	"stdio local": "本地 stdio",
	"OAuth pending": "OAuth 待完成",
	"OAuth connected": "OAuth 已连接",
	"OAuth failed": "OAuth 失败",
	"OAuth not required": "无需 OAuth",
	Configure: "配置",
	Confirm: "确认",
	"Remote MCP servers require a URL": "远程 MCP 服务需要 URL",
	"Hide env vars": "隐藏环境变量",
	"+ Environment variables": "+ 环境变量",
	"Local stdio servers require a command": "本地 stdio 服务需要命令",
	"Re-auth": "重新认证",
	"(missing URL)": "（缺少 URL）",
	"Connect OAuth": "连接 OAuth",
	"Disable all third-party skills now?": "现在禁用所有第三方技能吗？",
	"Disable All": "全部禁用",
	"Not connected to gateway.": "未连接到网关。",
	"Execute arbitrary shell commands on your machine (install malware, cryptominers, backdoors)":
		"可在你的机器上执行任意 Shell 命令（安装恶意软件、挖矿程序、后门）",
	"Modify or delete files across your filesystem, including other projects": "可修改或删除你文件系统中的文件（包括其他项目）",
	"Send your data to remote servers via curl/wget without your knowledge": "可在你不知情时通过 curl/wget 将数据发送到远程服务器",
	"owner/repo or full URL (e.g. anthropics/skills)": "owner/repo 或完整 URL（例如 anthropics/skills）",
	"Community skills from ClawdHub": "来自 ClawdHub 的社区技能",
	"Official Anthropic agent skills": "Anthropic 官方代理技能",
	"Vercel agent skills collection": "Vercel 代理技能合集",
	"Vercel skills toolkit": "Vercel 技能工具集",
	"Trust & Enable": "信任并启用",
	Protected: "受保护",
	"Loading...": "加载中...",
	"orphan:": "孤立：",
	"Orphaned repo: reinstall to restore metadata": "仓库已孤立：请重新安装以恢复元数据",
	"Cannot disable: unknown source for skill.": "无法禁用：技能来源未知。",
	"Disabling...": "禁用中...",
	"Removing...": "移除中...",
	"Installing…": "安装中…",
	"tmux unavailable": "tmux 不可用",
	"No tmux windows": "没有 tmux 窗口",
	"Failed to list tmux windows": "列出 tmux 窗口失败",
	"Failed to refresh terminal windows": "刷新终端窗口失败",
	"Switching tmux window...": "正在切换 tmux 窗口...",
	"Switched tmux window.": "tmux 窗口已切换。",
	"Creating tmux window...": "正在创建 tmux 窗口...",
	"Failed to create tmux window": "创建 tmux 窗口失败",
	"Created tmux window.": "tmux 窗口已创建。",
	"xterm failed to load": "xterm 加载失败",
	"Run install command (first time)": "执行安装命令（首次）",
	"Run install command": "执行安装命令",
	"Host shell unavailable": "主机 Shell 不可用",
	"Unable to open host shell.": "无法打开主机 Shell。",
	"Interactive host shell with persistent tmux session. Click inside terminal and type commands directly.":
		"交互式主机 Shell（持久 tmux 会话）。点击终端后可直接输入命令。",
	"Interactive host shell (ephemeral). Enable tmux persistence from terminal settings when available.":
		"交互式主机 Shell（临时）。可用时请在终端设置中启用 tmux 持久化。",
	"First connection tip: run the install command once to enable persistent tmux sessions.":
		"首次连接提示：先执行一次安装命令以启用 tmux 持久会话。",
	"Interactive host shell (ephemeral). Install tmux to persist sessions across reconnects.":
		"交互式主机 Shell（临时）。安装 tmux 后可在重连间保持会话。",
	"Connected to host shell with persistent tmux session.": "已连接到主机 Shell（持久 tmux 会话）。",
	"Connected to host shell (ephemeral session).": "已连接到主机 Shell（临时会话）。",
	"Failed to open host shell.": "打开主机 Shell 失败。",
	"Terminal error": "终端错误",
	"WebSocket not supported in this browser": "当前浏览器不支持 WebSocket",
	"Connecting terminal websocket...": "正在连接终端 WebSocket...",
	"Terminal websocket connected.": "终端 WebSocket 已连接。",
	"Terminal disconnected. Reconnecting...": "终端已断开，正在重连...",
	"Failed to queue install command.": "安装命令入队失败。",
	"Clipboard API unavailable in this browser.": "当前浏览器不支持 Clipboard API。",
	"Install command copied to clipboard.": "安装命令已复制到剪贴板。",
	"Failed to copy install command.": "复制安装命令失败。",
	"Send Ctrl+C": "发送 Ctrl+C",
	"Send Ctrl+L": "发送 Ctrl+L",
	"Create tmux window": "创建 tmux 窗口",
	"tmux windows": "tmux 窗口",
	"Host terminal output": "主机终端输出",
	"Terminal size (columns × rows)": "终端尺寸（列 × 行）",
	"Initializing terminal...": "正在初始化终端...",
	"Failed to initialize terminal": "初始化终端失败",
	"Sandboxes are disabled on cloud deploys without a container runtime. Install on a VM with Docker or Apple Container to enable this feature.":
		"在未安装容器运行时的云部署环境中，沙箱已禁用。请在安装了 Docker 或 Apple Container 的虚拟机上部署以启用此功能。",
	"Please specify at least one package.": "请至少指定一个软件包。",
	"Stop container": "停止容器",
	"Delete container": "删除容器",
	"Restart container daemon": "重启容器守护进程",
	Refresh: "刷新",
	"Stop and remove all containers": "停止并移除所有容器",
	"Clean All": "全部清理",
	"Apple Container (VM-isolated)": "Apple Container（VM 隔离）",
	Docker: "Docker",
	"cgroup (systemd-run)": "cgroup（systemd-run）",
	"None (host execution)": "无（主机执行）",
	"No container runtime detected. Install Apple Container (macOS 26+) for VM-isolated sandboxing, or install Docker as an alternative.":
		"未检测到容器运行时。请安装 Apple Container（macOS 26+）以启用 VM 隔离沙箱，或安装 Docker 作为替代方案。",
	"No container runtime detected. Install Docker for sandboxed execution, or ensure systemd is available for cgroup isolation.":
		"未检测到容器运行时。请安装 Docker 以启用沙箱执行，或确保可使用 systemd 进行 cgroup 隔离。",
	"No container runtime detected. Install Docker for sandboxed execution.": "未检测到容器运行时。请安装 Docker 以启用沙箱执行。",
	"Apple Container provides stronger VM-level isolation on macOS 26+. Install it for automatic use (moltis prefers it over Docker). Run: brew install container":
		"Apple Container 在 macOS 26+ 上提供更强的 VM 级隔离。安装后会自动优先使用（moltis 优先于 Docker 选择它）。可执行：brew install container",
	"Docker is a good choice on Linux. For lighter-weight isolation without Docker overhead, systemd cgroup sandboxing is also supported.":
		"Docker 在 Linux 上是不错的选择。若希望避免 Docker 开销并使用更轻量隔离，也支持 systemd cgroup 沙箱。",
	"Warning: ": "警告：",
	"Tip: ": "提示：",
	"Delete image": "删除镜像",
	"Prune all": "清理全部",
	Build: "构建",
	"Building image…": "正在构建镜像…",
	"Checking packages in base image…": "正在检查基础镜像中的软件包…",
	"Building…": "构建中…",
	"Pruning…": "清理中…",
	"Restarting…": "重启中…",
	"Cleaning…": "清理中…",
	"5 min": "5 分钟",
	"1 hour": "1 小时",
	"24 hours": "24 小时",
	"7 days": "7 天",
	"Metrics are not enabled. Enable them in moltis.toml with [metrics] enabled = true": "指标未启用。请在 moltis.toml 中设置 [metrics] enabled = true。",
	"Failed to fetch metrics history:": "获取指标历史失败：",
	Time: "时间",
	"No activity yet": "暂无活动",
	"Metrics will appear here once you start using moltis. Try sending a message or running a tool to see data.":
		"开始使用 moltis 后，这里会显示指标。可以尝试发送一条消息或运行一个工具来查看数据。",
	Uptime: "运行时长",
	"Connected Clients": "已连接客户端",
	"Active Sessions": "活跃会话",
	"HTTP Requests": "HTTP 请求",
	Completions: "补全次数",
	"Input Tokens": "输入 Token",
	"Output Tokens": "输出 Token",
	"Cache Tokens": "缓存 Token",
	"Tool Executions": "工具执行次数",
	"Tools Active": "活跃工具数",
	"MCP Tool Calls": "MCP 工具调用",
	"MCP Servers": "MCP 服务器",
	"Collecting data...": "正在收集数据...",
	"Historical charts will appear here after a few data points are collected. This typically takes about 20-30 seconds.":
		"收集到少量数据点后将显示历史图表，通常约需 20-30 秒。",
	"Token Usage (Total)": "Token 使用量（总计）",
	"Input Tokens by Provider": "按提供商统计输入 Token",
	"Output Tokens by Provider": "按提供商统计输出 Token",
	Requests: "请求数",
	"LLM Completions": "LLM 补全次数",
	Connections: "连接数",
	"WebSocket Active": "WebSocket 活跃数",
	"Tool Activity": "工具活动",
	"MCP Calls": "MCP 调用",
	"All levels": "全部级别",
	"Filter target…": "过滤目标…",
	"Search…": "搜索…",
	Resume: "继续",
	Pause: "暂停",
	"Running…": "运行中…",
	"Saving…": "保存中…",
	"Loading…": "加载中…",
	"Testing…": "测试中…",
	"Setting…": "设置中…",
	"Resetting…": "重置中…",
	"Changing…": "更改中…",
	"Restarting…": "重启中…",
	"Adding…": "添加中…",
	"Telegram chat_id": "Telegram chat_id",
	"Read and exfiltrate sensitive data — SSH keys, API tokens, browser cookies, credentials, env variables":
		"可读取并外传敏感数据：SSH 密钥、API 令牌、浏览器 Cookie、凭据、环境变量",
	"Invalid configuration": "配置无效",
	"Microphone permission denied": "麦克风权限被拒绝",
	"No microphone found": "未找到麦克风设备",
	"STT test failed": "STT 测试失败",
	"TTS test failed": "TTS 测试失败",
	"Model is not supported for this account": "该账号不支持此模型",
	"(from env)": "（来自环境变量）",
	"(from LLM provider)": "（来自 LLM 提供商）",
	"package manager": "包管理器",
	Add: "添加",
	Value: "值",
	KEY_NAME: "键名",
	LLM: "LLM",
	"API Key": "API 密钥",
	Restart: "重启",
	Test: "测试",
	None: "无",
	Optional: "可选",
	"External API": "外部 API",
	"Add LLM": "添加 LLM",
	"Preferred Models": "偏好模型",
	"Configure LLM providers for chat and agent tasks. You can add multiple providers and switch between models.":
		"为聊天与代理任务配置 LLM 提供商。你可以添加多个提供商并在模型间切换。",
	"Environment variables are injected into sandbox command execution. Values are write-only and never displayed.":
		"环境变量会注入到沙箱命令执行中。变量值仅可写入，不会显示。",
	"Configure how the agent stores and retrieves long-term memory. Memory enables the agent to recall past conversations, notes, and context across sessions.":
		"配置代理如何存储和检索长期记忆。记忆能力使代理能够跨会话回忆过往对话、笔记和上下文。",
	Files: "文件",
	"Files:": "文件：",
	"Chunks:": "分块：",
	"DB Size:": "数据库大小：",
	Feature: "特性",
	"Search type": "搜索类型",
	"External dependency": "外部依赖",
	"Embedding cache": "嵌入缓存",
	"OpenAI batch API": "OpenAI 批处理 API",
	"Provider fallback": "提供商回退",
	"LLM reranking": "LLM 重排",
	"Best for": "适用人群",
	"Most users": "大多数用户",
	"Power users": "重度用户",
	"Built-in (Recommended)": "内置（推荐）",
	"QMD feature is not enabled. Rebuild moltis with": "QMD 功能未启用。请使用以下参数重新构建 moltis：",
	"QMD Status": "QMD 状态",
	"QMD is installed": "QMD 已安装",
	"QMD is not installed or not found in PATH": "QMD 未安装或未在 PATH 中找到",
	"Installation:": "安装：",
	"Then start the QMD daemon:": "然后启动 QMD 守护进程：",
	Citations: "引用",
	"Include source file and line number with search results to help track where information comes from.":
		"在搜索结果中包含源文件和行号，帮助追踪信息来源。",
	"Auto (multi-file only)": "自动（仅多文件）",
	Always: "总是",
	Never: "从不",
	"LLM Reranking": "LLM 重排",
	"Use the LLM to rerank search results for better relevance (slower but more accurate).":
		"使用 LLM 对搜索结果进行重排以获得更高相关性（更慢但更准确）。",
	"Session Export": "会话导出",
	"Export session transcripts to memory for cross-run recall of past conversations.": "将会话转录导出到记忆，以便跨运行回忆过往对话。",
	Hooks: "钩子",
	"Hook Script": "钩子脚本",
	"Continue / Modify / Block": "继续 / 修改 / 阻止",
	"Each hook is a directory containing a": "每个钩子都是一个目录，包含",
	"file with TOML frontmatter (events, command, requirements) and optional documentation. Edit the content below and click":
		"文件（含 TOML 前置信息：事件、命令、要求）以及可选文档。编辑下方内容后点击",
	"No hooks discovered. Create a": "尚未发现钩子。请创建",
	"file in": "文件于",
	"to get started.": "以开始使用。",
	"Loading hooks…": "正在加载钩子…",
	Active: "激活",
	"Blocks destructive commands using Destructive Command Guard (dcg)": "使用破坏性命令防护（dcg）阻止高风险命令",
	"Skeleton hook — edit this to build your own": "钩子模板，可编辑为你自己的实现",
	"Reads BOOT.md from the workspace on startup and injects its content as the initial user message to the agent.":
		"启动时读取工作区中的 BOOT.md，并将其内容注入为代理的初始用户消息。",
	"Logs all slash-command invocations to a JSONL audit file at ~/.moltis/logs/commands.log.":
		"将所有斜杠命令调用记录到 ~/.moltis/logs/commands.log 的 JSONL 审计文件中。",
	"Saves the conversation history to a markdown file in the memory directory when a session is reset or a new session is created.":
		"当会话被重置或新建会话时，将对话历史保存为 memory 目录中的 Markdown 文件。",
	"MCP (Model Context Protocol)": "MCP（模型上下文协议）",
	"Popular MCP Servers": "热门 MCP 服务器",
	"Add Custom MCP Server": "添加自定义 MCP 服务器",
	"Configured MCP Servers": "已配置 MCP 服务器",
	"No MCP tools configured. Add one from the popular list above or enter a custom stdio command / remote URL.":
		"尚未配置 MCP 工具。可从上方热门列表添加，或输入自定义 stdio 命令 / 远程 URL。",
	"Review MCP trust boundaries before enabling": "启用前请审查 MCP 信任边界",
	"Local stdio servers run with your full system privileges. A malicious or compromised local server can read files, exfiltrate credentials, or execute commands.":
		"本地 stdio 服务以你的完整系统权限运行。恶意或被攻陷的本地服务可读取文件、外传凭据或执行命令。",
	"Remote SSE servers can receive your tool inputs and act in linked external systems. Use trusted hosts and only scopes you intend to grant.":
		"远程 SSE 服务可接收你的工具输入并在关联外部系统中执行操作。请仅使用可信主机，并只授予你打算开放的权限范围。",
	"Each enabled server also adds tool definitions to chat context and consumes tokens, enable only what you actively need.":
		"每个启用的服务还会向聊天上下文注入工具定义并消耗 Token，仅启用你确实需要的服务。",
	"Local process / Remote MCP host": "本地进程 / 远程 MCP 主机",
	"Moltis supports both local stdio MCP processes (spawned via npm/uvx) and remote Streamable HTTP/SSE servers. Remote servers may prompt browser OAuth when first enabled.":
		"Moltis 同时支持本地 stdio MCP 进程（通过 npm/uvx 启动）和远程 Streamable HTTP/SSE 服务器。远程服务器首次启用时可能会触发浏览器 OAuth。",
	"Browse all servers on GitHub →": "在 GitHub 浏览全部服务器 →",
	"Stdio (local)": "Stdio（本地）",
	"SSE (remote)": "SSE（远程）",
	Command: "命令",
	"Server URL": "服务器 URL",
	"If the server requires OAuth, your browser opens for sign-in when you enable or restart it.":
		"如果服务器需要 OAuth，在你启用或重启时，浏览器会自动打开以登录。",
	"Environment variables (KEY=VALUE per line)": "环境变量（每行一个 KEY=VALUE）",
	"Loading MCP servers…": "正在加载 MCP 服务器…",
	"Loading tools…": "正在加载工具…",
	"No tools exposed by this server.": "该服务器未暴露任何工具。",
	"Connect OAuth": "连接 OAuth",
	"Emergency Disable": "紧急禁用",
	"SKILL.md-based skills discovered from project, personal, and installed paths.": "从项目、个人及已安装路径中发现基于 SKILL.md 的技能。",
	"How to write a skill?": "如何编写技能？",
	"Skills run code on your machine — treat every skill as untrusted": "技能会在你的机器上运行代码，请将每个技能视为不受信任",
	"Skills are community-authored instructions that the AI agent follows with your full system privileges. Popularity or download count does not mean a skill is safe. A malicious skill can instruct the agent to:":
		"技能是社区编写的指令，AI 代理会以你的完整系统权限执行。受欢迎或下载量高并不代表安全。恶意技能可能指使代理：",
	"Triple-check the source code of every skill before enabling it. Read the full SKILL.md and any scripts it references — these are the exact instructions the agent will execute on your behalf. Do not trust a skill just because it is popular, highly downloaded, or appears on a leaderboard.":
		"启用前请反复检查每个技能的源码。阅读完整 SKILL.md 及其引用脚本，这些就是代理将替你执行的真实指令。不要因技能热门、下载量高或出现在榜单上就盲目信任。",
	"With sandbox mode enabled (Docker, Apple Container, or cgroup), command execution is isolated and the damage a malicious skill can do is significantly limited.":
		"启用沙箱模式（Docker、Apple Container 或 cgroup）后，命令执行将被隔离，恶意技能可造成的损害会显著受限。",
	"Disable all third-party skills": "禁用所有第三方技能",
	"Featured Repositories": "精选仓库",
	"Installed Repositories": "已安装仓库",
	"No repositories installed.": "尚未安装仓库。",
	"Enabled Skills": "已启用技能",
	Description: "描述",
	Source: "来源",
	"Loading skills…": "正在加载技能…",
	"Install": "安装",
	Sandboxes: "沙箱",
	"Container images cached by moltis for sandbox execution. You can delete individual images or prune all. Build custom images from a base with apt packages.":
		"moltis 会缓存用于沙箱执行的容器镜像。你可以删除单个镜像或清理全部，也可以基于基础镜像和 apt 软件包构建自定义镜像。",
	"Running Containers": "运行中的容器",
	"No containers found.": "未找到容器。",
	"Container backend:": "容器后端：",
	"Default image": "默认镜像",
	"Base image used for new sessions and projects unless overridden. Leave empty to use the built-in default (ubuntu:25.10).":
		"新会话和项目默认使用该基础镜像（除非被覆盖）。留空将使用内置默认值（ubuntu:25.10）。",
	"No cached images.": "没有缓存镜像。",
	"Build custom image": "构建自定义镜像",
	"Image name": "镜像名称",
	"Base image": "基础镜像",
	"Packages (space or newline separated)": "软件包（空格或换行分隔）",
	"Edit the full moltis configuration. This includes server, tools, LLM providers, auth, and all other settings.":
		"编辑完整的 moltis 配置，包含服务、工具、LLM 提供商、认证及其他全部设置。",
	"Test your changes before saving. Changes require a restart to take effect.": "保存前请先测试你的修改。配置变更需重启后生效。",
	"View documentation ↗": "查看文档 ↗",
	"View documentation →": "查看文档 →",
	"File:": "文件：",
	"The page will reload automatically when the server is back up.": "服务恢复后页面将自动刷新。",
	"Loading metrics...": "正在加载指标...",
	"Prometheus Endpoint": "Prometheus 端点",
	"PROMETHEUS ENDPOINT": "PROMETHEUS 端点",
	"Scrape this endpoint with Prometheus or import into Grafana for advanced visualization.":
		"可使用 Prometheus 抓取该端点，或导入 Grafana 进行高级可视化。",
	"No Telegram bots connected.": "尚未连接 Telegram 机器人。",
	'Click "+ Add Telegram Bot" to connect one using a token from @BotFather.':
		'点击“+ 添加 Telegram 机器人”，使用来自 @BotFather 的 Token 进行连接。',
	"Expose the gateway via Tailscale Serve (tailnet-only HTTPS) or Funnel (public HTTPS). The gateway stays bound to localhost; Tailscale proxies traffic to it.":
		"通过 Tailscale Serve（仅 tailnet HTTPS）或 Funnel（公网 HTTPS）暴露网关。网关仍绑定在 localhost，由 Tailscale 代理流量。",
	"Enabling Funnel exposes moltis to the public internet. This code has not been security-audited. Use at your own risk.":
		"启用 Funnel 会将 moltis 暴露到公共互联网。该代码尚未经过安全审计，请自行承担风险。",
	"Funnel exposes your gateway to the public internet. Make sure password authentication is configured.":
		"Funnel 会将你的网关暴露到公共互联网，请确保已配置密码认证。",
	"The tailscale CLI was not found on this machine.": "在此机器上未找到 tailscale CLI。",
	"Install Tailscale": "安装 Tailscale",
	"Re-check": "重新检查",
	"Tailscale is not running. Start it with": "Tailscale 未运行。请使用以下命令启动：",
	"Tip:": "提示：",
	'Tip: Click "Load Template" to see all available configuration options with documentation. This replaces the editor content with a fully documented template - copy your current values first if needed.':
		'提示：点击“加载模板”可查看带文档说明的全部配置项。这将用完整注释模板替换编辑器内容，如有需要请先备份当前值。',
	"Be genuinely helpful, not performatively helpful. Skip the filler words — just help.\n":
		"真诚地提供帮助，而不是表演式帮助。跳过空话，直接解决问题。\n",
	"Have opinions. You're allowed to disagree, prefer things, find stuff amusing or boring.\n":
		"要有观点。你可以不同意、表达偏好，也可以觉得某些事有趣或无聊。\n",
	"Be resourceful before asking. Try to figure it out first — read the context, search for it — then ask if you're stuck.\n":
		"提问前先自助解决。先读上下文、先搜索；确实卡住再问。\n",
	"Earn trust through competence. Be careful with external actions. Be bold with internal ones.\n":
		"靠能力赢得信任。对外部操作要谨慎，对内部决策可更果断。\n",
	"Remember you're a guest. You have access to someone's life. Treat it with respect.\n":
		"记住你是来协助的访客。你接触的是别人的生活，请始终保持尊重。\n",
	"Private things stay private. When in doubt, ask before acting externally.\n":
		"隐私必须保密。对外执行前如有疑问，先询问。\n",
	"Be concise when needed, thorough when it matters. Not a corporate drone. Not a sycophant. Just good.":
		"该简洁时简洁，该深入时深入。不官腔、不谄媚，只做有效协作。",
};

var DYNAMIC_PATTERNS = [
	[/^Provider:\s*(.+)$/u, "提供商：$1"],
	[/^Backend:\s*(.+)$/u, "后端：$1"],
	[/^Version$/u, "版本"],
	[/^Connected$/u, "已连接"],
	[/^Installed$/u, "已安装"],
	[/^(\d+)\s+chars$/u, "$1 个字符"],
	[/^Context Files \((\d+)\)$/u, "上下文文件（$1）"],
	[/^Context left$/u, "剩余上下文"],
	[/^Session total$/u, "会话总计"],
	[/^Hello,\s*(.+)!$/u, "你好，$1！"],
	[/^(\d+)\s+jobs$/u, "$1 个任务"],
	[/^(\d+)\s+enabled$/u, "$1 已启用"],
	[/^Running\s+•\s+(\d+)\s+jobs\s+•\s+(\d+)\s+enabled$/u, "运行中 • $1 个任务 • $2 已启用"],
	[/^Stopped\s+•\s+(\d+)\s+jobs\s+•\s+(\d+)\s+enabled$/u, "已停止 • $1 个任务 • $2 已启用"],
	[/^Run History:\s*(.+)$/u, "运行历史：$1"],
	[/^next:\s*(.+)$/u, "下次：$1"],
	[/^Delete job '(.+)'\?$/u, "删除任务“$1”？"],
	[/^At\s+(.+)$/u, "在 $1"],
	[/^Every\s+([0-9.]+)h$/u, "每 $1 小时"],
	[/^Every\s+([0-9.]+)m$/u, "每 $1 分钟"],
	[/^Every\s+([0-9.]+)s$/u, "每 $1 秒"],
	[/^\(default:\s*(.+)\)$/u, "（默认：$1）"],
	[/^\(server default\)$/u, "（服务器默认）"],
	[/^sandbox\s+\((.+)\)$/u, "沙箱（$1）"],
	[/^Subscribed Devices \((\d+)\)$/u, "已订阅设备（$1）"],
	[/^(\d+)\s+entries$/u, "$1 条"],
	[/^Error:\s*(.+)$/u, "错误：$1"],
	[/^Built:\s*(.+)$/u, "已构建：$1"],
	[/^Warning:\s*(.+)$/u, "警告：$1"],
	[/^Tip:\s*(.+)$/u, "提示：$1"],
	[/^Failed to fetch metrics history:\s*(.+)$/u, "获取指标历史失败：$1"],
	[/^Running Containers \((\d+)\)$/u, "运行中的容器（$1）"],
	[/^Probing models:\s*(\d+)\/(\d+)\s*\((\d+)%\)$/u, "模型探测中：$1/$2（$3%）"],
	[/^Detected\s+(\d+)\s+supported,\s+(\d+)\s+unsupported\s+out\s+of\s+(\d+)\s+models\.$/u, "共 $3 个模型：支持 $1 个，不支持 $2 个。"],
	[/^Installing\s+(.+)\.\.\.$/u, "正在安装 $1..."],
	[/^Name:\s*(.+)$/u, "名称：$1"],
	[/^File:\s*(.+)$/u, "文件：$1"],
	[
		/^All requested packages are already present in (.+): (.+)\. No image build needed\.$/u,
		"请求的软件包已全部存在于 $1：$2。无需构建镜像。",
	],
	[/^Already in (.+): (.+)\. Only installing: (.+)$/u, "在 $1 中已存在：$2。仅安装：$3"],
];

var FRAGMENT_REPLACEMENTS = [
	["Chat with multiple LLM providers and models", "与多个 LLM 提供商和模型聊天"],
	["Run commands in a sandboxed environment", "在沙箱环境中运行命令"],
	["Browse the web and fetch content", "浏览网页并抓取内容"],
	["Remember context across sessions with long-term memory", "跨会话记住上下文（长期记忆）"],
	["Extend with MCP tools, skills, and plugins", "通过 MCP 工具、技能和插件扩展能力"],
	["Type a message or use", "输入消息，或使用"],
	["for commands", "查看命令"],
	["I'm ", "我是 "],
	[". How can I help?", "。我可以帮你做什么？"],
	["Context left before auto-compact", "自动压缩前剩余上下文"],
	["Execute: host", "执行: 主机"],
	["Execute: sandboxed", "执行: 沙箱"],
	["Localhost bypass is active. Until you add a password or passkey, this browser has full access and Sign out has no effect.", "localhost 免登录已启用。在你添加密码或 Passkey 之前，此浏览器拥有完全访问权限，退出登录不会生效。"],
	["Add credentials to require login on localhost and before exposing Moltis to your network.", "请添加认证信息，以便在 localhost 下也需要登录，并在将 Moltis 暴露到你的网络前启用保护。"],
	["API keys authenticate external tools and scripts connecting to moltis over the WebSocket protocol.", "API 密钥用于认证通过 WebSocket 协议连接到 moltis 的外部工具和脚本。"],
	["Pass the key as the", "请将该密钥作为"],
	["field in the", "字段，写入"],
	["object of the", "对象中的"],
	["connect handshake", "connect 握手"],
	["Leave this empty to use", "留空则使用"],
	["in your workspace root. If that file exists but is empty/comments-only, heartbeat LLM runs are skipped to save tokens.", "（位于工作区根目录）。如果该文件存在但为空或仅注释，心跳 LLM 运行会被跳过以节省 Token。"],
	["The server was built without the", "服务端构建时未启用"],
	["On Safari, push notifications are only available for installed apps. Add moltis to your Dock using", "在 Safari 中，仅已安装应用支持推送通知。请通过以下方式将 moltis 添加到 Dock："],
	["(or Share → Add to Dock on iOS), then open it from there.", "（iOS 上为“分享 → 添加到 Dock”），然后从 Dock 打开。"],
	[", no Python", "，无 Python"],
	[", no CUDA GPU", "，无 CUDA GPU"],
	["run shell commands in response to lifecycle events (tool calls, messages, sessions, etc.). They live in", "响应生命周期事件（工具调用、消息、会话等）执行 Shell 命令。它们位于"],
	["Each hook is a directory containing a", "每个钩子目录包含一个"],
	["file with TOML frontmatter (events, command, requirements) and optional documentation. Edit the content below and click", "文件（含 TOML 前置信息：事件、命令、要求）以及可选文档。编辑下方内容并点击"],
	["tools extend the AI agent with external capabilities — file access, web fetch, database queries, code search, and more.", "工具可为 AI 代理扩展外部能力，如文件访问、网页抓取、数据库查询、代码检索等。"],
	["Moltis supports both", "Moltis 同时支持"],
	["local stdio MCP processes", "本地 stdio MCP 进程"],
	["(spawned via npm/uvx) and", "（通过 npm/uvx 启动）以及"],
	["remote Streamable HTTP/SSE servers", "远程 Streamable HTTP/SSE 服务器"],
	["Remote servers may prompt browser OAuth when first enabled.", "远程服务器首次启用时可能触发浏览器 OAuth。"],
	["Skills are community-authored instructions that the AI agent follows", "技能是社区编写的指令，AI 代理会执行这些指令"],
	["with your full system privileges", "并拥有你的完整系统权限"],
	["Popularity or download count does not mean a skill is safe. A malicious skill can instruct the agent to:", "受欢迎或下载量高并不代表安全。恶意技能可能指使代理："],
	["Triple-check the source code", "反复检查源码"],
	["of every skill before enabling it.", "后再启用每个技能。"],
	["Read the full SKILL.md and any scripts it references — these are the exact instructions the agent will execute on your behalf.", "阅读完整 SKILL.md 及其引用脚本，这些就是代理将替你执行的真实指令。"],
	["Do not trust a skill just because it is popular, highly downloaded, or appears on a leaderboard.", "不要因技能热门、下载量高或出现在榜单上就盲目信任。"],
	["With sandbox mode enabled (Docker, Apple Container, or cgroup), command execution is isolated and the damage a malicious skill can do is significantly limited.", "启用沙箱模式（Docker、Apple Container 或 cgroup）后，命令执行会被隔离，恶意技能造成的损害将显著受限。"],
	["Edit the full moltis configuration.", "编辑完整的 moltis 配置。"],
	["This includes server, tools, LLM providers, auth, and all other settings.", "其中包括服务、工具、LLM 提供商、认证及其他所有设置。"],
	["Test your changes before saving. Changes require a restart to take effect.", "保存前请先测试你的修改。配置变更需重启后生效。"],
	['Click "Load Template" to see all available configuration options with documentation.', '点击“加载模板”可查看带文档说明的全部配置项。'],
	["This replaces the editor content with a fully documented template - copy your current values first if needed.", "这会用完整注释模板替换编辑器内容，如有需要请先备份当前值。"],
	["Configure how the agent stores and retrieves long-term memory. Memory enables the agent", "配置代理如何存储和检索长期记忆。记忆能力使代理能够"],
	["to recall past conversations, notes, and context across sessions.", "在跨会话中回忆过往对话、笔记和上下文。"],
	["Expose the gateway via Tailscale Serve (tailnet-only HTTPS) or Funnel", "通过 Tailscale Serve（仅 tailnet HTTPS）或 Funnel 暴露网关"],
	["(public HTTPS). The gateway stays bound to localhost; Tailscale proxies", "（公网 HTTPS）。网关仍绑定在 localhost；Tailscale 会代理"],
	["traffic to it.", "流量到该网关。"],
	["No Telegram bots connected.", "尚未连接 Telegram 机器人。"],
	['Click "+ Add Telegram Bot" to connect one using a token from @BotFather.', '点击“+ 添加 Telegram 机器人”，使用来自 @BotFather 的 Token 进行连接。'],
	['Tip: Click "Load Template" to see all available configuration options with documentation. This replaces the editor content with a fully documented template - copy your current values first if needed.', "提示：点击“加载模板”可查看带文档说明的全部配置项。这会用完整注释模板替换编辑器内容，如有需要请先备份当前值。"],
];
var ZH_TEXT_MAP_LOWER = Object.fromEntries(Object.entries(ZH_TEXT_MAP).map(([k, v]) => [k.toLowerCase(), v]));

var activeLocale = detectInitialLocale();
var observer = null;
var applying = false;

export function localeLabel(locale) {
	return LOCALE_LABELS[resolveLocale(locale)];
}

export function getLocaleOptions() {
	return SUPPORTED_LOCALES.map((locale) => ({ value: locale, label: localeLabel(locale) }));
}

export function resolveLocale(locale) {
	if (SUPPORTED_LOCALES.includes(locale)) return locale;
	return "en";
}

export function detectBrowserLocale() {
	var browserLang = (navigator?.language || "").toLowerCase();
	return browserLang.startsWith("zh") ? "zh-CN" : "en";
}

export function detectInitialLocale() {
	try {
		var saved = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (saved) return resolveLocale(saved);
	} catch (_err) {
		// Ignore storage errors.
	}
	return detectBrowserLocale();
}

export function getLocale() {
	return activeLocale;
}

export function t(key, fallback = "") {
	var table = KEY_STRINGS[activeLocale] || KEY_STRINGS.en;
	return table[key] || KEY_STRINGS.en[key] || fallback || key;
}

export function setLocale(locale, options = {}) {
	var next = resolveLocale(locale);
	var persist = options.persist !== false;
	var emit = options.emit !== false;
	var changed = activeLocale !== next;
	activeLocale = next;
	document.documentElement.lang = next;
	if (persist) {
		try {
			localStorage.setItem(LOCALE_STORAGE_KEY, next);
		} catch (_err) {
			// Ignore storage errors.
		}
	}
	if (changed) {
		translateDocument(document.body);
	}
	if (emit && changed) {
		window.dispatchEvent(
			new CustomEvent("moltis:locale-changed", {
				detail: { locale: next },
			}),
		);
	}
}

export function onLocaleChange(handler) {
	if (typeof handler !== "function") return () => {};
	var listener = (event) => handler(event?.detail?.locale || getLocale());
	window.addEventListener("moltis:locale-changed", listener);
	return () => window.removeEventListener("moltis:locale-changed", listener);
}

export function initI18n() {
	setLocale(activeLocale, { persist: false, emit: false });
	startObserver();
	translateDocument(document.body);
}

function startObserver() {
	if (observer || !document.body) return;
	observer = new MutationObserver((mutations) => {
		if (applying) return;
		for (var mutation of mutations) {
			if (mutation.type === "childList") {
				for (var node of mutation.addedNodes) {
					translateDocument(node);
				}
				continue;
			}
			if (mutation.type === "characterData") {
				translateTextNode(mutation.target);
				continue;
			}
			if (mutation.type === "attributes") {
				translateElementAttributes(mutation.target);
			}
		}
	});
	observer.observe(document.body, {
		subtree: true,
		childList: true,
		characterData: true,
		attributes: true,
		attributeFilter: ["title", "placeholder", "aria-label"],
	});
}

function translateDocument(root) {
	if (!root || activeLocale === "en") {
		restoreDocument(root);
		return;
	}
	applying = true;
	try {
		if (root.nodeType === Node.TEXT_NODE) {
			translateTextNode(root);
			return;
		}
		if (root.nodeType !== Node.ELEMENT_NODE && root !== document) return;
		var el = root.nodeType === Node.ELEMENT_NODE ? root : document.body;
		if (!el) return;
		translateElementAttributes(el);
		var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
		var node = walker.nextNode();
		while (node) {
			translateTextNode(node);
			node = walker.nextNode();
		}
	} finally {
		applying = false;
	}
}

function restoreDocument(root) {
	applying = true;
	try {
		if (!root) return;
		if (root.nodeType === Node.TEXT_NODE) {
			restoreTextNode(root);
			return;
		}
		if (root.nodeType !== Node.ELEMENT_NODE && root !== document) return;
		var el = root.nodeType === Node.ELEMENT_NODE ? root : document.body;
		if (!el) return;
		restoreElementAttributes(el);
		var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
		var node = walker.nextNode();
		while (node) {
			restoreTextNode(node);
			node = walker.nextNode();
		}
	} finally {
		applying = false;
	}
}

function shouldSkipNode(node) {
	if (!node) return true;
	var el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
	if (!el) return true;
	if (el.closest("[data-i18n-skip]")) return true;
	if (el.closest(".msg.user, .msg.assistant")) return true;
	if (el.closest("pre, code")) return true;
	if (el.closest("script, style")) return true;
	return false;
}

function translateTextNode(node) {
	if (!node || node.nodeType !== Node.TEXT_NODE || shouldSkipNode(node)) return;
	var current = node.nodeValue;
	if (!current || !current.trim()) return;
	var original = node.__moltisI18nOriginalText;
	if (!original) {
		original = current;
	} else {
		var prevLocalized = localizeText(original);
		if (current !== prevLocalized) {
			original = current;
		}
	}
	node.__moltisI18nOriginalText = original;
	var localized = localizeText(original);
	if (localized !== current) {
		node.nodeValue = localized;
	}
}

function restoreTextNode(node) {
	if (!node || node.nodeType !== Node.TEXT_NODE || shouldSkipNode(node)) return;
	var original = node.__moltisI18nOriginalText;
	if (original && node.nodeValue !== original) {
		node.nodeValue = original;
	}
}

function translateElementAttributes(el) {
	if (!el || el.nodeType !== Node.ELEMENT_NODE || shouldSkipNode(el)) return;
	translateAttr(el, "title", "moltisI18nTitleOriginal");
	translateAttr(el, "placeholder", "moltisI18nPlaceholderOriginal");
	translateAttr(el, "aria-label", "moltisI18nAriaOriginal");
}

function restoreElementAttributes(el) {
	if (!el || el.nodeType !== Node.ELEMENT_NODE || shouldSkipNode(el)) return;
	restoreAttr(el, "title", "moltisI18nTitleOriginal");
	restoreAttr(el, "placeholder", "moltisI18nPlaceholderOriginal");
	restoreAttr(el, "aria-label", "moltisI18nAriaOriginal");
}

function translateAttr(el, attr, key) {
	if (!el.hasAttribute(attr)) return;
	var current = el.getAttribute(attr);
	if (!current) return;
	var original = el.dataset[key] || current;
	var localized = localizeText(original);
	el.dataset[key] = original;
	if (localized !== current) {
		el.setAttribute(attr, localized);
	}
}

function restoreAttr(el, attr, key) {
	var original = el.dataset[key];
	if (!original) return;
	if (el.getAttribute(attr) !== original) {
		el.setAttribute(attr, original);
	}
}

function localizeText(value) {
	if (activeLocale !== "zh-CN") return value;
	var text = String(value || "");
	if (!text.trim()) return text;

	var leading = text.match(/^\s*/u)?.[0] || "";
	var trailing = text.match(/\s*$/u)?.[0] || "";
	var core = text.trim();

	var direct = ZH_TEXT_MAP[core];
	if (direct) return `${leading}${direct}${trailing}`;
	var lowerDirect = ZH_TEXT_MAP_LOWER[core.toLowerCase()];
	if (lowerDirect) return `${leading}${lowerDirect}${trailing}`;

	for (var [pattern, replacement] of DYNAMIC_PATTERNS) {
		if (pattern.test(core)) {
			return `${leading}${core.replace(pattern, replacement)}${trailing}`;
		}
	}
	var replaced = core;
	for (var [from, to] of FRAGMENT_REPLACEMENTS) {
		if (replaced.includes(from)) replaced = replaced.split(from).join(to);
	}
	if (replaced !== core) return `${leading}${replaced}${trailing}`;
	return text;
}
