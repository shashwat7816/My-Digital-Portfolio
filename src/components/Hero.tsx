import React, { Suspense, useState, lazy } from 'react';
import { MousePointer2, ChevronDown, Loader2 } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Only toggle if we cross the 100px threshold (lowered for better responsiveness)
    if (latest > 100 && !isSplit) {
      setIsSplit(true);
    } else if (latest <= 100 && isSplit) {
      setIsSplit(false);
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  // Variants for the split layout transformation
  const layoutVariants = {
    initial: {
      width: '100%',
      scale: 1.5,
      left: 0,
    },
    split: {
      width: '50%',
      scale: 1,
      left: 0,
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    split: { opacity: 0.3 }
  };

  const contentContainerVariants = {
    initial: {
      opacity: 0,
      y: 40,
      backgroundColor: 'rgba(30, 30, 30, 0)',
      backdropFilter: 'blur(0px)',
      borderColor: 'rgba(0, 229, 255, 0)',
      borderRadius: '0px',
      padding: '2rem 1.5rem',
      pointerEvents: 'none',
    },
    split: {
      opacity: 1,
      y: 0,
      backgroundColor: 'rgba(30, 30, 30, 0.3)',
      backdropFilter: 'blur(4px)',
      borderColor: 'rgba(0, 229, 255, 0.1)',
      borderRadius: '12px',
      padding: '3rem 2.5rem',
      pointerEvents: 'auto',
    }
  };

  return (
    <section id="home" className="relative h-[200vh] bg-[#0C0C0C]">
      {/* Sticky container for the transition effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center">
        
        {/* LEFT PANEL: Spline 3D Scene */}
        <motion.div 
          className="absolute inset-0 z-1 overflow-hidden pointer-events-auto origin-center"
          initial="initial"
          animate={isSplit ? "split" : "initial"}
          variants={layoutVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Suspense fallback={null}>
            <Spline 
              scene="/spline/scene.splinecode"
              onLoad={() => setIsLoaded(true)}
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
          
          {/* Dark Primary Overlay - Removed initially to fix "faded" look */}
          <motion.div 
            className="absolute inset-0 bg-[#0C0C0C] z-[2] pointer-events-none"
            variants={overlayVariants}
            initial={{ opacity: 0 }}
            animate={isSplit ? "split" : "initial"}
            transition={{ duration: 0.8 }}
          ></motion.div>
          
          {/* Radial Gradient Overlay - Removed initially */}
          <motion.div 
            className="absolute inset-0 z-[3] pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle at 50% 50%, rgba(20,20,25,0.4) 0%, rgba(12,12,12,0.8) 100%)' 
            }}
            animate={{ opacity: isSplit ? 0.6 : 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          
          {/* Bottom Fade - Removed initially */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0C0C0C] z-[4] pointer-events-none"
            animate={{ opacity: isSplit ? 0.8 : 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Loading Indicator */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[100] flex items-center justify-center bg-[#0C0C0C]"
            >
              <div className="flex flex-col items-center gap-md">
                <Loader2 size={40} className="text-accent-primary animate-spin" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary animate-pulse">Initializing Interface...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* RIGHT PANEL: Hero Content */}
        <motion.div 
          className="relative z-20 w-full md:w-1/2 flex flex-col items-center justify-center pointer-events-none ml-auto h-full px-lg"
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div 
            variants={contentContainerVariants}
            initial="initial"
            animate={isLoaded && isSplit ? "split" : "initial"}
            transition={{ duration: 0.8, delay: isSplit ? 0.2 : 0 }}
            className="max-w-[700px] w-full border text-center pointer-events-auto space-y-xl"
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded && isSplit ? "visible" : "hidden"}
              className="space-y-xl"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-md px-md py-xs rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">Available for Hire</span>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-md text-center">
                <h1 className="text-[clamp(2rem,8vw,4rem)] font-bold leading-tight tracking-[0.05em] text-text-primary font-display uppercase">
                  SHASHWAT <span className="text-[#00E5FF] tracking-[0.08em]">KASHYAP</span>
                </h1>
                <p className="text-xl md:text-[1.3rem] font-display font-medium text-[#B0B0B0] tracking-wide italic">
                  Full Stack Developer | AI Enthusiast
                </p>
              </motion.div>

              <motion.p variants={itemVariants} className="text-base md:text-[1rem] text-[#B0B0B0] max-w-2xl mx-auto font-body leading-[1.8]">
                Crafting premium digital experiences through technical excellence and creative innovation. Specializing in high-performance web applications and intelligent systems.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-md pt-lg">
                <a href="#contact" className="px-[1.75rem] py-[0.875rem] text-[1rem] bg-accent-primary/10 border border-[#00E5FF] text-[#00E5FF] rounded-md font-display font-bold uppercase tracking-wider flex items-center gap-md group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:scale-105">
                  Work Together
                  <MousePointer2 size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {!isSplit && (
            <motion.div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-sm z-10"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-[#00E5FF] animate-pulse">Scroll to explore</span>
              <div className="w-[30px] h-[50px] rounded-full border-2 border-[#00E5FF]/30 flex justify-center p-xs">
                <motion.div 
                  className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full"
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <ChevronDown size={16} className="text-[#00E5FF] animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
