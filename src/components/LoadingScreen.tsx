import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Selecting Estate Arabica Beans...');

  useEffect(() => {
    const textInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(textInterval);
          setTimeout(onComplete, 400);
          return 100;
        }
        if (next > 75) setLoadingText('Warming French Butter Croissants...');
        else if (next > 45) setLoadingText('Calibrating La Marzocco Extraction...');
        else if (next > 20) setLoadingText('Nagpur Civil Lines • Single-Origin Roastery');
        return next;
      });
    }, 60);

    return () => clearInterval(textInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0a09] text-[#F8F5F0] overflow-hidden select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
      >
        {/* Ambient background glow */}
        <div className="absolute w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
          {/* Animated Coffee Cup Visual with Diamond Crest */}
          <div className="relative mb-8">
            {/* Steam Trails */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex justify-center gap-2 pointer-events-none">
              <span className="w-1.5 h-7 bg-gradient-to-t from-[#C89B3C]/60 to-transparent rounded-full animate-steam-1"></span>
              <span className="w-1.5 h-9 bg-gradient-to-t from-[#C89B3C]/70 to-transparent rounded-full animate-steam-2"></span>
              <span className="w-1.5 h-6 bg-gradient-to-t from-[#C89B3C]/50 to-transparent rounded-full animate-steam-3"></span>
            </div>

            <div className="w-20 h-20 border border-[#C89B3C] rotate-45 flex items-center justify-center shadow-[0_0_35px_rgba(200,155,60,0.3)]">
              <span className="text-2xl font-serif -rotate-45 font-bold text-[#F8F5F0]">G</span>
            </div>
          </div>

          {/* Brand Name */}
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F8F5F0] tracking-[0.2em] uppercase mb-1">
            GODWIT CAFE
          </h2>
          <p className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#C89B3C] mb-6">
            NAGPUR • CIVIL LINES
          </p>

          {/* Progress Bar */}
          <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2D1B14] via-[#C89B3C] to-[#FFF4D0]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>

          {/* Progress % & Loading Text */}
          <div className="flex items-center justify-between w-64 text-xs font-mono text-[#E8D8C4]/60">
            <span className="truncate pr-2">{loadingText}</span>
            <span className="text-[#C89B3C] font-semibold">{progress}%</span>
          </div>

          <button
            onClick={onComplete}
            className="mt-8 text-[11px] tracking-widest text-[#C89B3C]/60 hover:text-[#C89B3C] uppercase transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3" />
            <span>Enter Godwit World</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
