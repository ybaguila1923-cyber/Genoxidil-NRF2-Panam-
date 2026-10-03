import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  cartCount: number;
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  cartCount,
  onOpenOrderModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'empresa', label: 'Empresa' },
    { id: 'productos', label: 'Productos' },
    { id: 'pedido', label: 'Formulario de Pedido' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Distribución Oficial NBN Living Panamá · Envíos a todas las provincias y comarcas</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/50769747685?text=Hola%20NBN%20Living%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Genoxidil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Directo: (+507) 6974 7685</span>
            </a>
            <span className="text-slate-500">|</span>
            <div className="flex items-center gap-1 text-slate-300">
              <Phone className="w-3.5 h-3.5" />
              <span>Tel: (+507) 374 5265</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar: Top Bar Contract (3 zones) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-600 via-blue-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-blue-950 rounded-full flex flex-col items-center justify-center text-white">
              <span className="text-[9px] font-medium leading-none text-sky-300 tracking-wider">NBN</span>
              <span className="text-xs font-bold tracking-tight text-white">LIVING</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              NBN Living
            </span>
            <span className="text-[11px] font-medium text-slate-500 italic -mt-1 tracking-wide">
              Tu mejor modo de vivir
            </span>
          </div>
        </a>

        {/* Zone 2: Clean 5 Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-sm font-medium transition-all py-1.5 relative ${
                  isActive 
                    ? 'text-blue-700 font-semibold' 
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('pedido')}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-slate-950" />
            <span>Ordenar Genoxidil</span>
          </button>

          <a
            href="https://wa.me/50769747685?text=Hola%20NBN%20Living%2C%20quisiera%20asesor%C3%ADa%20para%20un%20pedido%20de%20Genoxidil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            title="Chat de WhatsApp Panamá"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600" />
          </a>

          {/* Mobile menu trigger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('pedido')}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-3 rounded-lg text-sm shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ir al Formulario de Pedido</span>
              </button>
              <a
                href="https://wa.me/50769747685?text=Hola%20NBN%20Living%2C%20deseo%20hacer%20un%20pedido%20de%20Genoxidil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2.5 rounded-lg text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp (+507 6974 7685)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
