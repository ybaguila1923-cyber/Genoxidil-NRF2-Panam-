/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SystemsSection } from './components/SystemsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CompanySection } from './components/CompanySection';
import { ProductsSection } from './components/ProductsSection';
import { OrderFormSection } from './components/OrderFormSection';
import { ContactSection } from './components/ContactSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { IngredientsModal } from './components/IngredientsModal';
import { VideoModal } from './components/VideoModal';
import { Product, PRODUCTS } from './data/content';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isIngredientsModalOpen, setIsIngredientsModalOpen] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [selectedProductForOrder, setSelectedProductForOrder] = useState<Product | undefined>(undefined);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // When a user selects a product from the catalog, auto-populate the order form and scroll to it
  const handleSelectProduct = (product: Product) => {
    setSelectedProductForOrder(product);
    handleNavigate('pedido');
  };

  // Scroll spy to keep active nav indicator updated
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'empresa', 'productos', 'pedido', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* 1. Header Navigation Bar adhering to Top Bar Contract */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        cartCount={selectedProductForOrder ? 1 : 0}
        onOpenOrderModal={() => handleNavigate('pedido')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Section 1: INICIO */}
        <HeroSection
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onNavigateToOrder={() => handleNavigate('pedido')}
          onNavigateToProducts={() => handleNavigate('productos')}
          onOpenIngredients={() => setIsIngredientsModalOpen(true)}
        />

        {/* 5 Systems & How it works (Wireframe page 2 & 3) */}
        <SystemsSection
          onOpenIngredients={() => setIsIngredientsModalOpen(true)}
          onNavigateToOrder={() => handleNavigate('pedido')}
        />

        {/* Certifications (Wireframe page 4) */}
        <CertificationsSection />

        {/* Testimonials (Wireframe page 5) */}
        <TestimonialsSection />

        {/* Section 2: EMPRESA (Wireframe page 7, 8, 12) */}
        <CompanySection
          onNavigateToOrder={() => handleNavigate('pedido')}
          onNavigateToContact={() => handleNavigate('contacto')}
        />

        {/* Section 3: PRODUCTOS (Wireframe page 6, 11) */}
        <ProductsSection
          onSelectProductForOrder={handleSelectProduct}
          onOpenIngredients={() => setIsIngredientsModalOpen(true)}
        />

        {/* Section 4: FORMULARIO DE PEDIDO (Wireframe page 13) */}
        <OrderFormSection
          preselectedProduct={selectedProductForOrder}
        />

        {/* Section 5: CONTACTO (Wireframe page 13 map & international locations) */}
        <ContactSection />

        {/* Blog & Educational Articles (Wireframe page 9) */}
        <BlogSection />

        {/* Frequently Asked Questions (Wireframe page 10) */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <IngredientsModal
        isOpen={isIngredientsModalOpen}
        onClose={() => setIsIngredientsModalOpen(false)}
        onNavigateToOrder={() => {
          setIsIngredientsModalOpen(false);
          handleNavigate('pedido');
        }}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onNavigateToOrder={() => {
          setIsVideoModalOpen(false);
          handleNavigate('pedido');
        }}
      />
    </div>
  );
}
