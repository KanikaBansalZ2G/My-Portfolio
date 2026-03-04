import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero = () => {
  const { basics } = resumeData;

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl"
      >
        <h2 className="text-emerald-400 font-mono mb-4 tracking-wider uppercase text-sm md:text-base">
          {basics.title}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-tight">
          {basics.name}
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
          {basics.summary}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 font-medium rounded-full hover:bg-slate-200 transition-colors"
          >
            View Experience
            <ArrowDown className="ml-2 w-4 h-4" />
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 text-white font-medium rounded-full border border-slate-700 hover:bg-slate-800 transition-colors backdrop-blur-sm"
          >
            Download Resume
            <Download className="ml-2 w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
