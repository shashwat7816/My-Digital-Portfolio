import React from 'react';
import Section from './Section';
import { Download, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';


const Resume: React.FC = () => {
  const education = [
    {
      period: "Aug 2023 - Present",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University (LPU)",
      location: "Phagwara, Punjab",
      details: "Full Stack Development",
      stats: { label: "CGPA", value: "8.08 / 10.0" }
    },
    {
      period: "Apr 2020 - Mar 2022",
      degree: "Intermediate",
      institution: "Oxford Public School",
      location: "Ranchi, Jharkhand",
      details: "Senior Secondary Education",
      stats: { label: "Percentage", value: "84%" }
    },
    {
      period: "Apr 2018 - Mar 2020",
      degree: "Matriculation",
      institution: "Oxford Public School",
      location: "Ranchi, Jharkhand",
      details: "Secondary Education",
      stats: { label: "Percentage", value: "91.2%" }
    }
  ];

  return (
    <Section id="resume" title="Resume" subtitle="Professional & Academic Background">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl items-center">
          {/* Education Timeline */}
          <div className="md:col-span-2 space-y-xl">
            <h3 className="text-xl font-bold text-text-primary flex items-center gap-md font-display mb-lg">
              <GraduationCap className="text-cyan-neon" />
              Education
            </h3>

            <div className="relative border-l border-border-default/20 pl-lg ml-md space-y-2xl">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[1.65rem] top-1.5 w-3 h-3 bg-bg-primary border-2 border-cyan-neon rounded-full z-10"></div>

                  <div className="flex items-center gap-sm text-[10px] text-cyan-neon uppercase tracking-[0.3em] font-mono mb-sm">
                    <Calendar size={12} />
                    {edu.period}
                  </div>

                  <h4 className="text-2xl font-bold text-text-primary mb-xs font-display">
                    {edu.degree}
                  </h4>

                  <p className="text-indigo-soft font-semibold font-body">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-text-tertiary font-mono mb-xs">
                    <MapPin size={10} className="text-accent-secondary" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-text-secondary mb-md italic font-body">
                    {edu.details}
                  </p>

                  <div className="inline-flex items-center gap-sm px-md py-1 bg-surface-elevated rounded-md border border-border-default/20 text-sm">
                    <span className="text-text-muted font-body">{edu.stats.label}:</span>
                    <span className="text-cyan-neon font-black font-mono">{edu.stats.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:items-end w-full">
            <div className="w-full max-w-[340px] rounded-xl overflow-hidden border border-accent-primary/20 shadow-[0_0_30px_rgba(0,229,255,0.07)] bg-bg-secondary/50">
              {/* Header bar */}
              <div className="flex items-center justify-between px-md py-sm border-b border-border/20 bg-bg-tertiary/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-primary">MY RESUME</span>
                <span className="text-[10px] font-mono text-text-tertiary">PDF</span>
              </div>

              {/* Inline PDF preview */}
              <iframe
                src="/shashwat_cv.pdf#toolbar=0&navpanes=0&scrollbar=1"
                title="Shashwat Kashyap Resume"
                className="w-full"
                style={{ height: '420px', border: 'none', display: 'block' }}
              >
                <p className="text-text-secondary text-sm p-md text-center">
                  Your browser does not support inline PDF.{' '}
                  <a href="/shashwat_cv.pdf" className="text-accent-primary underline">Download it here.</a>
                </p>
              </iframe>

              {/* Footer actions */}
              <div className="flex items-center justify-between px-md py-sm border-t border-border/20 bg-bg-tertiary/60">
                <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest">
                  Last Updated: March 2026
                </span>
                <a
                  href="/shashwat_cv.pdf"
                  download
                  className="inline-flex items-center gap-xs text-[10px] font-bold uppercase tracking-wider text-accent-primary hover:text-white border border-accent-primary/30 hover:bg-accent-primary px-sm py-xs rounded-md transition-all duration-300 font-mono"
                >
                  <Download size={12} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
