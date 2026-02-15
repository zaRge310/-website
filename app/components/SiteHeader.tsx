"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        "backdrop-blur",
        scrolled
          ? "bg-white/90 shadow-[0_14px_50px_rgba(0,0,0,0.10)] border-b border-black/10"
          : "bg-white/60 border-b border-black/5",
      ].join(" ")}
    >
      <div
        className={[
          "max-w-6xl mx-auto px-6 flex items-center justify-between",
          "transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        ].join(" ")}
      >
        {/* Brand: 赤ロゴのみ */}
        <a href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <span
            className={[
              "grid place-items-center rounded-xl",
              "bg-white/70 border border-black/10",
              "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
              "transition-all duration-300",
              scrolled ? "w-10 h-10" : "w-11 h-11",
            ].join(" ")}
          >
            <img
              src="/aihashi-logo-mark.png"
              alt="AIHASHI"
              className={["w-7 h-7", scrolled ? "scale-95" : "scale-100"].join(" ")}
            />
          </span>
          <span className="text-sm tracking-[0.18em] text-black/65 hidden sm:block">
            AIHASHI
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
          <a href="/#reason" className="hover:text-black transition-colors">
            選ばれる理由
          </a>
          <a href="/#services" className="hover:text-black transition-colors">
            事業内容
          </a>
          <a href="/#works" className="hover:text-black transition-colors">
            施工・販売例
          </a>

          <div className="h-5 w-px bg-black/10 mx-1" />

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

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2 text-sm">
          <a
            href="/entry"
            className="px-3 py-2 rounded-lg bg-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
            onClick={closeMenu}
          >
            物件募集
          </a>
          <button
            type="button"
            aria-label="メニュー"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="px-3 py-2 rounded-lg border border-black/15 bg-white/70"
          >
            メニュー
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/92 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 grid gap-2 text-sm text-black/80">
            <a href="/#reason" className="py-2 rounded-lg hover:bg-black/5 px-3" onClick={closeMenu}>
              選ばれる理由
            </a>
            <a href="/#services" className="py-2 rounded-lg hover:bg-black/5 px-3" onClick={closeMenu}>
              事業内容
            </a>
            <a href="/#works" className="py-2 rounded-lg hover:bg-black/5 px-3" onClick={closeMenu}>
              施工・販売例
            </a>

            <div className="my-2 h-px bg-black/10" />

            <a href="/company" className="py-2 rounded-lg hover:bg-black/5 px-3" onClick={closeMenu}>
              会社概要
            </a>
            <a href="/other" className="py-2 rounded-lg hover:bg-black/5 px-3" onClick={closeMenu}>
              その他業務
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
