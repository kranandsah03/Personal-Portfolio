import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-3">
            <span>// ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Education
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-xl">
            Formal engineering degree and academic milestones.
          </p>
          <div className="h-1 w-12 bg-accent rounded-full mt-3" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 sm:p-7 border flex flex-col justify-between relative overflow-hidden ${
                idx === 0
                  ? 'border-accent/30 bg-dark-900/90 shadow-lg'
                  : 'border-white/[0.07] bg-dark-900/60'
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
              )}

              <div className="space-y-4">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-accent mt-0.5">
                    {edu.field}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.05] space-y-1.5 text-xs text-gray-400 font-mono">
                  <div className="text-gray-200 font-medium font-sans text-sm">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed pt-1">
                  {edu.highlight}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-gray-500 flex items-center justify-between">
                <span>Status</span>
                <span className={idx === 0 ? 'text-emerald-400 font-medium' : 'text-gray-400'}>
                  {idx === 0 ? 'Currently Enrolled' : 'Completed'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
