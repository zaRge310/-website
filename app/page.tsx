export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#141414]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
          <div className="absolute -bottom-56 left-1/3 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 md:pt-24 md:pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              {/* ヘッダーは赤ロゴのみになったので、ここはブランド表示を最小化 */}
              <div className="flex items-center gap-3 mb-10">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/70 border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                  <img
                    src="/aihashi-logo-mark.png"
                    alt="AIHASHI"
                    className="w-7 h-7"
                  />
                </span>
                <p className="text-xs tracking-[0.22em] text-[#141414]/60">
                  AIHASHI
                </p>
              </div>

              <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-4">
                REFORMED REAL ESTATE / PROPERTY SOURCING
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] mb-6">
                価値を、つなぎ直す。
              </h1>

              <p className="text-[15.5px] md:text-[17px] leading-relaxed text-[#2A2A2A]/85 mb-10">
                AIHASHI株式会社は、リフォームを通じて不動産に新しい価値を与え、
                住まいと人をつなぎます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/entry"
                  className="px-7 py-4 rounded-xl bg-[#141414] text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-shadow text-center"
                >
                  物件を提案する
                </a>
                <a
                  href="#works"
                  className="px-7 py-4 rounded-xl border border-[#141414]/40 bg-white/40 backdrop-blur hover:bg-white/60 transition-colors text-center"
                >
                  販売中の物件を見る
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/60 border border-black/10 rounded-full text-sm">
                  宅地建物取引士 在籍
                </span>
                <span className="px-3 py-1 bg-white/60 border border-black/10 rounded-full text-sm">
                  リフォーム再生に対応
                </span>
                <span className="px-3 py-1 bg-white/60 border border-black/10 rounded-full text-sm">
                  新宿拠点
                </span>
              </div>

              <div className="mt-6">
                <a
                  href="/other"
                  className="text-sm underline underline-offset-4 text-[#141414]/70 hover:text-[#141414] transition-colors"
                >
                  その他対応可能な業務はこちら
                </a>
              </div>
            </div>

            {/* Right Visual: ロゴを“見える高級感”へ */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[28px] bg-white/60 border border-black/10 shadow-[0_24px_80px_rgba(0,0,0,0.10)] overflow-hidden">
                  {/* 立体感：うっすら内側ハイライト */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(1200px 500px at 30% 20%, rgba(255,255,255,0.85), rgba(255,255,255,0.20), rgba(255,255,255,0))",
                    }}
                    aria-hidden="true"
                  />

                  {/* 背景ロゴ：opacityだけでなく mask + blur で上品に“読める” */}
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url(/aihashi-logo-text.png)",
                      backgroundSize: "96%",
                      opacity: 0.22,
                      filter: "blur(0.2px)",
                      transform: "rotate(-7deg) scale(1.08)",
                      // 上側を少し強く、下に行くほど薄く
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.45), rgba(0,0,0,0.18))",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.45), rgba(0,0,0,0.18))",
                    }}
                    aria-hidden="true"
                  />

                  {/* 仕上げ：薄いグレイン風（上品） */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.35) 1px, transparent 0)",
                      backgroundSize: "12px 12px",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* luxury accent circles */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full bg-black/5" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-black/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section id="reason" className="py-20 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-3">
            REASON
          </p>
          <h2 className="text-3xl font-semibold mb-10">選ばれる理由</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold mb-3">再生を前提にした目利き</h3>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                立地・法規・管理状況などを踏まえ、リフォームで価値を高められる可能性を検討します。
              </p>
            </div>
            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold mb-3">取引の安心</h3>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                宅地建物取引士が在籍し、重要事項説明など必要な手続きを適切にサポートします。
              </p>
            </div>
            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold mb-3">スピードと柔軟性</h3>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                物件の状況に合わせて、売却・再生・募集の進め方を柔軟にご提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="services" className="py-20 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-3">
            SERVICES
          </p>
          <h2 className="text-3xl font-semibold mb-10">事業内容</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold mb-4">
                リフォーム済み不動産の販売
              </h3>
              <p className="text-[#2A2A2A]/80 leading-relaxed">
                中古物件を丁寧にリフォームし、現代のライフスタイルに合った住まいとして販売しています。
              </p>
            </div>

            <div className="p-10 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold mb-4">
                リフォーム可能物件の募集
              </h3>
              <p className="text-[#2A2A2A]/80 leading-relaxed">
                空き家・中古住宅など、リフォームによる再活用が可能な物件情報を募集しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 施工・販売例 */}
      <section
        id="works"
        className="py-20 bg-white/35 border-y border-black/5 scroll-mt-28"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-3">
            WORKS
          </p>
          <h2 className="text-3xl font-semibold mb-10">施工・販売例（例）</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/70 border border-black/10 rounded-2xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
              >
                <div className="h-44 bg-black/5" />
                <div className="p-6">
                  <h4 className="font-semibold mb-2">
                    東京都〇〇区 リノベーション物件
                  </h4>
                  <p className="text-sm text-[#2A2A2A]/70">
                    価格：3,980万円 / 2LDK
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl bg-white/60 border border-black/10 shadow-[0_22px_70px_rgba(0,0,0,0.08)] p-10 md:p-12">
            <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-3">
              SOURCING
            </p>
            <h3 className="text-2xl font-semibold mb-3">
              リフォーム可能物件のご提案を募集
            </h3>
            <p className="text-[#2A2A2A]/80 leading-relaxed mb-8">
              当社では、リフォーム・再生に適した不動産（区分マンション／戸建て／空き家等）の情報を募集しております。
              売却をご検討中の物件や活用方法にお悩みの不動産がございましたら、下記フォームよりご連絡ください。
            </p>
            <a
              href="/entry"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#141414] text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-shadow"
            >
              物件提案フォームへ
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#141414] text-white/70 py-12">
        <div className="max-w-6xl mx-auto px-6 text-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-white/80">© AIHASHI株式会社</p>
          <div className="flex gap-6">
            <a href="/company" className="hover:text-white transition-colors">
              会社概要
            </a>
            <a href="/entry" className="hover:text-white transition-colors">
              物件募集
            </a>
            <a href="/other" className="hover:text-white transition-colors">
              その他業務
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
