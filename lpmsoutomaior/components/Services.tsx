import React from 'react';
import { Heart, Activity, Stethoscope, BookOpen } from 'lucide-react';
import { BentoCard } from './BentoCard';

export const Services = () => {
  return (
    <section id="especialidades" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Especialidades Clínicas</h2>
          <p className="text-xl text-white/60">
            Diagnóstico preciso e acompanhamento intensivo para garantir o melhor desenvolvimento cardíaco do seu filho.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <BentoCard 
            title="Cardiologia Pediátrica" 
            subtitle="Atendimento Clínico"
            icon={Heart}
            className="md:col-span-2 md:row-span-2 min-h-[400px]"
            delay={0}
          >
            <p className="text-lg mb-6">
              Acompanhamento completo desde o período neonatal até a adolescência. Diagnóstico e tratamento de sopros, arritmias, dores no peito e síncopes.
            </p>
            <ul className="space-y-3 mt-8">
              {['Cardiopatias Congênitas', 'Hipertensão Arterial Pediátrica', 'Avaliação Pré-Atividade Física'].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Side Cards */}
          <BentoCard 
            title="Ecocardiografia" 
            subtitle="Diagnóstico por Imagem"
            icon={Activity}
            className="min-h-[250px]"
            delay={200}
          >
            Exames de alta precisão para visualização estrutural do coração. Especialista pelo Hospital Messejana.
          </BentoCard>

          <BentoCard 
            title="UTI Pós-Operatória" 
            subtitle="Medicina Intensiva"
            icon={Stethoscope}
            className="min-h-[250px]"
            delay={300}
          >
            Experiência robusta no manejo de pacientes críticos após cirurgias cardíacas complexas.
          </BentoCard>

           <BentoCard 
            title="Ensino & Pesquisa" 
            subtitle="Professora UNIFOR"
            icon={BookOpen}
            className="md:col-span-3 bg-gradient-to-r from-blue-900/20 to-transparent"
            delay={400}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                Autora do livro <span className="text-white font-bold italic">"Cardiologia e Cirurgia Cardiovascular Pediátrica"</span>.
                Compromisso contínuo com a formação de novos médicos e atualização científica.
              </div>
              <div className="flex gap-4">
                 <div className="bg-white/5 px-4 py-2 rounded text-sm border border-white/10">Mestrado em Ciências Médicas</div>
                 <div className="bg-white/5 px-4 py-2 rounded text-sm border border-white/10">Autora de Capítulos</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

