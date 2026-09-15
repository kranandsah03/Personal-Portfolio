import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-3">
            <span>// RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Achievements
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-xl">
            Hackathons and technical competitions demonstrating rapid prototyping and collaborative problem solving.
          </p>
          <div className="h-1 w-12 bg-accent rounded-full mt-3" />
        </div>

        {/* Two Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/25 text-accent shrink-0 mt-1">
                  {idx === 0 ? <Trophy size={22} /> : <Award size={22} />}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                      {item.tag}
                    </span>
                    {item.organization && (
                      <span className="text-xs font-mono text-gray-500">
                        Org: {item.organization}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {item.title}
                  </h3>

                  <div className="text-sm font-semibold text-emerald-400 font-mono">
                    ★ {item.achievement}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
