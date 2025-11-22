import React from 'react';
import { ButtonProps } from '@/types';

export const Button = ({ children, variant = 'primary', className = '' }: ButtonProps) => {
  return (
    <button className={`
      relative overflow-hidden px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-500 group
      ${variant === 'primary' 
        ? 'bg-[#0ABAB5] text-white hover:bg-[#089B96] hover:scale-105 shadow-lg hover:shadow-xl' 
        : 'bg-[#ECF2FF] border border-[#0ABAB5]/20 text-[#1E2235] hover:bg-[#0ABAB5]/10 hover:border-[#0ABAB5]/40'}
      ${className}
    `}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

