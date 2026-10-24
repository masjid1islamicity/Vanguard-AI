import React, { useState } from 'react';
import { X, CheckCircle, ExternalLink, Calendar, ShieldCheck, Code2, Download, Copy, Check, ChevronRight } from 'lucide-react';
import { CLIENT_PROPOSAL_DELIVERABLES } from '../data/siteData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMilestoneTier?: (milestone: string) => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'quote' | 'portfolio' | 'timeline' | 'architecture'>('quote');

  if (!isOpen) return null;

  const totalCost = CLIENT_PROPOSAL_DELIVERABLES.milestones.reduce((acc, m) => acc + m.costINR, 0);

  const copyProposalSummary = () => {
    const text = `Islamicity Vanguard AI Platform Proposal
Estimated Timeline: ${CLIENT_PROPOSAL_DELIVERABLES.turnaroundTimeline}
Budget Range: ${CLIENT_PROPOSAL_DELIVERABLES.fixedPriceQuoteINR} (Total Suggested Milestones: ₹${totalCost.toLocaleString('en-IN')})
Milestones:
${CLIENT_PROPOSAL_DELIVERABLES.milestones.map((m) => `• ${m.phase} (${m.timeline}): ₹${m.costINR.toLocaleString('en-IN')} - ${m.title}`).join('\n')}
Tech Stack: React 19, Next.js compatible architecture, Tailwind CSS v4, TypeScript, Lucide Icons, Motion.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Enterprise Project Proposal & Quote
            </h3>
            <p className="text-xs text-slate-400">
              Prepared for SematangborangCity.cloud (Bhopal / Indonesia) · Fixed-Price Scope & Milestones
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-800 bg-slate-900/40 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('quote')}
            className={`px-3 py-2 font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'quote'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Fixed-Price Quote (₹1,500 – ₹12,500)
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-2 font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'timeline'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Delivery Timeline (14 Days)
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-3 py-2 font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'portfolio'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            React / Next.js Portfolio Samples
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-2 font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'architecture'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture & GitHub Blueprint
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === 'quote' && (
            <div className="space-y-6">
              {/* Executive Summary Bar */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-slate-400">Total Fixed Budget Range</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">₹1,500 – ₹12,500</div>
                  <div className="text-[11px] text-slate-400 mt-1">Full 12-page frontend delivery</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Estimated Turnaround</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-0.5">10 – 14 Days</div>
                  <div className="text-[11px] text-slate-400 mt-1">Incremental milestone handoffs</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Quality Standard</div>
                  <div className="text-xl font-bold text-blue-400 font-mono mt-0.5">Lighthouse &gt;95</div>
                  <div className="text-[11px] text-slate-400 mt-1">Strict Zero-Pill & WCAG AA</div>
                </div>
              </div>

              {/* Milestones Breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Recommended Milestone Breakdown
                  </h4>
                  <span className="text-xs text-slate-400">
                    Click each phase for deliverables breakdown
                  </span>
                </div>

                <div className="space-y-3">
                  {CLIENT_PROPOSAL_DELIVERABLES.milestones.map((m, idx) => (
                    <div
                      key={m.phase}
                      onClick={() => setSelectedMilestone(selectedMilestone === idx ? null : idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedMilestone === idx
                          ? 'bg-blue-950/20 border-blue-500/80 shadow-md'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-blue-400 bg-blue-950/80 px-2 py-1 rounded border border-blue-800/60">
                            {m.phase}
                          </span>
                          <div>
                            <div className="font-semibold text-white">{m.title}</div>
                            <div className="text-xs text-slate-400">{m.timeline}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold font-mono text-white">
                            ₹{m.costINR.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[11px] text-emerald-400">Milestone Payment</div>
                        </div>
                      </div>

                      {selectedMilestone === idx && (
                        <div className="mt-3 pt-3 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                          <div className="font-semibold text-slate-200">Included Deliverables:</div>
                          {m.deliverables.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-2">14-Day Delivery Roadmap & Execution Cadence</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every milestone delivers tangible preview builds deployed on a live staging environment for immediate stakeholder testing and sign-off.
                </p>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                  <div className="font-semibold text-white text-sm">Days 1 – 3: Architecture & UI Component Design System</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Atomic components, design tokens, top bar contract, responsive typography, and hero banner asset composition.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                  <div className="font-semibold text-white text-sm">Days 4 – 7: Core Static Pages & 10+ Industry Carousel</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Implementation of Home, About, Solutions, AI Products, and the 10+ card interactive Industry sector carousel.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                  <div className="font-semibold text-white text-sm">Days 8 – 11: Pricing Engine, Blog & Contact Workflows</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Monthly/annual pricing switch, ROI calculations, research blog with search/filter, and sales contact form with validation.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                  <div className="font-semibold text-white text-sm">Days 12 – 14: Legal Suite, Lighthouse 95+ Audit & Handover</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Full GDPR/CCPA legal documentation, Lighthouse performance tuning, clean GitHub code repository handoff.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Demonstrated React & Next.js SaaS Work
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CLIENT_PROPOSAL_DELIVERABLES.portfolioSamples.map((project) => (
                  <div key={project.title} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold text-white text-sm">{project.title}</div>
                        <div className="text-xs text-blue-400 font-mono mt-0.5">{project.type}</div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        {project.metric}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-blue-400 font-bold">// Modular, Scalable Frontend File Structure</div>
                <div className="text-slate-400 leading-relaxed">
                  ├── src/<br />
                  │   ├── components/       # Atomic, reusable UI elements (Header, Footer, Modals, Cards)<br />
                  │   ├── pages/            # 12 static/dynamic route views (Home, About, Solutions, Legal...)<br />
                  │   ├── data/             # Strongly typed single source of truth (content, pricing, industries)<br />
                  │   ├── types/            # Strict TypeScript interfaces<br />
                  │   ├── assets/           # High-resolution generated images and brand vectors<br />
                  │   └── main.tsx          # Clean entry point with zero hydration warnings
                </div>
              </div>
              <div className="p-3 bg-blue-950/30 border border-blue-800/40 rounded-xl text-xs text-blue-300 leading-relaxed">
                <strong>Clean Scalability Guarantee:</strong> The frontend is built with pure decoupled presentation components. When backend, auth (NextAuth/Firebase), Stripe payments, or live AI model calls are added later, zero rewrites of visual components are necessary.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <button
            onClick={copyProposalSummary}
            className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Proposal Summary'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Accept Proposal & Proceed
          </button>
        </div>
      </div>
    </div>
  );
};
