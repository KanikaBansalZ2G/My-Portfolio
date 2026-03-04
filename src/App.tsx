/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-emerald-500/30 font-sans">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <main key="main" className="relative">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
