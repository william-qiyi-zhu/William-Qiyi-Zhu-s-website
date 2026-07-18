import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Target, 
  Cpu, 
  Code, 
  Gamepad2, 
  Mail, 
  Github, 
  ExternalLink, 
  Layers, 
  Send, 
  ArrowDown, 
  Sparkles,
  Activity,
  Award
} from 'lucide-react';

import ParticleBackground from './components/ParticleBackground';
import AimRadar from './components/AimRadar';
import DevCoreAnim from './components/DevCoreAnim';
import ProjectCard from './components/ProjectCard';
import SingleFileExporter from './components/SingleFileExporter';
import { Project, Skill, Message } from './types';
import { locales } from './locales';
import { generateAIAgentResponse } from './utils/aiTwin';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [typedName, setTypedName] = useState('');
  const [activeTab, setActiveTab] = useState<'sci-fi' | 'logic' | 'strategy' | 'all'>('all');
  const [showExporter, setShowExporter] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const t = locales[lang];
  const PROJECTS = t.projectsList;
  const SKILLS = t.skillsList;
  const DUAL_AGENT_QA = t.dualAgentQA;
  const PERSONAL_INTRO = t.about.bioMain;

  // Simulated Chat messages
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Synchronize first chat greeting on lang change or initialization
  useEffect(() => {
    setChatMessages([
      {
        sender: 'agent',
        text: t.twin.initialMessage,
        timestamp: '00:00:01'
      }
    ]);
  }, [lang]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  // Typewriter effect for name
  useEffect(() => {
    const fullName = 'William "Zhuqiyi" Chu';
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        const char = fullName[currentIndex];
        setTypedName(prev => prev + char);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString(lang === 'zh' ? 'zh-CN' : 'en-US', { hour12: false })
    };
    
    const updatedMessages = [...chatMessages, userMsg];
    setChatMessages(updatedMessages);
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: updatedMessages.slice(1), // Exclude the initial welcome message
          lang
        })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      
      const agentMsg: Message = {
        sender: 'agent',
        text: data.response || generateAIAgentResponse(text, lang),
        timestamp: new Date().toLocaleTimeString(lang === 'zh' ? 'zh-CN' : 'en-US', { hour12: false })
      };
      
      setChatMessages(prev => [...prev, agentMsg]);
    } catch (err) {
      console.warn("API interaction failed, executing offline cognitive twin fallback:", err);
      // Fallback to local rule-based intelligence
      setTimeout(() => {
        const replyText = generateAIAgentResponse(text, lang);
        const agentMsg: Message = {
          sender: 'agent',
          text: replyText,
          timestamp: new Date().toLocaleTimeString(lang === 'zh' ? 'zh-CN' : 'en-US', { hour12: false })
        };
        setChatMessages(prev => [...prev, agentMsg]);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-[#070b14] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[25%] left-[-10%] w-[500px] h-[500px] bg-cyan-950/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-950/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Decorative HUD elements */}
      <div className="fixed top-1/2 left-0 w-1 h-32 bg-cyan-500/20 translate-y-[-50%] pointer-events-none z-20 hidden xl:block"></div>
      <div className="fixed top-1/2 right-0 w-1 h-32 bg-purple-500/20 translate-y-[-50%] pointer-events-none z-20 hidden xl:block"></div>

      {/* 1. Immersive Canvas Particle Background */}
      <ParticleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🏷️ HEADER / GEEK CARD */}
        <header className="py-12 border-b border-white/10 mb-12 sm:mb-16 z-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
                  William Qiyi Zhu <span className="text-slate-400 font-normal text-xl sm:text-2xl ml-1">朱奇屹</span>
                </h1>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded uppercase tracking-wider">
                  Age // 11
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded uppercase tracking-wider">
                  Digital Native
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-2 font-sans max-w-2xl leading-relaxed">
                An 11-year-old coding and AI enthusiast based in Hainan, China.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-[11px] font-mono text-slate-500 tracking-wide">
                <span className="flex items-center gap-1.5">
                  <span className="text-cyan-400">📍</span> Hainan, China
                </span>
                <span className="text-white/10 hidden sm:inline">|</span>
                <a href="https://github.com/william-qiyi-zhu" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <span className="text-cyan-400">🐙</span> github.com/william-qiyi-zhu
                </a>
                <span className="text-white/10 hidden sm:inline">|</span>
                <a href="mailto:2938735168@qq.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <span className="text-cyan-400">✉️</span> 2938735168@qq.com
                </a>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-4 self-end md:self-start">
              <div className="flex bg-slate-950/60 border border-white/10 rounded-full p-0.5 relative overflow-hidden shrink-0">
                <button
                  onClick={() => setLang('zh')}
                  className={`px-3 py-1 rounded-full font-mono text-[9px] font-bold tracking-widest transition-all relative z-10 cursor-pointer ${lang === 'zh' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {lang === 'zh' && (
                    <motion.div
                      layoutId="activeLangHighlight"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  ZH
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full font-mono text-[9px] font-bold tracking-widest transition-all relative z-10 cursor-pointer ${lang === 'en' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {lang === 'en' && (
                    <motion.div
                      layoutId="activeLangHighlight"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  EN
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* 🎯 MODULE 1: CURRENT FOCUS / 当前专注 */}
        <section id="focus" className="py-6 mb-12 sm:mb-16 scroll-mt-20">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-cyan-400 text-sm">🎯</span>
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-bold">
              {lang === 'zh' ? '当前专注' : 'Current Focus'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* C++ & Algorithms Focus Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:border-cyan-500/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg font-mono text-xs font-bold">C++</span>
                  <h3 className="text-sm font-semibold text-white">C++ & Algorithms csp-j/s preparation</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  Focusing on foundational logic, control flows, and core data structures in C++. Actively training and practicing problem-solving routines in preparation for competing in the Olympiad in Informatics (CSP-J/S) at age 12.
                </p>
              </div>
              {lang === 'zh' && (
                <div className="border-t border-white/5 pt-3 mt-auto">
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    中文大意：专注于 C++ 的基础逻辑、控制流和核心数据结构。积极进行算法训练与刷题，为 12 岁时参加信息学奥赛 CSP-J/S 组别做准备。
                  </p>
                </div>
              )}
            </div>

            {/* AI Workflows Focus Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:border-purple-500/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 bg-purple-500/10 text-purple-400 rounded-lg font-mono text-xs font-bold">AI</span>
                  <h3 className="text-sm font-semibold text-white">AI Workflows prototyping & tooling</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  Integrating large language models into daily workflows as interactive mentors. Leveraging AI tools for code structural analysis, debugging, and fast-tracking concept realization.
                </p>
              </div>
              {lang === 'zh' && (
                <div className="border-t border-white/5 pt-3 mt-auto">
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    中文大意：在日常学习和项目开发中深度集成大语言模型，利用 AI 进行代码架构分析、算法调试，并加速交互原型的实现。
                  </p>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 🏆 MODULE 2: GAMING & COGNITIVE EXECUTION / 游戏与认知执行力 */}
        <section id="gaming" className="py-6 mb-12 sm:mb-16 scroll-mt-20">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-emerald-400 text-sm">🏆</span>
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-bold">
              {lang === 'zh' ? '游戏与认知执行力' : 'Gaming & Cognitive Execution'}
            </h2>
          </div>

          {/* Left-side green border card */}
          <div className="bg-[#090f1d]/40 border-l-[3px] border-emerald-500 border-y border-r border-white/5 rounded-r-2xl p-6 sm:p-8 relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Text Information Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded uppercase">
                  Perfect World CS2 // Rank A+
                </span>
                <span className="text-[9px] font-mono text-slate-500">
                  TOP 1% OF PLAYERS
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-wide leading-snug">
                {lang === 'zh' ? '超越同龄人的神经反应与极佳的多维博弈决策' : 'Elite Cognitive Execution on Perfect World Platform'}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {lang === 'zh' 
                  ? '11 岁在 CS2 完美世界竞技平台达到 A+ 段位（服务器前 1% 的顶尖玩家）。极致的肌肉记忆、微秒级反应和多维博弈决策。这种在瞬息万变战场中锻炼出的认知执行力，完美映射并反哺了复杂软件底层的架构设计。' 
                  : 'Reaching Rank A+ (Top 1% of server players) on the Perfect World CS2 platform at age 11. Extreme muscle memory, microsecond reaction times, and highly adaptive situational decision-making—qualities that translate directly back into the discipline of writing complex software.'
                }
              </p>

              {/* Progress metrics and stats indicators */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-[10px]">
                <div>
                  <span className="text-slate-500 block uppercase">Reaction Window</span>
                  <span className="text-emerald-400 font-bold text-xs sm:text-sm">Extreme &lt; 150ms</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase">Spatial Decision</span>
                  <span className="text-cyan-400 font-bold text-xs sm:text-sm">High-dimensional</span>
                </div>
              </div>
            </div>

            {/* Interactive Radar Column */}
            <div className="md:col-span-5 flex justify-center relative overflow-hidden">
              <AimRadar />
            </div>

          </div>
        </section>

        {/* 🧪 MODULE 3: INTERACTIVE SANDBOX / 交互沙盒 */}
        <section id="projects" className="py-6 mb-12 sm:mb-16 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-cyan-400 text-sm">🧪</span>
                <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-bold">
                  {lang === 'zh' ? '交互沙盒' : 'Interactive Sandbox'}
                </h2>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {lang === 'zh' 
                  ? '这里是他的 Project 展厅，采用双列网格（Grid）卡片排版。每一个卡片上方都有一个亮眼的技术标签，下方有一句标志性的“探索心得”（灰色小字）。' 
                  : 'Here is his Project gallery, using a dual-column grid card layout. Each card has an eye-catching technical tag at the top and a signature "Developer Note" at the bottom.'
                }
              </p>
            </div>
            
            {/* Category selection bar */}
            <div className="flex flex-wrap gap-2 font-mono text-[9px] tracking-wider shrink-0 self-start sm:self-auto">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${activeTab === 'all' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold border-transparent shadow-md' : 'border-white/10 bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-white'}`}
              >
                {t.projects.tabAll}
              </button>
              <button 
                onClick={() => setActiveTab('sci-fi')} 
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${activeTab === 'sci-fi' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold border-transparent shadow-md' : 'border-white/10 bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-white'}`}
              >
                {t.projects.tabSciFi}
              </button>
              <button 
                onClick={() => setActiveTab('logic')} 
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${activeTab === 'logic' ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold border-transparent shadow-md' : 'border-white/10 bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-white'}`}
              >
                {t.projects.tabLogic}
              </button>
              <button 
                onClick={() => setActiveTab('strategy')} 
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${activeTab === 'strategy' ? 'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-bold border-transparent shadow-md' : 'border-white/10 bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-white'}`}
              >
                {t.projects.tabStrategy}
              </button>
            </div>
          </div>

          {/* Double Column Project Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <ProjectCard 
                key={i} 
                project={project} 
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </section>


        {/* INTERACTIVE BONUS: AI DIGITAL TWIN CHAT AGENT */}
        <section id="ai-double" className="py-12 mb-16 sm:mb-28 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest font-orbitron">{t.twin.sectionSub}</span>
              <h2 className="text-2xl sm:text-3xl font-orbitron font-black tracking-wider text-white mt-1 mb-5 leading-tight">{t.twin.sectionTitle}</h2>
              <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                {t.twin.desc}
              </p>

              {/* Pre-defined Q&A quick trigger pills */}
              <div className="space-y-2">
                <span className="block font-mono text-[9px] text-slate-500 tracking-widest uppercase mb-2">QUICK_CHIPS:</span>
                {DUAL_AGENT_QA.map((qa, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(qa.q)}
                    className="block w-full text-left font-mono text-[10px] text-slate-300 hover:text-cyan-300 bg-white/5 hover:bg-cyan-500/10 border border-white/5 rounded-lg px-3 py-2.5 transition-all text-ellipsis overflow-hidden whitespace-nowrap cursor-pointer"
                  >
                    ⚡ {qa.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat widget window */}
            <div className="lg:col-span-7 glass rounded-3xl border border-white/10 overflow-hidden flex flex-col h-[400px] shadow-[0_0_20px_rgba(6,182,212,0.02)]">
              
              {/* Header */}
              <div className="px-5 py-3.5 border-b border-white/10 bg-[#090f1d]/40 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-orbitron font-bold text-xs tracking-wider text-white">{t.twin.chatHeader}</span>
                </div>
                <span className="font-mono text-[9px] text-slate-500">PING_LATENCY: 0.8MS</span>
              </div>

              {/* Body */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs bg-[#070b14]/30">
                <AnimatePresence initial={false}>
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                    >
                      <div className="flex items-center gap-2 mb-1 text-[9px] font-mono text-slate-500">
                        <span>{msg.sender === 'user' ? 'GUEST_INPUT' : 'AGENT_CORE'}</span>
                        <span>•</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <div className={`p-3 rounded-2xl leading-relaxed ${msg.sender === 'user' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium' : 'bg-white/5 text-slate-200 border border-white/5'}`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex flex-col items-start max-w-[80%]">
                      <div className="flex items-center gap-2 mb-1 text-[9px] font-mono text-slate-500">
                        <span>AGENT_CORE</span>
                        <span>•</span>
                        <span>TYPING...</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-white/5 text-slate-400 border border-white/5 flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(chatInput);
                }}
                className="p-3 border-t border-white/10 bg-[#090f1d]/40 flex gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder={t.twin.placeholder}
                  className="flex-1 bg-slate-950/60 border border-white/10 rounded-2xl px-4 py-2.5 font-mono text-[11px] text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-lg shadow-cyan-500/10 hover:scale-105"
                >
                  <Send size={14} />
                </button>
              </form>

            </div>
          </div>
        </section>

        {/* MODULE 6: CONTACT & FOOTER */}
        <section id="contact" className="py-12 border-t border-white/10 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-10">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest font-orbitron">{t.contact.sectionSub}</span>
              <h2 className="text-3xl font-orbitron font-black tracking-wider text-white mt-1 mb-4 leading-tight">{t.contact.sectionTitle}</h2>
              <p className="text-sm text-slate-400 font-sans leading-relaxed mb-8 max-w-md">
                {t.contact.desc}
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                  <Mail size={14} className="text-cyan-400 shrink-0" />
                  <span className="font-bold">{t.contact.mailNode}:</span>
                  <a href="mailto:2938735168@qq.com" className="hover:underline">2938735168@qq.com</a>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                  <Github size={14} className="text-cyan-400 shrink-0" />
                  <span className="font-bold">{t.contact.githubNode}:</span>
                  <a href="https://github.com/william-qiyi-zhu" target="_blank" rel="noreferrer" className="hover:underline">github.com/william-qiyi-zhu</a>
                </div>
              </div>
            </div>

            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full pointer-events-none" />
              <h3 className="font-orbitron font-extrabold text-[11px] tracking-widest text-white mb-6 uppercase flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-400" />
                {t.contact.formTitle}
              </h3>
              
              <AnimatePresence mode="wait">
                {contactSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center flex flex-col items-center justify-center gap-3"
                  >
                    <Sparkles className="text-cyan-400 animate-pulse" size={32} />
                    <p className="font-mono text-xs text-slate-200">{t.contact.successMsg}</p>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                      setTimeout(() => setContactSubmitted(false), 5000);
                    }} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-2">{t.contact.labelCallsign}</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="YOUR_ID" 
                          className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 font-mono text-[11px] text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-2">{t.contact.labelEmail}</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="YOUR_IP_MAIL" 
                          className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 font-mono text-[11px] text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-2">{t.contact.labelData}</label>
                      <textarea 
                        required 
                        rows={3} 
                        placeholder={t.contact.placeholderData} 
                        className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 font-sans text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-bold tracking-widest rounded-full transition-all shadow-md cursor-pointer hover:shadow-cyan-500/20 hover:scale-[1.01]"
                    >
                      {t.contact.buttonTransmit}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-8 border-t border-white/5 font-sans text-xs text-slate-500 gap-4 mt-8">
            <div>
              {lang === 'zh' 
                ? '© 2026 William Qiyi Zhu. 由绝对的真实性构建而成。' 
                : '© 2026 William Qiyi Zhu. Built with absolute authenticity.'
              }
            </div>
            <div className="flex gap-6 font-mono text-[10px] tracking-widest">
              <a href="https://github.com/william-qiyi-zhu" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Github size={12} /> {t.contact.githubNode}
              </a>
              <a href="mailto:2938735168@qq.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Mail size={12} /> {t.contact.mailNode}
              </a>
            </div>
          </footer>
        </section>

        {/* EXPORTER FLOATER FOR CONVENIENCE / PRODUCTION DELIVERY */}
        <section className="py-12 border-t border-white/5 mb-12">
          <div className="text-center mb-6">
            <button 
              onClick={() => setShowExporter(!showExporter)} 
              className="font-mono text-[10px] font-bold tracking-widest px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 hover:text-white hover:border-cyan-500 transition-all cursor-pointer"
            >
              {showExporter ? 'HIDE_PRODUCTION_EXPORTER' : 'SHOW_PRODUCTION_EXPORTER'}
            </button>
          </div>
          {showExporter && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
            >
              <SingleFileExporter />
            </motion.div>
          )}
        </section>

      </div>

      {/* 4. Project Navigation Confirmation Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-[#070b14]/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-[#0a0f1d] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden"
            >
              {/* Corner decor lines */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-cyan-400" />
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-cyan-400" />
              <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-purple-500" />
              <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-purple-500" />

              <h3 className="font-orbitron font-black text-lg tracking-wider text-white mb-2 flex items-center gap-2 uppercase">
                <Sparkles size={18} className="text-cyan-400 animate-pulse" />
                {t.modal.title}
              </h3>
              <p className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest mb-6">
                SECURE_TRANSFER_NODE
              </p>

              <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-6">
                <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1 leading-snug">
                  {t.modal.sub}
                </span>
                <span className="block text-white font-semibold mb-3 leading-snug text-sm sm:text-base">
                  {selectedProject.name}
                </span>
                <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1 leading-snug">
                  {t.modal.warning}
                </span>
                <span className="block font-mono text-xs text-cyan-400 truncate">
                  https://{selectedProject.link}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-slate-300 transition-all cursor-pointer text-center"
                >
                  {t.modal.btnCancel}
                </button>
                <a
                  href={`https://${selectedProject.link}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full text-center transition-all cursor-pointer shadow-lg shadow-cyan-500/20 hover:scale-[1.03]"
                >
                  {t.modal.btnConfirm}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
