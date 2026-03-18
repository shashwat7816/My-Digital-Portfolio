import React from 'react';
import Section from './Section';
import { Briefcase, Calendar, ExternalLink, CheckCircle2, Brain, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const highlights = [
  'Built full-stack web applications using the MERN stack — MongoDB, Express.js, React, and Node.js — with hands-on project experience.',
  'Explored Generative AI concepts and Industrial Practices, applying modern AI tools to real-world development scenarios.',
  'Completed a rigorous 7-week intensive program focused on modern development workflows and rapid professional skill acquisition.',
];

const tags = [
  { name: 'MongoDB',              icon: <SiMongodb    size={16} color="#47A248" /> },
  { name: 'Express.js',           icon: <SiExpress    size={16} color="#AAAAAA" /> },
  { name: 'React.js',             icon: <SiReact      size={16} color="#61DAFB" /> },
  { name: 'Node.js',              icon: <SiNodedotjs  size={16} color="#339933" /> },
  { name: 'Gen AI',               icon: <Brain        size={16} color="#A855F7" /> },
  { name: 'Industrial Practices', icon: <Wrench       size={16} color="#F59E0B" /> },
];

const Training: React.FC = () => {
  return (
    <Section id="training" title="Training" subtitle="Summer Internship & Training">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative border border-accent-primary/20 rounded-xl bg-bg-secondary/40 overflow-hidden"
        >
          {/* Top cyan accent bar */}
          <div className="h-[2px] w-full bg-gradient-to-r from-accent-primary via-accent-secondary to-transparent" />

          {/* Decorative background grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 p-xl md:p-2xl grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2xl items-start">
            {/* LEFT: Content */}
            <div className="space-y-xl">
              {/* Header */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm text-[10px] text-accent-primary uppercase tracking-[0.3em] font-mono">
                  <Calendar size={12} />
                  <span>July 2025 · 7 Weeks</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-text-primary font-display tracking-tight">
                    FLAMES <span className="text-accent-primary">'25</span> Summer Training
                  </h3>
                  <p className="text-accent-secondary font-semibold mt-xs font-body text-sm uppercase tracking-widest">
                    W3 Grads
                  </p>
                </div>
              </div>

              {/* Bullet highlights */}
              <ul className="space-y-md">
                {highlights.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className="flex items-start gap-md text-text-secondary text-sm font-body leading-relaxed"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent-primary mt-0.5 shrink-0"
                    />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-xs pt-sm">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-widest font-bold text-text-secondary bg-bg-tertiary border border-border/50 hover:border-cyan-neon/50 hover:text-cyan-neon rounded-sm font-mono transition-all duration-fast cursor-default"
                  >
                    {tag.icon}
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Certificate link */}
              <a
                href="/FLAMES 25.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-sm px-lg py-sm text-sm font-bold uppercase tracking-wider text-accent-primary border border-accent-primary/30 rounded-md bg-accent-primary/5 hover:bg-accent-primary/15 hover:border-accent-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all duration-300 font-display"
              >
                <ExternalLink size={15} />
                View Certificate
              </a>
            </div>

            {/* RIGHT: Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex flex-col items-center justify-center gap-md"
            >
              <div className="w-24 h-24 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.1)]">
                <Briefcase size={40} className="text-accent-primary" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-text-tertiary">Program</p>
                <p className="text-xs font-bold text-text-secondary font-display mt-xs">Full Stack + Gen AI</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Training;
