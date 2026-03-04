import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { Award, Code2 } from 'lucide-react';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
              <Code2 className="text-emerald-400" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills[0].items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
              <Award className="text-emerald-400" />
              Certifications
            </h2>
            <ul className="space-y-4">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
