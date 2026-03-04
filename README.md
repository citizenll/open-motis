# open-motis

`open-motis` 是基于上游 `moltis-org/moltis` 的独立 fork 分支，目标是持续维护中文体验与本地可用性。

## 项目定位

- 上游来源：`https://github.com/moltis-org/moltis`
- 本仓库：`https://github.com/citizenll/open-motis`
- 维护方向：
  - WebUI 深度汉化（设置页全链路）
  - 多语言框架持续补全（当前重点：中文）
  - 按需合并上游能力，但以本分支可用性为先

## 当前状态

- 已在上游新 i18n 架构基础上完成大规模中文补充
- 支持浏览器语言自动选择（含中英文）
- 支持在 WebUI 中切换语言
- 设置页多个子模块已完成补漏（agents / heartbeat / security / channels / hooks / mcp / skills / terminal / sandboxes 等）

## 快速开始

### 1) 源码运行

```bash
git clone https://github.com/citizenll/open-motis.git
cd open-motis
cargo run --release
```

默认启动后访问：

- `https://moltis.localhost:3000`（或终端输出中的实际地址）

### 2) Docker 运行

```bash
docker run -d \
  --name open-motis \
  -p 13131:13131 \
  -p 13132:13132 \
  -v open-motis-config:/home/moltis/.config/moltis \
  -v open-motis-data:/home/moltis/.moltis \
  -v /var/run/docker.sock:/var/run/docker.sock \
  ghcr.io/moltis-org/moltis:latest
```

说明：当前仍可使用上游镜像先跑通能力，仓库与文档由 `open-motis` 独立维护。

## 本仓库和上游关系

- 本仓库不会等待“汉化是否被上游合并”再迭代
- 上游若不接收汉化改动，`open-motis` 会继续独立发布与维护
- 若上游后续提供兼容改动，会按稳定性评估后择优同步

## 贡献方式

- 提交 issue：描述未汉化位置（最好附截图 + 页面路径）
- 提交 PR：建议按模块拆分（例如 `settings/mcp`、`settings/terminal`）
- 优先保证：
  - key 完整性（en/zh/fr 不缺键）
  - 页面显式 `t(...)` 覆盖（避免动态匹配漏翻）
  - 不破坏上游原有功能逻辑

## License

继承上游协议，详见 `LICENSE`。
