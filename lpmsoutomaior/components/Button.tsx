import React from 'react';
import { ButtonProps } from '@/types';

export const Button = ({ children, variant = 'primary', className = '' }: ButtonProps) => {
  return (
    <button className={`
      relative overflow-hidden px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-500 group
      ${variant === 'primary' 
        ? 'bg-white text-black hover:scale-105' 
        : 'bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30'}
      ${className}
    `}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      )}
    </button>
  );
};

