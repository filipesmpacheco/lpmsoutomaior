import React from 'react';
import { Heart, HeartPulse, Stethoscope, BookOpen } from 'lucide-react';
import { BentoCard } from './BentoCard';

export const Services = () => {
  return (
    <section id="especialidades" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1E2235]">Especialidades Clínicas</h2>
          <p className="text-xl text-[#525975]">
            Diagnóstico preciso e acompanhamento intensivo para garantir o melhor desenvolvimento cardíaco do seu filho.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Destaque Principal - Ecocardiografia Fetal */}
          <BentoCard 
            title="Ecocardiografia Fetal" 
            subtitle="Especialidade"
            icon={HeartPulse}
            className="md:col-span-2 min-h-[400px] bg-gradient-to-br from-[#0ABAB5]/10 to-[#2F9E8D]/10 border-[#0ABAB5]/30"
            delay={0}
          >
            <p className="text-lg mb-6 font-medium">
              Diagnóstico pré-natal de cardiopatias congênitas com tecnologia de ponta. Acompanhamento especializado durante toda a gestação para garantir o melhor planejamento do nascimento e tratamento do bebê.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                'Diagnóstico de cardiopatias congênitas ainda no útero',
                'Acompanhamento gestacional especializado',
                'Planejamento multidisciplinar do parto',
                'Orientação familiar e preparação para o tratamento'
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-[#525975]">
                  <div className="w-2 h-2 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#0ABAB5]/20">
              <p className="text-sm text-[#525975] italic">
                Especialista certificada com vasta experiência em ecocardiografia fetal, referência no estado do Ceará.
              </p>
            </div>
          </BentoCard>

          {/* Cardiologia Pediátrica */}
          <BentoCard 
            title="Cardiologia Pediátrica" 
            subtitle="Atendimento Clínico"
            icon={Heart}
            className="min-h-[400px]"
            delay={200}
          >
            <p className="text-lg mb-6 font-medium">
              Acompanhamento completo desde o período neonatal até a adolescência. Diagnóstico e tratamento de sopros, arritmias, dores no peito e síncopes.
            </p>
            <ul className="space-y-3 mt-8">
              {['Cardiopatias Congênitas', 'Hipertensão Arterial Pediátrica', 'Avaliação Pré-Atividade Física'].map(item => (
                <li key={item} className="flex items-center gap-3 text-[#525975]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2F9E8D]" />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* UTI Pós-Operatória */}
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
            className="md:col-span-3 bg-[#0ABAB5]/10"
            delay={400}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                Autora do livro <span className="text-[#1E2235] font-bold italic">"Cardiologia e Cirurgia Cardiovascular Pediátrica"</span>.
                Compromisso contínuo com a formação de novos médicos e atualização científica.
              </div>
              <div className="flex gap-4">
                 <div className="bg-[#ECF2FF] px-4 py-2 rounded text-sm border border-[#0ABAB5]/20 text-[#525975]">Mestrado em Ciências Médicas</div>
                 <div className="bg-[#ECF2FF] px-4 py-2 rounded text-sm border border-[#0ABAB5]/20 text-[#525975]">Autora de Capítulos</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

