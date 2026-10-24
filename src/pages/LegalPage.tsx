import React, { useState } from 'react';
import { ShieldCheck, FileText, RefreshCw, Cookie, ArrowLeft } from 'lucide-react';
import { PageId } from '../types';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'refund' | 'cookies';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund' | 'cookies'>(initialTab);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      {/* Back button and page title */}
      <div className="space-y-4">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Legal & Institutional Governance
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white font-display mt-1">
              Enterprise Terms, Policies & Sovereign Compliance
            </h1>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Last Updated: March 2026 · Version 4.2
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-2 font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'privacy'
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Privacy Policy</span>
        </button>

        <button
          onClick={() => setActiveTab('terms')}
          className={`px-4 py-2 font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'terms'
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Terms & Conditions</span>
        </button>

        <button
          onClick={() => setActiveTab('refund')}
          className={`px-4 py-2 font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'refund'
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refund & SLA Policy</span>
        </button>

        <button
          onClick={() => setActiveTab('cookies')}
          className={`px-4 py-2 font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'cookies'
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Cookie className="w-3.5 h-3.5" />
          <span>Cookie Policy</span>
        </button>
      </div>

      {/* Legal Content Panel */}
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-300 leading-relaxed space-y-8 font-sans">
        {/* 1. PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white font-display">1. Enterprise Privacy Policy & Zero-Model-Training Guarantee</h2>
            <p>
              Islamicity Vanguard AI Technologies Inc. (&ldquo;Islamicity Vanguard AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates under an inviolable sovereign commitment: <strong>We do not use customer proprietary data, uploaded documents, inference inputs, or generated outputs to train foundational models</strong>.
            </p>

            <h3 className="text-base font-semibold text-white">1.1 Scope of Data Collection</h3>
            <p>
              When utilizing Islamicity Vanguard AI Enterprise platforms, we process only the strictly bounded operational telemetry required to route requests, execute multi-agent steps, and compute cryptographic token usage. Customer data processed through private inference endpoints resides entirely in transient RAM buffers and is permanently wiped following output delivery.
            </p>

            <h3 className="text-base font-semibold text-white">1.2 Cryptographic Boundaries & Key Ownership (BYOK)</h3>
            <p>
              All customer indexes, embeddings, and vector databases are encrypted both in transit (TLS 1.3 with forward secrecy) and at rest (AES-256-GCM). Customers retain absolute ownership of decryption keys via Hardware Security Module (HSM) integrations.
            </p>

            <h3 className="text-base font-semibold text-white">1.3 Compliance with GDPR, CCPA & Indonesian Law 27/2022</h3>
            <p>
              Enterprise customers maintain full right-to-erasure, right-of-rectification, and data portability controls. To request an audited cryptographic certificate of data erasure, contact our Global Data Protection Officer at <span className="font-mono text-blue-400">dpo@vanguard-ai.cloud</span>.
            </p>
          </div>
        )}

        {/* 2. TERMS & CONDITIONS */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white font-display">2. Master Services Agreement & Terms of Licensing</h2>
            <p>
              These Master Services Terms govern the deployment, integration, and operational usage of the Islamicity Vanguard AI Autonomous Platform across private clouds, hybrid nodes, and multi-agent infrastructure.
            </p>

            <h3 className="text-base font-semibold text-white">2.1 Intellectual Property & Sovereign Output Rights</h3>
            <p>
              The Customer retains 100% unrestricted intellectual property ownership of all models fine-tuned with their data, all customized prompt templates, and all deterministic outputs generated by Islamicity Vanguard AI swarms. Islamicity Vanguard AI claims zero residual copyright in customer deliverables.
            </p>

            <h3 className="text-base font-semibold text-white">2.2 Service Availability & Guaranteed 99.99% SLA</h3>
            <p>
              We commit to 99.99% monthly infrastructure uptime across all production clusters. In the event of system downtime exceeding 0.01% in any given calendar month, Customer is entitled to financial service credits as set forth in Section 3 of our SLA schedule.
            </p>

            <h3 className="text-base font-semibold text-white">2.3 Prohibited Workloads</h3>
            <p>
              Customer agrees not to utilize the Islamicity Vanguard AI platform for autonomous kinetic weapons targeting, unlawful covert surveillance, or activities in violation of applicable national security statutes.
            </p>
          </div>
        )}

        {/* 3. REFUND POLICY */}
        {activeTab === 'refund' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white font-display">3. Enterprise Refund, Guarantee & SLA Credit Policy</h2>
            <p>
              Islamicity Vanguard AI stands behind the architectural determinism and performance metrics of our autonomous platforms.
            </p>

            <h3 className="text-base font-semibold text-white">3.1 30-Day Proof-of-Value Satisfaction Guarantee</h3>
            <p>
              For new enterprise contracts, if our platform fails to meet agreed upon throughput, latency, or semantic precision benchmarks established during onboarding within the first thirty (30) calendar days, the customer may terminate the contract with a full 100% refund of initial platform licensing fees.
            </p>

            <h3 className="text-base font-semibold text-white">3.2 Service Level Agreement (SLA) Credit Matrix</h3>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
              <div className="flex justify-between text-slate-200">
                <span>Monthly Uptime &gt;= 99.99%:</span>
                <span className="text-emerald-400">Standard SLA Met</span>
              </div>
              <div className="flex justify-between text-slate-200">
                <span>Monthly Uptime 99.50% – 99.98%:</span>
                <span className="text-blue-400">15% Monthly Invoice Credit</span>
              </div>
              <div className="flex justify-between text-slate-200">
                <span>Monthly Uptime 99.00% – 99.49%:</span>
                <span className="text-blue-400">30% Monthly Invoice Credit</span>
              </div>
              <div className="flex justify-between text-slate-200">
                <span>Monthly Uptime &lt; 99.00%:</span>
                <span className="text-rose-400">50% Monthly Invoice Credit</span>
              </div>
            </div>

            <h3 className="text-base font-semibold text-white">3.3 Claim Processing</h3>
            <p>
              SLA credit claims are processed automatically through our telemetry audit log or upon formal written submission to <span className="font-mono text-blue-400">billing@vanguard-ai.cloud</span> within 30 days of the recorded incident.
            </p>
          </div>
        )}

        {/* 4. COOKIE POLICY */}
        {activeTab === 'cookies' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white font-display">4. Enterprise Cookie & Cryptographic State Policy</h2>
            <p>
              Islamicity Vanguard AI employs minimal, privacy-centric cookie technologies strictly necessary to deliver authenticated sessions, cryptographic tenant routing, and low-latency edge caching.
            </p>

            <h3 className="text-base font-semibold text-white">4.1 Classification of Cookies Deployed</h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-semibold text-white">Strictly Necessary Cookies</div>
                <p className="text-xs text-slate-400">
                  Required for mutual TLS token authentication, CSRF cross-origin verification, and load balancer sticky routing. These cannot be disabled.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-semibold text-white">Performance Telemetry Cookies</div>
                <p className="text-xs text-slate-400">
                  Collect aggregated, non-personally identifiable diagnostic timings (P99 edge routing latency, DNS resolution speed).
                </p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-white">4.2 Zero Third-Party Advertising Trackers</h3>
            <p>
              Islamicity Vanguard AI strictly prohibits third-party advertising pixels, behavioral tracking networks, or commercial fingerprinting scripts on our enterprise portals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
