import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, Layers, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolio';

const categories = [
  { id: 'all', name: 'All Skills', icon: Sparkles },
  { id: 'languages', name: 'Languages', icon: Code2, data: skillsData.languages },
  { id: 'frameworks', name: 'Frameworks & Technologies', icon: Cpu, data: skillsData.frameworks },
  { id: 'tools', name: 'Developer Tools', icon: Wrench, data: skillsData.tools },
  { id: 'coreAreas', name: 'Core Areas', icon: Layers, data: skillsData.coreAreas },
  { id: 'coursework', name: 'Relevant Coursework', icon: BookOpen, data: skillsData.coursework },
];

const BrandMark = ({ children, viewBox = '0 0 24 24' }) => (
  <svg viewBox={viewBox} aria-hidden="true" className="h-7 w-7" fill="currentColor">
    {children}
  </svg>
);

const brandIcons = {
  'C++': {
    color: '#FF0000',
    icon: () => <BrandMark><path d="M12 2 20 5v6.2c0 5.2-3.4 9-8 10.8-4.6-1.8-8-5.6-8-10.8V5l8-3Zm-1.3 5.1H8.9v2.1H6.8v1.8h2.1v2.1h1.8V11h2v-1.8h-2V7.1Zm5.3 0h-1.8v2.1h-2.1v1.8h2.1v2.1H16V11h2V9.2h-2V7.1Z" /></BrandMark>,
  },
  Python: {
    color: '#3776AB',
    icon: () => <BrandMark><path fill="#3776AB" d="M11.9 3c-3.6 0-3.4 1.6-3.4 1.6v2h3.5v.6H7.2c-3.8 0-3.7 3.5-3.7 3.5s-.4 3.5 3.4 3.5h1.9v-2.1s-.1-2.5 2.4-2.5h3.4s1.9 0 1.9-1.9V4.9S16.8 3 11.9 3Zm-2 .9a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4Z" /><path fill="#FFD343" d="M12.1 21c3.6 0 3.4-1.6 3.4-1.6v-2H12v-.6h4.8c3.8 0 3.7-3.5 3.7-3.5s.4-3.5-3.4-3.5h-1.9v2.1s.1 2.5-2.4 2.5H9.4s-1.9 0-1.9 1.9v2.2S7.2 21 12.1 21Zm2-.9a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z" /></BrandMark>,
  },
  'JavaScript (ES6+)': {
    color: '#F7DF1E',
    icon: () => <BrandMark><path d="M3 3h18v18H3V3Zm9.7 13.5c.5.9 1.2 1.4 2.2 1.4.9 0 1.5-.4 1.5-1 0-.7-.6-1-1.6-1.4l-.5-.2c-1.5-.6-2.5-1.3-2.5-2.9 0-1.4 1.1-2.5 2.9-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8-.5 0-.9.3-.9.7 0 .5.3.7 1.2 1.1l.5.2c1.8.8 2.8 1.5 2.8 3.1 0 1.8-1.5 2.8-3.5 2.8-1.9 0-3.1-.9-3.7-2l1.6-1Zm-5.8.1c.3.6.7 1 1.4 1 .6 0 1-.3 1-1.3v-6.2h2v6.2c0 2-1.2 3.1-3 3.1-1.6 0-2.6-.8-3.1-1.8l1.7-1Z" /></BrandMark>,
  },
  HTML5: {
    color: '#E34F26',
    icon: () => <BrandMark><path d="m3 2 1.6 18L12 22l7.4-2L21 2H3Zm12.2 5.7H8.9l.2 2.1H15l-.4 4.5-2.6.7-2.6-.7-.2-1.7H7.3l.4 3.2 4.3 1.2 4.3-1.2.7-8.1h-5.9v.0Z" /></BrandMark>,
  },
  CSS3: {
    color: '#8E44AD',
    icon: () => <BrandMark><path d="m3 2 1.6 18 7.4 2 7.4-2L21 2H3Zm12.8 4-.2 2H8.4l.2 2.1h6.8l-.5 5.7-4.1 1.1-4.1-1.1-.3-2.2h2.1l.2.7 2.1.6 2.1-.6.2-2H6.8L6.3 6h9.5Z" /></BrandMark>,
  },
  'React.js': {
    color: '#00D8FF',
    icon: () => <BrandMark><circle cx="12" cy="12" r="1.7" /><ellipse cx="12" cy="12" rx="9.5" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.3" /><ellipse cx="12" cy="12" rx="9.5" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9.5" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 12 12)" /></BrandMark>,
  },
  'Node.js': {
    color: '#339933',
    icon: () => <BrandMark><path d="m12 2 8 4.6v9.2L12 20.4l-8-4.6V6.6L12 2Zm0 2.1L5.8 7.7v7.1l6.2 3.6 6.2-3.6V7.7L12 4.1Zm-1 4.3 4.8 2.8v4.2l-1.8 1v-4.2l-3-1.7v3.4l-1.7-1v-3.4l1.7-1Z" /></BrandMark>,
  },
  'Express.js': {
    color: '#828282',
    icon: () => <BrandMark><path d="M4.2 17.5c1.3 1.4 3 2.2 5.1 2.2 1.8 0 3.5-.6 4.7-1.8l-1.1-1.2c-1 .9-2.1 1.4-3.5 1.4-1.4 0-2.5-.5-3.3-1.5-.7-.8-1-1.8-1.1-3.1h9.5v-.8c0-3.8-2.2-6.2-5.5-6.2S3.5 8.9 3.5 12.8c0 2 .2 3.3.7 4.7Zm.8-5.6c.1-2.2 1.3-3.6 3.1-3.6s3 1.3 3.1 3.6H5Z" /><path d="M15.1 19.5h2.2l2-3.5 2 3.5h2.2l-3.1-4.9 2.8-4.5H21l-1.7 3-1.7-3h-2.2l2.8 4.5-3.1 4.9Z" /></BrandMark>,
  },
  MongoDB: {
    color: '#00684A',
    icon: () => <BrandMark><path d="M12.8 2.3c-.3 2.5 1.8 3.6 2.3 5.6.7 2.7-.8 4.8-2.1 6.9-.8 1.3-1.1 2.7-1 4.4-1.4-1.3-2.1-3.1-2.1-5.2 0-3.1 1.8-5.1 2.5-7.3.5-1.6.1-3 .4-4.4Z" /><path d="M12.6 6.3c.2 4.4-.1 8.7-.4 12.9l1.2.6c-.2-4.4-.3-9-.8-13.5Z" /></BrandMark>,
  },
  MySQL: {
    color: '#00758F',
    icon: () => <BrandMark><path fill="#F29111" d="M4.2 15.5c1.1 1.7 2.9 2.6 5.3 2.6 1.6 0 3-.4 4.1-1.1l-.8-1.3c-.9.5-1.8.8-2.9.8-1.5 0-2.6-.5-3.5-1.6l-2.2.6Z" /><path d="M4 9.2c1-2.8 3.1-4.3 6.1-4.3 2.5 0 4.3 1.1 5.6 3.2l-1.6.8c-.9-1.5-2.2-2.2-4-2.2-1.9 0-3.2.8-4 2.5H4Z" /><path fill="#F29111" d="M16 5.4c2.6.4 4.2 1.7 4.8 3.9l-1.8.5c-.5-1.3-1.5-2.1-3-2.4V5.4Z" /></BrandMark>,
  },
  Git: {
    color: '#F05032',
    icon: () => <BrandMark><path d="m21.4 10.7-8.1-8.1a1.8 1.8 0 0 0-2.6 0l-1.7 1.7 2.2 2.2a2.1 2.1 0 0 1 2.7 2.7l2.1 2.1a2.1 2.1 0 1 1-1.3 1.3l-2-2v5.3a2.1 2.1 0 1 1-1.7 0V10a2.1 2.1 0 0 1-.8-3.4L8 4.8 2.6 10a1.8 1.8 0 0 0 0 2.6l8.1 8.1a1.8 1.8 0 0 0 2.6 0l8.1-8.1a1.8 1.8 0 0 0 0-1.9Z" /></BrandMark>,
  },
  GitHub: {
    color: '#FFFFFF',
    icon: () => <BrandMark><path d="M12 2.3a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1.1 1.5 1.1.9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0  .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.3Z" /></BrandMark>,
  },
  'VS Code': {
    color: '#007ACC',
    icon: () => <BrandMark><path d="m3.8 7.2 2.1-1.5 7.1 5.6V7.6l2-1.4 5.2 3v5.6l-5.2 3-2-1.4v-3.7l-7.1 5.6-2.1-1.5 4.2-4.8-4.2-4.8Zm11.2 1.2v5.2l2.6-.9V9.3l-2.6-.9Z" /></BrandMark>,
  },
  ChatGPT: {
    color: '#10A37F',
    icon: () => <BrandMark><path d="M20.2 10.3a5 5 0 0 0-5.8-6.1A5 5 0 0 0 5.1 6.6a5 5 0 0 0-2.2 8.8 5 5 0 0 0 5.8 6.1 5 5 0 0 0 9.3-2.4 5 5 0 0 0 2.2-8.8Zm-7.6 8.9a3.3 3.3 0 0 1-2.2-.8l.1-.1 3.8-2.2a.9.9 0 0 0 .4-.8v-5.4l1.6.9v4.5a3.9 3.9 0 0 1-3.7 3.9Zm-7.7-3.3a3.3 3.3 0 0 1-.4-2.3h.2l3.8 2.2c.3.2.6.2.9 0l4.7-2.7v1.8l-3.9 2.3a3.9 3.9 0 0 1-5.3-1.3Zm-1-8a3.3 3.3 0 0 1 1.9-1.5v.2l3.8 2.2c.3.2.7.2 1 0L15.3 6l-1.6.9-3.9-2.2a3.9 3.9 0 0 1-3.9 3.2l-.1-.1-.9.1v-.2Z" /></BrandMark>,
  },
  Claude: {
    color: '#D97757',
    icon: () => <BrandMark><path d="M5.5 4.5 12 2l6.5 2.5L21 11l-2.5 6.5L12 20l-6.5-2.5L3 11l2.5-6.5ZM8 8.2 12 6l4 2.2v5.6L12 16l-4-2.2V8.2Zm2 .9v3.4l2 1.1 2-1.1V9.1l-2-1.1-2 1.1Z" /></BrandMark>,
  },
  Gemini: {
    color: '#A855F7',
    icon: () => <BrandMark><path d="M12 2.2c.4 4.8 2.7 7.2 7.5 7.6-4.8.4-7.1 2.8-7.5 7.6-.4-4.8-2.7-7.2-7.5-7.6 4.8-.4 7.1-2.8 7.5-7.6Z" /></BrandMark>,
  },
};

const fallbackBrand = { color: '#94A3B8', icon: () => <BrandMark><path d="M5 4h14v16H5V4Zm2 3v2h10V7H7Zm0 4v2h7v-2H7Zm0 4v2h10v-2H7Z" /></BrandMark> };

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getFilteredCategories = () => {
    if (activeTab === 'all') {
      return [
        { title: 'Languages', list: skillsData.languages, icon: Code2 },
        { title: 'Frameworks & Technologies', list: skillsData.frameworks, icon: Cpu },
        { title: 'Developer Tools', list: skillsData.tools, icon: Wrench },
        { title: 'Core Areas', list: skillsData.coreAreas, icon: Layers },
        { title: 'Relevant Coursework', list: skillsData.coursework, icon: BookOpen },
      ];
    }
    const cat = categories.find((c) => c.id === activeTab);
    return cat ? [{ title: cat.name, list: cat.data, icon: cat.icon }] : [];
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-3">
              <span>// TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Technical Skills
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl">
              A comprehensive view of technologies, paradigms, and tools I leverage to build robust software.
            </p>
            <div className="h-1 w-12 bg-accent rounded-full mt-3" />
          </div>

          {/* Recruiter Guarantee Note */}
          <div className="text-xs text-gray-500 font-mono hidden md:block">
            * Objective skill listing without arbitrary percentage bars
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-accent/15 border-accent/40 text-accent shadow-glow-sm'
                    : 'bg-dark-850/70 border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-accent' : 'text-gray-500'} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-8 overflow-visible">
          {getFilteredCategories().map((catGroup, idx) => {
            const GroupIcon = catGroup.icon;
            return (
              <motion.div
                key={catGroup.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-white/[0.07] relative overflow-visible"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="p-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                    <GroupIcon size={16} />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide">
                    {catGroup.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 ml-auto">
                    {catGroup.list.length} items
                  </span>
                </div>

                {/* Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 overflow-visible">
                  {catGroup.list.map((skill) => (
                    (() => {
                      const brand = brandIcons[skill.name] || fallbackBrand;
                      const SkillIcon = brand.icon;
                      return (
                    <div
                      key={skill.name}
                      style={{ '--skill-color': brand.color }}
                      className="group relative flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300 ease-in-out hover:scale-[1.06] hover:-translate-y-1 hover:border-[var(--skill-color)] hover:shadow-[0_10px_20px_-5px_var(--skill-color)] hover:z-10"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-gray-500 transition-colors" style={{ color: brand.color }}>
                          <SkillIcon />
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400 group-hover:text-gray-300">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                      );
                    })()
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
