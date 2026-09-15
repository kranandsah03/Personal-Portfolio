import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Info, CheckCircle, Shield, GitBranch, ArrowRight, LayoutDashboard, CheckSquare, Users } from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails }) {
  const isLinkPlaceholder = (url) => {
    return !url || url.includes('_URL');
  };

  // 1. Flagship TaskFlow Mockup Component
  const renderTaskFlowMockup = () => (
    <div className="w-full h-56 sm:h-64 bg-dark-950/90 rounded-xl border border-white/[0.08] overflow-hidden flex flex-col font-sans select-none text-[11px] relative group-hover:border-accent/30 transition-all duration-300">
      {/* Top Bar */}
      <div className="h-8 bg-dark-900 border-b border-white/[0.06] flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-gray-500 font-mono text-[10px] ml-2">TaskFlow • Team Workspace</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-accent/15 text-accent text-[9px] font-mono font-medium">Admin Mode</span>
          <div className="w-5 h-5 rounded-full bg-indigo-600/60 border border-indigo-400/40 text-[9px] text-white flex items-center justify-center font-bold">AK</div>
        </div>
      </div>

      {/* Main Dashboard Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-28 sm:w-36 bg-dark-900/60 border-r border-white/[0.05] p-2 space-y-1.5 hidden xs:block">
          <div className="px-2 py-1 rounded bg-white/10 text-white font-medium flex items-center gap-1.5">
            <LayoutDashboard size={12} className="text-accent" />
            <span>Sprint Board</span>
          </div>
          <div className="px-2 py-1 rounded text-gray-400 hover:text-gray-200 flex items-center gap-1.5">
            <CheckSquare size={12} />
            <span>Tasks (14)</span>
          </div>
          <div className="px-2 py-1 rounded text-gray-400 hover:text-gray-200 flex items-center gap-1.5">
            <Users size={12} />
            <span>Members (6)</span>
          </div>

          <div className="pt-3 px-2">
            <span className="text-[9px] font-mono uppercase text-gray-500 block mb-1">Velocity</span>
            <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-accent h-full w-3/4 rounded-full" />
            </div>
            <span className="text-[9px] text-gray-400 mt-1 block">78% completed</span>
          </div>
        </div>

        {/* Board Columns */}
        <div className="flex-1 p-2.5 sm:p-3 grid grid-cols-2 sm:grid-cols-3 gap-2 overflow-hidden bg-dark-950/40">
          {/* Column 1: In Progress */}
          <div className="bg-dark-900/40 rounded-lg p-2 border border-white/[0.04] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium px-1">
              <span>IN PROGRESS</span>
              <span className="w-4 h-4 rounded bg-white/5 text-gray-300 flex items-center justify-center text-[9px]">3</span>
            </div>
            {/* Task Card 1 */}
            <div className="p-2 rounded bg-dark-850/80 border border-white/[0.06] shadow-sm space-y-1">
              <div className="text-[10px] font-medium text-white truncate">JWT Auth Middleware</div>
              <div className="flex items-center justify-between text-[8px]">
                <span className="px-1 rounded bg-rose-500/20 text-rose-300">High</span>
                <span className="text-gray-500 font-mono">#TF-102</span>
              </div>
            </div>
            {/* Task Card 2 */}
            <div className="p-2 rounded bg-dark-850/80 border border-white/[0.06] shadow-sm space-y-1">
              <div className="text-[10px] font-medium text-white truncate">Role-Based Routes</div>
              <div className="flex items-center justify-between text-[8px]">
                <span className="px-1 rounded bg-amber-500/20 text-amber-300">Medium</span>
                <span className="text-gray-500 font-mono">#TF-105</span>
              </div>
            </div>
          </div>

          {/* Column 2: Review */}
          <div className="bg-dark-900/40 rounded-lg p-2 border border-white/[0.04] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium px-1">
              <span>REVIEW</span>
              <span className="w-4 h-4 rounded bg-white/5 text-gray-300 flex items-center justify-center text-[9px]">2</span>
            </div>
            <div className="p-2 rounded bg-dark-850/80 border border-white/[0.06] shadow-sm space-y-1">
              <div className="text-[10px] font-medium text-white truncate">Task Assignment UI</div>
              <div className="flex items-center justify-between text-[8px]">
                <span className="px-1 rounded bg-cyan-500/20 text-cyan-300">Feature</span>
                <span className="text-gray-500 font-mono">#TF-110</span>
              </div>
            </div>
          </div>

          {/* Column 3: Done (Hidden on tiny screens) */}
          <div className="bg-dark-900/40 rounded-lg p-2 border border-white/[0.04] flex flex-col gap-1.5 hidden sm:flex">
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium px-1">
              <span>DONE</span>
              <span className="w-4 h-4 rounded bg-white/5 text-gray-300 flex items-center justify-center text-[9px]">5</span>
            </div>
            <div className="p-2 rounded bg-dark-850/80 border border-emerald-500/20 shadow-sm space-y-1">
              <div className="text-[10px] font-medium text-white truncate">MongoDB Schemas</div>
              <div className="flex items-center justify-between text-[8px]">
                <span className="px-1 rounded bg-emerald-500/20 text-emerald-300 font-medium">Merged</span>
                <span className="text-gray-500 font-mono">#TF-098</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Mockup Badge watermark */}
      <div className="absolute bottom-1 right-2 text-[9px] font-mono text-gray-500 pointer-events-none opacity-60">
        [Abstract UI Mockup]
      </div>
    </div>
  );

  // 2. BST Visualizer Mockup
  const renderBstMockup = () => (
    <div className="w-full h-48 sm:h-52 bg-dark-950/90 rounded-xl border border-white/[0.08] overflow-hidden flex flex-col items-center justify-center relative p-4 group-hover:border-accent/30 transition-all duration-300">
      {/* Visual Tree with SVG connectors */}
      <svg className="w-full h-full max-w-[280px] max-h-[140px]" viewBox="0 0 280 140">
        {/* Connecting Lines */}
        <line x1="140" y1="28" x2="80" y2="70" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="140" y1="28" x2="200" y2="70" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="80" y1="70" x2="45" y2="115" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.35" />
        <line x1="80" y1="70" x2="115" y2="115" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.35" />
        <line x1="200" y1="70" x2="165" y2="115" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.35" />
        <line x1="200" y1="70" x2="235" y2="115" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.35" />

        {/* Root Node: 50 */}
        <circle cx="140" cy="28" r="15" fill="#141822" stroke="#38BDF8" strokeWidth="2" />
        <text x="140" y="32" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50</text>

        {/* Left Child: 30 */}
        <circle cx="80" cy="70" r="13" fill="#141822" stroke="#38BDF8" strokeWidth="1.5" />
        <text x="80" y="74" fill="#E2E8F0" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">30</text>

        {/* Right Child: 70 */}
        <circle cx="200" cy="70" r="13" fill="#141822" stroke="#38BDF8" strokeWidth="1.5" />
        <text x="200" y="74" fill="#E2E8F0" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">70</text>

        {/* Leaf Nodes */}
        <circle cx="45" cy="115" r="11" fill="#141822" stroke="#64748B" strokeWidth="1" />
        <text x="45" y="118" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">20</text>

        <circle cx="115" cy="115" r="11" fill="#141822" stroke="#64748B" strokeWidth="1" />
        <text x="115" y="118" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">40</text>

        <circle cx="165" cy="115" r="11" fill="#141822" stroke="#64748B" strokeWidth="1" />
        <text x="165" y="118" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">60</text>

        <circle cx="235" cy="115" r="11" fill="#141822" stroke="#64748B" strokeWidth="1" />
        <text x="235" y="118" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">80</text>
      </svg>

      {/* Traversal readout */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span className="text-accent">Inorder: [20, 30, 40, 50, 60, 70, 80]</span>
        <span className="text-gray-500 hidden sm:inline">[Java Swing Visualizer]</span>
      </div>
    </div>
  );

  // 3. Blog Website Mockup
  const renderBlogMockup = () => (
    <div className="w-full h-48 sm:h-52 bg-dark-950/90 rounded-xl border border-white/[0.08] overflow-hidden flex flex-col p-3 group-hover:border-accent/30 transition-all duration-300">
      {/* Blog Header bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.05] text-[10px]">
        <span className="font-bold text-white font-display">TechPulse Journal</span>
        <div className="flex gap-2 text-[9px] text-gray-400">
          <span className="text-accent">Algorithms</span>
          <span>Web Dev</span>
          <span>System Design</span>
        </div>
      </div>

      {/* Blog articles preview */}
      <div className="flex-1 mt-2.5 space-y-2 overflow-hidden">
        <div className="p-2.5 rounded-lg bg-dark-900/80 border border-white/[0.05] space-y-1">
          <div className="flex items-center justify-between text-[9px]">
            <span className="text-accent font-mono">React 18 Architecture</span>
            <span className="text-gray-500">4 min read</span>
          </div>
          <p className="text-[10px] text-gray-300 line-clamp-1">
            Understanding concurrent rendering, suspense boundaries, and modern state patterns.
          </p>
        </div>

        <div className="p-2 rounded-lg bg-dark-900/50 border border-white/[0.03] space-y-0.5">
          <div className="flex items-center justify-between text-[9px]">
            <span className="text-emerald-400 font-mono">REST API Best Practices</span>
            <span className="text-gray-500">6 min read</span>
          </div>
          <p className="text-[10px] text-gray-400 line-clamp-1">
            Structuring modular controller and service layers in Express.js.
          </p>
        </div>
      </div>

      <div className="text-[9px] font-mono text-gray-500 text-right">
        [Responsive Editorial Layout]
      </div>
    </div>
  );

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
        project.isFlagship
          ? 'lg:col-span-2 border-accent/25 hover:border-accent/50 shadow-lg shadow-black/40'
          : 'border-white/[0.08] hover:border-white/20'
      }`}
    >
      {/* Card Preview Container */}
      <div className="p-4 sm:p-5 bg-dark-900/40">
        {project.id === 'taskflow' && renderTaskFlowMockup()}
        {project.id === 'bst-visualizer' && renderBstMockup()}
        {project.id === 'blog-website' && renderBlogMockup()}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* Badge & Title */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide uppercase ${
                project.isFlagship
                  ? 'bg-accent/15 text-accent border border-accent/30'
                  : 'bg-white/5 text-gray-400 border border-white/10'
              }`}
            >
              {project.badge}
            </span>
            {project.isFlagship && (
              <span className="text-xs text-accent font-mono flex items-center gap-1 font-semibold">
                ★ Flagship
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Bullet Features */}
          <div className="pt-2 space-y-1.5">
            {project.features.slice(0, 3).map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                <CheckCircle size={13} className="text-accent shrink-0 mt-0.5" />
                <span className="line-clamp-1">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.links.github && (
              isLinkPlaceholder(project.links.github) ? (
                <span
                  title="Repository link configured in portfolio.js"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 text-gray-500 border border-white/5 text-xs font-mono"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </span>
              ) : (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-medium transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )
            )}

            {project.links.live && (
              isLinkPlaceholder(project.links.live) ? (
                <span
                  title="Live URL configured in portfolio.js"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent/50 border border-accent/15 text-xs font-mono"
                >
                  <ExternalLink size={14} />
                  <span>Demo</span>
                </span>
              ) : (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-dark-950 font-semibold text-xs hover:bg-cyan-300 transition-colors shadow-glow-sm"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )
            )}
          </div>

          {project.isFlagship && onOpenDetails && (
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-cyan-300 transition-colors group"
            >
              <span>View Details</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
