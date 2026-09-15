import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Layers, Database, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const specs = [
    {
      label: "Education",
      value: personalInfo.meta.education,
      icon: <GraduationCap size={16} className="text-accent" />,
      sub: "Chandigarh University"
    },
    {
      label: "Focus",
      value: personalInfo.meta.focus,
      icon: <Layers size={16} className="text-accent" />,
      sub: "Responsive Web Apps & REST APIs"
    },
    {
      label: "Frontend",
      value: personalInfo.meta.frontend,
      icon: <Code2 size={16} className="text-accent" />,
      sub: "Component Architecture & State"
    },
    {
      label: "Backend",
      value: personalInfo.meta.backend,
      icon: <Cpu size={16} className="text-accent" />,
      sub: "RESTful Services & Middleware"
    },
    {
      label: "Database",
      value: personalInfo.meta.database,
      icon: <Database size={16} className="text-accent" />,
      sub: "Document & Relational Systems"
    }
  ];

  const highlights = [
    "Clean, maintainable full-stack application architecture",
    "Solid grounding in Data Structures and algorithmic problem solving",
    "Hands-on experience developing REST APIs and integrating databases",
    "Continuous learner enthusiastic about modern developer tooling"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-3">
            <span>// PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            About Me
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full mt-3" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
              {personalInfo.aboutText[0]}
            </p>
            <p className="text-gray-400">
              {personalInfo.aboutText[1]}
            </p>
            <p className="text-gray-400">
              {personalInfo.aboutText[2]}
            </p>

            {/* Core Values Bullet List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-900/60 border border-white/[0.06] text-sm text-gray-300"
                >
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Developer Spec Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl relative overflow-hidden">
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-semibold">
                    SPECS SHEET
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight font-display">
                    About Anand
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  Verified Profile
                </div>
              </div>

              {/* Spec Rows */}
              <div className="space-y-4">
                {specs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/20 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-dark-800 border border-white/10">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-white truncate">
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote/Status */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Location: India</span>
                <span className="text-accent">Available for Roles</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
