import React from 'react';
import { CERTIFICATIONS } from '../data/content';
import { ShieldCheck, FileCheck2, Award, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-blue-600" />;
      case 'FileCheck2': return <FileCheck2 className="w-8 h-8 text-emerald-600" />;
      case 'Award': return <Award className="w-8 h-8 text-amber-600" />;
      default: return <Award className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wireframe Page 4 Header: Certificaciones o Reconocimientos */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-emerald-200">
            Garantía Internacional de Calidad
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certificaciones y Reconocimientos
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Laboratorios Herbolaris cuenta con acreditaciones de máxima exigencia internacional que respaldan la inocuidad, pureza botánica y libre comercialización de Genoxidil.
          </p>
        </div>

        {/* 3 Cards as per Wireframe Page 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div 
              key={cert.id}
              className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center mb-6">
                  {getIcon(cert.icon)}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{cert.country}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-blue-800 mb-3">
                  {cert.code}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle className="w-4 h-4" />
                <span>Normativa fitosanitaria aprobada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Requisito Fitosanitario Panamá reminder */}
        <div className="mt-12 bg-blue-50/70 border border-blue-200 rounded-2xl p-6 text-center max-w-4xl mx-auto">
          <p className="text-sm text-slate-700">
            <strong>Compromiso NBN Living:</strong> En cada país donde opera, la compañía reúne todos los requisitos fito-sanitarios oficiales y normas de rotulado, garantizando que el producto que llega a tus manos es 100% auténtico y original.
          </p>
        </div>

      </div>
    </section>
  );
};
