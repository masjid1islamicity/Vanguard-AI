/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { InteractiveSandboxModal } from './components/InteractiveSandboxModal';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProductsPage } from './pages/ProductsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IslamicityKaffahPage } from './pages/IslamicityKaffahPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PageId, Theme } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [isSandboxOpen, setIsSandboxOpen] = useState(false);
  
  // Theme state: defaults to high-contrast slate-950 dark theme, supports light professional theme
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vanguard_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('vanguard_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
            onOpenSandbox={() => setIsSandboxOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        );
      case 'islamicity-kaffah':
        return (
          <IslamicityKaffahPage
            onNavigate={handleNavigate}
            onOpenSandbox={() => setIsSandboxOpen(true)}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        );
      case 'solutions':
        return (
          <SolutionsPage
            onNavigate={handleNavigate}
            onOpenSandbox={() => setIsSandboxOpen(true)}
          />
        );
      case 'products':
        return (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenSandbox={() => setIsSandboxOpen(true)}
          />
        );
      case 'industries':
        return (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenSandbox={() => setIsSandboxOpen(true)}
          />
        );
      case 'pricing':
        return (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        );
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        );
      case 'privacy':
        return <LegalPage initialTab="privacy" onNavigate={handleNavigate} />;
      case 'terms':
        return <LegalPage initialTab="terms" onNavigate={handleNavigate} />;
      case 'refund':
        return <LegalPage initialTab="refund" onNavigate={handleNavigate} />;
      case 'cookies':
        return <LegalPage initialTab="cookies" onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
            onOpenSandbox={() => setIsSandboxOpen(true)}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'light bg-slate-50 text-slate-900' : 'dark bg-slate-950 text-slate-100'} flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200`}>
      {/* Shared Navigation Header adhering to Top Bar Contract */}
      <Header
        currentPage={currentPage}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
        onOpenProposal={() => setIsProposalOpen(true)}
        onOpenSandbox={() => setIsSandboxOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1 pb-20">
        {renderCurrentPage()}
      </main>

      {/* Shared Footer with complete navigation and legal mirrors */}
      <Footer
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
        onOpenProposal={() => setIsProposalOpen(true)}
      />

      {/* Client Proposal & Quotation Deliverables Modal (₹1,500 - ₹12,500 INR Scope) */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />

      {/* Interactive NeuralCore Platform Execution Sandbox */}
      <InteractiveSandboxModal
        isOpen={isSandboxOpen}
        onClose={() => setIsSandboxOpen(false)}
      />

      {/* Privacy and Cookie Governance Notice */}
      <CookieBanner onNavigate={handleNavigate} />
    </div>
  );
}
