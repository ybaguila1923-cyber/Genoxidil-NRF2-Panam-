import React, { useState } from 'react';
import { INTERNATIONAL_OFFICES, Office } from '../data/content';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  ExternalLink, 
  Building, 
  Globe2,
  Navigation,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Panamá');

  const currentOffice: Office = 
    INTERNATIONAL_OFFICES.find((o) => o.country === selectedCountry) || INTERNATIONAL_OFFICES[0];

  return (
    <section id="contacto" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Atención Global · Presencia en 75+ Países
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nuestras Oficinas y Puntos de Contacto
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Visítanos en nuestra oficina principal en Panamá o comunícate con nuestros centros de atención en América y Europa.
          </p>
        </div>

        {/* Country selector tabs as per PDF page 2 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {INTERNATIONAL_OFFICES.map((office) => {
            const isSelected = office.country === selectedCountry;
            return (
              <button
                key={office.country}
                onClick={() => setSelectedCountry(office.country)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                <span>{office.flag}</span>
                <span>{office.country}</span>
              </button>
            );
          })}
        </div>

        {/* Office Details & Map Card (matching Wireframe Page 13) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detailed Office Information */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{currentOffice.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{currentOffice.name}</h3>
                    <span className="text-xs text-blue-700 font-semibold uppercase tracking-wider">
                      {currentOffice.country === 'Panamá' ? 'Sede Oficial Panamá' : 'Sede Internacional'}
                    </span>
                  </div>
                </div>
              </div>

              {currentOffice.note && (
                <div className="mb-6 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>{currentOffice.note}</span>
                </div>
              )}

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-slate-400">Dirección</span>
                    <span className="font-medium text-slate-900">{currentOffice.address}</span>
                  </div>
                </div>

                {currentOffice.phone && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-slate-400">Teléfono</span>
                      <a href={`tel:${currentOffice.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-slate-900 hover:text-blue-700">
                        {currentOffice.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-slate-400">WhatsApp Oficial</span>
                    <a 
                      href={`https://wa.me/${currentOffice.whatsapp.replace(/[^0-9]/g, '')}?text=Hola%2C%20deseo%20comunicarme%20con%20la%20oficina%20de%20NBN%20Living%20${currentOffice.country}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-700 hover:underline"
                    >
                      {currentOffice.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-200 text-slate-700 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-slate-400">Horario de Atención</span>
                    <span className="text-slate-800">{currentOffice.schedule}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(currentOffice.googleMapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={`https://wa.me/${currentOffice.whatsapp.replace(/[^0-9]/g, '')}?text=Hola%20NBN%20Living%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Box (Wireframe Page 13 Map representation) */}
          <div className="lg:col-span-6 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col relative min-h-[380px]">
            
            {/* Top map toolbar */}
            <div className="bg-white/95 px-5 py-3 border-b border-slate-200 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-slate-800">
                  {currentOffice.country}: {currentOffice.name}
                </span>
              </div>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded-md">
                Coordenadas Fitosanitarias
              </span>
            </div>

            {/* Embedded interactive map display with iframe / visual preview */}
            <div className="relative flex-1 bg-slate-200 flex items-center justify-center">
              {currentOffice.country === 'Panamá' ? (
                <iframe
                  title="Mapa NBN Living Panama Villa Lucre"
                  src="https://maps.google.com/maps?q=Plaza+Galapagos+Via+Domingo+Diaz+Villa+Lucre+Panama&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[340px] border-0"
                  loading="lazy"
                />
              ) : (
                <iframe
                  title={`Mapa NBN Living ${currentOffice.country}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(currentOffice.googleMapsQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full min-h-[340px] border-0"
                  loading="lazy"
                />
              )}
            </div>

            {/* Map footer callout */}
            <div className="bg-slate-900 text-white px-5 py-2.5 flex items-center justify-between text-xs">
              <span className="text-slate-300">
                Punto oficial de entrega y asesoramiento presencial
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(currentOffice.googleMapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>Cómo llegar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
