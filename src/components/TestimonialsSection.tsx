import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wireframe Page 5 Header: Testimonios */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-amber-200">
            Casos Reales de Bienestar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Testimonios de Quienes Toman Genoxidil
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Historias comprobadas de vitalidad celular, recuperación del vigor físico y mejoría en la calidad de vida diaria.
          </p>
        </div>

        {/* 3 Testimonial Cards as per Wireframe Page 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <div 
              key={testi.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-amber-400/40 mb-4" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{testi.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{testi.name}</h3>
                  <p className="text-xs text-slate-500">{testi.role} · {testi.location}</p>
                </div>
                {testi.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verificado</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
            Nota: Los testimonios reflejan experiencias individuales. Genoxidil es un complemento alimenticio orgánico formulado para apoyar la nutrición celular y no sustituye tratamientos médicos.
          </p>
        </div>

      </div>
    </section>
  );
};
