import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Shield, Layers, ArrowRight, Server, Database, Lock } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isLinkPlaceholder = (url) => {
    return !url || url.includes('_URL');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-900 border border-white/10 shadow-2xl z-10 text-gray-200 no-scrollbar"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-900/95 backdrop-blur-lg border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-accent/15 border border-accent/30 text-accent text-[11px] font-mono font-medium">
                {project.badge || 'PROJECT DEEP DIVE'}
              </span>
              <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-white font-display">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview & Tagline */}
            <div>
              <p className="text-lg text-gray-300 font-medium leading-relaxed">
                {project.detail?.overview || project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            {project.detail && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-rose-500/[0.03] border border-rose-500/20 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Problem Statement
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.detail.problem}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Engineering Solution
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.detail.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Architecture Flow Diagram */}
            {project.detail?.flow && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Layers size={16} className="text-accent" />
                  <span>Full-Stack Architecture & Data Flow</span>
                </div>
                <div className="p-5 rounded-xl bg-dark-950 border border-white/[0.08] font-mono text-xs">
                  <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-center">
                    <div className="p-3 rounded-lg bg-dark-850 border border-cyan-500/30 text-cyan-300 flex-1">
                      <div className="font-bold text-white mb-1">React Frontend</div>
                      <div className="text-[11px] text-gray-400">Tailwind + UI State</div>
                    </div>
                    <ArrowRight size={18} className="text-gray-600 self-center hidden md:block" />
                    <div className="p-3 rounded-lg bg-dark-850 border border-blue-500/30 text-blue-300 flex-1">
                      <div className="font-bold text-white mb-1">REST API</div>
                      <div className="text-[11px] text-gray-400">Express Middleware</div>
                    </div>
                    <ArrowRight size={18} className="text-gray-600 self-center hidden md:block" />
                    <div className="p-3 rounded-lg bg-dark-850 border border-purple-500/30 text-purple-300 flex-1">
                      <div className="font-bold text-white mb-1">Node.js Engine</div>
                      <div className="text-[11px] text-gray-400">Business Logic & Controllers</div>
                    </div>
                    <ArrowRight size={18} className="text-gray-600 self-center hidden md:block" />
                    <div className="p-3 rounded-lg bg-dark-850 border border-emerald-500/30 text-emerald-300 flex-1">
                      <div className="font-bold text-white mb-1">MongoDB Store</div>
                      <div className="text-[11px] text-gray-400">Document Persistence</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security & RBAC Pipeline */}
            {project.detail?.securityModel && (
              <div className="p-5 rounded-xl bg-dark-950 border border-accent/20 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Lock size={16} className="text-accent" />
                  <span>Authentication & Role-Based Access Control (RBAC)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                  {project.detail.securityModel.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-dark-900 border border-white/[0.06] text-gray-300 flex items-start gap-2">
                      <span className="text-accent font-bold">{idx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Key Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-sm text-gray-300"
                  >
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gray-400 font-mono">
                {isLinkPlaceholder(project.links.github) ? (
                  <span>* Links will be connected when repository is deployed</span>
                ) : null}
              </div>

              <div className="flex items-center gap-3">
                {project.links.github && (
                  isLinkPlaceholder(project.links.github) ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 text-gray-500 border border-white/5 text-xs font-mono cursor-not-allowed">
                      <Github size={14} />
                      <span>Repo (Coming Soon)</span>
                    </span>
                  ) : (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold transition-colors"
                    >
                      <Github size={14} />
                      <span>View GitHub</span>
                    </a>
                  )
                )}

                {project.links.live && (
                  isLinkPlaceholder(project.links.live) ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 text-accent/50 border border-accent/15 text-xs font-mono cursor-not-allowed">
                      <ExternalLink size={14} />
                      <span>Demo (Coming Soon)</span>
                    </span>
                  ) : (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-dark-950 font-semibold text-xs hover:bg-cyan-300 transition-colors shadow-glow-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )
                )}

                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
