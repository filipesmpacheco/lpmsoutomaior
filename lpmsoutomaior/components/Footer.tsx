import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { Button } from './Button';

export const Footer = () => {
  return (
    <footer id="contato" className="relative py-20 px-6 border-t border-white/5 bg-black/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12 reveal-on-scroll">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Vamos cuidar desse <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
              pequeno coração?
            </span>
          </h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">
            Consultório localizado no Incor Criança e Hospital Luís França.
            Agende uma avaliação e tenha a segurança de uma especialista.
          </p>
          <Button className="text-lg px-12 py-6">
            Agendar via WhatsApp
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-20 pt-10 border-t border-white/5">
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-300"/> Endereços</h4>
            <p className="text-white/60 text-sm">Hospital Luís França - Coordenação Clínica</p>
            <p className="text-white/60 text-sm">Incor Criança/CE</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-cyan-300"/> Atendimento</h4>
            <p className="text-white/60 text-sm">Segunda a Sexta</p>
            <p className="text-white/60 text-sm">08:00 - 18:00</p>
          </div>
           <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Award className="w-4 h-4 text-cyan-300"/> Credenciais</h4>
            <p className="text-white/60 text-sm">Lattes ID: 7805928561215144</p>
            <p className="text-white/60 text-sm">Membro da Sociedade Brasileira de Cardiologia</p>
          </div>
        </div>

        <div className="mt-20 text-white/20 text-sm flex justify-between items-center">
          <p>© 2025 Dra. Maria Marcia Morais Souto Maior.</p>
          <p>Designed with ❤️ & Next.js</p>
        </div>
      </div>
    </footer>
  );
};

