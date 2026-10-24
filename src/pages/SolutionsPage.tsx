import React from 'react';
import { ArrowRight, CheckCircle, Cpu, Network, ShieldCheck, Database, Layers } from 'lucide-react';
import { SOLUTIONS } from '../data/siteData';
import { PageId } from '../types';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSandbox: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenSandbox }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          Enterprise Solutions Portfolio
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance">
          Architectural Solutions Engineered for Operational Resilience
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          From air-gapped sovereign VPCs to multi-agent swarms operating across legacy core mainframes, Islamicity Vanguard AI delivers tested reference architectures that remove implementation risk.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="space-y-12">
        {SOLUTIONS.map((sol, index) => (
          <div
            key={sol.id}
            className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40">
                  Solution 0{index + 1}
                </span>
                <span className="text-xs text-slate-400">Enterprise Verified</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {sol.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {sol.summary}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Quantifiable Business Outcomes:
                </div>
                {sol.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Reference Architecture Specs</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-400">
                {sol.architecturePoints.map((point, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 font-mono text-[11px] leading-relaxed">
                    → {point}
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenSandbox}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-center"
                >
                  Test Interactive Sandbox
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors text-center"
                >
                  Request Blueprint
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Integration Stack */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white font-display">Zero-Disruption Enterprise Integration</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Plug directly into your production pipelines without replacing existing investments in ERP, CRM, data warehouses, or security providers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 font-mono text-xs text-slate-300">
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">SAP S/4HANA</div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">Salesforce</div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">Snowflake</div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">Databricks</div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">Apache Kafka</div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">Epic Systems</div>
        </div>
      </div>
    </div>
  );
};
