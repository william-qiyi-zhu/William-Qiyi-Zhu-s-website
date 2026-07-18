export interface TranslatedProject {
  name: string;
  type: string;
  link: string;
  description: string;
  category: 'sci-fi' | 'logic' | 'strategy';
  note?: string;
}

export interface TranslatedSkill {
  name: string;
  percentage: number;
}

export interface TranslatedQA {
  q: string;
  a: string;
}

export interface TranslationSet {
  header: {
    brandName: string;
    tagline: string;
    navAbout: string;
    navTalents: string;
    navStack: string;
    navProjects: string;
    navTwin: string;
    exploreWorks: string;
    connect: string;
  };
  hero: {
    sysActive: string;
    slogan: string;
    exploreButton: string;
    connectButton: string;
    scrollDown: string;
  };
  about: {
    sectionSub: string;
    sectionTitle: string;
    bioMain: string;
    panel1Title: string;
    panel1Desc: string;
    panel2Title: string;
    panel2Desc: string;
  };
  talents: {
    sectionSub: string;
    sectionTitle: string;
    esportsBadge: string;
    esportsTelemetry: string;
    esportsTitle: string;
    esportsSub: string;
    esportsDesc: string;
    esportsMetricLabel: string;
    esportsMetricVal: string;
    devBadge: string;
    devTelemetry: string;
    devTitle: string;
    devSub: string;
    devDesc: string;
    devMetricLabel: string;
    devMetricVal: string;
  };
  stack: {
    sectionSub: string;
    sectionTitle: string;
    desc: string;
  };
  projects: {
    sectionSub: string;
    sectionTitle: string;
    tabAll: string;
    tabSciFi: string;
    tabLogic: string;
    tabStrategy: string;
    sectorSciFi: string;
    sectorLogic: string;
    sectorStrategy: string;
    launchLink: string;
  };
  twin: {
    sectionSub: string;
    sectionTitle: string;
    desc: string;
    chatHeader: string;
    placeholder: string;
    typing: string;
    initialMessage: string;
  };
  contact: {
    sectionSub: string;
    sectionTitle: string;
    desc: string;
    formTitle: string;
    labelCallsign: string;
    labelEmail: string;
    labelData: string;
    placeholderData: string;
    buttonTransmit: string;
    successMsg: string;
    githubNode: string;
    mailNode: string;
  };
  modal: {
    title: string;
    sub: string;
    question: string;
    warning: string;
    btnConfirm: string;
    btnCancel: string;
  };
  projectsList: TranslatedProject[];
  skillsList: TranslatedSkill[];
  dualAgentQA: TranslatedQA[];
}

export const locales: { zh: TranslationSet; en: TranslationSet } = {
  zh: {
    header: {
      brandName: "WILLIAM \"ZHUQIYI\" CHU",
      tagline: "代码重整规则，准心掌控战场。",
      navAbout: "01 关于",
      navTalents: "02 天赋",
      navStack: "03 堆栈",
      navProjects: "04 项目",
      navTwin: "05 智能分身",
      exploreWorks: "探索作品集",
      connect: "建立联系"
    },
    hero: {
      sysActive: "SYS_ACTIVE_NODE_2026",
      slogan: "\"代码重整规则，准心掌控战场。\"",
      exploreButton: "探索作品集 EXPLORE_LABS",
      connectButton: "建立联系 COOPERATE",
      scrollDown: "SCROLL_DOWN"
    },
    about: {
      sectionSub: "[01] CORE_IDENTITY",
      sectionTitle: "核心定位",
      bioMain: "Welcome to my digital sandbox. 作为诞生在人工智能技术爆发周期的 11岁AI数字原住民 与游戏创作者，我探索 逻辑 与 想象力 的边界。我用 代码重整规则，在虚拟与现实的交界处探索无限可能。",
      panel1Title: "RULE_RECONSTRUCTOR / 规则重构者",
      panel1Desc: "大部分人通过说明书理解工具，我通过编译结构审视底层。在我的沙盒里，任何逻辑实体都可以通过程序转译、重构，最终部署为触手可及的现实项目。",
      panel2Title: "COGNITIVE_REACTION / 认知并发",
      panel2Desc: "电竞是对局势的瞬时推演，极客是对逻辑的长效提炼。两块看似平行的大脑天赋，在完美的战局反射与高性能代码架构中，实现了心智计算的高度融合。"
    },
    talents: {
      sectionSub: "[02] TALENTS PORTRAIT",
      sectionTitle: "双天赋面板",
      esportsBadge: "Elite Operator / 顶级选手",
      esportsTelemetry: "AIM_TELEMETRY",
      esportsTitle: "CS2 A+ PERFECTION / CS2 A+ 段位",
      esportsSub: "REACTION_WINDOW: EXTREME / 反应视界：极限",
      esportsDesc: "11岁强力登顶完美世界竞技平台顶级段位。我通过极致的肌肉记忆控枪、秒级全局信息采集和高度抗压博弈，展示了电子竞技中的理性之美。每一个完美的交叉准心，都是对最优战术解的数学转译。",
      esportsMetricLabel: "REFLEX SPEED / 反应速度",
      esportsMetricVal: "92% 准心精确度",
      devBadge: "Code Architect / 代码架构师",
      devTelemetry: "COMPILER_STREAM",
      devTitle: "AI & C++ LOGIC / AI 与 C++ 逻辑",
      devSub: "COMPILER STREAM: CONTINUOUS / 编译流：连续性",
      devDesc: "利用 C++ 构建极简且高效的底层逻辑，以及在 AI Studio 中使用 Google Gemini 模型封装智能 AI 代理程序。我擅长分析并优化系统逻辑链路，让人工智能通过程序赋予交互界面真正的智慧灵魂。",
      devMetricLabel: "SYSTEM ARCHITECTURE / 系统架构",
      devMetricVal: "88% 稳定性"
    },
    stack: {
      sectionSub: "[03] QUANTIFIED_METRICS",
      sectionTitle: "技术堆栈与技能量化",
      desc: "数据是逻辑最精确的表象。我的技能百分比不含任何虚标，代表了在多个完整项目重构、Vercel一键部署以及大型算法推演中的实际耗时与心智重合度。"
    },
    projects: {
      sectionSub: "[04] PROJECT_MATRIX_V2",
      sectionTitle: "项目创意矩阵",
      tabAll: "ALL [7]",
      tabSciFi: "🪐 科幻 [2]",
      tabLogic: "🧩 逻辑 [3]",
      tabStrategy: "♟️ 策略 [2]",
      sectorSciFi: "🪐 领域一：星际模拟与科幻构架 (Sci-Fi & Simulation)",
      sectorLogic: "🧩 领域二：认知逻辑与算法竞技 (Logic & Cognition)",
      sectorStrategy: "♟️ 领域三：策略工具与艺术编码 (Utility & Creative Code)",
      launchLink: "LAUNCH PROJECT / 点击运行项目"
    },
    twin: {
      sectionSub: "[05] COGNITIVE_DOUBLE_AGENT",
      sectionTitle: "AI 智能分身",
      desc: "我的智能代理搭载了 William 的意识特征。它能像我本人一样，直接解答我所有的项目原理、对局操作与逻辑底层。",
      chatHeader: "WILLIAM_DOUBLE_v0.12",
      placeholder: "向智能分身发送指令，可询问我的任意项目细节...",
      typing: "对方正在输入...",
      initialMessage: "你好！我是朱奇屹的 AI Digital Double v0.12 智能分身。我同步了 William 的 7 个核心创意项目和技术栈细节。你可以问我关于我的任何项目（比如星际开拓者是如何实现引力场计算的，或者色彩挑战 V2 的反应追踪机制），不局限于特定问题，快来聊聊吧！"
    },
    contact: {
      sectionSub: "[06] ESTABLISH DIRECT CONNECT",
      sectionTitle: "建立联系",
      desc: "寻找关于沙盒游戏设计、C++算法重构或电竞项目的优质合作？我的数字节点全天候处于监听状态。欢迎发送数据包，我将在下一次主线程循环中立即答复你。",
      formTitle: "TERMINAL STREAM // 主线程输入",
      labelCallsign: "你的身份 / CALLSIGN",
      labelEmail: "邮箱地址 / MAIL_IP",
      labelData: "日志/数据内容 / DATA_STREAM",
      placeholderData: "输入合作说明或联系信息...",
      buttonTransmit: "发送数据包 TRANSMIT_DATA",
      successMsg: "数据包发送成功！主线程已录入。",
      githubNode: "GITHUB 节点",
      mailNode: "QQ 邮件"
    },
    modal: {
      title: "准备前往外部网站",
      sub: "您选择的项目：",
      question: "是否现在前往该部署网站？",
      warning: "即将离开当前沙盒，前往外部节点：",
      btnConfirm: "确认前往 DEPLOYMENT_LINK",
      btnCancel: "返回沙盒 RETURN"
    },
    projectsList: [
      {
        name: 'William Star Pioneer',
        type: 'HTML5 Canvas / JS',
        link: 'william-star-pioneer.vercel.app',
        description: 'An interactive canvas experiment simulating spacecraft behavior and propulsion physics in a 2D space environment.',
        category: 'sci-fi',
        note: 'An early exploration in dynamic visual rendering and event-driven canvas interactions.'
      },
      {
        name: 'William Nova Defense',
        type: 'Dynamic Grid',
        link: 'william-nova-defense.vercel.app',
        description: 'A tactical defense simulation prototype testing node-based grid mechanics and pathfinding algorithms.',
        category: 'sci-fi',
        note: 'An exploration in coordinate management and pathfinding logic.'
      },
      {
        name: 'Color Challenge V2',
        type: 'Reaction Tracker',
        link: 'color-challenge-v2.vercel.app',
        description: 'A high-precision millisecond tracker designed to measure and map tracking reflexes, inspired by competitive esports drills.',
        category: 'logic',
        note: 'Translating reaction-training concepts from competitive CS2 into a functional web tool.'
      },
      {
        name: 'Time Walker',
        type: 'State Logic',
        link: 'time-walker.vercel.app',
        description: 'A web puzzle prototype driven by time-based state transitions and strict logical constraints.',
        category: 'logic',
        note: 'An exercise in maintaining state coherence across complex user interactions.'
      },
      {
        name: 'Sum Game',
        type: 'Math & Logic',
        link: 'sum-game-taupe.vercel.app',
        description: 'A calculation challenge testing quick numerical estimation under accelerating time-decay conditions.',
        category: 'logic',
        note: 'Designed to train rapid mental arithmetic and decision-making under time pressure.'
      },
      {
        name: 'Grammar Master',
        type: 'Utility Tool',
        link: 'grammar-master-kappa.vercel.app',
        description: 'An educational companion tool created to track, organize, and practice targeted English grammar patterns.',
        category: 'strategy',
        note: 'A practical utility built to solve a concrete everyday language learning pain point.'
      },
      {
        name: 'Particle Heart',
        type: 'Trigonometry',
        link: 'heart-alpha-jet.vercel.app',
        description: 'An interactive visual layout rendering thousands of colored particle streams flowing along trigonometric equations.',
        category: 'strategy',
        note: 'A study connecting mathematical formulas with real-time browser rendering.'
      }
    ],
    skillsList: [
      { name: 'C++ 核心语法与算法逻辑', percentage: 65 },
      { name: 'AI Agent 原型设计与调优', percentage: 80 },
      { name: 'Web 独立部署与架构 (Vercel)', percentage: 95 }
    ],
    dualAgentQA: [
      { q: "你怎么看待「AI数字原住民」这个身份？", a: "作为一个11岁的AI数字原住民，代码对我来说不仅仅是工具，它就是我感知世界并与其交互的感官。我出生在自然语言即可编译的时代，这让能更专注于底层逻辑架构与高维创意的整合，而非被繁琐的语法束缚。" },
      { q: "CS2完美 A+ 战段与写代码有什么共通之处？", a: "两者的本质都是极速的信息捕获与最优路径决策。在完美A+的高水平对抗中，毫秒级的反应、精准的准心定位、完美的时机把控都是建立在脑海中庞大的战术决策树之上的。这与编写高性能C++程序、调试代码重构规则完全一致——都是追求极简与极限的精确度。" },
      { q: "谈谈「星际开拓者」游戏里的算法设计？", a: "在《Star Pioneer》中，我最自豪的是它的天体引力算法。我用三角函数模拟了多重质量星球的微型引力场，玩家开采飞船在接近星球时会受到渐进的偏离牵引。此外，星系的资源丰度生成采用的是基于离散哈希的加权随机算法，保证每一次航行都是独特的沙盒体验。" }
    ]
  },
  en: {
    header: {
      brandName: "WILLIAM \"ZHUQIYI\" CHU",
      tagline: "Logic in Code, Precision in Crosshair.",
      navAbout: "01 ABOUT",
      navTalents: "02 TALENTS",
      navStack: "03 STACK",
      navProjects: "04 PROJECTS",
      navTwin: "05 TWIN",
      exploreWorks: "EXPLORE WORKS",
      connect: "CONNECT"
    },
    hero: {
      sysActive: "SYS_ACTIVE_NODE_2026",
      slogan: "\"Logic in Code, Precision in Crosshair.\"",
      exploreButton: "EXPLORE MATRIX [EXPLORE_LABS]",
      connectButton: "ESTABLISH CONNECT [COOPERATE]",
      scrollDown: "SCROLL_DOWN"
    },
    about: {
      sectionSub: "[01] CORE_IDENTITY",
      sectionTitle: "CORE IDENTITY",
      bioMain: "Welcome to my digital sandbox. As an 11-year-old AI Digital Native and game creator born during the AI explosion era, I explore the boundary between logic and imagination. I reconstruct rules with code, seeking infinite possibilities at the intersection of virtuality and reality.",
      panel1Title: "RULE_RECONSTRUCTOR / RULE RECONSTRUCT",
      panel1Desc: "Most understand tools through instruction manuals; I inspect them through compilation structures. In my sandbox, any logical entity can be compiled, reconstructed, and deployed into tangible reality.",
      panel2Title: "COGNITIVE_REACTION / COGNITIVE CONCURRENCY",
      panel2Desc: "Esports is instant battlefield deduction, while programming is long-term logical distillation. These parallel talents fuse together in perfect spatial reflex and high-performance code architecture."
    },
    talents: {
      sectionSub: "[02] TALENTS PORTRAIT",
      sectionTitle: "DUAL TALENTS PORTRAIT",
      esportsBadge: "Elite Operator",
      esportsTelemetry: "AIM_TELEMETRY",
      esportsTitle: "CS2 A+ PERFECTION",
      esportsSub: "REACTION WINDOW: EXTREME",
      esportsDesc: "Achieving top-tier A+ rank on the Perfect World Esports Platform at age 11. Through muscular reflex control, rapid visual scan streams, and intense composure under fire, I showcase the rational precision of competitive gaming. Every perfect crosshair lock is a mathematical translation of optimal strategy.",
      esportsMetricLabel: "REFLEX SPEED",
      esportsMetricVal: "92% AIM ACCURACY",
      devBadge: "Code Architect",
      devTelemetry: "COMPILER_STREAM",
      devTitle: "AI & C++ LOGIC",
      devSub: "COMPILER STREAM: CONTINUOUS",
      devDesc: "Developing elegant, efficient systems in C++ and engineering smart AI Agents with Google Gemini models in AI Studio. I analyze and optimize logic pipelines to breathe intelligence into user interfaces.",
      devMetricLabel: "SYSTEM ARCHITECTURE",
      devMetricVal: "88% STABILITY"
    },
    stack: {
      sectionSub: "[03] QUANTIFIED_METRICS",
      sectionTitle: "TECH STACK & QUANTIFIED METRICS",
      desc: "Data is the most precise representation of logic. My skill percentages represent real-world development time and cognitive alignment in full-scale project refactoring and deployment, with no inflated metrics."
    },
    projects: {
      sectionSub: "[04] PROJECT_MATRIX_V2",
      sectionTitle: "PROJECT CREATIVE MATRIX",
      tabAll: "ALL [7]",
      tabSciFi: "🪐 SCI-FI [2]",
      tabLogic: "🧩 LOGIC [3]",
      tabStrategy: "♟️ STRATEGY [2]",
      sectorSciFi: "🪐 Sector I: Interstellar Simulation & Sci-Fi Universe",
      sectorLogic: "🧩 Sector II: Cognitive Logic & Algorithmic Games",
      sectorStrategy: "♟️ Sector III: Tactical Utilities & Creative Coding",
      launchLink: "LAUNCH PROJECT"
    },
    twin: {
      sectionSub: "[05] COGNITIVE_DOUBLE_AGENT",
      sectionTitle: "AI DIGITAL TWIN",
      desc: "My AI agent is synchronized with William's cognitive persona. It acts as my digital twin, standing by to explain my projects, system structures, and tactical theories.",
      chatHeader: "WILLIAM_DOUBLE_v0.12",
      placeholder: "Ask my digital twin about any of my projects, core logic, or skills...",
      typing: "Typing...",
      initialMessage: "Hello! I am William's AI Digital Double v0.12. I have fully indexed William's 7 core creative projects and technical architecture details. You can ask me any question about my creations (e.g., how the gravity algorithms in Star Pioneer work, or how the Reaction Tracker in Color Challenge is implemented) - not limited to presets. Let's talk!"
    },
    contact: {
      sectionSub: "[06] ESTABLISH DIRECT CONNECT",
      sectionTitle: "ESTABLISH DIRECT CONNECT",
      desc: "Seeking collaboration on sandbox game designs, C++ systems refactoring, or competitive esports partnerships? My digital node is online and listening. Transmit your packet, and I will respond on my next main thread cycle.",
      formTitle: "TERMINAL STREAM // MAIN THREAD INPUT",
      labelCallsign: "YOUR CALLSIGN / ID",
      labelEmail: "YOUR MAIL IP / EMAIL",
      labelData: "LOG DATA / DATA STREAM",
      placeholderData: "Enter message details or cooperation info...",
      buttonTransmit: "TRANSMIT DATA",
      successMsg: "Data packet successfully transmitted! Registered on main thread.",
      githubNode: "GITHUB NODE",
      mailNode: "QQ EMAIL"
    },
    modal: {
      title: "Departing for External Node",
      sub: "You selected project:",
      question: "Would you like to open this deployment website now?",
      warning: "You are leaving this sandbox environment to visit:",
      btnConfirm: "CONFIRM DEPARTURE",
      btnCancel: "CANCEL"
    },
    projectsList: [
      {
        name: 'William Star Pioneer',
        type: 'HTML5 Canvas / JS',
        link: 'william-star-pioneer.vercel.app',
        description: 'An interactive canvas experiment simulating spacecraft behavior and propulsion physics in a 2D space environment.',
        category: 'sci-fi',
        note: 'An early exploration in dynamic visual rendering and event-driven canvas interactions.'
      },
      {
        name: 'William Nova Defense',
        type: 'Dynamic Grid',
        link: 'william-nova-defense.vercel.app',
        description: 'A tactical defense simulation prototype testing node-based grid mechanics and pathfinding algorithms.',
        category: 'sci-fi',
        note: 'An exploration in coordinate management and pathfinding logic.'
      },
      {
        name: 'Color Challenge V2',
        type: 'Reaction Tracker',
        link: 'color-challenge-v2.vercel.app',
        description: 'A high-precision millisecond tracker designed to measure and map tracking reflexes, inspired by competitive esports drills.',
        category: 'logic',
        note: 'Translating reaction-training concepts from competitive CS2 into a functional web tool.'
      },
      {
        name: 'Time Walker',
        type: 'State Logic',
        link: 'time-walker.vercel.app',
        description: 'A web puzzle prototype driven by time-based state transitions and strict logical constraints.',
        category: 'logic',
        note: 'An exercise in maintaining state coherence across complex user interactions.'
      },
      {
        name: 'Sum Game',
        type: 'Math & Logic',
        link: 'sum-game-taupe.vercel.app',
        description: 'A calculation challenge testing quick numerical estimation under accelerating time-decay conditions.',
        category: 'logic',
        note: 'Designed to train rapid mental arithmetic and decision-making under time pressure.'
      },
      {
        name: 'Grammar Master',
        type: 'Utility Tool',
        link: 'grammar-master-kappa.vercel.app',
        description: 'An educational companion tool created to track, organize, and practice targeted English grammar patterns.',
        category: 'strategy',
        note: 'A practical utility built to solve a concrete everyday language learning pain point.'
      },
      {
        name: 'Particle Heart',
        type: 'Trigonometry',
        link: 'heart-alpha-jet.vercel.app',
        description: 'An interactive visual layout rendering thousands of colored particle streams flowing along trigonometric equations.',
        category: 'strategy',
        note: 'A study connecting mathematical formulas with real-time browser rendering.'
      }
    ],
    skillsList: [
      { name: 'C++ Systems & Algorithm Logic', percentage: 65 },
      { name: 'AI Agent Architectures & Tuning', percentage: 80 },
      { name: 'Full Stack Deployment (Vercel)', percentage: 95 }
    ],
    dualAgentQA: [
      { q: "What is your perspective as an \"AI Digital Native\"?", a: "As an 11-year-old AI Digital Native, code is not just a tool—it is the sense through which I perceive and engage with the world. Born in an era where natural language can be compiled, I can focus on underlying architecture and high-dimensional creativity rather than syntax overhead." },
      { q: "What do CS2 A+ rankings and coding have in common?", a: "Both center on rapid information capture and optimal path decisions. In high-tier A+ matches, millisecond reaction times, precise crosshair placements, and positional timing are governed by immense cognitive tactical trees. This shares the exact mental flow of drafting efficient C++ systems and debugging rules." },
      { q: "Explain the planetary gravity logic in Star Pioneer.", a: "In Star Pioneer, I mapped local physical gravity fields using trigonometric orbits. Player ships approaching planets experience proportional pull vectors. Additionally, procedurally generated celestial ores use hashed weighted random algorithms to keep each sandbox flight layout fresh." }
    ]
  }
};
