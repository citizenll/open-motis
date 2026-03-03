export default {
	title: "代理",
	newAgent: "新建代理",
	introLine1: "创建具有不同身份和性格的代理角色。",
	introLine2: "每个代理都有自己的记忆和系统提示词。",
	loading: "加载中…",
	configOnlyPresets: "仅配置预设",
	configBadge: "配置",

	form: {
		editTitle: "编辑 {{name}}",
		createTitle: "创建代理",
		idLabel: "ID（slug，后续不可更改）",
		idPlaceholder: "例如 writer、coder、researcher",
		nameLabel: "名称",
		namePlaceholder: "创意写作助手",
		emojiLabel: "表情",
		themeLabel: "主题",
		themePlaceholder: "睿智猫头鹰、佛系狐狸、机智机器人…",
		soulLabel: "Soul（系统提示人格）",
		soulPlaceholder: "你是一名创意写作助手…",
		spawnSettings: "Spawn 设置（TOML）",
		spawnSettingsHelp: "配置该代理在通过 spawn_agent 作为子代理启动时的行为。",
		saving: "保存中…",
		save: "保存",
		create: "创建",
		cancel: "取消",
		nameRequired: "名称为必填项。",
		idRequired: "ID 为必填项。",
		failedToSave: "保存失败",
		failedToSavePreset: "保存预设 TOML 失败",
	},

	card: {
		default: "默认",
		identitySettings: "身份设置",
		edit: "编辑",
		delete: "删除",
		setDefault: "设为默认",
		deleteConfirm: '删除代理“{{name}}”？使用该代理的会话将重新分配到默认代理。',
	},

	preset: {
		hide: "隐藏",
		view: "查看",
	},

	errors: {
		failedToLoadAgents: "加载代理失败",
		failedToDelete: "删除失败",
		failedToSetDefault: "设置默认失败",
	},
};
