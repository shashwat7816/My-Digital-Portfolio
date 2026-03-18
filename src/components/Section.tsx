import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <motion.section 
      id={id} 
      className={`py-3xl px-lg md:px-2xl ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col mb-2xl">
          <motion.div 
            className="flex items-center gap-md mb-xs"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-lg bg-cyan-neon"></div>
            <span className="text-cyan-neon font-display font-bold uppercase tracking-[0.3em] text-xs">
              {title}
            </span>
          </motion.div>
          {subtitle && (
            <motion.h2 
              className="text-4xl md:text-6xl font-black text-text-primary tracking-tight font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {subtitle}
            </motion.h2>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;
