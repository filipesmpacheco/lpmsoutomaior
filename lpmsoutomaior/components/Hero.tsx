import React from 'react';
import { ArrowRight, Activity, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-green-400">Disponível para Consultas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 reveal-on-scroll">
              Cuidando de
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              Corações Pequenos
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/30 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              Com Grande Amor.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            Cardiologia Pediátrica de alta complexidade e Ecocardiografia. 
            Unindo mais de 30 anos de excelência médica acadêmica e humanização no tratamento de cardiopatias congênitas.
          </p>

          <div className="flex flex-wrap gap-6 reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
            <Button>
              Agendar Consulta <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              Conhecer Currículo
            </Button>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block relative">
          {/* Abstract Representation of a Heart/Pulse */}
          <div className="relative w-full aspect-square">
             <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-8 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                  <Activity className="w-24 h-24 text-cyan-300 opacity-80" />
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="text-white/30 w-6 h-6" />
      </div>
    </section>
  );
};

