import React, { useState } from 'react';
import { FIVE_SYSTEMS } from '../data/content';
import { 
  Clock, 
  ShieldAlert, 
  HeartPulse, 
  Sparkles, 
  Droplets, 
  Check, 
  ChevronRight, 
  Layers, 
  Zap, 
  Leaf, 
  Search 
} from 'lucide-react';

interface SystemsSectionProps {
  onOpenIngredients: () => void;
  onNavigateToOrder: () => void;
}

export const SystemsSection: React.FC<SystemsSectionProps> = ({
  onOpenIngredients,
  onNavigateToOrder
}) => {
  const [selectedSystemId, setSelectedSystemId] = useState<string>('antiedad');

  const getSystemIcon = (name: string) => {
    switch (name) {
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const currentSystem = FIVE_SYSTEMS.find(s => s.id === selectedSystemId) || FIVE_SYSTEMS[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching PDF 1 "¿Cómo funciona?" */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full mb-3">
            <span>Sinergia Bioquímica Avanzada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Cómo funciona Genoxidil?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Una sola tableta diaria de 1200 mg actúa como un catalizador integral estimulando la proteína Nrf2 y fortaleciendo 5 sistemas biológicos fundamentales.
          </p>
        </div>

        {/* 5 Systems interactive button strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {FIVE_SYSTEMS.map((system) => {
            const isSelected = system.id === selectedSystemId;
            return (
              <button
                key={system.id}
                onClick={() => setSelectedSystemId(system.id)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-102'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <div className={`p-2.5 rounded-xl w-fit mb-3 ${
                  isSelected ? 'bg-slate-950 text-amber-400' : 'bg-slate-700 text-amber-400'
                }`}>
                  {getSystemIcon(system.iconName)}
                </div>
                <div>
                  <h3 className={`font-bold text-sm sm:text-base leading-tight ${
                    isSelected ? 'text-slate-950' : 'text-white'
                  }`}>
                    {system.name}
                  </h3>
                  <span className={`text-xs mt-1 block font-medium ${
                    isSelected ? 'text-amber-950' : 'text-slate-400'
                  }`}>
                    {system.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed active system panel */}
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl backdrop-blur-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
                  {getSystemIcon(currentSystem.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Refuerzo Biológico</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{currentSystem.name}</h3>
                </div>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {currentSystem.description}
              </p>

              {/* Benefits list */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">Beneficios comprobados:</span>
                {currentSystem.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Key ingredients in this system */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-2">Ingredientes botánicos sinérgicos:</span>
                <div className="flex flex-wrap gap-2">
                  {currentSystem.keyIngredients.map((ing, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-700/80 text-amber-300 rounded-lg text-xs font-semibold border border-slate-600"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side interactive card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-semibold text-slate-400">Dosis de Protocolo</span>
                  <span className="text-xs font-bold text-amber-400">1 tableta diaria</span>
                </div>
                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Presentación:</span>
                    <span className="text-white font-medium">Frasco 30 tabletas (1200 mg)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Mecanismo:</span>
                    <span className="text-white font-medium">Nanotecnología NRF2</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Biodisponibilidad:</span>
                    <span className="text-emerald-400 font-medium">Alta absorción celular</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button
                  onClick={onOpenIngredients}
                  className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold rounded-xl text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Consultar los 52+ Ingredientes</span>
                </button>
                <button
                  onClick={onNavigateToOrder}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Pedir Genoxidil Ahora</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Golden/Amber Nanotechnology metrics banner from PDF 1 */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 rounded-2xl p-6 sm:p-8 shadow-xl mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-amber-700/30">
            <div className="pt-4 lg:pt-0">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight">5 Sistemas</span>
              <span className="text-xs sm:text-sm font-semibold uppercase text-amber-950 mt-1 block">Refuerzo Biológico Integral</span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight">5 Procesos</span>
              <span className="text-xs sm:text-sm font-semibold uppercase text-amber-950 mt-1 block">Nanotecnología Herbolaris</span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight">50+ Ingredientes</span>
              <span className="text-xs sm:text-sm font-semibold uppercase text-amber-950 mt-1 block">Provenientes de 22 Países</span>
            </div>
            <div className="pt-4 lg:pt-0">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight">Proteína NRF2</span>
              <span className="text-xs sm:text-sm font-semibold uppercase text-amber-950 mt-1 block">Activación Genética Natural</span>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-amber-600/50 text-center">
            <p className="text-sm sm:text-base font-medium text-amber-950 max-w-3xl mx-auto">
              "Ingredientes orgánicos de 22 países, formulados con nanotecnología que trabaja a nivel mitocondrial y genético para una asimilación inmediata."
            </p>
          </div>
        </div>

        {/* 3 Circular Feature Blocks as required in Wireframe Page 3 */}
        <div className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Los 3 Pilares de Excelencia Genoxidil
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Estructura nutricional diseñada para una integración simple y resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: 1 Tableta Diaria */}
            <div className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700/60 text-center flex flex-col items-center hover:border-amber-500/50 transition-colors">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-700 to-amber-500 p-1 flex items-center justify-center shadow-lg mb-6">
                <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center text-amber-400">
                  <Zap className="w-10 h-10" />
                  <span className="text-[10px] font-bold uppercase text-white mt-1">1 Dosis</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">1 Tableta Diaria</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sin necesidad de tomar múltiples frascos o pastillas a lo largo del día. Una sola tableta matutina concentra la sinergia de más de 52 elementos con 1200 mg de fitonutrientes.
              </p>
            </div>

            {/* Feature 2: Nanotecnología */}
            <div className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700/60 text-center flex flex-col items-center hover:border-amber-500/50 transition-colors">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-500 p-1 flex items-center justify-center shadow-lg mb-6">
                <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center text-emerald-400">
                  <Layers className="w-10 h-10" />
                  <span className="text-[10px] font-bold uppercase text-white mt-1">Celular</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Nanotecnología Celular</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                La tecnología de nanopartículas de Laboratorios Herbolaris reduce las moléculas activas al tamaño óptimo para atravesar con facilidad la membrana celular y nutrir la mitocondria.
              </p>
            </div>

            {/* Feature 3: Pocas Semanas */}
            <div className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700/60 text-center flex flex-col items-center hover:border-amber-500/50 transition-colors">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-1 flex items-center justify-center shadow-lg mb-6">
                <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center text-sky-400">
                  <Leaf className="w-10 h-10" />
                  <span className="text-[10px] font-bold uppercase text-white mt-1">Rápido</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Eficacia en Pocas Semanas</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Mientras otros suplementos orgánicos pueden tardar hasta 12 meses en evidenciar cambios, la biodisponibilidad de Genoxidil brinda mayor vitalidad y equilibrio en semanas.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
