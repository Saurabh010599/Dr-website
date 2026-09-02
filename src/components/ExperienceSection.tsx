import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Croissant, Sparkles, Armchair, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Coffee,
      title: 'Estate Single-Origin Coffee',
      description: 'Specialty Arabica roasted in micro-lots, brewed with calibrated TDS mineral water on La Marzocco Strada machines.',
      tag: 'Arabica Reserve',
    },
    {
      icon: Croissant,
      title: 'Fresh Artisan Bakery',
      description: 'Hand-laminated with pure Normandy butter, fresh fruit compotes, and Belgian chocolate baked thrice daily.',
      tag: 'Baked at Dawn',
    },
    {
      icon: Armchair,
      title: 'Cozy & Comfortable Seating',
      description: 'Plush velvet armchairs, acoustic ambient damping, private conversation booths, and warm amber lighting.',
      tag: 'Civil Lines Comfort',
    },
    {
      icon: Zap,
      title: 'Fast & Attentive Service',
      description: 'Seamless digital tableside ordering, express barista service, and courteous hospitality for your peace of mind.',
      tag: 'Swift Excellence',
    },
    {
      icon: HeartHandshake,
      title: 'Warm & Knowledgeable Staff',
      description: 'Passionate baristas and certified coffee sommeliers delighted to guide you through customized flavor pairings.',
      tag: 'Dedicated Team',
    },
    {
      icon: ShieldCheck,
      title: '100% Pure Vegetarian Delights',
      description: 'Entirely vegetarian gourmet menu with vegan, eggless, and healthy artisanal alternatives prepared with utmost hygiene.',
      tag: 'Gourmet Pure Veg',
    },
  ];

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0b0807]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/25 text-[#C89B3C] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Godwit Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F8F5F0] tracking-tight">
            An Uncompromising <span className="text-[#C89B3C] italic font-normal">Cafe Experience</span>
          </h2>
          <p className="mt-4 text-[#E8D8C4]/70 text-base sm:text-lg font-light leading-relaxed">
            Every element of Godwit Cafe has been curated to transform everyday coffee moments into lasting memories.
          </p>
        </div>

        {/* 6 Grid Cards with Micro-Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-8 rounded-3xl bg-gradient-to-b from-[#18110e]/90 to-[#120c0a]/90 border border-[#C89B3C]/20 hover:border-[#C89B3C]/70 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C89B3C]/10 rounded-full blur-2xl group-hover:bg-[#C89B3C]/20 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2D1B14] to-[#1a110e] border border-[#C89B3C]/40 flex items-center justify-center text-[#C89B3C] group-hover:scale-110 group-hover:border-[#C89B3C] group-hover:shadow-[0_0_20px_rgba(200,155,60,0.3)] transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#110d0b] border border-[#C89B3C]/25 text-[#C89B3C]">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-[#F8F5F0] mb-3 group-hover:text-[#C89B3C] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-[#E8D8C4]/75 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#E8D8C4]/40 group-hover:text-[#C89B3C] transition-colors">
                  <span>Gupta Tower, Civil Lines</span>
                  <span className="text-[#C89B3C]">★ Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
