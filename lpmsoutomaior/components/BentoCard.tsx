import React from 'react';
import { BentoCardProps } from '@/types';

export const BentoCard = ({ title, subtitle, icon: Icon, children, className = "", delay = 0 }: BentoCardProps) => {
  return (
    <div 
      className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-700 hover:-translate-y-2 reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
          {Icon && <Icon className="w-6 h-6 text-cyan-300" />}
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        {subtitle && <p className="text-white/60 text-sm uppercase tracking-wider mb-4">{subtitle}</p>}
        
        <div className="text-white/70 leading-relaxed flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

