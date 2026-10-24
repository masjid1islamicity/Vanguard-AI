import React, { useState } from 'react';
import {
  ArrowRight,
  Shield,
  Zap,
  Lock,
  Cpu,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  Building,
  Server,
  Layers,
  Sparkles,
  ExternalLink,
  PhoneCall,
  Mail,
  Send,
  ChevronDown,
  HeartHandshake
} from 'lucide-react';
import { ENTERPRISE_METRICS, HERO_ASSETS, INDUSTRIES, PRODUCTS, FAQS } from '../data/siteData';
import { IndustryCard, PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProposal: () => void;
  onOpenSandbox: () => void;
  onSelectIndustry?: (industry: IndustryCard) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProposal,
  onOpenSandbox,
}) => {
  // Carousel State for 10+ Industries
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedIndustryModal, setSelectedIndustryModal] = useState<IndustryCard | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Financial Markets',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const nextIndustry = () => {
    setCarouselIndex((prev) => (prev + 1) % INDUSTRIES.length);
  };

  const prevIndustry = () => {
    setCarouselIndex((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormError('Please enter a valid corporate email address.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <span>Enterprise Autonomous Intelligence Platform</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">Zero-Trust Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display text-balance leading-[1.1]">
                Autonomous Cognitive Infrastructure for the Global Enterprise
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Deploy deterministic multi-agent swarms, low-latency neural routing gateways, and air-gapped sovereign AI clouds engineered for mission-critical operations.
              </p>

              {/* Single primary decision block with adjacent secondary */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenSandbox}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Launch Platform Sandbox</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenProposal}
                  className="px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <span>View Project Rates & Timeline</span>
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <span>Sovereign VPC Isolation</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={HERO_ASSETS.hq}
                  alt="Islamicity Vanguard AI Enterprise Operations Command Center"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-white font-semibold">Global AI Command Node</div>
                    <div className="text-slate-400 font-mono text-[11px]">Real-Time Neural Orchestration</div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-emerald-400 font-bold">&lt;14ms</span>
                    <div className="text-[10px] text-slate-400">P99 Edge Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Claim-to-Proof Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
            {ENTERPRISE_METRICS.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-300">{metric.label}</div>
                <div className="text-[11px] text-slate-400 leading-tight">{metric.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 2. ABOUT US SECTION ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              01. Corporate Identity & Engineering Ethos
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display text-balance">
              Engineered for Organizations Where Failure Is Not an Option
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Islamicity Vanguard AI was established to solve the fundamental barriers impeding enterprise adoption of frontier artificial intelligence: stochastic hallucinations, opaque data sovereignty, and brittle API integrations.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Our platform bridges high-performance distributed systems with deterministic reasoning engines, empowering institutions across banking, healthcare, smart manufacturing, and government to automate complex workflows with verifiable mathematical rigor.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Explore Executive Leadership & Global Milestones</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">Deployment Topology</div>
                  <div className="text-base font-bold text-white mt-1">Air-Gapped & VPC</div>
                  <p className="text-[11px] text-slate-400 mt-1">Deployable on private AWS, Azure, GCP, or bare-metal racks.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">Inference Security</div>
                  <div className="text-base font-bold text-white mt-1">Zero-Trust Shield</div>
                  <p className="text-[11px] text-slate-400 mt-1">Bidirectional prompt inspection & PII anonymization.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Need Customized Architecture?</div>
                  <div className="text-xs text-slate-400 mt-0.5">Consult with our solutions engineering team.</div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-3.5 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  Book Discovery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STRATEGIC ALLIANCE: VANGUARD AI × ISLAMICITY KAFFAH ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-800/50 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-3 py-1 rounded-lg">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>Strategic Bilateral Alliance</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">SematangborangCity.cloud Ecosystem</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white font-display text-balance">
                Vanguard AI × Islamicity Kaffah Strategic Partnership
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Pioneering sovereign, Sharia-compliant autonomous AI superapp infrastructure. Combining Vanguard AI’s low-latency neural routing with Islamicity Kaffah’s ethical Maqasid al-Shariah governance framework.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Riba-Free Automated Screener</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Farm-to-Fork Halal IoT Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Autonomous Baitul Maal ZISWAF Ledger</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Grounded Hadith & Quranic Knowledge Graph</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('islamicity-kaffah')}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <span>Explore Islamicity Kaffah Alliance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenSandbox}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-colors"
                >
                  Test Sharia Audit Sandbox
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative shadow-xl">
              <img
                src={HERO_ASSETS.islamicityKaffah}
                alt="Islamicity Kaffah Strategic Partnership Pavilion"
                className="w-full h-64 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="text-white font-semibold">Sharia AI Governance Council</div>
                  <div className="text-emerald-400 font-mono text-[11px]">Bhopal & Indonesia Hubs</div>
                </div>
                <div className="text-right font-mono text-emerald-400 font-bold">
                  AAOIFI Aligned
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. AI PRODUCTS & SERVICES GRID ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-2xl">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            02. Core AI Product Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Composable Neural Foundation Services
          </h2>
          <p className="text-slate-400 text-sm">
            Modular, high-throughput components designed to integrate directly into existing enterprise data pipelines.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: NeuralCore (Large col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40">
                  Core Gateway
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  Latency: 12ms · 99.92% Accuracy
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                NeuralCore™ Enterprise Engine
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dynamic inference routing gateway that analyzes incoming requests, classifies intent, optimizes token payloads, and routes queries to the optimal private or cloud cluster.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Sub-20ms semantic routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>40% Token compression</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Zero schema drift validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Air-gapped on-prem support</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={onOpenSandbox}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
              >
                <span>Test Live in Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-slate-400">FedRAMP High & FIPS 140-2</span>
            </div>
          </div>

          {/* Card 2: Visual Spotlight (col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col">
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={HERO_ASSETS.neuralEngine}
                alt="NeuralCore Infrastructure Hardware"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white font-display">
                  Sovereign Hardware Acceleration
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Bare-metal cluster provisioning optimized for low-latency TensorRT-LLM and private weights execution.
                </p>
              </div>
              <button
                onClick={() => onNavigate('products')}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <span>View Full Product Specifications</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
              </button>
            </div>
          </div>

          {/* Card 3: OmniFlow Autonomous Agents (col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40">
                Agent Swarms
              </span>
              <span className="text-xs font-mono text-emerald-400">Accuracy: 98.8%</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              OmniFlow™ Autonomous Agents
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Construct multi-agent collaborative teams capable of cross-system planning, database queries, code execution, and human checkpoint escalation.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Hierarchical planner-worker consensus protocols</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Isolated Python and SQL runtime sandboxes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Pre-built connectors for SAP, Salesforce, and Postgres</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Sentinel Guard AI Shield (col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40">
                Cognitive Defense
              </span>
              <span className="text-xs font-mono text-emerald-400">Latency: 3ms</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Sentinel Guard™ Security Firewall
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enterprise AI firewall intercepting adversarial prompt injections, jailbreak attacks, and proprietary data exfiltration in real-time.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Automated PII masking and synthetic tokenization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Full compliance mapping to EU AI Act and NIST AI RMF</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Policy-as-code configuration via declarative YAML</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- 4. INDUSTRIES WE SERVE (10+ CARDS CAROUSEL) ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-3">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              03. Specialized Vertical Intelligence
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Industries We Serve
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              12 mission-critical industry verticals powered by purpose-built foundational models and domain-trained knowledge graphs.
            </p>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 mr-2">
              Vertical {carouselIndex + 1} of {INDUSTRIES.length}
            </span>
            <button
              onClick={prevIndustry}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              aria-label="Previous Industry"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextIndustry}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              aria-label="Next Industry"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="mt-8">
          {/* Main Selected Card Feature */}
          <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/40">
                  {INDUSTRIES[carouselIndex].subtitle}
                </span>
                <span className="text-xs text-slate-400">
                  Vertical Sector 0{carouselIndex + 1}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {INDUSTRIES[carouselIndex].name}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {INDUSTRIES[carouselIndex].description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Specialized Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {INDUSTRIES[carouselIndex].capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-blue-950/30 border border-blue-800/40 rounded-xl text-xs text-blue-300">
                <strong className="text-white">Audited Outcome:</strong> {INDUSTRIES[carouselIndex].caseStudy}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
              <div className="text-xs text-slate-400">{INDUSTRIES[carouselIndex].metricLabel}</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 font-mono tracking-tight">
                {INDUSTRIES[carouselIndex].metric}
              </div>
              <div className="text-xs text-slate-400 leading-tight">
                Empirically validated benchmark across enterprise production deployments.
              </div>
              <button
                onClick={() => setSelectedIndustryModal(INDUSTRIES[carouselIndex])}
                className="w-full mt-2 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                Inspect Sector Brief
              </button>
            </div>
          </div>

          {/* Mini Cards Horizontal Scroll Strip (All 12 Industries) */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {INDUSTRIES.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setCarouselIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  carouselIndex === idx
                    ? 'bg-blue-950/50 border-blue-500 text-white shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-400">0{idx + 1}</div>
                <div className="text-xs font-semibold truncate mt-1">{ind.name}</div>
                <div className="text-[11px] font-mono text-blue-400 mt-0.5">{ind.metric}</div>
              </button>
            ))}
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => onNavigate('industries')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <span>Explore detailed technical case studies for all 12 industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- 5. WHY CHOOSE US / VALUE PROPOSITION ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              04. Institutional Trust & Differentiators
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Why Global Leaders Standardize on Islamicity Vanguard AI
            </h2>
            <p className="text-slate-400 text-sm">
              We eliminate technical debt and risk by engineering sovereign infrastructure with financial SLA guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Air-Gapped Sovereign Isolation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Customer data never leaves your defined cryptographic boundary. Zero public model re-training exposure.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Deterministic Execution</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigid JSON schema validation and zero-drift state machines prevent random hallucinations in production workflows.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Sub-20ms P99 Latency</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                TensorRT-accelerated edge routing nodes deployed across 14 geographic regions ensure real-time responsiveness.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-display">99.99% Guaranteed SLA</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Institutional service level agreements backed by automated multi-region hot-standby failover and penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 6. FAQ SECTION ---------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            05. Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Clear Answers for Enterprise Stakeholders
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base hover:text-blue-300 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    activeFaq === idx ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 7. CONTACT FORM (FRONT-END ONLY) ---------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              06. Direct Enterprise Inquiry
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Request Platform Access & Technical Scoping
            </h2>
            <p className="text-slate-400 text-sm">
              Connect with our principal AI solutions architects. We respond within 4 business hours with custom deployment specs.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 space-y-3 text-center">
              <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white font-display">Inquiry Registered Successfully</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. An enterprise solutions director from our Bhopal / Southeast Asia hub has received your request and will follow up at <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', company: '', industry: 'Financial Markets', message: '' });
                }}
                className="mt-2 px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5 text-xs text-slate-300">
              {formError && (
                <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-300 text-xs">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alistair Vance"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Corporate Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@enterprise.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Organization / Firm</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Sovereign Asset Management Ltd"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Primary Industry Vertical</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name} className="bg-slate-900 text-white">
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Project Scope or Workload Specifications *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline expected throughput, compliance requirements (e.g. HIPAA, air-gapped on-prem), and desired timeline..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-slate-400">
                  Protected by mutual enterprise non-disclosure. We will never share your contact details.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Sector Deep Dive Modal when clicked */}
      {selectedIndustryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="max-w-lg w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-blue-400">{selectedIndustryModal.subtitle}</span>
                <h3 className="text-xl font-bold text-white font-display mt-0.5">{selectedIndustryModal.name}</h3>
              </div>
              <button
                onClick={() => setSelectedIndustryModal(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{selectedIndustryModal.description}</p>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400">{selectedIndustryModal.metricLabel}</div>
              <div className="text-2xl font-bold text-blue-400 font-mono mt-0.5">{selectedIndustryModal.metric}</div>
              <div className="text-xs text-slate-400 mt-1">{selectedIndustryModal.caseStudy}</div>
            </div>
            <button
              onClick={() => setSelectedIndustryModal(null)}
              className="w-full py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              Close Brief
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
