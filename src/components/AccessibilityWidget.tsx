"use client";

import { useState } from "react";
import { useI18n } from "./LandingPage";
import LegalModal from "./LegalModal";

export default function AccessibilityWidget() {
  const { dict } = useI18n();
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div className="fixed bottom-24 right-4 z-[150] flex flex-col items-center gap-1">
        {/* X button */}
        <button
          onClick={() => setDismissed(true)}
          className="w-5 h-5 rounded-full bg-white/80 hover:bg-white border border-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center shadow transition-all text-xs"
          aria-label="סגור כפתור נגישות"
        >
          ✕
        </button>
        {/* Main accessibility button */}
        <button
          onClick={() => setOpen(true)}
          className="w-12 h-12 rounded-full bg-navy shadow-lg hover:bg-navy-light border-2 border-gold/40 hover:border-gold transition-all flex items-center justify-center group"
          aria-label={dict.accessibility.title}
          title={dict.accessibility.title}
        >
          <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 6c1.1 0 2 .9 2 2v4l1.5 3H15l-1-2h-4l-1 2H7.5L9 14v-4c0-1.1.9-2 2-2h1zm-1 2v3h2v-3h-2z"/>
          </svg>
        </button>
      </div>

      {open && <LegalModal type="accessibility" onClose={() => setOpen(false)} />}
    </>
  );
}
