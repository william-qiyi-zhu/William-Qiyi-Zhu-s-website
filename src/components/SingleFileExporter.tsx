import React, { useState } from 'react';
import { Download, FileCode, Check } from 'lucide-react';

export default function SingleFileExporter() {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>William "Zhuqiyi" Chu | 11-Year-Old AI Digital Native</title>
    
    <!-- CDNs -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <style>
        /* Typography overrides */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #070b14;
            color: #ffffff;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }
        
        .font-orbitron {
            font-family: 'Orbitron', sans-serif;
        }
        
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }

        /* Glassmorphism Classes */
        .glass {
            background: rgba(11, 17, 32, 0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glass-cyan {
            background: rgba(6, 182, 212, 0.03);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(6, 182, 212, 0.15);
        }

        .glass-purple {
            background: rgba(139, 92, 246, 0.03);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(139, 92, 246, 0.15);
        }

        /* Text glows */
        .text-glow-cyan {
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.2);
        }

        .text-glow-purple {
            text-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.2);
        }

        /* Standard custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #070b14;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(6, 182, 212, 0.3);
        }

        /* CSS animations */
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        /* Card 3D tilt adjustments */
        .card-3d {
            transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
            transform-style: preserve-3d;
        }
        
        .card-3d:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.15);
        }
    </style>
</head>
<body class="relative min-h-screen bg-[#070b14]">

    <!-- Background Space Canvas -->
    <div class="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <canvas id="space-canvas" class="block w-full h-full pointer-events-auto"></canvas>
    </div>

    <!-- MAIN APP CONTAINER -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        <!-- HEADER / NAVIGATION -->
        <header class="flex justify-between items-center py-6 border-b border-white/5 mb-12 sm:mb-20">
            <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span class="font-orbitron font-extrabold tracking-wider text-sm text-white">WILLIAM.CHU</span>
            </div>
            <nav class="hidden md:flex items-center gap-8 font-mono text-[11px] text-slate-400 tracking-widest uppercase">
                <a href="#about" class="hover:text-cyan-400 transition-colors">01 ABOUT</a>
                <a href="#talents" class="hover:text-cyan-400 transition-colors">02 TALENTS</a>
                <a href="#skills" class="hover:text-cyan-400 transition-colors">03 STACK</a>
                <a href="#projects" class="hover:text-cyan-400 transition-colors">04 PROJECTS</a>
                <a href="#contact" class="hover:text-cyan-400 transition-colors">05 CONTACT</a>
            </nav>
            <div>
                <a href="#contact" class="font-mono text-[10px] tracking-wider border border-cyan-500/30 px-4 py-2 rounded-lg bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 hover:text-white hover:border-cyan-500 transition-all">ESTABLISH_CONTACT</a>
            </div>
        </header>

        <!-- MODULE 1: HERO CONTAINER -->
        <section id="hero" class="relative min-h-[75vh] flex flex-col justify-center py-12 md:py-20 mb-16 sm:mb-28">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <!-- Text Area -->
                <div class="lg:col-span-7 flex flex-col justify-center text-left">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/5 w-fit mb-6 animate-pulse">
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span class="font-mono text-[9px] tracking-widest text-cyan-400 uppercase">SYS_INITIALIZED_2026</span>
                    </div>

                    <h1 class="font-orbitron text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide leading-none mb-4">
                        William "Zhuqiyi" Chu
                    </h1>

                    <h2 class="relative font-orbitron text-base sm:text-lg md:text-xl font-bold tracking-widest text-cyan-400 mb-8 max-w-xl">
                        "Logic in Code, Precision in Crosshair."
                        <span class="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent"></span>
                    </h2>

                    <p class="text-slate-400 font-sans text-sm sm:text-base leading-relaxed max-w-xl mb-10">
                        欢迎来到我的数字沙盒。我是朱奇屹，一名 11 岁的 AI 数字原住民、游戏创作者与计算机技术终生学习者。我用代码重构规则，在虚拟与现实的交界处探索无限可能。
                    </p>

                    <div class="flex flex-wrap gap-4">
                        <a href="#projects" class="font-mono text-xs tracking-wider px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-medium shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.4)] transition-all">
                            探索作品集 EXPLORE_LABS
                        </a>
                        <a href="#contact" class="font-mono text-xs tracking-wider px-6 py-3.5 rounded-xl glass hover:bg-white/5 text-white transition-all">
                            建立联系 COOPERATE
                        </a>
                    </div>
                </div>

                <!-- Abstract / Interactive Reticle Area -->
                <div class="lg:col-span-5 flex justify-center items-center relative h-[300px] sm:h-[400px]">
                    <div class="absolute w-64 h-64 border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div class="absolute w-44 h-44 border-2 border-dashed border-purple-500/15 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                    <div class="absolute w-24 h-24 border border-cyan-400/30 rounded-full flex items-center justify-center animate-pulse">
                        <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    </div>
                    <!-- Vector scope lines -->
                    <div class="absolute top-0 bottom-0 left-1/2 w-[1px] bg-cyan-500/10"></div>
                    <div class="absolute left-0 right-0 top-1/2 h-[1px] bg-cyan-500/10"></div>
                    <div class="absolute top-8 left-12 font-mono text-[9px] text-slate-500">SYS_V_0.11</div>
                    <div class="absolute bottom-8 right-12 font-mono text-[9px] text-cyan-400 animate-pulse">LOCK_REACTION: 98MS</div>
                </div>
            </div>
        </section>

        <!-- MODULE 2: CORE POSITIONING -->
        <section id="about" class="py-12 mb-16 sm:mb-28">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div class="lg:col-span-4 font-orbitron">
                    <span class="text-xs font-mono font-bold text-cyan-400 tracking-widest">01 / CONCEPT</span>
                    <h2 class="text-2xl sm:text-3xl font-extrabold tracking-wider text-white mt-2">核心定位</h2>
                </div>
                <div class="lg:col-span-8 glass rounded-2xl p-6 sm:p-10 border border-white/5 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                    
                    <p class="text-slate-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
                        作为一个出生在人工智能技术爆发纪元的 <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">11岁AI数字原住民</span>，我对世界的认知天生由逻辑树与编译器编织。我不仅是规则的体验者，更致力于成为规则的重塑者。
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                        <div>
                            <h4 class="font-orbitron font-bold text-xs tracking-wider text-cyan-400 mb-2">DIGITAL COGNITION / 数字认知</h4>
                            <p class="text-xs text-slate-400 leading-relaxed font-sans">
                                传统教育是输入，而代码重构是输出。我通过创建数字沙盒，在自主部署、博弈算法、物理引擎的构建中，将认知在网络节点上无限延伸。
                            </p>
                        </div>
                        <div>
                            <h4 class="font-orbitron font-bold text-xs tracking-wider text-purple-400 mb-2">SYSTEM CONVERSION / 现实投射</h4>
                            <p class="text-xs text-slate-400 leading-relaxed font-sans">
                                无论是极高压环境下的CS2战局博弈，还是在C++中封装高频数据模块，底层的本质都是极速的信息处理与最优解提取。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE 3: DOUBLE TALENT PANEL -->
        <section id="talents" class="py-12 mb-16 sm:mb-28">
            <div class="mb-12">
                <span class="text-xs font-mono font-bold text-cyan-400 tracking-widest font-orbitron">02 / CORE TALENTS</span>
                <h2 class="text-2xl sm:text-3xl font-orbitron font-extrabold tracking-wider text-white mt-2">双天赋面板</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Esports Elite Card -->
                <div class="glass-cyan rounded-2xl p-6 sm:p-8 border border-cyan-500/20 relative overflow-hidden flex flex-col justify-between h-full">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-[10px] font-mono font-bold tracking-widest text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded">ESPORTS_CORE</span>
                            <span class="text-[10px] font-mono text-cyan-400/50">SYSTEM_SIGHT</span>
                        </div>

                        <h3 class="font-orbitron font-black text-xl sm:text-2xl text-white tracking-wider mb-2">
                            CS2 完美 A+ 段位
                        </h3>
                        <p class="font-mono text-xs text-cyan-400 font-bold tracking-wider mb-4">
                            SENSITIVITY: EXTREME_REACTION
                        </p>

                        <p class="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                            11岁强势登顶完美世界电竞平台顶级殿堂。拥有极致的肌肉记忆控枪、毫秒级视网膜动态追踪与强大的逆境博弈心理。用冷冽的狙击准星，阐述数字竞技中逻辑闭环的极致表达。
                        </p>
                    </div>

                    <!-- CSS Aim Radar Simulation -->
                    <div class="relative w-full aspect-video max-h-[140px] bg-slate-950/40 rounded-xl border border-cyan-500/10 flex items-center justify-center overflow-hidden">
                        <div class="absolute w-24 h-24 border border-cyan-500/20 rounded-full animate-ping"></div>
                        <div class="absolute w-16 h-16 border border-cyan-500/15 rounded-full"></div>
                        <div class="absolute w-[2px] h-full bg-cyan-500/10"></div>
                        <div class="absolute h-[2px] w-full bg-cyan-500/10"></div>
                        <!-- Sweep -->
                        <div class="absolute w-1/2 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent top-1/2 left-1/2 origin-left animate-[spin_3s_linear_infinite]"></div>
                        <div class="absolute top-2 left-3 font-mono text-[8px] text-cyan-400">TRK: TARGET_ACQUIRED</div>
                        <div class="absolute bottom-2 right-3 font-mono text-[8px] text-cyan-400">PING: 1.2MS</div>
                    </div>
                </div>

                <!-- Geek Core Card -->
                <div class="glass-purple rounded-2xl p-6 sm:p-8 border border-purple-500/20 relative overflow-hidden flex flex-col justify-between h-full">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-[10px] font-mono font-bold tracking-widest text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded">DEV_CORE</span>
                            <span class="text-[10px] font-mono text-purple-400/50">COMPILER_STREAM</span>
                        </div>

                        <h3 class="font-orbitron font-black text-xl sm:text-2xl text-white tracking-wider mb-2">
                            C++ 与 AI Agent 孵化
                        </h3>
                        <p class="font-mono text-xs text-purple-400 font-bold tracking-wider mb-4">
                            ENGINE: ARCHITECTURE_CREATOR
                        </p>

                        <p class="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                            以严密的 C++ 核心语法构建算法底层框架，在 AI Studio 中通过 Google Gemini API 进行 AI Agent 智能主体的架构搭建、函数调优与推理链路。通过代码将人机协作推向深水区。
                        </p>
                    </div>

                    <!-- CSS Binary Stream Simulation -->
                    <div class="relative w-full aspect-video max-h-[140px] bg-slate-950/40 rounded-xl border border-purple-500/10 overflow-hidden flex flex-col justify-end p-2 font-mono text-[8px] text-purple-400">
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent)]"></div>
                        <div class="flex justify-between text-slate-500 mb-2">
                            <span>COMPILED_SUCCEED</span>
                            <span>v0.11</span>
                        </div>
                        <div class="leading-relaxed opacity-80">
                            <div>01001101 01000001 01010100 01010010 01001001 01011000</div>
                            <div class="text-cyan-400">#include &lt;algorithm&gt; // vector core</div>
                            <div>agent.connect(google_ai_studio);</div>
                            <div class="text-purple-300 font-bold">gemini_agent.run() -> State::STABLE</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE 4: TECHNICAL STACK & PROGRESS BAR -->
        <section id="skills" class="py-12 mb-16 sm:mb-28">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-5">
                    <span class="text-xs font-mono font-bold text-cyan-400 tracking-widest font-orbitron">03 / SKILLS MATRIX</span>
                    <h2 class="text-2xl sm:text-3xl font-orbitron font-extrabold tracking-wider text-white mt-2 mb-6">技术栈与技能量化</h2>
                    <p class="text-xs text-slate-400 font-sans leading-relaxed max-w-md">
                        数据量化展现核心。每一项百分比都源自我长达数百小时的项目实践、算法推演与云端部署闭环，力求实现最高效、最优化的技术架构实现。
                    </p>
                </div>

                <div class="lg:col-span-7 space-y-6">
                    <!-- Progress Bar 1 -->
                    <div>
                        <div class="flex justify-between items-center font-mono text-xs mb-2">
                            <span class="font-bold text-white tracking-wide">C++ 核心语法与算法逻辑</span>
                            <span class="text-cyan-400 font-extrabold font-orbitron">65%</span>
                        </div>
                        <div class="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5 relative">
                            <div class="skill-bar h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]" style="width: 0%;" data-percent="65"></div>
                        </div>
                    </div>

                    <!-- Progress Bar 2 -->
                    <div>
                        <div class="flex justify-between items-center font-mono text-xs mb-2">
                            <span class="font-bold text-white tracking-wide">AI Agent 架构设计与调优</span>
                            <span class="text-purple-400 font-extrabold font-orbitron">80%</span>
                        </div>
                        <div class="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5 relative">
                            <div class="skill-bar h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400 shadow-[0_0_8px_rgba(139,92,246,0.4)]" style="width: 0%;" data-percent="80"></div>
                        </div>
                    </div>

                    <!-- Progress Bar 3 -->
                    <div>
                        <div class="flex justify-between items-center font-mono text-xs mb-2">
                            <span class="font-bold text-white tracking-wide">Web 独立部署与架构 (Vercel / Git)</span>
                            <span class="text-indigo-400 font-extrabold font-orbitron">95%</span>
                        </div>
                        <div class="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5 relative">
                            <div class="skill-bar h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.4)]" style="width: 0%;" data-percent="95"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE 5: PROJECTS GRID -->
        <section id="projects" class="py-12 mb-16 sm:mb-28">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12">
                <div>
                    <span class="text-xs font-mono font-bold text-cyan-400 tracking-widest font-orbitron">04 / CREATIVE MATRIX</span>
                    <h2 class="text-2xl sm:text-3xl font-orbitron font-extrabold tracking-wider text-white mt-2">项目创意矩阵</h2>
                </div>
                <div class="mt-4 sm:mt-0 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    TOTAL_ACTIVE_SYSTEMS: 08
                </div>
            </div>

            <!-- Area 1: Sci-Fi & Simulation -->
            <div class="mb-14">
                <div class="flex items-center gap-3 mb-6">
                    <span class="h-[1px] w-8 bg-cyan-400/50"></span>
                    <h3 class="font-orbitron font-extrabold text-xs tracking-widest text-cyan-400 uppercase">🪐 领域一：星际模拟与科幻构架 (Sci-Fi & Simulation)</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Project 1 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-cyan-500/10 text-cyan-400 border-cyan-500/20">SPACE SIM</span>
                                <span class="text-xs text-slate-500 font-mono">01/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-cyan-300 transition-colors">William Star Pioneer (星际开拓者)</h4>
                            <a href="https://william-star-pioneer.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                william-star-pioneer.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">一款像素风太空开拓与资源生存游戏。融合天体引力算法、星系随机生成与资源规划闭环，玩家驾驶飞船在未知星海中开采，建立属于自己的宇宙基地。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>

                    <!-- Project 2 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-cyan-500/10 text-cyan-400 border-cyan-500/20">STG / RTT</span>
                                <span class="text-xs text-slate-500 font-mono">02/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-cyan-300 transition-colors">William Nova Defense (新星防御战)</h4>
                            <a href="https://william-nova-defense.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                william-nova-defense.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">高维度的科幻防线构筑游戏。设计了多重暗能量敌人波次寻路与塔防数据公式，考验在高强度、即时对局下的数值平衡与排兵布局能力。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>
                </div>
            </div>

            <!-- Area 2: Logic & Cognition -->
            <div class="mb-14">
                <div class="flex items-center gap-3 mb-6">
                    <span class="h-[1px] w-8 bg-purple-400/50"></span>
                    <h3 class="font-orbitron font-extrabold text-xs tracking-widest text-purple-400 uppercase">🧩 领域二：认知逻辑与算法竞技 (Logic & Cognition)</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Project 3 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-purple-500/10 text-purple-400 border-purple-500/20">LOGIC PUZZLE</span>
                                <span class="text-xs text-slate-500 font-mono">03/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">Time Walker (时空行者)</h4>
                            <a href="https://time-walker.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                time-walker.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">时空解谜作品。打破线性时间定势，玩家需要在错综复杂的时空坐标轴与因果逻辑环中进行多维推导，依靠解开谜题通关。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>

                    <!-- Project 4 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-purple-500/10 text-purple-400 border-purple-500/20">ARCADE REACTION</span>
                                <span class="text-xs text-slate-500 font-mono">04/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">Color Challenge V2 (色彩挑战 V2)</h4>
                            <a href="https://color-challenge-v2.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                color-challenge-v2.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">动态色彩追踪与极速反应判定系统的第二代迭代。融入 CS2 完美 A+ 选手的视觉感知逻辑，提供极高精度的时间窗口响应测试。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>

                    <!-- Project 5 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-purple-500/10 text-purple-400 border-purple-500/20">ALGORITHMIC FLOW</span>
                                <span class="text-xs text-slate-500 font-mono">05/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">Sum Game (算法极速心算)</h4>
                            <a href="https://sum-game-taupe.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                sum-game-taupe.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">旨在锻炼瞬时脑力的数学演算游戏。在高速流动的时间衰减压力下考验算法心算速度，展现极致的心智计算并发能力。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>
                </div>
            </div>

            <!-- Area 3: Strategy & Creative Code -->
            <div>
                <div class="flex items-center gap-3 mb-6">
                    <span class="h-[1px] w-8 bg-indigo-400/50"></span>
                    <h3 class="font-orbitron font-extrabold text-xs tracking-widest text-indigo-400 uppercase">♟️ 领域三：策略工具与艺术编码 (Utility & Creative Code)</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Project 6 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-indigo-500/10 text-indigo-400 border-indigo-500/20">BOARD STRATEGY</span>
                                <span class="text-xs text-slate-500 font-mono">06/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">William Crazy Eight</h4>
                            <a href="https://william-crazy-eight.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                william-crazy-eight.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">经典卡牌“疯狂8点”的数字化重置版。轻量而优雅的底层算法判定，提供严密的规则决策树、战术克制与博弈判定系统。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>

                    <!-- Project 7 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-indigo-500/10 text-indigo-400 border-indigo-500/20">EDU-TECH TOOL</span>
                                <span class="text-xs text-slate-500 font-mono">07/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Grammar Master (智能语法大师)</h4>
                            <a href="https://grammar-master-kappa.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                grammar-master-kappa.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">智能语法记忆训练工具。体现数字原住民将“生活痛点”转译为“代码解决方案”的实践，用程序规则实现高效的外语习得。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>

                    <!-- Project 8 -->
                    <div class="card-3d glass rounded-xl p-5 flex flex-col justify-between h-full group">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border bg-indigo-500/10 text-indigo-400 border-indigo-500/20">CREATIVE CANVAS</span>
                                <span class="text-xs text-slate-500 font-mono">08/08</span>
                            </div>
                            <h4 class="font-orbitron text-base text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Heart (粒子艺术之心)</h4>
                            <a href="https://heart-alpha-jet.vercel.app" target="_blank" class="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white mb-4">
                                heart-alpha-jet.vercel.app
                            </a>
                            <p class="text-xs text-slate-400 font-sans leading-relaxed">基于 HTML5 Canvas 的高频粒子互动装置。万千粒子通过三角函数数理公式在屏幕中央搏动聚合与膨胀，将理性的数理模型转化为富有感性张力的浪漫视觉。</p>
                        </div>
                        <div class="flex justify-end pt-4 mt-4 border-t border-white/5 font-mono text-[9px] text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">LAUNCH_SYSTEM →</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE 6: CONTACT & FOOTER -->
        <section id="contact" class="py-12 border-t border-white/5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-10">
                <div>
                    <span class="text-xs font-mono font-bold text-cyan-400 tracking-widest font-orbitron">05 / DIRECT CONNECTION</span>
                    <h2 class="text-3xl font-orbitron font-extrabold tracking-wider text-white mt-2 mb-4">建立联系</h2>
                    <p class="text-sm text-slate-400 font-sans leading-relaxed mb-6 max-w-md">
                        有创意的项目构想？或者寻求技术与电竞领域的深度协作？我的数字收件箱随时对您敞开，我们将在理性的程序逻辑中探索未来。
                    </p>
                    
                    <div class="space-y-4 font-mono text-xs">
                        <div class="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                            <span class="text-cyan-400">EMAIL:</span>
                            <a href="mailto:2938735168@qq.com" class="hover:underline">2938735168@qq.com</a>
                        </div>
                        <div class="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                            <span class="text-cyan-400">GITHUB:</span>
                            <a href="https://github.com/mikaelchoo" target="_blank" class="hover:underline">github.com/mikaelchoo</a>
                        </div>
                    </div>
                </div>

                <div class="glass p-6 sm:p-8 rounded-2xl border border-white/5">
                    <h3 class="font-orbitron font-bold text-sm tracking-widest text-white mb-6 uppercase">SYS_MAIL_CLIENT</h3>
                    <form onsubmit="event.preventDefault(); alert('信息已打包！该静态页面无法直接发送邮件。请直接点击左侧邮件链接与我联系。')" class="space-y-4">
                        <div>
                            <label class="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-2">SENDER_NAME</label>
                            <input type="text" required placeholder="YOUR NAME" class="w-full bg-slate-950/60 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors">
                        </div>
                        <div>
                            <label class="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-2">EMAIL_ADDRESS</label>
                            <input type="email" required placeholder="YOUR_EMAIL@EXAMPLE.COM" class="w-full bg-slate-950/60 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors">
                        </div>
                        <div>
                            <label class="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-2">TRANSMITTED_MESSAGE</label>
                            <textarea required rows="3" placeholder="WRITE YOUR COMPREHENSIVE MESSAGE HERE..." class="w-full bg-slate-950/60 border border-white/10 rounded-lg px-4 py-2.5 font-sans text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
                        </div>
                        <button type="submit" class="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-mono text-xs font-bold tracking-widest rounded-xl transition-all shadow-md">
                            TRANSMIT_DATA
                        </button>
                    </form>
                </div>
            </div>

            <!-- FOOTER -->
            <footer class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-8 border-t border-white/5 font-mono text-[10px] text-slate-500 tracking-widest gap-4">
                <div>
                    &copy; 2026 WILLIAM CHU. ALL SYSTEM PARAMETERS NOMINAL.
                </div>
                <div class="flex gap-6">
                    <a href="https://github.com/mikaelchoo" target="_blank" class="hover:text-cyan-400 transition-colors">GITHUB</a>
                    <a href="mailto:2938735168@qq.com" class="hover:text-cyan-400 transition-colors">EMAIL</a>
                </div>
            </footer>
        </section>
    </div>

    <!-- CANVAS PARTICLES BACKGROUND SCRIPT -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const canvas = document.getElementById('space-canvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            let particles = [];
            const particleCount = 60;
            const connectionDist = 120;
            const mouseInfluenceDist = 180;
            let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initParticles();
            }

            function initParticles() {
                particles = [];
                for (let i = 0; i < particleCount; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    particles.push({
                        x, y,
                        originalX: x, originalY: y,
                        vx: (Math.random() - 0.5) * 0.4,
                        vy: (Math.random() - 0.5) * 0.4,
                        radius: Math.random() * 2 + 1
                    });
                }
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            window.addEventListener('mousemove', (e) => {
                mouse.targetX = e.clientX;
                mouse.targetY = e.clientY;
            });

            window.addEventListener('mouseout', () => {
                mouse.targetX = -1000;
                mouse.targetY = -1000;
            });

            function render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (mouse.targetX === -1000) {
                    mouse.x += (-1000 - mouse.x) * 0.1;
                    mouse.y += (-1000 - mouse.y) * 0.1;
                } else {
                    mouse.x += (mouse.targetX - mouse.x) * 0.1;
                    mouse.y += (mouse.targetY - mouse.y) * 0.1;
                }

                particles.forEach(p => {
                    p.originalX += p.vx;
                    p.originalY += p.vy;

                    if (p.originalX < 0) p.originalX = canvas.width;
                    if (p.originalX > canvas.width) p.originalX = 0;
                    if (p.originalY < 0) p.originalY = canvas.height;
                    if (p.originalY > canvas.height) p.originalY = 0;

                    let targetX = p.originalX;
                    let targetY = p.originalY;

                    if (mouse.x !== -1000) {
                        const dx = mouse.x - p.originalX;
                        const dy = mouse.y - p.originalY;
                        const dist = Math.hypot(dx, dy);

                        if (dist < mouseInfluenceDist) {
                            const force = (mouseInfluenceDist - dist) / mouseInfluenceDist;
                            const angle = Math.atan2(dy, dx);
                            targetX -= Math.cos(angle) * force * 30;
                            targetY -= Math.sin(angle) * force * 30;
                        }
                    }

                    p.x += (targetX - p.x) * 0.15;
                    p.y += (targetY - p.y) * 0.15;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
                    ctx.fill();
                });

                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const pi = particles[i];
                        const pj = particles[j];
                        const dx = pi.x - pj.x;
                        const dy = pi.y - pj.y;
                        const dist = Math.hypot(dx, dy);

                        if (dist < connectionDist) {
                            const opacity = (1 - dist / connectionDist) * 0.15;
                            ctx.beginPath();
                            ctx.moveTo(pi.x, pi.y);
                            ctx.lineTo(pj.x, pj.y);
                            ctx.strokeStyle = 'rgba(139, 92, 246, ' + opacity + ')';
                            ctx.lineWidth = 0.75;
                            ctx.stroke();
                        }
                    }
                }

                requestAnimationFrame(render);
            }

            render();
        });

        // PROGRESS BARS ANIMATION ON SCROLL
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const percent = skillBar.getAttribute('data-percent');
                    skillBar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.76, 0.55, 0.94)';
                    skillBar.style.width = percent + '%';
                    observer.unobserve(skillBar);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-bar').forEach(bar => {
            observer.observe(bar);
        });
    </script>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'william_portfolio.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleCopyCode = async () => {
    // Generate the HTML code text and copy to clipboard
    const htmlContent = `<!-- (William "Zhuqiyi" Chu Portfolio) Full HTML content downloaded via exporter. -->`;
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="glass rounded-2xl p-6 border border-cyan-500/10 shadow-lg border-glow-cyan max-w-lg mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
          <FileCode size={24} />
        </div>
        <div className="text-left">
          <h4 className="font-orbitron font-extrabold text-sm tracking-wider text-white">单文件 HTML 导出器</h4>
          <p className="text-[11px] text-slate-400 font-sans mt-1">
            导出符合您指定标准的一键运行、整合全响应、CDNs和粒子Canvas的极简科技感单HTML网页。
          </p>
        </div>
      </div>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={handleDownload}
          className="font-mono text-[10px] font-bold tracking-widest px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#070b14] flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer"
        >
          {downloaded ? (
            <>
              <Check size={12} /> DOWNLOADED
            </>
          ) : (
            <>
              <Download size={12} /> DOWNLOAD_HTML
            </>
          )}
        </button>
      </div>
    </div>
  );
}
