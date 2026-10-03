import React from 'react';
import { 
  Building2, 
  FlaskConical, 
  Award, 
  Globe2, 
  Users, 
  Sparkles, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface CompanySectionProps {
  onNavigateToOrder: () => void;
  onNavigateToContact: () => void;
}

export const CompanySection: React.FC<CompanySectionProps> = ({
  onNavigateToOrder,
  onNavigateToContact
}) => {
  return (
    <section id="empresa" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Sub-block 1: Acerca de la Empresa (Wireframe Page 7) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Corporativo Global & Respaldo Científico
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Acerca de NBN Living
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Más de 30 años de investigación farmacéutica y biológica transformando la salud y la economía familiar en más de 75 países.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Con su corporativo mundial ubicado en <strong>Guadalajara, México</strong>, NBN Living es una compañía global con presencia consolidada en <strong>más de 75 países</strong>, cuya misión fundacional es brindarte <em>«Tu Mejor Modo de Vivir»</em>. NBN Living se encarga de todo el proceso de mercadeo, apertura de mercados internacionales, logística de vanguardia y formación de líderes.
                </p>
                <p>
                  Su brazo científico, <strong>Laboratorios Herbolaris</strong>, se encarga de toda la investigación bioquímica, formulación y producción de suplementos nutricionales orgánicos con nanotecnología. Esto ha posicionado a la empresa con productos de alta demanda y un modelo ético de distribución respaldado por la ciencia.
                </p>
                <p className="text-slate-600">
                  En cada país donde NBN Living abre operaciones —incluyendo nuestra sede oficial en <strong>Panamá</strong>— se reúnen todos los registros y requisitos fitosanitarios exigidos por la ley, garantizando la máxima pureza, trazabilidad y seguridad para tu familia.
                </p>
              </div>

              {/* Badges / Metrics row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                  <Globe2 className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <span className="text-2xl font-bold text-slate-900 block">75+</span>
                  <span className="text-xs text-slate-500 font-medium">Países con presencia</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                  <FlaskConical className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                  <span className="text-2xl font-bold text-slate-900 block">Herbolaris</span>
                  <span className="text-xs text-slate-500 font-medium">Laboratorio propio</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="text-2xl font-bold text-slate-900 block">100%</span>
                  <span className="text-xs text-slate-500 font-medium">Normas fitosanitarias</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onNavigateToOrder}
                  className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Comprar Productos Oficiales</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToContact}
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-medium rounded-xl border border-slate-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Ver Sedes en Panamá y el Mundo</span>
                </button>
              </div>
            </div>

            {/* Right media column: Lab photography */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <img
                  src="/src/assets/images/herbolaris_lab_nanotech_1791002547511.jpg"
                  alt="Laboratorios Herbolaris y nanotecnología"
                  className="w-full h-80 lg:h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded-md border border-amber-400/30">
                    Laboratorios Herbolaris
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">
                    Investigación & Nanotecnología Botánica
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Instalaciones de clase mundial donde se investigan, formulan y testean los más de 52 componentes activos de Genoxidil.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-block 2: Quienes Somos & Fundadores (Wireframe Page 12) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founders Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                <img
                  src="/src/assets/images/founders_nbn_living_1791002557140.jpg"
                  alt="Fundadores de NBN Living, Ing. Óscar Hernández y Patricia de Hernández"
                  className="w-full h-80 object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-5 text-white">
                  <h4 className="text-base font-bold">Ing. Óscar Hernández & Patricia de Hernández</h4>
                  <p className="text-xs text-slate-300">Fundadores & Químicos Farmacobiólogos</p>
                </div>
              </div>
            </div>

            {/* Founders Story Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>Nuestros Fundadores & Visión</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pioneros en Formulación Orgánica y Nanotecnología
              </h3>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Los Fundadores de NBN Living, los <strong>Ingenieros Óscar Hernández y Patricia de Hernández</strong>, graduados en una prestigiosa Universidad de Guadalajara, México, obtuvieron el título de <strong>Ingenieros Químicos Farmacobiólogos</strong>, especialidad que les permitió liderar la investigación y formulación de productos orgánicos con base en la Nanotecnología.
                </p>
                <p>
                  En sus inicios comenzaron la formulación y maquila para otras compañías y para el sector público de México. Al constatar los extraordinarios beneficios de la nutrición celular, decidieron crear su propia compañía y <strong>dejar un legado para la humanidad</strong>: ayudar en salud física y bienestar integral a través del mercadeo por recomendación.
                </p>
                <p className="text-slate-600 italic border-l-2 border-amber-500 pl-4 py-1 text-sm">
                  "Nuestro objetivo supremo fue y sigue siendo brindar una herramienta nutricional accesible, científicamente comprobada y capaz de devolver la vitalidad a millones de hogares."
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-block 3: Oportunidad de Liderazgo (Wireframe Page 8) */}
        <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-400/20">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Tu Mejor Modo de Vivir</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Oportunidad & Crecimiento en Panamá y el Mundo
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                NBN Living ofrece uno de los planes de compensación y liderazgo más generosos en la industria del bienestar y network marketing. Ya sea que desees consumir con descuento exclusivo o desarrollar una red de distribución en Panamá, cuentas con formación, conferencias médicas y herramientas logísticas completas.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Plan de Compensación Justo</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Capacitaciones Semanales</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Logística de Despacho Inmediato</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://wa.me/50769747685?text=Hola%20NBN%20Living%2C%20quisiera%20informaci%C3%B3n%20sobre%20la%20Oportunidad%20de%20Afiliaci%C3%B3n%20y%20Membres%C3%ADa%20en%20Panam%C3%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Conocer Oportunidad NBN</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-400">
                Atención directa con nuestro equipo corporativo de Panamá
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
