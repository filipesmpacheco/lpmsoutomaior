import { Stat } from './Stat';

export const About = () => {
  return (
    <section id="sobre" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal-on-scroll">
            {/* Frame Effect */}
            <div className="absolute -inset-4 border border-[#0ABAB5]/20 rounded-3xl transform rotate-2" />
            <div className="absolute -inset-4 border border-[#E05A47]/20 rounded-3xl transform -rotate-2" />
            
            <div className="relative rounded-2xl overflow-hidden bg-[#ECF2FF] aspect-[4/5] group shadow-xl">
              <img 
                src="/images/dramarcia.jpeg" 
                alt="Dra. Márcia Souto Maior" 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-8 left-8 z-20 bg-[#1E2235]/80 px-4 py-2 rounded-lg">
                <p className="font-heading text-3xl font-bold text-white">Dra. Márcia Souto Maior</p>
                <p className="text-white tracking-wider text-sm uppercase mt-2">CRM 7112/CE</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1E2235] reveal-on-scroll">
              Uma Vida Dedicada à <br />
              <span className="text-[#0ABAB5]">
                Saúde Infantil
              </span>
            </h2>

            <div className="space-y-6 text-lg text-[#525975] reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <p>
                Com graduação em Medicina desde 1992 pela Escola de Ciencias Médicas de Alagoas e com Mestrado em Ciências Médicas pela UNIFOR, a Dra. Márcia Souto Maior construiu uma carreira sólida baseada em rigor científico e compaixão.
              </p>
              <p>
                Sua formação inclui residências médicas de prestígio no <strong className="text-[#1E2235]">Hospital Infantil Pequeno Príncipe</strong> (Curitiba) e na Santa Casa de Misericórdia de Maceió.
              </p>
              <p>
                Atualmente, coordena a Cardiologia Pediátrica do Hospital Luís França e atua na UTI Pós-Operatória do Hospital de Messejana, lidando com os casos mais complexos do estado.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-[#0ABAB5]/20 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
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

