import React, { useState } from 'react';
import { CheckCircle, Calculator, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/siteData';
import { PageId } from '../types';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProposal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenProposal }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Interactive ROI Calculator State
  const [operatorHours, setOperatorHours] = useState(120);
  const [hourlyWageINR, setHourlyWageINR] = useState(1200);

  // Math for ROI
  const monthlyLaborCostINR = operatorHours * hourlyWageINR;
  const automatedCostINR = 4900; // mid-tier
  const netMonthlySavingsINR = Math.max(0, monthlyLaborCostINR - automatedCostINR);
  const netAnnualSavingsINR = netMonthlySavingsINR * 12;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          Enterprise Licensing & Tiers
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance">
          Transparent, Predictable Infrastructure Pricing
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Zero hidden egress fees, zero per-seat penalty taxes. Scale autonomous workloads with financial predictability backed by institutional SLAs.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-slate-800 p-1 flex items-center transition-colors relative"
            aria-label="Toggle annual or monthly billing"
          >
            <div
              className={`w-4 h-4 rounded-full bg-blue-500 transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
            </span>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
          return (
            <div
              key={plan.id}
              className={`p-8 rounded-2xl flex flex-col justify-between transition-all ${
                plan.highlighted
                  ? 'bg-slate-900 border-2 border-blue-500 shadow-xl shadow-blue-500/10'
                  : 'bg-slate-900/70 border border-slate-800'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-display">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="text-[11px] font-mono text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-800/50">
                      Most Selected
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      {plan.currencySymbol}
                      {price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {isAnnual ? 'Billed annually with 20% discount' : 'Billed on a monthly basis'}
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                  <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
                    Included Capabilities:
                  </div>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 text-xs font-semibold rounded-xl transition-all ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Enterprise ROI Calculator */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Enterprise ROI & Automation Savings Calculator
            </h2>
            <p className="text-xs text-slate-400">
              Estimate your monthly and annual return on autonomous multi-agent deployments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Manual Verification Hours Replaced / Month</span>
                <span className="text-blue-400 font-mono font-bold">{operatorHours} Hours</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={operatorHours}
                onChange={(e) => setOperatorHours(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>20 hrs</span>
                <span>250 hrs</span>
                <span>500 hrs</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Average Specialist Hourly Rate (INR)</span>
                <span className="text-blue-400 font-mono font-bold">₹{hourlyWageINR.toLocaleString('en-IN')} / hr</span>
              </div>
              <input
                type="range"
                min="500"
                max="4000"
                step="100"
                value={hourlyWageINR}
                onChange={(e) => setHourlyWageINR(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>₹500</span>
                <span>₹2,000</span>
                <span>₹4,000</span>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-center">
            <div className="text-xs text-slate-400">Estimated Net Annual Savings</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
              ₹{netAnnualSavingsINR.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-slate-300 leading-relaxed">
              Based on ₹{netMonthlySavingsINR.toLocaleString('en-IN')}/mo in manual audit and reconciliation overhead replaced by deterministic Islamicity Vanguard AI swarms.
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenProposal}
                className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Request Custom Milestone Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
