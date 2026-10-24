import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Building,
  HeartHandshake,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  Scale,
  Award,
  Globe2,
  Cpu
} from 'lucide-react';
import { HERO_ASSETS, ISLAMICITY_KAFFAH_COLLABORATION } from '../data/siteData';
import { PageId } from '../types';

interface IslamicityKaffahPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSandbox: () => void;
  onOpenProposal: () => void;
}

export const IslamicityKaffahPage: React.FC<IslamicityKaffahPageProps> = ({
  onNavigate,
  onOpenSandbox,
  onOpenProposal,
}) => {
  // Interactive Sharia Screener Simulator
  const [selectedAsset, setSelectedAsset] = useState<'sukuk' | 'equities' | 'supply_chain' | 'zakat'>('equities');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState({
    status: 'HALAL_COMPLIANT',
    score: '99.8%',
    debtRatio: '14.2% (Threshold <33%)',
    impermissibleIncome: '0.00% (Threshold <5%)',
    standard: 'AAOIFI Standard No. 21 / DSN-MUI No. 135',
    verdict: 'Approved for institutional Islamic sovereign funds and retail Islamic banking.',
  });

  const handleRunAudit = (type: 'sukuk' | 'equities' | 'supply_chain' | 'zakat') => {
    setSelectedAsset(type);
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      if (type === 'equities') {
        setAuditResult({
          status: 'SHARIA_CERTIFIED_PASSED',
          score: '99.8%',
          debtRatio: '14.2% (Threshold <33%)',
          impermissibleIncome: '0.12% (Purification Allocated to Baitul Maal)',
          standard: 'AAOIFI Standard No. 21 & DSN-MUI Criteria',
          verdict: 'Equity approved for Islamic portfolio inclusion with zero non-compliant debt risk.',
        });
      } else if (type === 'sukuk') {
        setAuditResult({
          status: 'SOVEREIGN_SUKUK_VALIDATED',
          score: '100.0%',
          debtRatio: 'Asset-Backed Ijarah Structure',
          impermissibleIncome: '0.00% (Pure Usufruct Yield)',
          standard: 'Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI)',
          verdict: 'Sukuk issuance verified with underlying tangible infrastructure assets.',
        });
      } else if (type === 'supply_chain') {
        setAuditResult({
          status: 'HALAL_CHAIN_VERIFIED',
          score: '99.94%',
          debtRatio: 'BPJPH / MUI / JAKIM Mutual Recognition',
          impermissibleIncome: 'Zero Porcine / Ethanol Contamination',
          standard: 'HAS 23000 & ISO 22000 Halal Assurance System',
          verdict: 'Continuous IoT cold-chain telemetry verifies uncompromised Halal integrity from farm to shelf.',
        });
      } else {
        setAuditResult({
          status: 'ZISWAF_NISAB_CALCULATED',
          score: '100.0%',
          debtRatio: 'Nisab Benchmark: 85g Fine Gold (₹5,95,000 / Rp125,000,000)',
          impermissibleIncome: '2.5% Net Hawl Obligation Allocated',
          standard: 'Fiqh az-Zakat (Yusuf al-Qaradawi) & BAZNAS Directives',
          verdict: 'Automated disbursement ledger routed to verified Asnaf categories with zero operational friction.',
        });
      }
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      {/* 1. Header & Alliance Banner */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
          <HeartHandshake className="w-4 h-4 text-emerald-400" />
          <span>Strategic Bilateral Alliance</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-300">Vanguard AI × Islamicity Kaffah</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-emerald-300">SematangborangCity.cloud Ecosystem</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance leading-[1.15]">
          Sovereign Ethical AI & Sharia-Compliant Autonomous Intelligence
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {ISLAMICITY_KAFFAH_COLLABORATION.leadSummary}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => {
              const el = document.getElementById('sharia-simulator');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
          >
            <Scale className="w-4 h-4" />
            <span>Launch Sharia Compliance Simulator</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-xl hover:border-slate-600 transition-all flex items-center gap-2"
          >
            <span>Inquire Joint Working Group MoU</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Visual Alliance Showcase */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
        <img
          src={HERO_ASSETS.islamicityKaffah}
          alt="Vanguard AI and Islamicity Kaffah Joint Innovation Pavilion"
          className="w-full h-80 sm:h-[420px] object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-slate-950/85 backdrop-blur-md rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-white font-bold text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Islamicity Kaffah Global Sharia AI Center</span>
            </div>
            <div className="text-xs text-slate-400">
              Joint technological initiative serving Bhopal, Palembang/Jakarta (Indonesia), and the broader OIC Islamic digital economy.
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="font-mono text-emerald-400 font-bold text-sm">100% Sharia Grounded</span>
            <div className="text-[11px] text-slate-400">AAOIFI & DSN-MUI Aligned</div>
          </div>
        </div>
      </div>

      {/* 3. The 5 Maqasid al-Shariah AI Guardrail Pillars */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Ethical Governance Constitution
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            The Five Pillars of Maqasid al-Shariah Cognitive AI
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Vanguard AI’s Sentinel Guard security engine embeds classical Islamic jurisprudence objectives directly into machine learning inference boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ISLAMICITY_KAFFAH_COLLABORATION.strategicPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-600/60 transition-all flex flex-col justify-between space-y-3 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-bold tracking-wide">
                  {pillar.arabicName}
                </div>
                <h3 className="text-base font-bold text-white font-display">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Deterministic Algorithmic Guardrail</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Interactive Sharia & Halal Screening Simulator */}
      <div id="sharia-simulator" className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/40">
              Interactive Live Audit Tester
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              ShariaCore™ Real-Time Compliance Sandbox
            </h2>
            <p className="text-xs text-slate-400">
              Simulate automated algorithmic auditing across Islamic finance, Halal food supply, and ZISWAF philanthropy.
            </p>
          </div>
          <button
            onClick={onOpenSandbox}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            Open Full Platform Sandbox
          </button>
        </div>

        {/* Workload Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(
            [
              { id: 'equities', label: 'Equities & Stocks Screening' },
              { id: 'sukuk', label: 'Sovereign Sukuk Structuring' },
              { id: 'supply_chain', label: 'Halal Chain Farm-to-Fork' },
              { id: 'zakat', label: 'Zakat & Waqf Nisab Ledger' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => handleRunAudit(item.id)}
              className={`p-3 text-xs font-medium rounded-xl border text-left transition-all ${
                selectedAsset === item.id
                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-sm'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="font-semibold text-white">{item.label}</div>
              <div className="text-[11px] text-slate-400 mt-1">Run Automated Audit</div>
            </button>
          ))}
        </div>

        {/* Audit Output Certificate */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-bold">SHARIA_COGNITIVE_AUDIT_REPORT</span>
            </div>
            <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              {auditResult.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs pt-1">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <div className="text-[11px] text-slate-400">Compliance Benchmark</div>
              <div className="text-emerald-400 font-bold font-mono text-base mt-0.5">{auditResult.score}</div>
              <div className="text-[10px] text-slate-400 mt-1">{auditResult.standard}</div>
            </div>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <div className="text-[11px] text-slate-400">Audit Metric Status</div>
              <div className="text-white font-mono text-xs mt-1 leading-snug">{auditResult.debtRatio}</div>
              <div className="text-[10px] text-slate-400 mt-1">Zero Stochastic Deviation</div>
            </div>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <div className="text-[11px] text-slate-400">Purification / Non-Halal Risk</div>
              <div className="text-white font-mono text-xs mt-1 leading-snug">{auditResult.impermissibleIncome}</div>
              <div className="text-[10px] text-slate-400 mt-1">Cryptographic Ledger Verified</div>
            </div>
          </div>

          <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg text-slate-300 font-sans text-xs leading-relaxed">
            <strong className="text-white">Audited Jurisprudential Verdict:</strong> {auditResult.verdict}
          </div>
        </div>
      </div>

      {/* 5. The 4 Core Sharia AI Modules */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Proprietary Autonomous Technology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            The Islamicity Kaffah Tech Stack
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Custom-engineered neural architectures and knowledge representations purpose-built for the global Islamic economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ISLAMICITY_KAFFAH_COLLABORATION.coreModules.map((module) => (
            <div
              key={module.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
                  {module.name}
                </span>
                <span className="text-xs font-mono text-emerald-300">{module.metrics}</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">{module.tagline}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Sharia Advisory & Governance Council */}
      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Independent Oversight
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Sharia Supervisory & Ethics Council
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Autonomous systems require human scholars in the loop. Our algorithmic rules are continuously reviewed by senior Islamic jurists and Halal auditors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ISLAMICITY_KAFFAH_COLLABORATION.supervisoryBoard.map((scholar) => (
            <div key={scholar.name} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm">{scholar.name}</div>
              <div className="text-xs text-emerald-400 font-mono">{scholar.role}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{scholar.affiliation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Collaboration CTA & Sematangborang Hub */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-800/50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            SematangborangCity.cloud & Bhopal Hub
          </div>
          <h3 className="text-2xl font-bold text-white font-display">
            Partner With the Islamicity Kaffah AI Consortium
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We invite Islamic financial institutions, sovereign Halal authorities, Waqf foundations, and smart city operators across Indonesia, India, and the OIC to deploy Sharia-compliant AI nodes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg shadow-emerald-600/20 text-center whitespace-nowrap"
          >
            Inquire Alliance Partnership
          </button>
          <button
            onClick={onOpenProposal}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-colors text-center whitespace-nowrap"
          >
            Review Project Rates
          </button>
        </div>
      </div>
    </div>
  );
};
