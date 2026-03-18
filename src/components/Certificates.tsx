import React from 'react';
import Section from './Section';
import { Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'ChatGPT-4 Prompt Engineering',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    description: 'Generative AI & LLM course focusing on advanced prompt engineering for ChatGPT-4.',
    file: '/INFOSYS.pdf',
    type: 'pdf',
  },
  {
    title: 'Full Stack MERN with Gen AI',
    issuer: 'W3 Grads',
    date: 'July 2025',
    description: 'Intensive Full Stack training with MongoDB, Express, React, Node.js and Gen AI integration.',
    file: '/FLAMES 25.png',
    type: 'image',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'April 2024',
    description: 'Comprehensive certification on cloud architectures, virtualization, and deployment strategies.',
    file: '/Cloud Computing.pdf',
    type: 'pdf',
  },
];

const CertCard: React.FC<{ cert: typeof certificates[0] }> = ({ cert }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.96 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }}
    className="flex flex-col rounded-xl overflow-hidden border border-border/40 bg-bg-secondary/50 hover:border-accent-secondary/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.08)] group"
  >
    {/* Preview area */}
    <div className="relative overflow-hidden bg-bg-tertiary" style={{ height: '200px' }}>
      {cert.type === 'image' ? (
        <img
          src={cert.file}
          alt={cert.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <iframe
          src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
          title={cert.title}
          className="w-full h-full border-none pointer-events-none"
          style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
        />
      )}
      {/* Subtle gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/70 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Issuer badge */}
      <div className="absolute top-xs right-xs bg-bg-secondary/80 backdrop-blur-sm border border-accent-secondary/20 rounded-full px-sm py-[3px] text-[9px] font-mono font-bold text-accent-secondary uppercase tracking-widest">
        {cert.issuer}
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col gap-sm p-md flex-1">
      <div className="flex items-start justify-between gap-sm">
        <h3 className="text-sm font-bold text-text-primary font-display tracking-tight leading-snug">
          {cert.title}
        </h3>
        <div className="flex items-center gap-xs text-[10px] text-text-tertiary font-mono whitespace-nowrap mt-0.5">
          <Calendar size={10} />
          {cert.date}
        </div>
      </div>

      <p className="text-xs text-text-secondary leading-relaxed font-body italic flex-1">
        "{cert.description}"
      </p>

      {/* Download / View button */}
      <a
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-xs text-[10px] font-bold uppercase tracking-wider text-accent-secondary border border-accent-secondary/30 hover:bg-accent-secondary hover:text-white px-sm py-xs rounded-md transition-all duration-300 font-mono self-start"
      >
        <ExternalLink size={12} />
        View
      </a>
    </div>
  </motion.div>
);

const Certificates: React.FC = () => (
  <Section id="certificates" title="Certificates" subtitle="Verified Expertise">
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl max-w-6xl mx-auto"
    >
      {certificates.map(cert => (
        <CertCard key={cert.title} cert={cert} />
      ))}
    </motion.div>
  </Section>
);

export default Certificates;
