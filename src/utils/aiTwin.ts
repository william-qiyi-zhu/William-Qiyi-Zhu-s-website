import { locales } from '../locales';

export const generateAIAgentResponse = (text: string, currentLang: 'zh' | 'en'): string => {
  const query = text.toLowerCase().trim();
  
  if (currentLang === 'zh') {
    // Project detections in Chinese
    if (query.includes("星际开拓者") || query.includes("star pioneer") || query.includes("pioneer") || query.includes("太空模拟") || query.includes("重力")) {
      return "《星际开拓者》(William Star Pioneer) 是一款像素风太空开拓生存游戏。在这款游戏里，我设计了**天体引力算法**。通过三角函数和引力公式实时计算飞船受到周围星球质量的偏心引力牵引力。此外，我还使用了基于离散哈希的加权随机算法生成随机星系资源富集度，使每一次航行都有极高的重玩价值！你可以直接点击卡片打开 `william-star-pioneer.vercel.app` 亲身体验驾驶飞船开采矿物！";
    }
    if (query.includes("新星防御") || query.includes("nova defense") || query.includes("defense") || query.includes("防御战") || query.includes("塔防")) {
      return "《新星防御战》(William Nova Defense) 是一款科幻防线构筑游戏。我在里面编写了暗能量敌人波次的**多线程路径规划寻路算法**与精密的防御塔攻击决策公式。为了保持极佳的可玩性，我调优了多维度的数值平衡和关卡压力梯度，考验玩家在高强度对局下的即时部署能力。快来通过点击卡片前往 `william-nova-defense.vercel.app` 构筑你的防御宇宙！";
    }
    if (query.includes("时空行者") || query.includes("time walker") || query.includes("walker") || query.includes("解谜") || query.includes("时空")) {
      return "《时空行者》(Time Walker) 是一款时空维度解谜游戏。它的核心逻辑在于打破了线性时间的桎梏，通过多层时间轨道状态快照，让玩家在因果逻辑环与时间轴坐标中穿梭推导。底层状态机记录了不同历史时间线里的玩家操作投影，实现解谜闭环。欢迎点击卡片打开 `time-walker.vercel.app` 体验这场智力博弈！";
    }
    if (query.includes("色彩挑战") || query.includes("color challenge") || query.includes("color") || query.includes("反应") || query.includes("测试")) {
      return "《色彩挑战 V2》(Color Challenge V2) 是一款极致视觉和极速反应判定的游戏。我将自己在 CS2 完美世界平台 A+ 级别的超强视觉反应训练逻辑写进了这款程序。它通过高精度的毫秒级渲染计时器，检测在动态变色背景下玩家的辨识度和响应极值，可以用来训练和测试职业射击游戏选手的反应视界。可以访问 `color-challenge-v2.vercel.app` 测试你是不是也有电竞选手的反应！";
    }
    if (query.includes("极速心算") || query.includes("sum game") || query.includes("心算") || query.includes("计算") || query.includes("数学")) {
      return "《算法极速心算》(Sum Game) 是一款考验大脑极致并发能力的算力竞赛游戏。底层利用高频自减计时器和指数级衰减公式产生答题压力，随着关卡提升，计算公式的嵌套层级与数字位数会动态提升。它完美展现了心智计算和极速数值敏感度。欢迎前往 `sum-game-taupe.vercel.app` 向最高纪录发起冲锋！";
    }
    if (query.includes("疯狂8点") || query.includes("crazy eight") || query.includes("卡牌") || query.includes("纸牌") || query.includes("博弈") || query.includes("疯狂八点")) {
      return "《疯狂8点》(William Crazy Eight) 是经典博弈卡牌桌游的数字化版本。我用 JavaScript 实现了严密的纸牌规则决策树，并编写了启发式卡牌价值权重决策AI，使电脑玩家能够评估当前手牌并推算最优策略。它拥有完整的出牌克制、花色转译和牌堆博弈机制。你可以前往 `william-crazy-eight.vercel.app` 与AI来一场脑力大战！";
    }
    if (query.includes("语法大师") || query.includes("grammar master") || query.includes("grammar") || query.includes("英语") || query.includes("学习")) {
      return "《智能语法大师》(Grammar Master) 是一款智能的外语语法记忆和校验工具。它源于我自己学习中的痛点——用传统的死记硬背很难高效率掌握复杂的时态和句式。于是我把痛点转译为代码，通过构建规则判别式及高频错题回顾机制，实现了高强度的外语习得闭环。可以去 `grammar-master-kappa.vercel.app` 试试看它是否也能帮到你！";
    }
    if (query.includes("粒子艺术之心") || query.includes("heart") || query.includes("粒子之心") || query.includes("爱心") || query.includes("粒子")) {
      return "《粒子艺术之心》(Heart) 是我非常喜欢的一个创意 Canvas 互动项目。它基于万千粒子物理模型，通过三角函数和高频心跳搏动公式，控制粒子在屏幕中央汇聚、搏动和消散。我加入了交互反引力磁场，当用户的鼠标滑过时，粒子会泛起层层涟漪、泛着荧光避开，将严谨的几何公式渲染成了浪漫迷人的数字艺术。可以点击去 `heart-alpha-jet.vercel.app` 拨动这些粒子！";
    }

    // Other core queries
    if (query.includes("项目") || query.includes("作品") || query.includes("游戏") || query.includes("创意")) {
      return "我的 8 大核心创意项目横跨 3 大领域，分别有：《星际开拓者》(太空生存)、《新星防御战》(塔防)、《时空行者》(时空因果解谜)、《色彩挑战 V2》(反应测试)、《算法极速心算》(算力竞速)、《疯狂8点》(AI卡牌博弈)、《智能语法大师》(效率工具)以及《粒子艺术之心》(Canvas交互)。你对哪一个最感兴趣？我可以为你揭秘它的底层核心算法和创意动机哦！";
    }
    if (query.includes("cs2") || query.includes("完美") || query.includes("段位") || query.includes("游戏水平") || query.includes("准心") || query.includes("反应")) {
      return "在CS2中，完美平台 A+ 是顶尖战力的象征。我通过高强度交叉准心锁定训练、秒级战场小地图信息并发处理、以及严密的心理博弈来实现常胜。这种电竞反射神经与我在编写高性能 C++ 架构、调试异步代码时的并发脑力是高度统一的。";
    }
    if (query.includes("c++") || query.includes("技术") || query.includes("代码") || query.includes("堆栈") || query.includes("开发") || query.includes("编程") || query.includes("ai")) {
      return "我熟练掌握 C++ 底层语法、面向对象逻辑和算法，同时在 AI Studio 中使用 Node.js / Python 研发 AI Agent 调优。在前端开发中，我精通 Vite + React + Tailwind + Motion 现代全栈架构，并实现一键极速部署至 Vercel，确保开发和运行时的高性能。";
    }
    if (query.includes("联系") || query.includes("合作") || query.includes("邮箱") || query.includes("qq")) {
      return "你可以通过 QQ 邮箱 2938735168@qq.com 与我直接取得联系。期待我们的数据包能在下一个主循环中发生碰撞！";
    }

    // Default preset match fallback
    const matchedQA = locales.zh.dualAgentQA.find(qa => query.includes(qa.q.toLowerCase()) || qa.q.toLowerCase().includes(query) || query.includes(qa.q.toLowerCase().slice(0, 10)));
    if (matchedQA) return matchedQA.a;

    return "我已将你的输入写入缓冲区。作为 11 岁的数字原住民，我用严密的逻辑理解世界。想了解我的 8 大创意项目，你可以点击页面上的项目卡片直接探索对应链接，或者询问我的特定天赋！";
  } else {
    // Project detections in English
    if (query.includes("pioneer") || query.includes("star pioneer") || query.includes("space sim") || query.includes("gravity")) {
      return "William Star Pioneer is a pixel-art space exploration and resource survival game. I implemented a real-time **celestial gravity algorithm** using trigonometric and gravitational formulas to simulate gradual orbital pulling on player spacecraft. It also utilizes a discrete hash-based weighted random algorithm for procedural generation of star systems and resource densities, ensuring a unique sandbox layout for every flight! You can click the project card to launch `william-star-pioneer.vercel.app` to pilot your ship!";
    }
    if (query.includes("defense") || query.includes("nova defense") || query.includes("tower defense") || query.includes("stg")) {
      return "William Nova Defense is a high-dimensional sci-fi tactical defense game. I engineered multi-wave enemy pathfinding behaviors and complex defensive tower targeting formulas. By carefully adjusting variable weight ratios, I achieved intense numerical balance and high-pressure stage progression to push reactive decision-making. Click its card to head to `william-nova-defense.vercel.app` to protect the sector!";
    }
    if (query.includes("walker") || query.includes("time walker") || query.includes("puzzle") || query.includes("time")) {
      return "Time Walker is an algorithmic puzzle engine where players break linear time rules. The technical core is a timeline state-snapshot system, allowing players to navigate through multi-layered causal loops and temporal coordinates. The engine registers player action projections across history vectors to validate puzzle completion. Check it out at `time-walker.vercel.app`!";
    }
    if (query.includes("challenge") || query.includes("color challenge") || query.includes("reflex") || query.includes("reaction")) {
      return "Color Challenge V2 is a dynamic reflex-testing program. I integrated my personal training patterns from reaching CS2 A+ rank into its game loops. Using microsecond-precision render loops, it calculates cognitive response speeds against changing color matrix parameters to find user reflex thresholds. Test your e-sports vision at `color-challenge-v2.vercel.app`!";
    }
    if (query.includes("sum") || query.includes("sum game") || query.includes("math") || query.includes("calculation")) {
      return "Sum Game is a mental math concurrency challenge. It applies time-decay curves using a countdown-frequency function, with equation complexity scaling procedurally. It is a fantastic gym for rapid math calculations and focus agility. Give it a run at `sum-game-taupe.vercel.app`!";
    }
    if (query.includes("eight") || query.includes("crazy eight") || query.includes("card") || query.includes("game theory")) {
      return "William Crazy Eight is a digitized card game system. I designed complete game-logic validation decision trees and a heuristic card valuation algorithm. The computer opponents analyze remaining card vectors to simulate tactful actions and counters. Put your strategy to the test at `william-crazy-eight.vercel.app`!";
    }
    if (query.includes("grammar") || query.includes("grammar master") || query.includes("learn") || query.includes("english")) {
      return "Grammar Master is a smart linguistic validation trainer. It was born from a personal student pain point: rote memorization is highly inefficient for complex grammar tenses. I converted this struggle into code, designing high-frequency review algorithms and parsing trees to accelerate foreign language learning. Try it at `grammar-master-kappa.vercel.app`!";
    }
    if (query.includes("heart") || query.includes("particle") || query.includes("canvas") || query.includes("art")) {
      return "Heart is a highly immersive creative Canvas project. Powered by thousands of physical particles, it uses high-frequency trigonometry heartbeat formulas to orchestrate gathering, contracting, and exploding visual states. It also includes an anti-gravity mouse sensor: when your cursor glides past, particles gracefully disperse with reactive glow ripples, blending cold math into stunning interactive art. Swing your mouse over `heart-alpha-jet.vercel.app` to see it react!";
    }

    // Other core queries
    if (query.includes("project") || query.includes("work") || query.includes("game") || query.includes("creation")) {
      return "My 8 core creative projects span three primary domains: William Star Pioneer (Space Sim), William Nova Defense (Tower Defense), Time Walker (Time-bending Puzzle), Color Challenge V2 (Reflex Trainer), Sum Game (Mental Math), William Crazy Eight (Tactical Card Game), Grammar Master (Educational Tool), and Heart (Canvas Particle Art). Which one are you interested in? Ask me anything about their design or code!";
    }
    if (query.includes("cs2") || query.includes("rank") || query.includes("reflex") || query.includes("shoot") || query.includes("aim")) {
      return "In CS2, reaching A+ rank on Perfect World is an elite milestone. It requires rapid spatial awareness, continuous mini-map intelligence processing, and calm tactical poise under stress. These e-sports skills translate directly into high-intensity C++ compilation and asynchronous loop architecture debug processes.";
    }
    if (query.includes("c++") || query.includes("code") || query.includes("stack") || query.includes("language") || query.includes("developer")) {
      return "I specialize in C++ core paradigms, memory mechanics, and logic algorithms, combined with engineering intelligent AI Agents. In web domains, I orchestrate clean, responsive interfaces using React, Vite, Tailwind CSS, and Motion, with seamless continuous deployment to Vercel for ultimate execution speeds.";
    }
    if (query.includes("contact") || query.includes("cooperate") || query.includes("email") || query.includes("qq")) {
      return "You can reach me directly via QQ Email at 2938735168@qq.com. Looking forward to our data packets colliding in the next main thread loop!";
    }

    // Default preset match fallback
    const matchedQA = locales.en.dualAgentQA.find(qa => query.includes(qa.q.toLowerCase()) || qa.q.toLowerCase().includes(query) || query.includes(qa.q.toLowerCase().slice(0, 10)));
    if (matchedQA) return matchedQA.a;

    return "Incoming packet decrypted. As William's AI twin, I have fully cached his cognitive models. Feel free to ask me anything about his 8 core projects (like gravity calculations in Star Pioneer, or timeline tracking in Time Walker), his skills (C++ & AI workflows), or e-sports expertise. I can chat with you fluently in both English and Chinese!";
  }
};
