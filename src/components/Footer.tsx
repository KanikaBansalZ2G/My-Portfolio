import resumeData from '../data/resume.json';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const { basics } = resumeData;
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-slate-800/50 relative z-10 bg-slate-950/50 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {basics.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${basics.email}`} className="hover:text-white transition-colors">
              {basics.email}
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {basics.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
