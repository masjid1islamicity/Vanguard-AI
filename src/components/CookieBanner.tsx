import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, X, Check } from 'lucide-react';
import { PageId } from '../types';

interface CookieBannerProps {
  onNavigate: (page: PageId) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    functional: true,
  });

  useEffect(() => {
    const saved = localStorage.getItem('vanguard_cookie_consent');
    if (!saved) {
      // Small intentional delay so it doesn't pop up instantly on first paint
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('vanguard_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('vanguard_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('vanguard_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:max-w-xl z-50 p-5 bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-md text-xs text-slate-300 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
          <h4 className="font-bold text-white text-sm">Enterprise Privacy & Cookie Governance</h4>
        </div>
        <button
          onClick={handleRejectNonEssential}
          className="text-slate-400 hover:text-white p-1"
          aria-label="Dismiss cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-slate-400 leading-relaxed text-xs">
        Islamicity Vanguard AI uses essential cookies to deliver secure authentication, cryptographic tenant routing, and telemetry verification. You may review our{' '}
        <button
          onClick={() => onNavigate('cookies')}
          className="text-blue-400 underline hover:text-blue-300"
        >
          Cookie Policy
        </button>{' '}
        for details.
      </p>

      {showPreferences && (
        <div className="pt-2 pb-1 space-y-2 border-t border-slate-800 text-xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold text-white">Strictly Necessary</span>
              <p className="text-[11px] text-slate-400">Core security & session token persistence.</p>
            </div>
            <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
              Required
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold text-white">Performance Telemetry</span>
              <p className="text-[11px] text-slate-400">Aggregated inference latency diagnostics.</p>
            </div>
            <input
              type="checkbox"
              checked={preferences.functional}
              onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
              className="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0 w-4 h-4"
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <button
          onClick={() => setShowPreferences(!showPreferences)}
          className="text-slate-400 hover:text-slate-200 underline text-xs inline-flex items-center gap-1"
        >
          <Settings className="w-3.5 h-3.5" />
          <span>{showPreferences ? 'Hide Options' : 'Preferences'}</span>
        </button>

        <div className="flex items-center gap-2">
          {showPreferences ? (
            <button
              onClick={handleSavePreferences}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
            >
              Save Choices
            </button>
          ) : (
            <>
              <button
                onClick={handleRejectNonEssential}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
              >
                Accept All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
