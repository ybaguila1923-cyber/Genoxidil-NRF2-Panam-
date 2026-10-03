import React from 'react';
import { PRODUCTS, Product } from '../data/content';
import { Check, ShoppingBag, ShieldCheck, Tag, Info, ArrowRight, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProductForOrder: (product: Product) => void;
  onOpenIngredients: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProductForOrder,
  onOpenIngredients
}) => {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Catálogo Oficial de Suplementos NBN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Paquetes y Presentaciones de Genoxidil
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada frasco contiene <strong>30 tabletas de 1200 mg</strong> con más de 52 fitonutrientes naturales. Selecciona el paquete adecuado para tu protocolo de salud.
          </p>
        </div>

        {/* 3 Product Cards as per Wireframe Page 6 & 11 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((prod) => {
            const isPopular = prod.isPopular;
            return (
              <div
                key={prod.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-blue-900 to-slate-950 text-white shadow-2xl ring-2 ring-blue-500 scale-102 z-10'
                    : 'bg-slate-50/80 text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular or Savings Badge */}
                {prod.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                    isPopular 
                      ? 'bg-amber-400 text-slate-950' 
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {prod.badge}
                  </div>
                )}

                <div>
                  {/* Image container */}
                  <div className={`rounded-2xl overflow-hidden mb-6 aspect-4/3 relative flex items-center justify-center ${
                    isPopular ? 'bg-slate-800' : 'bg-white border border-slate-200'
                  }`}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {prod.bottles} {prod.bottles === 1 ? 'Frasco' : 'Frascos'} · {prod.tablets} tabs
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className={`text-2xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {prod.name}
                    </h3>
                    <p className={`text-xs font-semibold mt-1 ${isPopular ? 'text-amber-300' : 'text-blue-700'}`}>
                      {prod.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-slate-200/40">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl sm:text-4xl font-black ${isPopular ? 'text-white' : 'text-slate-950'}`}>
                        ${prod.salePrice.toFixed(2)}
                      </span>
                      <span className="text-xs uppercase font-bold text-slate-400">USD</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <span className="line-through text-slate-400">
                        Precio regular: ${prod.regularPrice.toFixed(2)}
                      </span>
                      <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                        isPopular ? 'bg-amber-400/20 text-amber-300' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        Ahorras ${prod.savings.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-6 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {prod.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {prod.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-amber-400' : 'text-emerald-600'}`} />
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="space-y-2.5 pt-4">
                  <button
                    onClick={() => onSelectProductForOrder(prod)}
                    className={`w-full py-3.5 px-4 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 hover:shadow-amber-500/25'
                        : 'bg-blue-700 hover:bg-blue-800 text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Solicitar {prod.name}</span>
                  </button>

                  <button
                    onClick={onOpenIngredients}
                    className={`w-full py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                      isPopular 
                        ? 'text-slate-300 hover:text-white hover:bg-white/5' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Ver ficha nutricional e ingredientes</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panama Delivery callout banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 via-slate-100 to-blue-50 border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Cobertura Integral de Entrega en Todo Panamá
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Despachos asegurados a: <strong>Panamá Centro, Panamá Este, Panamá Norte, Panamá Oeste, Bocas del Toro, Chiriquí, Coclé, Colón, Darién, Herrera, Los Santos, Veraguas</strong> y comarcas <strong>Guna Yala, Emberá-Wounaan, Ngäbe-Buglé, Naso Tjër Di</strong>.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/90 px-4 py-2 rounded-xl border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Entrega a Domicilio o Retiro en Oficina Villa Lucre</span>
          </div>
        </div>

      </div>
    </section>
  );
};
