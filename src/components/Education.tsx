import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Education
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-md"
            >
              <GraduationCap className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                {edu.degree}
              </h3>
              <div className="text-slate-300 mb-4">
                {edu.institution}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                <Calendar className="w-4 h-4" />
                {edu.dates}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
