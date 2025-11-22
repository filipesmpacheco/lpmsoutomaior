import { MapPin, Calendar, Award } from 'lucide-react';
import { Button } from './Button';

export const Footer = () => {
  return (
    <footer id="contato" className="relative py-20 px-6 border-t border-[#0ABAB5]/20 bg-[#ECF2FF]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12 reveal-on-scroll">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-[#1E2235]">
            Vamos cuidar desse <br />
            <span className="text-[#0ABAB5]">
              pequeno coração?
            </span>
          </h2>
          <p className="text-xl text-[#525975] mb-10 max-w-2xl mx-auto">
            Consultório localizado no Incor Criança.
            Agende uma avaliação e tenha a segurança de uma especialista.
          </p>
          <Button className="text-lg px-12 py-6">
            Agendar via WhatsApp
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-20 pt-10 border-t border-[#0ABAB5]/20">
          <div>
            <h4 className="text-[#1E2235] font-bold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-[#0ABAB5]"/> Endereços</h4>
            <p className="text-[#525975] text-sm">Hospital Luís França</p>
            <p className="text-[#525975] text-sm">INCOR Criança - Rua Núbia Barrocas , 125. Parque Manibura
              <p className="text-[#525975] text-sm">Fortaleza / CE 
              <p className="text-[#525975] text-sm">CEP 60821-770</p>
              </p>
            </p>
          </div>
          <div>
            <h4 className="text-[#1E2235] font-bold mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-[#0ABAB5]"/> Atendimento</h4>
            <p className="text-[#525975] text-sm">Segunda a Sexta</p>
            <p className="text-[#525975] text-sm">07:00 - 17:00</p>
          </div>
           <div>
            <h4 className="text-[#1E2235] font-bold mb-4 flex items-center gap-2"><Award className="w-4 h-4 text-[#0ABAB5]"/> Credenciais</h4>
            <p className="text-[#525975] text-sm">Lattes ID: 7805928561215144</p>
            <p className="text-[#525975] text-sm">Membro da Sociedade Brasileira de Cardiologia</p>
          </div>
        </div>

        <div className="mt-20 text-[#525975]/40 text-sm flex justify-between items-center">
          <p>© 2025 Dra. Márcia Souto Maior. Todos os direitos reservados.</p>
          <p>Designed by filipesmpacheco.dev/brenacosta.dev</p>
        </div>
      </div>
    </footer>
  );
};

