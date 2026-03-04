import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Experience
        </h2>
        
        <div className="space-y-6">
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-md hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-emerald-400 font-medium text-lg">
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.dates}
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
