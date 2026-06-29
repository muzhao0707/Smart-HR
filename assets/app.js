const keywordGroups = [
  {
    name: "后端工程",
    keywords: ["后端", "服务端", "Web 框架", "接口", "工程开发", "业务系统"]
  },
  {
    name: "数据库与缓存",
    keywords: ["数据库", "缓存", "索引", "事务", "数据存储", "数据一致性"]
  },
  {
    name: "消息队列",
    keywords: ["消息队列", "异步", "削峰", "任务处理", "重复消费"]
  },
  {
    name: "AI 工程",
    keywords: ["AI", "大模型", "智能问答", "向量检索", "知识库", "模型评分"]
  },
  {
    name: "游戏理解",
    keywords: ["游戏", "开放世界", "动作竞技", "RPG", "单机游戏", "数值", "养成", "抽卡"]
  },
  {
    name: "测试能力",
    keywords: ["测试", "缺陷", "复现", "用例", "边界", "风险", "验证", "问题定位"]
  },
  {
    name: "沟通协作",
    keywords: ["沟通", "协作", "项目组", "需求拆解", "联调", "交付"]
  }
];

const demoJD = `岗位：游戏综合测试工程师实习生
职责：
1. 参与游戏功能测试、体验测试、版本验证和缺陷跟进；
2. 能根据需求文档拆解测试点，发现流程、数值、表现和体验问题；
3. 关注游戏体验，对开放世界、动作竞技、RPG、单机游戏等品类有较多体验；
4. 具备良好的沟通表达能力，能够清晰描述问题复现步骤；
5. 有编程、数据库、AI 工具或数据分析经验优先。`;

const demoResume = `候选人 A，某高校计算机相关专业本科。
熟悉一门主流后端开发语言，了解 Web 框架、关系型数据库、缓存组件、消息队列和基础 AI 应用开发流程。
项目经历：
1. 游戏体验与数值分析项目：针对多款 RPG / 动作类游戏进行战斗机制、角色成长、抽卡规则和资源循环分析，通过样本记录和对比验证总结体验问题。
2. 单机游戏系统拆解项目：选择多款不同类型的单机游戏，分析战斗反馈、资源管理、难度变化和玩家决策压力，并整理成对比表。
3. 智能招聘辅助系统 Demo：基于 Web 技术和 AI 应用思路，实现简历文本解析、岗位匹配评分、能力标签识别和面试题生成。
游戏经历：长期体验开放世界、动作竞技、RPG 和单机游戏，关注战斗反馈、资源循环、任务引导、数值平衡和匹配体验。
校园经历：曾参与校内软件项目，负责需求整理、接口联调、测试反馈和项目交付协作。`;

const demoScenarios = {
  "game-test": {
    title: "游戏综合测试工程师实习生",
    jd: demoJD,
    resume: demoResume
  },
  "backend": {
    title: "后端开发实习生",
    jd: `岗位：后端开发实习生
职责：
1. 参与业务系统后端接口开发、数据表设计和接口联调；
2. 熟悉至少一种后端开发语言，了解 Web 框架和数据库基础；
3. 关注系统稳定性、数据一致性、接口性能和异常处理；
4. 有缓存、消息队列、异步任务或项目部署经验优先；
5. 具备良好的代码规范、沟通协作和问题定位能力。`,
    resume: `候选人 B，某高校软件工程相关专业本科。
熟悉后端工程开发，了解 Web 框架、数据库、缓存和消息队列，具备接口设计和联调经验。
项目经历：
1. 本地生活服务平台：参与用户登录、商家信息、订单流转和内容评价等模块开发，负责部分后端接口设计与数据存储。
2. 校园工具系统：负责需求拆解、接口开发、基础权限控制和异常处理，完成多个模块的联调测试。
3. 数据统计小工具：对访问记录、用户行为和业务数据进行清洗统计，输出可视化结果。
校园经历：参与校内项目组，负责接口联调、代码合并和测试反馈跟进。`
  },
  "product-ops": {
    title: "产品运营实习生",
    jd: `岗位：产品运营实习生
职责：
1. 参与活动策划、用户调研、竞品分析和内容运营；
2. 能通过数据观察用户行为，发现转化、留存或体验问题；
3. 具备较好的文档表达、沟通协作和执行能力；
4. 熟悉办公工具、数据表格和 AI 辅助内容整理优先；
5. 对互联网产品、社区、游戏或内容平台有持续关注。`,
    resume: `候选人 C，某高校管理或传媒相关专业本科。
熟悉内容运营、活动策划和数据整理，能够使用表格和 AI 工具辅助资料分析。
项目经历：
1. 校园活动运营项目：负责活动方案、报名转化、社群通知和活动复盘，整理用户反馈并优化传播话术。
2. 内容账号分析项目：对多个账号的选题、互动和发布时间进行对比，归纳内容增长规律。
3. 竞品体验分析项目：拆解同类产品的核心功能、用户路径、会员机制和内容分发逻辑。
校园经历：参与学生组织宣传工作，负责文案撰写、数据统计和跨部门沟通。`
  },
  "ai-assistant": {
    title: "AI 应用开发实习生",
    jd: `岗位：AI 应用开发实习生
职责：
1. 参与智能问答、知识库检索、文本分析和业务流程自动化功能开发；
2. 理解大模型应用的基本流程，能设计提示词并评估输出效果；
3. 了解后端服务、接口调用、向量检索或知识库搭建优先；
4. 能将业务需求拆解为可实现的 AI 应用链路；
5. 具备文档能力、学习能力和产品意识。`,
    resume: `候选人 D，某高校计算机相关专业本科。
了解 AI 应用开发流程，熟悉智能问答、知识库构建、文本摘要和岗位匹配等场景。
项目经历：
1. 智能问答 Demo：基于文档内容实现问答检索、答案生成和引用片段展示。
2. 招聘辅助系统 Demo：实现简历文本解析、岗位匹配评分、能力标签抽取和面试题生成。
3. 学习资料整理工具：将课程材料整理为知识点摘要、复习题和错题标签。
校园经历：参与课程项目与团队协作，负责需求拆解、原型说明和功能验证。`
  },
  "weak-match": {
    title: "游戏综合测试工程师实习生",
    jd: demoJD,
    resume: `候选人 E，某高校非计算机专业本科。
主要经历集中在行政协助、文档整理和日常沟通，熟悉基础办公软件。
项目经历：
1. 校园资料整理项目：负责表格录入、材料归档和信息校对。
2. 社团活动协助：参与现场签到、通知发布和物资统计。
兴趣经历：偶尔体验休闲类应用，对游戏测试、缺陷复现、数值分析和技术工具使用了解较少。`
  }
};

const $ = (id) => document.getElementById(id);

function normalize(text) {
  return (text || "").toLowerCase();
}

function countKeywordHits(text, keywords) {
  const rawText = text || "";
  const lower = normalize(rawText);
  return keywords.filter((keyword) => {
    const rawKeyword = keyword || "";
    return rawText.includes(rawKeyword) || lower.includes(rawKeyword.toLowerCase());
  });
}

function analyze() {
  const jobTitle = $("jobTitle").value.trim() || "目标岗位";
  const jdText = $("jdText").value.trim();
  const resumeText = $("resumeText").value.trim();

  if (!jdText || !resumeText) {
    alert("请先填写岗位 JD 和候选人简历文本。");
    return;
  }

  const combined = `${jdText}\n${resumeText}`;
  const resumeOnly = resumeText;
  const jdOnly = jdText;
  const matchedGroups = [];
  const missingGroups = [];
  const allHits = new Set();

  keywordGroups.forEach((group) => {
    const jdHits = countKeywordHits(jdOnly, group.keywords);
    const resumeHits = countKeywordHits(resumeOnly, group.keywords);
    const groupHits = [...new Set([...jdHits, ...resumeHits])];

    if (resumeHits.length > 0) {
      matchedGroups.push({ ...group, hits: groupHits, resumeHits });
      groupHits.forEach((hit) => allHits.add(hit));
    } else if (jdHits.length > 0) {
      missingGroups.push(group);
    }
  });

  let score = 35;
  score += matchedGroups.length * 8;
  score += Math.min(allHits.size * 2, 18);

  if (/项目|经历|系统|平台|分析/.test(resumeOnly)) score += 8;
  if (/游戏|数值|测试|复现|缺陷/.test(resumeOnly)) score += 8;
  if (/AI|智能|大模型|知识库|模型评分/.test(resumeOnly)) score += 6;
  score = Math.max(0, Math.min(96, score));

  renderScore(score, jobTitle);
  renderTags(matchedGroups);
  renderStrengths(matchedGroups, resumeOnly);
  renderRisks(missingGroups, jdOnly, resumeOnly);
  renderQuestions(jobTitle, matchedGroups, combined);
}

function renderScore(score, jobTitle) {
  $("scoreValue").textContent = `${score}`;
  $("scoreRing").style.background = `conic-gradient(var(--accent) ${score * 3.6}deg, #e9eef6 0deg)`;

  let title = "匹配度良好";
  let desc = `候选人与「${jobTitle}」存在较高关联，可进入面试评估。`;

  if (score >= 85) {
    title = "高度匹配";
    desc = `候选人与「${jobTitle}」在项目经历、技能栈和岗位能力上匹配度较高，建议优先进入面试。`;
  } else if (score >= 70) {
    title = "较为匹配";
    desc = `候选人与「${jobTitle}」具备较多相关经验，建议重点追问项目真实性、问题定位能力和岗位动机。`;
  } else if (score >= 55) {
    title = "部分匹配";
    desc = `候选人具备部分岗位相关能力，但仍需通过面试确认经验深度和实际产出。`;
  } else {
    title = "匹配不足";
    desc = `候选人与「${jobTitle}」的直接相关经历较少，建议谨慎评估或补充信息后再判断。`;
  }

  $("scoreTitle").textContent = title;
  $("scoreDesc").textContent = desc;
}

function renderTags(groups) {
  const container = $("skillTags");
  container.innerHTML = "";
  container.classList.remove("empty");

  if (groups.length === 0) {
    container.textContent = "暂无匹配标签";
    container.classList.add("empty");
    return;
  }

  groups.forEach((group) => {
    const tag = document.createElement("span");
    tag.className = "tag hit";
    tag.textContent = `${group.name}：${group.resumeHits.slice(0, 3).join(" / ")}`;
    container.appendChild(tag);
  });
}

function renderStrengths(groups, resumeText) {
  const list = $("strengthList");
  list.innerHTML = "";

  const strengths = [];
  if (groups.some((g) => g.name === "游戏理解")) {
    strengths.push("具备明确的游戏经历和品类理解，能够从玩家体验、数值系统和战斗反馈角度观察问题。");
  }
  if (groups.some((g) => g.name === "测试能力")) {
    strengths.push("简历中出现测试、复现、验证或问题定位相关信息，具备转化为测试工作的基础。");
  }
  if (groups.some((g) => g.name === "后端工程")) {
    strengths.push("具备后端工程基础，理解接口、数据流转和系统稳定性，有利于定位技术类问题。");
  }
  if (groups.some((g) => g.name === "AI 工程")) {
    strengths.push("有 AI 应用或知识库相关经验，可迁移到需求拆解、知识库问答和测试点生成场景。");
  }
  if (/奖|一等奖|二等奖|国赛|省赛|算法/.test(resumeText)) {
    strengths.push("存在竞赛或奖项经历，说明候选人具备一定学习能力和技术基础。");
  }
  if (strengths.length === 0) {
    strengths.push("候选人具备部分基础能力，但需要进一步补充项目成果和岗位相关经历。");
  }

  strengths.forEach((item) => appendLi(list, item));
}

function renderRisks(missingGroups, jdText, resumeText) {
  const list = $("riskList");
  list.innerHTML = "";
  const risks = [];

  missingGroups.forEach((group) => {
    risks.push(`岗位 JD 涉及「${group.name}」，但简历中体现较少，建议面试时补充追问。`);
  });

  if (!/上线|部署|生产|用户|真实|落地/.test(resumeText)) {
    risks.push("项目落地程度描述较少，建议追问是否有可运行 Demo、部署记录或项目链接。");
  }
  if (/游戏/.test(jdText) && !/缺陷|测试用例|复现/.test(resumeText)) {
    risks.push("游戏经历较丰富，但测试用例设计和缺陷跟踪流程需要进一步验证。");
  }
  if (risks.length === 0) {
    risks.push("暂未发现明显风险，建议重点确认候选人项目细节和实际负责范围。");
  }

  risks.slice(0, 5).forEach((item) => appendLi(list, item));
}

function renderQuestions(jobTitle, groups, text) {
  const list = $("questionList");
  list.innerHTML = "";
  const questions = [
    `你为什么投递「${jobTitle}」？你认为该岗位最核心的能力是什么？`,
    "请挑一个项目，说明你实际负责的模块、遇到的问题和最终结果。",
    "如果你发现一个偶现 Bug，你会如何记录、复现和推动定位？"
  ];

  if (groups.some((g) => g.name === "游戏理解")) {
    questions.push("你能以一款熟悉的游戏为例，说明它的战斗反馈、资源循环或成长节奏哪里设计得好，哪里可能有问题吗？");
  }
  if (groups.some((g) => g.name === "AI 工程")) {
    questions.push("如果让你用 AI 辅助生成测试用例，你会如何设计提示词，并如何校验输出质量？");
  }
  if (/后端|服务端|数据库|缓存|消息队列|接口/.test(text)) {
    questions.push("你的后端项目经验如何帮助你理解游戏服务端接口、数据一致性和异常问题？");
  }

  questions.slice(0, 7).forEach((item) => appendLi(list, item));
}

function appendLi(list, text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function buildReportText() {
  const lines = [];
  lines.push(`匹配度：${$("scoreValue").textContent}`);
  lines.push(`结论：${$("scoreTitle").textContent}`);
  lines.push($("scoreDesc").textContent);
  lines.push("");
  lines.push("能力标签：");
  lines.push([...$("skillTags").querySelectorAll(".tag")].map((el) => `- ${el.textContent}`).join("\n") || "暂无");
  lines.push("");
  lines.push("匹配优势：");
  lines.push([...$("strengthList").querySelectorAll("li")].map((el) => `- ${el.textContent}`).join("\n") || "暂无");
  lines.push("");
  lines.push("潜在风险：");
  lines.push([...$("riskList").querySelectorAll("li")].map((el) => `- ${el.textContent}`).join("\n") || "暂无");
  lines.push("");
  lines.push("建议面试题：");
  lines.push([...$("questionList").querySelectorAll("li")].map((el, index) => `${index + 1}. ${el.textContent}`).join("\n") || "暂无");
  return lines.join("\n");
}

$("fillDemo").addEventListener("click", () => {
  const key = $("demoScenario").value || "game-test";
  const scenario = demoScenarios[key] || demoScenarios["game-test"];
  $("jobTitle").value = scenario.title;
  $("jdText").value = scenario.jd;
  $("resumeText").value = scenario.resume;
});

$("analyzeBtn").addEventListener("click", analyze);

$("copyReport").addEventListener("click", async () => {
  const report = buildReportText();
  try {
    await navigator.clipboard.writeText(report);
    alert("报告已复制。");
  } catch (error) {
    alert("复制失败，请手动选择报告内容复制。");
  }
});
