import React from 'react';
import { 
  ArrowUp, 
  MessageSquare, 
  Phone, 
  Mail, 
  ShieldCheck, 
  HeartHandshake,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      
      {/* Top Footer Navigation & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 via-blue-600 to-amber-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-blue-950 rounded-full flex flex-col items-center justify-center text-white">
                  <span className="text-[8px] font-medium leading-none text-sky-300">NBN</span>
                  <span className="text-[10px] font-bold">LIVING</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white block">NBN Living</span>
                <span className="text-xs text-amber-400 font-medium italic -mt-1 block">Tu mejor modo de vivir</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Distribuidor oficial de Genoxidil NRF2 en Panamá. Formulación de alta biodisponibilidad desarrollada por Laboratorios Herbolaris con más de 52 fitonutrientes naturales.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Presencia oficial en más de 75 países</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cumplimiento con requisitos fitosanitarios</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Secciones</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('inicio')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('empresa')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Empresa & Fundadores
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('productos')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Productos & Paquetes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pedido')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Formulario de Pedido
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contacto')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contacto & Sedes
                </button>
              </li>
            </ul>
          </div>

          {/* Panama Main Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-white">Sede Panamá</h4>
            <p className="text-slate-400 leading-relaxed">
              Vía Domingo Díaz, Frente a Parada del Metro Villa Lucre, Plaza Galápago, Local Nro. 5, Panamá.
            </p>
            <div className="space-y-1.5 pt-1">
              <div>
                <span className="text-slate-500 block">Llamadas:</span>
                <a href="tel:+5073745265" className="text-white hover:text-amber-400 font-medium">
                  (+507) 374 5265
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">WhatsApp Pedidos:</span>
                <a 
                  href="https://wa.me/50769747685?text=Hola%20NBN%20Living%20Panam%C3%A1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  (+507) 6974 7685
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Horario:</span>
                <span className="text-slate-300">Lun. a Vie. 9:00 a.m. a 6:00 p.m.</span>
              </div>
            </div>
          </div>

          {/* Social Icons matching PDF 1 screenshot (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Comunidad NBN</h4>
            <p className="text-xs text-slate-400">
              Sigue las transmisiones en vivo, conferencias médicas y testimonios de salud celular.
            </p>
            
            {/* Social media icons grid with circular styling like in PDF 1 */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="Facebook"
              >
                f
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 via-pink-600 to-purple-600 text-white flex items-center justify-center transition-transform hover:scale-105 text-xs font-bold"
                title="Instagram"
              >
                ig
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="YouTube"
              >
                yt
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="X (Twitter)"
              >
                𝕏
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="TikTok"
              >
                tk
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/50769747685"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 pt-2 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver arriba</span>
            </button>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-center max-w-4xl mx-auto">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            * <strong>Descargo de responsabilidad de salud:</strong> Genoxidil NRF2 es un suplemento alimenticio y complemento orgánico. No es un medicamento y no tiene como objetivo diagnosticar, tratar, curar ni prevenir ninguna enfermedad o padecimiento. Consulte a un profesional de la salud antes de iniciar cualquier cambio en su dieta o programa de suplementación si se encuentra bajo tratamiento médico.
          </p>
        </div>
      </div>

      {/* Bottom Bar matching PDF 1 footer: "Copyright © NBN Living Inc. Términos y política de privacidad" */}
      <div className="bg-slate-900/90 py-5 px-4 border-t border-slate-800/80 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <div className="flex items-center gap-2">
            <span>Copyright © {new Date().getFullYear()} NBN Living Inc.</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-white cursor-pointer">Términos y Condiciones</span>
            <span className="text-slate-600">·</span>
            <span className="hover:text-white cursor-pointer">Política de Privacidad</span>
            <span className="text-slate-600">·</span>
            <span className="text-amber-400 font-semibold">Panamá</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
