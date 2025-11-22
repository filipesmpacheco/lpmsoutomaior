import React from 'react';
import { Stat } from './Stat';

export const About = () => {
  return (
    <section id="sobre" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal-on-scroll">
            {/* Frame Effect */}
            <div className="absolute -inset-4 border border-white/10 rounded-3xl transform rotate-2" />
            <div className="absolute -inset-4 border border-white/10 rounded-3xl transform -rotate-2" />
            
            <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-[4/5] group">
              {/* Placeholder for Doctor Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="/api/placeholder/800/1000" 
                alt="Dra. Maria Marcia" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="font-heading text-3xl font-bold text-white">Dra. Maria Marcia</p>
                <p className="text-cyan-300 tracking-wider text-sm uppercase mt-2">CRM 12345 | RQE 6789</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold reveal-on-scroll">
              Uma Vida Dedicada à <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Saúde Infantil
              </span>
            </h2>

            <div className="space-y-6 text-lg text-white/70 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <p>
                Com graduação em Medicina desde 1992 e Mestrado em Ciências Médicas pela UNIFOR, a Dra. Maria Marcia construiu uma carreira sólida baseada em rigor científico e compaixão.
              </p>
              <p>
                Sua formação inclui residências médicas de prestígio no <strong>Hospital Infantil Pequeno Príncipe</strong> (Curitiba) e na Santa Casa de Misericórdia.
              </p>
              <p>
                Atualmente, coordena a Cardiologia Pediátrica do Hospital Luís França e atua na UTI Pós-Operatória do Hospital de Messejana, lidando com os casos mais complexos do estado.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <Stat value="30+" label="Anos de Experiência" />
              <Stat value="10k+" label="Vidas Impactadas" />
              <Stat value="3" label="Residências Médicas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

