"use client";

import Link from "next/link";
import { locales, localeNames, localeFlags } from "@/lib/i18n";
import { useI18n } from "./LandingPage";

export default function LanguageSwitcher() {
  const { lang } = useI18n();

  return (
    <div className="fixed top-0 right-0 left-0 z-[60] bg-navy-light/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center h-11">
        <div className="flex items-center gap-1">
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              className={`flex items-center gap-2 px-4 py-1.5 text-sm rounded transition-colors ${
                lang === l
                  ? "text-gold font-bold"
                  : "text-white/60 hover:text-gold"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={localeFlags[l]}
                alt=""
                width={22}
                height={16}
                className="rounded-[2px] object-cover"
              />
              {localeNames[l]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
