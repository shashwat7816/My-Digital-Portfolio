import React from 'react';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="Academic Foundation">
      <div className="max-w-4xl">
        <div className="relative border-l border-border-default/20 pl-lg ml-md space-y-2xl">
          {/* Timeline Dot */}
          <div className="absolute -left-1 top-0 w-2 h-2 bg-cyan-neon rounded-full shadow-glow-cyan animate-pulse"></div>
          
          <div className="relative">
            <div className="text-[10px] text-cyan-neon uppercase tracking-[0.3em] font-mono mb-sm">2021 - 2025</div>
            <h3 className="text-2xl font-bold text-text-primary mb-xs font-display">Bachelor of Technology in Computer Science</h3>
            <p className="text-indigo-soft font-semibold mb-xs font-body">Lovely Professional University (LPU)</p>
            <p className="text-text-secondary mb-md italic font-body">Specialization in Software Engineering and AI</p>
            
            <div className="inline-flex items-center gap-sm px-md py-1 bg-surface-elevated rounded-md border border-border-default/20 text-sm">
              <span className="text-text-muted font-body">CGPA:</span>
              <span className="text-cyan-neon font-black font-mono">8.08 / 10.0</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
