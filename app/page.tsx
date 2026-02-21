import Link from "next/link";
import { properties } from "@/app/data/properties";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#FCFBF9] text-[#141414]">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#D4B478]/10 blur-[140px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-[#E5D5B5]/20 blur-[150px] rounded-full mix-blend-multiply" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-24 px-6 md:pt-32 md:pb-40 overflow-hidden flex items-center justify-center min-h-[85vh]">
        {/* Giant Background Logo */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
          <div
            className="w-[120%] h-[120%] max-w-[1600px] bg-center bg-no-repeat opacity-[0.06] mix-blend-multiply"
            style={{
              backgroundImage: "url(/aihashi-logo-text.png)",
              backgroundSize: "contain",
              transform: "rotate(-2deg)",
            }}
          />
        </div>

        <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
          <div className="reveal flex flex-col items-center">
            <div className="flex flex-col items-center gap-4 mb-8">
              <span className="grid place-items-center w-16 h-16 rounded-2xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative overflow-hidden group">
                <img
                  src="/aihashi-logo-mark.png"
                  alt="AIHASHI"
                  className="w-10 h-10 relative z-10"
                />
              </span>
              <p className="text-sm tracking-[0.3em] text-[#141414]/50 font-sans uppercase">
                AIHASHI Inc.
              </p>
            </div>

            <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-6 uppercase font-sans">
              Reformed Real Estate / Property Sourcing
            </p>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-wide leading-[1.2] mb-10 text-[#111]">
              価値を、<br className="hidden md:block" />
              <span className="text-gradient-gold">つなぎ直す。</span>
            </h1>

            <p className="text-[17px] md:text-[19px] leading-[2.2] text-[#141414]/70 mb-12 font-sans font-normal max-w-2xl mx-auto">
              <span className="inline-block">AIHASHI株式会社は、リフォームを通じて不動産に</span>
              <span className="inline-block">新しい価値を与え、住まいと人をつなぎます。</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center w-full reveal reveal-delay-2">
              <Link
                href="/entry"
                className="px-10 py-4 rounded-xl bg-[#141414] text-white font-semibold text-sm tracking-widest shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all font-sans text-center"
              >
                物件を提案する
              </Link>
              <a
                href="#works"
                className="px-10 py-4 rounded-xl glass-panel text-[#141414] font-medium text-sm tracking-widest hover:bg-white transition-all font-sans text-center"
              >
                販売中の物件を見る
              </a>
            </div>

            <div className="mt-14 inline-flex flex-wrap justify-center gap-3 reveal reveal-delay-3">
              <span className="px-5 py-2 glass-panel rounded-full text-xs tracking-wider text-[#141414]/70 font-sans border-black/10">
                宅地建物取引士 在籍
              </span>
              <span className="px-5 py-2 glass-panel rounded-full text-xs tracking-wider text-[#141414]/70 font-sans border-black/10">
                リフォーム再生
              </span>
              <span className="px-5 py-2 glass-panel rounded-full text-xs tracking-wider text-[#141414]/70 font-sans border-black/10">
                新宿拠点
              </span>
            </div>

            <div className="mt-10 reveal reveal-delay-4">
              <Link
                href="/other"
                className="text-xs tracking-widest uppercase underline underline-offset-8 text-[#141414]/40 hover:text-[#141414] transition-colors font-sans"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reason Section */}
      <section id="reason" className="py-24 scroll-mt-28 relative z-10 border-t border-black/5 bg-[#FCFBF9]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-4 uppercase font-sans">Reason</p>
            <h2 className="text-4xl font-serif text-[#111]">選ばれる理由</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-10 py-12 rounded-3xl reveal reveal-delay-1 group">
              <div className="w-12 h-12 mb-8 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#C29B57]" />
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#111]">再生を前提にした目利き</h3>
              <p className="text-sm text-[#141414]/70 leading-[2] font-normal font-sans">
                立地・法規・管理状況などを踏まえ、リフォームで価値を高められる可能性を検討します。
              </p>
            </div>
            <div className="glass-panel p-10 py-12 rounded-3xl reveal reveal-delay-2 group">
              <div className="w-12 h-12 mb-8 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#C29B57]" />
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#111]">取引の安心</h3>
              <p className="text-sm text-[#141414]/70 leading-[2] font-normal font-sans">
                宅地建物取引士が在籍し、重要事項説明など必要な手続きを適切にサポートします。
              </p>
            </div>
            <div className="glass-panel p-10 py-12 rounded-3xl reveal reveal-delay-3 group">
              <div className="w-12 h-12 mb-8 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#C29B57]" />
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#111]">スピードと柔軟性</h3>
              <p className="text-sm text-[#141414]/70 leading-[2] font-normal font-sans">
                物件の状況に合わせて、売却・再生・募集の進め方を柔軟にご提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 scroll-mt-28 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-4 uppercase font-sans">Services</p>
            <h2 className="text-4xl font-serif text-[#111]">事業内容</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 md:p-14 rounded-[2rem] reveal reveal-delay-1 relative overflow-hidden group bg-white/60">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4B478]/10 to-transparent rounded-bl-full pointer-events-none" />
              <h3 className="text-2xl font-serif mb-6 text-[#111] transition-colors">
                リフォーム済み不動産の販売
              </h3>
              <p className="text-[#141414]/70 leading-[2] font-normal font-sans">
                中古物件を丁寧にリフォームし、現代のライフスタイルに合った住まいとして販売しています。洗練されたデザインと機能性を両立させた空間を提供します。
              </p>
            </div>

            <div className="glass-panel p-10 md:p-14 rounded-[2rem] reveal reveal-delay-2 relative overflow-hidden group bg-white/60">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#9F7A3E]/10 to-transparent rounded-bl-full pointer-events-none" />
              <h3 className="text-2xl font-serif mb-6 text-[#111] transition-colors">
                リフォーム可能物件の募集
              </h3>
              <p className="text-[#141414]/70 leading-[2] font-normal font-sans">
                空き家・中古住宅など、リフォームによる再活用が可能な物件情報を募集しています。資産価値の最大化に向けた最適なソリューションをご提案いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="works" className="py-24 scroll-mt-28 relative z-10 border-t border-black/5 bg-[#FCFBF9]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-4 uppercase font-sans">Properties</p>
              <h2 className="text-4xl font-serif text-[#111]">施工・販売例</h2>
              <p className="mt-6 text-sm text-[#141414]/60 max-w-lg font-normal font-sans leading-[2]">
                実際にご案内可能な物件を厳選して掲載しております。詳細や内覧のご予約はお気軽にお問い合わせください。
              </p>
            </div>

            <Link
              href="/entry"
              className="inline-flex glass-panel px-6 py-3 rounded-xl text-[#111] text-sm tracking-widest uppercase hover:bg-white transition-all font-sans"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {properties.map((p, i) => (
              <div
                key={p.slug}
                className={`glass-panel rounded-[2rem] overflow-hidden group reveal reveal-delay-${(i % 2) + 1} bg-white/70`}
              >
                <div className="aspect-[16/10] bg-[#F0EEEA] relative overflow-hidden">
                  <Link href={`/properties/${p.slug}`} className="absolute inset-0 z-20" aria-label={`View details for ${p.title}`} />
                  {p.thumb ? (
                    <img
                      src={p.thumb}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-xs tracking-widest text-[#141414]/30 uppercase font-sans">
                      Image Reserved
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(p.tags ?? []).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white border border-black/5 rounded-full text-[10px] tracking-wider uppercase text-[#141414]/60 font-sans shadow-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/properties/${p.slug}`} className="inline-block relative z-20">
                    <h3 className="text-2xl font-serif text-[#111] group-hover:text-[#C29B57] transition-colors">{p.title}</h3>
                  </Link>
                  {p.catch ? (
                    <p className="mt-3 text-sm text-[#141414]/60 font-normal font-sans leading-relaxed">{p.catch}</p>
                  ) : null}

                  <div className="mt-8 space-y-4 font-sans border-t border-black/5 pt-6">
                    <Row label="Price" value={p.priceText} strong />
                    <Row label="Location" value={p.locationText} />
                    <Row label="Access" value={p.accessText} />
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/properties/${p.slug}`}
                      className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-[#C29B57] hover:text-[#111] transition-colors group/link font-medium"
                    >
                      View Details
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 bottom-0 bg-white border-t border-black/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-panel bg-[#FCFBF9] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-6 uppercase font-sans reveal">
              Sourcing
            </p>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#111] reveal reveal-delay-1">
              リフォーム可能物件を探しております
            </h3>
            <p className="text-[#141414]/70 leading-[2] font-normal font-sans max-w-2xl mx-auto mb-10 reveal reveal-delay-2">
              当社では、リフォーム・再生に適した不動産（区分マンション／戸建て／空き家等）の情報を募集しております。
              売却検討中の物件や活用方法にお悩みの不動産がございましたら、ぜひご相談ください。
            </p>
            <div className="reveal reveal-delay-3">
              <Link
                href="/entry"
                className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-[#141414] text-white font-semibold text-sm tracking-widest uppercase shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="border-t border-black/5 bg-[#FCFBF9] relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/aihashi-logo-mark.png" alt="AIHASHI" className="w-6 h-6 opacity-80" />
                <span className="text-sm tracking-[0.3em] font-sans text-[#111] uppercase font-medium">AIHASHI Inc.</span>
              </div>
              <p className="text-[#141414]/50 text-xs tracking-wider font-normal font-sans">
                © {new Date().getFullYear()} AIHASHI Inc. All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
              <Link href="/company" className="text-xs tracking-widest text-[#141414]/60 hover:text-[#C29B57] uppercase font-sans transition-colors font-medium">
                Company
              </Link>
              <Link href="/entry" className="text-xs tracking-widest text-[#141414]/60 hover:text-[#C29B57] uppercase font-sans transition-colors font-medium">
                Property Entry
              </Link>
              <Link href="/contact" className="text-xs tracking-widest text-[#141414]/60 hover:text-[#C29B57] uppercase font-sans transition-colors font-medium">
                Contact
              </Link>
              <Link href="/other" className="text-xs tracking-widest text-[#141414]/60 hover:text-[#C29B57] uppercase font-sans transition-colors font-medium">
                Other Services
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-[80px] shrink-0 text-[#141414]/50 text-[11px] tracking-widest uppercase mt-[2px]">{label}</div>
      <div
        className={strong ? "font-serif text-[#111] font-medium text-[15px]" : "font-sans text-[#141414]/80 text-[13px] font-normal"}
      >
        {value}
      </div>
    </div>
  );
}
