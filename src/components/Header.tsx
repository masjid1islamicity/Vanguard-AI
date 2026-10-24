import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, ChevronRight, Sun, Moon } from 'lucide-react';
import { PageId, Theme } from '../types';

interface HeaderProps {
  currentPage: PageId;
  theme: Theme;
  onToggleTheme: () => void;
  onNavigate: (page: PageId) => void;
  onOpenProposal: () => void;
  onOpenSandbox: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  theme,
  onToggleTheme,
  onNavigate,
  onOpenProposal,
  onOpenSandbox,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks: { id: PageId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'islamicity-kaffah', label: 'Islamicity Kaffah', highlight: true },
    { id: 'solutions', label: 'Solutions' },
    { id: 'products', label: 'AI Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, zero badge clutter) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-lg md:text-xl font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 hover:text-blue-400 transition-colors flex items-center gap-2.5 text-left"
          aria-label="Islamicity Vanguard AI Home"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-sm shadow-blue-500/20 shrink-0">
            IV
          </span>
          <span>Islamicity Vanguard AI</span>
        </button>

        {/* Zone 2: Navigation Links (Clean single-line text links with subtle hover underlines) */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  isActive
                    ? link.highlight
                      ? 'text-emerald-400 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-400'
                      : 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500'
                    : link.highlight
                    ? 'text-emerald-400/90 hover:text-emerald-300 font-medium'
                    : 'hover:text-white text-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg hover:border-slate-500 transition-all flex items-center justify-center text-xs"
            title={theme === 'dark' ? 'Switch to Light professional theme' : 'Switch to Slate-950 high-contrast dark theme'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600" />
            )}
          </button>

          <button
            onClick={onOpenProposal}
            className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg hover:border-slate-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            title="View Quote, Timeline & Portfolio"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Proposal & Rates</span>
          </button>

          <button
            onClick={onOpenSandbox}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>Try Platform</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>
          <button
            onClick={onOpenSandbox}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
          >
            Try Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === link.id
                    ? 'bg-blue-950/60 text-blue-400 font-semibold border border-blue-800/40'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-slate-200 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Client Proposal, Quotes & Timeline</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandbox();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Launch Interactive Platform Sandbox</span>
            </button>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar at the top of main container */}
      <div
        className="w-full h-[3px] bg-slate-900/60 relative overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading and scroll progress indicator"
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 transition-[width] duration-150 ease-out shadow-sm shadow-blue-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
