"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6
      ${isScrolled ? 'py-4 bg-[#FAFCFF] border-b border-[#0ABAB5]/10 shadow-sm' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-[#0ABAB5] flex items-center justify-center shadow-md">
            <Heart className="w-4 h-4 text-white fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight font-heading text-[#1E2235] group-hover:text-[#0ABAB5] transition-colors">
            Dra. Márcia Souto Maior
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Sobre', href: '#sobre' },
            { label: 'Especialidades', href: '#especialidades' },
            { label: 'Contato', href: '#contato' }
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-[#525975] hover:text-[#0ABAB5] hover:tracking-widest transition-all duration-300 uppercase">
              {item.label}
            </a>
          ))}
          <Button variant="secondary" className="!py-2 !px-6 text-sm">
            Agendar Consulta
          </Button>
        </div>

        <button className="md:hidden text-[#1E2235]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

