import React from 'react';
import { motion } from 'framer-motion';
import { Swords, Activity, Waves, Shield } from 'lucide-react';
import { interestsData } from '../data/portfolio';

const iconMap = {
  Swords: Swords,
  Activity: Activity,
  Waves: Waves,
  Shield: Shield,
};

export default function Interests() {
  return (
    <section id="interests" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-3">
            <span>// PERSONAL PURSUITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Beyond Coding
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-xl">
            Activities that keep my mind sharp, disciplined, and energized.
          </p>
          <div className="h-1 w-12 bg-accent rounded-full mt-3" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interestsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Activity;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.06] hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors font-display">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-gray-500">
                  <span>Discipline & Focus</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
