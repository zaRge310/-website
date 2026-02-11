"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300 backdrop-blur",
        scrolled
          ? "bg-white/85 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border-b border-black/10"
          : "bg-white/55 border-b border-black/5",
      ].join(" ")}
    >
      <div
        className={[
          "max-w-6xl mx-auto px-6 flex items-center justify-between",
          "transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        ].join(" ")}
      >
        <a href="/" className="flex items-center gap-3">
          <img
            src="/aihashi-logo-mark.png"
            alt="AIHASHI ロゴマーク"
            className={[
              "w-8 h-8 transition-transform duration-300",
              scrolled ? "scale-95" : "scale-100",
            ].join(" ")}
          />
          <img
            src="/aihashi-logo-text.png"
            alt="AIHASHI"
            className={[
              "w-auto transition-all duration-300",
              scrolled ? "h-5" : "h-6",
            ].join(" ")}
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
          <a href="/#why" className="hover:text-black transition-colors">
            選ばれる理由
          </a>
          <a href="/#service" className="hover:text-black transition-colors">
            事業内容
          </a>
          <a href="/#works" className="hover:text-black transition-colors">
            施工・販売例
          </a>
          <a href="/entry" className="hover:text-black transition-colors">
            物件募集
          </a>
          <a href="/company" className="hover:text-black transition-colors">
            会社概要
          </a>
          <a href="/other" className="hover:text-black transition-colors">
            その他業務
          </a>
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-3 text-sm">
          <a
            href="/entry"
            className="px-3 py-2 rounded-lg bg-black text-white"
          >
            物件募集
          </a>
          <a href="/company" className="px-3 py-2 rounded-lg border">
            会社概要
          </a>
        </div>
      </div>
    </header>
  );
}
