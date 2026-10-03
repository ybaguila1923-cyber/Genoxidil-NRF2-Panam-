import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToOrder: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onNavigateToOrder
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-700 animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Top bar */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              NBN Living Oficial · Presentación Científica
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-16/9 bg-black flex items-center justify-center group overflow-hidden">
          
          {/* Simulated HD video presentation with rich graphics */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-slate-900 to-amber-950/60 flex flex-col justify-between p-6 sm:p-10">
            
            {/* Top Video Header */}
            <div className="flex items-start justify-between">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 max-w-md">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  Documental Oficial Biotecnología NRF2
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Genoxidil: La Tableta Más Completa del Planeta
                </h4>
              </div>
              <span className="text-xs font-bold bg-red-600 text-white px-2.5 py-1 rounded-md">
                HD 1080p
              </span>
            </div>

            {/* Center animated visual */}
            <div className="flex flex-col items-center justify-center text-center my-auto">
              <div 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-amber-500/90 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all cursor-pointer mb-4"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-slate-950" />
                ) : (
                  <Play className="w-8 h-8 fill-slate-950 translate-x-1" />
                )}
              </div>
              <p className="text-white font-semibold text-sm drop-shadow-md">
                {isPlaying ? "Reproduciendo presentación oficial..." : "Pausado - Haz clic para continuar"}
              </p>
              <span className="text-xs text-slate-300 mt-1">
                Activación de los 5 sistemas celulares · Nanotecnología Herbolaris
              </span>
            </div>

            {/* Video Controls Bar */}
            <div className="bg-black/75 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-amber-400 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-amber-400 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-slate-400 text-[11px]">03:45 / 08:20</span>
              </div>

              {/* Progress bar */}
              <div className="flex-1 mx-4 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[45%]" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-amber-300 font-semibold hidden sm:inline">NBN Living Global</span>
              </div>
            </div>

          </div>

        </div>

        {/* Video Key Takeaways & CTA */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Nanotecnología Nrf2</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>52+ Fitonutrientes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>1 Tableta al día</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
            >
              Cerrar Video
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateToOrder();
              }}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Hacer Pedido de Genoxidil
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
