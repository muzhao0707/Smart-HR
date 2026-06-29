# Smart-HR 智能招聘助手

Smart-HR 是一个可直接部署到 GitHub Pages 的智能招聘助手 Demo，用于展示「简历解析、岗位匹配、能力标签、风险点识别、面试题生成」等核心流程。

项目为纯前端实现，不需要安装依赖，不需要后端服务，上传到 GitHub 后即可通过 Pages 生成公开项目链接。

## 功能

- 输入岗位 JD 和候选人简历文本
- 自动计算岗位匹配度
- 自动抽取候选人能力标签
- 自动生成匹配优势和潜在风险
- 自动生成定制化面试题
- 支持复制完整匹配报告

## 技术实现

当前版本是纯前端 Demo：

- HTML
- CSS
- JavaScript
- 本地规则匹配引擎

正式后端版本可以扩展为：

- 后端 Web 服务
- AI 应用开发框架
- 技能关系图谱
- 向量检索服务
- 缓存组件
- 关系型数据库
- 文件存储服务
- 大模型评分模块

## 如何运行

直接打开 `index.html` 即可运行。

也可以使用本地静态服务：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080/
```


### Gitee Pages

1. 新建仓库，例如 `smart-hr-demo`
2. 上传本项目文件
3. 开启 Gitee Pages
4. 得到公开访问链接

## 项目说明

Smart-HR 是一款面向 HR 和面试官的智能招聘面试助手，支持简历文本解析、候选人能力结构识别、岗位匹配分析和面试题自动生成。该 Demo 模拟了正式系统的核心业务流程，可作为项目展示链接使用。

## 目录结构

```text
smart-hr-demo/
├── index.html
├── README.md
├── GITHUB_PAGES_DEPLOY.md
├── .nojekyll
├── .gitignore
└── assets/
    ├── app.js
    └── style.css
```

