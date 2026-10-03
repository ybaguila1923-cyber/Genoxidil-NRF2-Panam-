import React from 'react';
import { Play, ArrowRight, Sparkles, Shield, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenVideo: () => void;
  onNavigateToOrder: () => void;
  onNavigateToProducts: () => void;
  onOpenIngredients: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVideo,
  onNavigateToOrder,
  onNavigateToProducts,
  onOpenIngredients
}) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white pt-6 pb-20">
      {/* 21:7 Styled Panoramic Header Banner as per wireframe page 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-amber-700 shadow-xl text-white py-10 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Biotecnología Celular y Nanotecnología · NBN Living</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              GENOXIDIL NRF2: La Tableta Más Completa del Planeta
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Fórmula con más de 52 fitonutrientes de 22 países que estimula los mecanismos naturales de protección y regeneración mitocondrial.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onNavigateToOrder}
              className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Pedir Ahora con Descuento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenVideo}
              className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Ver Video</span>
            </button>
          </div>
          {/* Subtle background glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-radial from-amber-500/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Split Section: Text + Botanical Highlights + Interactive Bottle Visual / Video Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Informational copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-100/80 px-3 py-1.5 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Activación de la Proteína NRF2 a Nivel Genético</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Regeneración Celular Potente y Rápida
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>Genoxidil NRF2 en tabletas</strong> es un complemento diseñado para apoyar los mecanismos naturales de protección celular. Su fórmula está orientada a favorecer la activación de la <strong>vía NRF2</strong>, un sistema natural del organismo relacionado con la respuesta antioxidante y la protección frente al estrés oxidativo.
              </p>
              <p className="text-slate-600 text-base">
                Con su fórmula única a base de <strong>Cúrcuma, Té Verde, Mangostán, Hongo Shiitake, Noni y Espirulina</strong>, Genoxidil aporta propiedades antiinflamatorias, regeneradoras, revitalizantes y de protección celular. A diferencia de otros suplementos orgánicos que tardan meses, Genoxidil te ayuda a sentir vigor y equilibrio en pocas semanas.
              </p>
            </div>

            {/* Botanical Key Ingredients Grid matching page 1 of PDF */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm hover:border-amber-400 transition-colors">
                <span className="block text-xs font-bold text-amber-700 uppercase tracking-wider">Antioxidante</span>
                <span className="text-sm font-semibold text-slate-900 mt-1 block">Resveratrol y Clorofila</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm hover:border-amber-400 transition-colors">
                <span className="block text-xs font-bold text-amber-700 uppercase tracking-wider">Vascular</span>
                <span className="text-sm font-semibold text-slate-900 mt-1 block">Licopeno y Semilla Uva</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm hover:border-amber-400 transition-colors">
                <span className="block text-xs font-bold text-amber-700 uppercase tracking-wider">Metabolismo</span>
                <span className="text-sm font-semibold text-slate-900 mt-1 block">Té Verde y Shiitake</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm hover:border-amber-400 transition-colors">
                <span className="block text-xs font-bold text-amber-700 uppercase tracking-wider">Depuración</span>
                <span className="text-sm font-semibold text-slate-900 mt-1 block">Espirulina y Glutatión</span>
              </div>
            </div>

            {/* Quick check bullets */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1 Tableta diaria (30 tabletas de 1200 mg)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nanotecnología nutricional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certificado en más de 75 países</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onNavigateToOrder}
                className="px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hacer Pedido en Panamá</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateToProducts}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Paquetes y Precios</span>
              </button>
              <button
                onClick={onOpenIngredients}
                className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center justify-center gap-1 py-2 cursor-pointer"
              >
                <span>Ver +52 Ingredientes</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Asset & Video Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-amber-500/10 via-white to-amber-100/40 rounded-3xl p-4 sm:p-6 border border-amber-200/80 shadow-2xl">
              
              {/* Product Badge */}
              <div className="absolute -top-3 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-md z-20">
                ¡Fórmula NRF2 Original!
              </div>

              {/* Product Image */}
              <div className="relative rounded-2xl overflow-hidden bg-white aspect-4/3 flex items-center justify-center shadow-inner group">
                <img
                  src="/src/assets/images/genoxidil_bottle_pack_1791002536511.jpg"
                  alt="Frasco de Genoxidil NRF2 con fitonutrientes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Play Button to watch Genoxidil Video */}
                <button
                  onClick={onOpenVideo}
                  className="absolute inset-0 bg-black/25 hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white cursor-pointer group/btn"
                  aria-label="Reproducir video de Genoxidil"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transform group-hover/btn:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
                  </div>
                  <span className="mt-3 text-xs font-bold bg-slate-900/80 px-3 py-1 rounded-md text-amber-300 backdrop-blur-xs">
                    Ver Video Oficial Genoxidil
                  </span>
                </button>
              </div>

              {/* Video and trust callout */}
              <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-800">Calidad Laboratorios Herbolaris</span>
                </div>
                <span className="text-slate-500">30 tabs · 1200 mg</span>
              </div>
            </div>

            {/* Quick highlight banner under image */}
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-500 font-medium">
                Disponible para entrega inmediata en todas las provincias de Panamá
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
