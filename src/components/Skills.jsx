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
                    <div
                      key={skill.name}
                      className="group relative flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-[transform,box-shadow,border-color] duration-200 hover:scale-[1.06] hover:-translate-y-1 hover:border-[rgba(0,191,255,0.6)] hover:shadow-[0_10px_20px_-5px_rgba(0,191,255,0.5)] hover:z-10"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-gray-500 group-hover:text-accent transition-colors">
                          #
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400 group-hover:text-gray-300">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
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
