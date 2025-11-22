import React from 'react';
import { StatProps } from '@/types';

export const Stat = ({ value, label }: StatProps) => (
  <div className="flex flex-col items-start">
    <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 mb-2 font-heading">
      {value}
    </span>
    <span className="text-sm uppercase tracking-widest text-cyan-300/80">{label}</span>
  </div>
);

