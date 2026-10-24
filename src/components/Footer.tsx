import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Shield, Terminal, Sun, Moon } from 'lucide-react';
import { PageId, Theme } from '../types';

interface FooterProps {
  theme?: Theme;
  onToggleTheme?: () => void;
  onNavigate: (page: PageId) => void;
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme = 'dark', onToggleTheme, onNavigate, onOpenProposal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid corporate email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-sm shadow-blue-500/20 shrink-0">
                IV
              </span>
              <span className="text-xl font-bold text-white font-display tracking-tight">
                Islamicity Vanguard AI
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Sovereign cognitive infrastructure, deterministic multi-agent swarms, and air-gapped models engineered for regulated global enterprises and ethical economies.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
              <div>Global Operations: Bhopal · Jakarta / Palembang · Singapore · London</div>
              <div>Institutional Compliance: SOC 2 Type II · ISO/IEC 27001 · HIPAA Compliant</div>
            </div>

            {/* Quick Proposal Button */}
            <div className="pt-2">
              <button
                onClick={onOpenProposal}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline decoration-blue-500/40 hover:decoration-blue-400 transition-colors"
              >
                <span>Review Fixed-Price Quotation & Milestones (₹1,500 – ₹12,500 INR)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Solutions & Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Platform & Tech
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleLink('products')} className="hover:text-white transition-colors">
                  NeuralCore Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('products')} className="hover:text-white transition-colors">
                  OmniFlow Agents
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('products')} className="hover:text-white transition-colors">
                  Sentinel Guard AI Shield
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('products')} className="hover:text-white transition-colors">
                  AutoDocs Enterprise RAG
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('solutions')} className="hover:text-white transition-colors">
                  Sovereign Cloud Topology
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('solutions')} className="hover:text-white transition-colors">
                  Multi-Agent Swarm Orchestration
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Corporate & Sectors
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-white transition-colors">
                  About Vanguard AI
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('islamicity-kaffah')} className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors flex items-center gap-1.5">
                  <span>Islamicity Kaffah Alliance</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('industries')} className="hover:text-white transition-colors">
                  Industries We Serve (13+)
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('pricing')} className="hover:text-white transition-colors">
                  Enterprise Pricing & ROI
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('blog')} className="hover:text-white transition-colors">
                  Research Papers & Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-white transition-colors">
                  Global Contact & Sales
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Executive Briefing */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Executive Briefing
            </h4>
            <p className="text-xs text-slate-400">
              Monthly peer-reviewed analysis on enterprise AI safety, sovereign models, and orchestration architecture.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed. You will receive our next quarterly release.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="corporate.email@company.com"
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                {error && <p className="text-rose-400 text-xs">{error}</p>}
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe to Research Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Zone */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Vanguard AI Technologies Inc. All enterprise intellectual property reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button onClick={() => handleLink('privacy')} className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleLink('terms')} className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleLink('refund')} className="hover:text-slate-200 transition-colors">
              Refund & SLA Policy
            </button>
            <button onClick={() => handleLink('cookies')} className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </button>
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-blue-600" />
                    <span>Dark Theme</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
