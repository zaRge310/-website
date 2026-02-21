export default function CompanyPage() {
  return (
    <main className="min-h-screen relative bg-[#FCFBF9] text-[#141414]">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#D4B478]/10 blur-[140px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-[#E5D5B5]/20 blur-[150px] rounded-full mix-blend-multiply" />
      </div>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 reveal">
            <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-4 uppercase font-sans">Corporate Profile</p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">会社概要</h1>
          </div>

          <div className="glass-panel rounded-[2rem] p-8 md:p-14 reveal reveal-delay-1 relative overflow-hidden bg-white/60">
            <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#D4B478]/10 blur-[80px] rounded-full mix-blend-multiply pointer-events-none" />

            <dl className="space-y-6 md:space-y-8 font-serif position-relative z-10">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-black/5 pb-6">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase">商号</dt>
                <dd className="text-[#111] text-lg font-medium tracking-wide">アイハシ株式会社</dd>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-black/5 pb-6">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase">創立</dt>
                <dd className="text-[#111] text-[15px] font-medium">令和 元年5月8日</dd>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-black/5 pb-6">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase">代表者</dt>
                <dd className="text-[#111] text-[15px] font-medium">趙 善徽</dd>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-black/5 pb-6">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase">資本金</dt>
                <dd className="text-[#111] text-[15px] font-medium">800万円</dd>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-black/5 pb-6">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase">所在地</dt>
                <dd className="text-[#111] text-[15px] font-medium">東京都新宿区新宿二丁目１２－１３</dd>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-black/5 pb-6">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase">ホームページ</dt>
                <dd className="text-[#111] text-[15px] font-medium">
                  <a href="http://www.aihashi.co.jp" target="_blank" rel="noreferrer" className="hover:text-[#C29B57] transition-colors underline underline-offset-4 decoration-black/20">
                    http://www.aihashi.co.jp
                  </a>
                </dd>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-black/5 pb-6">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase">銀行</dt>
                <dd className="text-[#111] text-[15px] font-medium">三井住友銀行新宿支店</dd>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8 pt-2">
                <dt className="w-[180px] shrink-0 text-[#141414]/50 text-[13px] tracking-[0.2em] font-sans uppercase mt-1">主要業務</dt>
                <dd className="text-[#111] text-[15px] font-medium leading-[2.2]">
                  <ul className="space-y-1">
                    <li className="text-[#C29B57] font-semibold">— 不動産売買 / 不動産再生（リフォーム・リノベーション）</li>
                    <li>— AI、IoT、NetWorkなどIT系コンサルティング</li>
                    <li>— 日中業務のコンサルティング、翻訳、通訳</li>
                    <li>— 英語、日本語、韓国語、中国語対応</li>
                    <li>— IT、サービス業、労務の人材紹介</li>
                    <li>— 電子製品の日本販売</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16 reveal reveal-delay-2 text-center">
            <a
              href="/"
              className="inline-flex items-center text-xs tracking-widest uppercase text-[#141414]/50 hover:text-[#C29B57] transition-colors group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
              HOMEへ戻る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
