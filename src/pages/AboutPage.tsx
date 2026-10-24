import React from 'react';
import { ShieldCheck, Award, Server, Globe2, ArrowRight } from 'lucide-react';
import { HERO_ASSETS } from '../data/siteData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProposal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenProposal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      {/* Title block */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          About Islamicity Vanguard AI Technologies
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance">
          Pioneering Sovereign, Verifiable Intelligence for Critical Infrastructure
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Headquartered with strategic engineering hubs across Bhopal, Southeast Asia, and Europe, Islamicity Vanguard AI engineers foundation model infrastructure for institutions requiring mathematical determinism, air-gapped security, and zero compromise on data sovereignty.
        </p>
      </div>

      {/* Leadership Board Visual */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
        <img
          src={HERO_ASSETS.leadershipBoard}
          alt="Islamicity Vanguard AI Executive Leadership Board"
          className="w-full h-80 sm:h-[420px] object-cover object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-white font-bold text-sm">Executive Technical Council</div>
            <div className="text-xs text-slate-400">Led by researchers and distributed systems veterans from MIT, IIT, and CERN.</div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg whitespace-nowrap"
          >
            Schedule Briefing
          </button>
        </div>
      </div>

      {/* Core Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white font-display">Our Institutional Mission</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            To provide enterprise leaders with impenetrable cognitive infrastructure that converts unstructured organizational knowledge into deterministic, autonomous execution loops without ever leaking proprietary trade secrets or exposing corporate workloads to public model vulnerabilities.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
            <Globe2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white font-display">Global Sovereign Vision</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We envision a resilient global enterprise fabric where every nation, hospital network, bank, and critical utility operates dedicated sovereign neural nodes—retaining full computational independence while benefiting from continuous algorithmic refinement.
          </p>
        </div>
      </div>

      {/* Global Data Center Footprint */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Infrastructure Footprint
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            14 Sovereign Data Center Zones Worldwide
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Low-latency high-bandwidth interconnects with local data residency guarantees in compliance with regional jurisdiction statutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-white">Central India Zone</div>
            <div className="text-xs text-blue-400 font-mono">Bhopal & Mumbai Tier-4</div>
            <p className="text-[11px] text-slate-400 mt-1">MeitY empanelled sovereign cloud compliance, sub-12ms latency.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-white">Southeast Asia Hub</div>
            <div className="text-xs text-blue-400 font-mono">Singapore & Jakarta</div>
            <p className="text-[11px] text-slate-400 mt-1">MAS TRM & Indonesian Law 27/2022 compliant data residency.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-white">European Union Region</div>
            <div className="text-xs text-blue-400 font-mono">Frankfurt & Amsterdam</div>
            <p className="text-[11px] text-slate-400 mt-1">GDPR & EU AI Act High-Risk conformant air-gapped nodes.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-white">North America West & East</div>
            <div className="text-xs text-blue-400 font-mono">San Francisco & Virginia</div>
            <p className="text-[11px] text-slate-400 mt-1">SOC 2 Type II, HIPAA Title II, and FedRAMP High audited.</p>
          </div>
        </div>
      </div>

      {/* Certifications and Compliance */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
          Certified Institutional Compliance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto" />
            <div className="font-bold text-white text-sm">SOC 2 Type II</div>
            <p className="text-[11px] text-slate-400">Continuous 365-day security auditing with zero exceptions.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto" />
            <div className="font-bold text-white text-sm">ISO/IEC 27001</div>
            <p className="text-[11px] text-slate-400">Information Security Management Certification.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto" />
            <div className="font-bold text-white text-sm">HIPAA Title II</div>
            <p className="text-[11px] text-slate-400">Business Associate Agreement (BAA) for protected health info.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto" />
            <div className="font-bold text-white text-sm">GDPR & CCPA</div>
            <p className="text-[11px] text-slate-400">Automated right-to-erasure and cryptographic pseudonymization.</p>
          </div>
        </div>
      </div>

      {/* Proposal CTA banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white font-display">Looking for Transparent Project Rates?</h3>
          <p className="text-xs text-slate-300 mt-1">Review our fixed-price scope proposal (₹1,500 – ₹12,500 INR) with 14-day milestone delivery.</p>
        </div>
        <button
          onClick={onOpenProposal}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
        >
          View Client Proposal & Milestones
        </button>
      </div>
    </div>
  );
};
