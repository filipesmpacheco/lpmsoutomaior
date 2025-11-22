import React from 'react';
import { StatProps } from '@/types';

export const Stat = ({ value, label }: StatProps) => (
  <div className="flex flex-col items-start">
    <span className="text-5xl md:text-6xl font-bold text-[#0ABAB5] mb-2 font-heading">
      {value}
    </span>
    <span className="text-sm uppercase tracking-widest text-[#2F9E8D]">{label}</span>
  </div>
);

