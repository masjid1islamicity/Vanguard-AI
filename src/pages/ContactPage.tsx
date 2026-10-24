import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe2 } from 'lucide-react';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProposal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenProposal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiryType: 'Enterprise License',
    timeline: 'Immediate (< 30 days)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please provide a valid corporate email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const offices = [
    {
      city: 'Bhopal Engineering Hub',
      country: 'India',
      address: 'Vanguard AI Tech Park, Sematangborang Tech Corridor, Bhopal, MP 462001',
      email: 'bhopal.ops@vanguard-ai.cloud',
      phone: '+91 755 2894 100',
      hours: 'Mon – Fri, 09:00 – 19:00 IST',
    },
    {
      city: 'Jakarta & Palembang Hub',
      country: 'Indonesia',
      address: 'Sudirman Central Business District (SCBD) Tower 2, Jakarta 12190',
      email: 'indonesia.hub@vanguard-ai.cloud',
      phone: '+62 21 5150 880',
      hours: 'Mon – Fri, 08:30 – 18:00 WIB',
    },
    {
      city: 'Singapore Regional HQ',
      country: 'Singapore',
      address: '1 Marina Boulevard, Level 28, Marina Bay, Singapore 018989',
      email: 'apac.enterprise@vanguard-ai.cloud',
      phone: '+65 6812 4500',
      hours: 'Mon – Fri, 09:00 – 18:00 SGT',
    },
    {
      city: 'London European Office',
      country: 'United Kingdom',
      address: '100 Bishopsgate, City of London, London EC2N 4AG',
      email: 'emea.sovereign@vanguard-ai.cloud',
      phone: '+44 20 7946 0920',
      hours: 'Mon – Fri, 09:00 – 17:30 GMT',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          Direct Enterprise Engagement
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance">
          Connect With Our Principal AI Solutions Team
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Whether scoping an air-gapped on-premises deployment, scheduling an architecture audit, or discussing our fixed-price implementation milestones, we are here to support your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white font-display">Schedule Architecture Discovery</h2>
            <p className="text-xs text-slate-400">Guaranteed enterprise response within 4 business hours.</p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 space-y-3 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Discovery Call Requested</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A dedicated AI solutions director from our regional engineering hub has been assigned to your inquiry and will reach out at <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    role: '',
                    inquiryType: 'Enterprise License',
                    timeline: 'Immediate (< 30 days)',
                    message: '',
                  });
                }}
                className="mt-2 px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-slate-300">
              {error && (
                <div className="p-3 bg-rose-950/50 border border-rose-800 rounded-lg text-rose-300 text-xs">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alistair Vance"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Corporate Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Organization Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Sematangborang Cloud Systems"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Primary Focus Area</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Enterprise License">Enterprise Platform Licensing</option>
                    <option value="Air-Gapped Sovereign Cloud">Air-Gapped Sovereign On-Prem</option>
                    <option value="Multi-Agent Swarms">Autonomous Multi-Agent Swarms</option>
                    <option value="Custom Model Fine-Tuning">Domain Model Customization</option>
                    <option value="Partnership & Integration">System Integrator Partnership</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Workload Requirements & Scope *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline expected query volume, security compliance constraints (e.g. SOC2, HIPAA), and anticipated rollout schedule..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onOpenProposal}
                  className="text-xs text-blue-400 hover:text-blue-300 underline"
                >
                  Review Fixed-Price Milestones (₹1,500 – ₹12,500 INR)
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Global Hubs */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
            Global Engineering & Operations Hubs
          </h2>

          <div className="space-y-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{office.city}</span>
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                    {office.country}
                  </span>
                </div>
                <div className="text-slate-400 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="pt-1 flex flex-wrap items-center gap-4 text-slate-300 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-blue-400" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-blue-400" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
