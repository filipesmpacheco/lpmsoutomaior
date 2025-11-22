"use client";

import React, { useState } from 'react';
import { ArrowRight, Activity, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
  const [isHeartbeat, setIsHeartbeat] = useState(false);

  const handleHeartbeat = () => {
    setIsHeartbeat(true);
    setTimeout(() => setIsHeartbeat(false), 1500);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECF2FF] border border-[#2F9E8D]/40 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-[#2F9E8D] animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#525975]">Disponível para Consultas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <span className="block text-[#1E2235] reveal-on-scroll">
              Cuidando de
            </span>
            <span 
              className={`block text-[#0ABAB5] reveal-on-scroll ${isHeartbeat ? 'heartbeat' : ''}`}
              style={{ transitionDelay: '100ms' }}
              onClick={handleHeartbeat}
            >
              Corações Pequenos
            </span>
            <span className="block text-[#525975] reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              Com Grande Amor.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#525975] max-w-2xl mb-12 leading-relaxed reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            Especialista em <strong className="text-[#0ABAB5]">Ecocardiografia Fetal</strong> e Cardiologia Pediátrica de alta complexidade. 
            Unindo mais de 30 anos de excelência médica acadêmica e humanização no tratamento de cardiopatias congênitas.
          </p>

          <div className="flex flex-wrap gap-6 reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
            <Button>
              Agendar Consulta <ArrowRight className="w-4 h-4" />
            </Button>
            <a 
              href="http://lattes.cnpq.br/7805928561215144" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                Conhecer Currículo
              </Button>
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block relative">
          {/* Abstract Representation of a Heart/Pulse */}
          <div className="relative w-full aspect-square">
             <div className="absolute inset-0 border border-[#0ABAB5]/20 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-8 border border-dashed border-[#E05A47]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-64 h-64 bg-[#0ABAB5]/10 rounded-full flex items-center justify-center border border-[#0ABAB5]/20 shadow-lg">
                  <Activity className="w-24 h-24 text-[#0ABAB5] opacity-80" />
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="text-[#525975]/50 w-6 h-6" />
      </div>
    </section>
  );
};

