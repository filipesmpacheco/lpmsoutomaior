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
      ${isScrolled ? 'py-4 bg-black/20 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <Heart className="w-4 h-4 text-white fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight font-heading group-hover:text-cyan-300 transition-colors">
            Dra. Maria Marcia
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Sobre', href: '#sobre' },
            { label: 'Especialidades', href: '#especialidades' },
            { label: 'Acadêmico', href: '#sobre' },
            { label: 'Contato', href: '#contato' }
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-white/70 hover:text-white hover:tracking-widest transition-all duration-300 uppercase">
              {item.label}
            </a>
          ))}
          <Button variant="secondary" className="!py-2 !px-6 text-sm">
            Agendar Consulta
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

