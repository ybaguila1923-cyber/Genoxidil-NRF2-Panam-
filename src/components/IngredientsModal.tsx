import React, { useState } from 'react';
import { ALL_INGREDIENTS } from '../data/content';
import { X, Search, Check, AlertCircle, Sparkles, Filter } from 'lucide-react';

interface IngredientsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToOrder: () => void;
}

export const IngredientsModal: React.FC<IngredientsModalProps> = ({
  isOpen,
  onClose,
  onNavigateToOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  if (!isOpen) return null;

  const categories = ['Todas', 'Fitonutrientes & Antioxidantes', 'Antioxidantes Maestros', 'Algas & Superalimentos', 'Hongos & Adaptógenos', 'Aminoácidos & Péptidos', 'Vitaminas Clave', 'Minerales Esenciales'];

  const filtered = ALL_INGREDIENTS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md">
                Ficha Técnica Nutricional
              </span>
              <span className="text-xs text-slate-500">52+ Componentes Activos</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
              Ingredientes y Mecanismos de Genoxidil NRF2
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="overflow-y-auto flex-1 py-4 pr-1 space-y-6">
          
          {/* Quick instructions & Lifestyle Box as in OCR text */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-xs sm:text-sm text-slate-800 space-y-3">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Modo de Consumo Recomendado</span>
            </div>
            <p className="text-slate-700">
              Tomar de <strong>1 a 2 tabletas al día</strong>, preferiblemente después de las comidas (por la mañana), acompañadas de suficiente agua. Se aconseja mantener una hidratación de <strong>1 a 3 litros de agua al día</strong> para facilitar la depuración celular.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
              <div>• Mantener alimentación equilibrada y variada</div>
              <div>• Realizar actividad física regular y moderada</div>
              <div>• Procurar sueño profundo de 7-8 horas</div>
              <div>• Reducir ultraprocesados, tabaco y alcohol</div>
            </div>
          </div>

          {/* Search & Category Filter */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar ingrediente (ej. Cúrcuma, Glutatión, Resveratrol, Shiitake...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-blue-700 text-white border-blue-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients list grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-700 tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5">{item.name}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-sm text-slate-500 py-6">
              No se encontraron ingredientes con el término "{searchTerm}".
            </p>
          )}

          {/* Legal Disclaimer as in OCR text */}
          <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 text-center">
            <strong>Aviso de Ley:</strong> Este producto es un complemento nutricional y suplemento alimenticio orgánico. No es un medicamento y no está destinado a diagnosticar, tratar, mitigar ni curar enfermedades. Consulte a su médico antes de consumir suplementos si se encuentra bajo supervisión médica.
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Presentación: Frasco de 30 tabletas de 1200 mg
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateToOrder();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Hacer Pedido de Genoxidil
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
