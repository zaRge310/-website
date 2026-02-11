export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#141414]">
      {/* Top awards / credibility strip (dummy) */}
      <section className="bg-[#F7F5F1] border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="grid sm:grid-cols-3 gap-3 text-xs text-black/70">
            <div className="bg-white/70 border border-black/10 rounded-xl px-4 py-3">
              <p className="font-semibold text-black/80">QUALITY</p>
              <p>宅建士在籍 / 取引の透明性</p>
            </div>
            <div className="bg-white/70 border border-black/10 rounded-xl px-4 py-3">
              <p className="font-semibold text-black/80">LANGUAGES</p>
              <p>中国語・韓国語対応</p>
            </div>
            <div className="bg-white/70 border border-black/10 rounded-xl px-4 py-3">
              <p className="font-semibold text-black/80">EXPERTISE</p>
              <p>医療翻訳1級（社内人材）</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F5F1] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="reveal" style={{ animationDelay: "40ms" }}>
                  <img
                    src="/aihashi-logo-mark.png"
                    alt="AIHASHI ロゴマーク"
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                </div>
                <div className="reveal" style={{ animationDelay: "120ms" }}>
                  <img
                    src="/aihashi-logo-text.png"
                    alt="AIHASHI"
                    className="h-10 md:h-12 w-auto"
                  />
                </div>
              </div>

              <p
                className="reveal text-xs tracking-[0.22em] text-black/50 mb-3"
                style={{ animationDelay: "170ms" }}
              >
                REFORM & REAL ESTATE
              </p>

              <h1
                className="reveal text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 fancy"
                style={{ animationDelay: "220ms" }}
              >
                価値を、つなぎ直す。
              </h1>

              <p
                className="reveal text-[17px] md:text-lg text-black/70 leading-relaxed mb-10"
                style={{ animationDelay: "300ms" }}
              >
                AIHASHI株式会社は、リフォームを通じて不動産に新しい価値を与え、
                住まいと人をつなぎます。
              </p>

              <div
                className="reveal flex flex-col sm:flex-row gap-4"
                style={{ animationDelay: "380ms" }}
              >
                <a
                  href="#works"
                  className="px-6 py-3 rounded-xl bg-[#141414] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-shadow text-center"
                >
                  施工・販売例を見る
                </a>
                <a
                  href="/entry"
                  className="px-6 py-3 rounded-xl border border-[#141414]/60 bg-white/60 backdrop-blur hover:bg-white transition-colors text-center"
                >
                  物件を募集する
                </a>
              </div>

              <div className="mt-8 text-sm text-black/60">
                <a
                  href="/other"
                  className="underline hover:text-black transition-colors"
                >
                  その他対応可能な業務はこちら
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="hidden md:block">
              <div className="relative reveal" style={{ animationDelay: "260ms" }}>
                <div className="relative aspect-[4/3] rounded-[28px] bg-white/70 border border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat floaty"
                    style={{
                      backgroundImage: "url(/aihashi-logo-text.png)",
                      backgroundSize: "85%",
                      opacity: 0.075,
                      transform: "rotate(-8deg) scale(1.08)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-transparent"
                    aria-hidden="true"
                  />

                  {/* dummy UI cards to feel “real” */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                    <div className="bg-white/85 border border-black/10 rounded-2xl px-4 py-3">
                      <p className="text-xs text-black/50">PLAN</p>
                      <p className="text-sm font-semibold">リノベ企画</p>
                    </div>
                    <div className="bg-white/85 border border-black/10 rounded-2xl px-4 py-3">
                      <p className="text-xs text-black/50">SAFETY</p>
                      <p className="text-sm font-semibold">取引の透明性</p>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full bg-black/5" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-black/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.22em] text-black/50 mb-3">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl font-semibold fancy">選ばれる理由</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ReasonCard
              title="再生を前提に、価値を設計"
              desc="「直す」だけでなく、住まいの使い方まで含めて再設計。出口（販売・賃貸・運用）を意識して提案します。"
            />
            <ReasonCard
              title="宅建士在籍で、安心の取引"
              desc="重要事項や条件整理、売買の論点を明確化。スピードと透明性を両立します。"
            />
            <ReasonCard
              title="多言語での相談対応"
              desc="中国語・韓国語対応。海外のお客様やご家族ともスムーズに情報共有できます。"
            />
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.22em] text-black/50 mb-3">
              SERVICES
            </p>
            <h2 className="text-3xl font-semibold fancy">事業内容</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <ServiceCard
              title="リフォーム済み不動産の販売"
              desc="中古物件を丁寧にリフォームし、現代のライフスタイルに合う住まいとして販売します。"
              badge="SALE"
            />
            <ServiceCard
              title="リフォーム可能物件の募集"
              desc="空き家・中古住宅など、再活用が可能な物件を募集しています。まずは相談から。"
              badge="ENTRY"
            />
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.22em] text-black/50 mb-3">
              WORKS
            </p>
            <h2 className="text-3xl font-semibold fancy">施工・販売例（仮）</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "東京都〇〇区 リノベーション物件", meta: "3,980万円 / 2LDK" },
              { title: "神奈川県〇〇市 住み替え向け改修", meta: "施工例（仮）/ 水回り一式" },
              { title: "埼玉県〇〇市 資産運用向け再生", meta: "施工例（仮）/ 賃貸想定" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="h-44 bg-gray-200" />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-black/60">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.22em] text-black/50 mb-3">
              NEWS
            </p>
            <h2 className="text-3xl font-semibold fancy">お知らせ（仮）</h2>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden">
            {[
              { date: "2026/02/10", title: "サイトを公開しました（仮）" },
              { date: "2026/02/05", title: "物件募集フォームを整備しました（仮）" },
              { date: "2026/02/01", title: "施工・販売例の掲載準備中です（仮）" },
            ].map((n, i) => (
              <div
                key={i}
                className="flex gap-6 px-6 py-5 border-b border-black/10 last:border-b-0"
              >
                <div className="text-sm text-black/50 w-28 shrink-0">
                  {n.date}
                </div>
                <div className="text-sm text-black/80">{n.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.22em] text-black/50 mb-3">
              CONTACT
            </p>
            <h2 className="text-3xl font-semibold fancy">お問い合わせ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-[#F7F5F1] border border-black/10 rounded-2xl p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold mb-3">物件募集のご相談</h3>
              <p className="text-sm text-black/70 leading-relaxed mb-6">
                「売却を検討している」「空き家の活用に悩んでいる」など、
                まずはフォームから気軽にご相談ください。
              </p>
              <a
                href="/entry"
                className="inline-block px-8 py-4 bg-[#141414] text-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-shadow"
              >
                物件募集フォームへ
              </a>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8">
              <h3 className="font-semibold mb-2">会社情報</h3>
              <p className="text-sm text-black/70 mb-6">
                会社概要ページに詳細を掲載しています。
              </p>
              <a
                href="/company"
                className="inline-block px-6 py-3 rounded-xl border border-black/20 bg-white hover:bg-white/80 transition-colors"
              >
                会社概要を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-center">
          <p>© AIHASHI株式会社</p>
        </div>
      </footer>
    </main>
  );
}

function ReasonCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-8 bg-white border border-black/10 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
      <h3 className="font-semibold mb-3">{title}</h3>
      <p className="text-sm text-black/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  badge,
}: {
  title: string;
  desc: string;
  badge: string;
}) {
  return (
    <div className="p-8 bg-white border border-black/10 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-xs tracking-[0.18em] px-3 py-1 rounded-full bg-black/5 text-black/70">
          {badge}
        </span>
      </div>
      <p className="text-black/70 leading-relaxed">{desc}</p>
    </div>
  );
}
