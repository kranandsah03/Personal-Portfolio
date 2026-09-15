import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-3">
            <span>// PRACTICAL TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Experience
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-xl">
            Applied technical training and intensive engineering programs.
          </p>
          <div className="h-1 w-12 bg-accent rounded-full mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-dark-950 border-2 border-accent flex items-center justify-center shadow-glow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-xl relative overflow-hidden">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent text-xs font-mono font-medium mb-2">
                      <Award size={13} />
                      <span>{exp.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium text-cyan-300 mt-1">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-gray-400 font-mono">
                    <div className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-gray-500" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-gray-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tag bar */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs font-mono text-gray-500">
                  <span>Specialization:</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-gray-300">React JS</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-gray-300">Frontend Web Development</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
