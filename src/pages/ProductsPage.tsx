import React from 'react';
import { ArrowRight, CheckCircle, Cpu, Zap, Shield, Play, Layers } from 'lucide-react';
import { PRODUCTS, HERO_ASSETS } from '../data/siteData';
import { PageId } from '../types';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSandbox: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenSandbox }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          Enterprise AI Product Matrix
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance">
          Modular Foundation Systems for Autonomous Workloads
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Every component in the Islamicity Vanguard AI suite is built for ultra-low latency, deterministic execution, and zero-trust security isolation.
        </p>
      </div>

      {/* Hardware / Engine Visual Spotlight */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
          <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40">
            Dedicated Neural Compute
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Accelerated Silicon & TensorRT Cluster Serving
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our systems run on bare-metal enterprise nodes with NVMe vector memory arrays, delivering sub-20ms inference responses and guaranteed throughput unaffected by noisy cloud multi-tenancy.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={onOpenSandbox}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Launch Live Interactive Sandbox</span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 h-72 sm:h-96 relative">
          <img
            src={HERO_ASSETS.neuralEngine}
            alt="Neural Hardware Mainframe Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:block hidden" />
        </div>
      </div>

      {/* Products Deep-Dive */}
      <div className="space-y-12">
        {PRODUCTS.map((product, index) => (
          <div
            key={product.id}
            className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-blue-400">{product.tagline}</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">{product.name}</h3>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400">
                  Latency: {product.latency}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-blue-400">
                  Accuracy: {product.accuracy}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Production Feature Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feat) => (
                  <div key={feat} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <div>Security Certification: <strong className="text-slate-200">{product.securityTier}</strong></div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenSandbox}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Test In Sandbox
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Request Technical Docs
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
