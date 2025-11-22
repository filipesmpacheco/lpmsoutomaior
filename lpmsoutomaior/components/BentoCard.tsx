import React from 'react';
import { BentoCardProps } from '@/types';

export const BentoCard = ({ title, subtitle, icon: Icon, children, className = "", delay = 0 }: BentoCardProps) => {
  return (
    <div 
      className={`group relative p-8 rounded-3xl bg-[#ECF2FF] border border-[#0ABAB5]/20 overflow-hidden hover:border-[#0ABAB5]/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-[#0ABAB5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 w-12 h-12 rounded-2xl bg-[#0ABAB5] flex items-center justify-center border border-[#0ABAB5]/20 group-hover:scale-110 transition-transform duration-500 shadow-md">
          {Icon && <Icon className="w-6 h-6 text-white" />}
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-[#1E2235]">{title}</h3>
        {subtitle && <p className="text-[#525975] text-sm uppercase tracking-wider mb-4">{subtitle}</p>}
        
        <div className="text-[#525975] leading-relaxed flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

