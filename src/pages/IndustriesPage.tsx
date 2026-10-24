import React, { useState } from 'react';
import { CheckCircle, Search, ArrowRight, Building2, Shield, Activity, BarChart3 } from 'lucide-react';
import { INDUSTRIES, HERO_ASSETS } from '../data/siteData';
import { PageId, IndustryCard } from '../types';

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSandbox: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenSandbox }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryCard | null>(null);

  const filteredIndustries = INDUSTRIES.filter(
    (ind) =>
      ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          Enterprise Vertical Practice Groups
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance">
          Tailored Cognitive Intelligence for 12 Regulated Industries
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Generic foundation models fail when faced with high-stakes domain jargon and regulatory mandates. Islamicity Vanguard AI deploys domain-finetuned adapters and knowledge structures tailored for each sector.
        </p>
      </div>

      {/* Industrial Infrastructure Spotlight Visual */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 relative shadow-2xl">
        <img
          src={HERO_ASSETS.smartInfrastructure}
          alt="High-tech automated industrial intelligence facility"
          className="w-full h-72 sm:h-96 object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/85 backdrop-blur-md rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-white font-bold text-sm">Industrial Telemetry & Digital Twin Monitoring</div>
            <div className="text-xs text-slate-400">Deployed across 10,000+ assembly lines and logistics hubs globally.</div>
          </div>
          <button
            onClick={onOpenSandbox}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg whitespace-nowrap"
          >
            Test Factory Model
          </button>
        </div>
      </div>

      {/* Search / Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="relative max-w-md w-full">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search industry or capability (e.g. Banking, Supply Chain, HIPAA)..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Showing {filteredIndustries.length} of {INDUSTRIES.length} Specialized Verticals
        </div>
      </div>

      {/* 12 Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIndustries.map((ind, index) => (
          <div
            key={ind.id}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                  {ind.subtitle}
                </span>
                <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
              </div>

              <h3 className="text-lg font-bold text-white font-display">{ind.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{ind.description}</p>

              <div className="pt-2 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Core Modules:
                </div>
                {ind.capabilities.map((cap) => (
                  <div key={cap} className="text-xs text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400">{ind.metricLabel}</div>
                  <div className="text-lg font-bold text-blue-400 font-mono">{ind.metric}</div>
                </div>
                <button
                  onClick={() => setSelectedIndustry(ind)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  Case Study
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="max-w-lg w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-blue-400">{selectedIndustry.subtitle}</span>
                <h3 className="text-xl font-bold text-white font-display mt-0.5">{selectedIndustry.name} Case Study</h3>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{selectedIndustry.description}</p>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Production Impact:</div>
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">{selectedIndustry.metric}</div>
              <div className="text-xs text-slate-300 leading-relaxed">{selectedIndustry.caseStudy}</div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedIndustry(null);
                  onNavigate('contact');
                }}
                className="w-full py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Consult Sector Specialist
              </button>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="w-full py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
