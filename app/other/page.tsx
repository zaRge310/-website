export default function OtherPage() {
  return (
    <main className="min-h-screen relative bg-[#FCFBF9] text-[#141414]">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#D4B478]/10 blur-[140px] rounded-full mix-blend-multiply" />
      </div>

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 reveal text-center md:text-left">
            <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-4 uppercase font-sans">Other Services</p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">その他対応可能な業務</h1>
            <p className="text-sm text-[#141414]/60 font-medium leading-[2] max-w-2xl">
              不動産・リフォーム事業を中心に、周辺領域のご相談にも柔軟に対応しております。
              詳細は内容を確認のうえ、個別にご案内いたします。
            </p>
          </div>

          {/* EXPERTISE */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="glass-panel bg-white/60 p-10 rounded-[2rem] reveal reveal-delay-1 group hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[10px] tracking-[0.3em] text-[#C29B57]/80 mb-4 uppercase font-sans">Expertise</p>
              <h2 className="text-xl font-serif text-[#111] mb-4 group-hover:text-[#C29B57] transition-colors">
                医療翻訳1級（社内人材）
              </h2>
              <p className="text-sm text-[#141414]/70 font-light leading-relaxed">
                医療分野における専門的な文書・資料の翻訳に対応可能です。高精度な表現を要する資料にご活用ください。
              </p>
            </div>

            <div className="glass-panel bg-white/60 p-10 rounded-[2rem] reveal reveal-delay-2 group hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[10px] tracking-[0.3em] text-[#C29B57]/80 mb-4 uppercase font-sans">Language</p>
              <h2 className="text-xl font-serif text-[#111] mb-4 group-hover:text-[#C29B57] transition-colors">
                中国語・韓国語
              </h2>
              <p className="text-sm text-[#141414]/70 font-light leading-relaxed">
                必要に応じて、商談・業務コミュニケーションにおける通訳や翻訳のご相談に対応いたします。
              </p>
            </div>

            <div className="glass-panel bg-white/60 p-10 rounded-[2rem] reveal reveal-delay-3 group hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[10px] tracking-[0.3em] text-[#C29B57]/80 mb-4 uppercase font-sans">License</p>
              <h2 className="text-xl font-serif text-[#111] mb-4 group-hover:text-[#C29B57] transition-colors">
                宅地建物取引士 在籍
              </h2>
              <p className="text-sm text-[#141414]/70 font-light leading-relaxed">
                不動産取引における法的な要件から、適切な手続きまで専門資格者がしっかりとサポートします。
              </p>
            </div>
          </div>

          {/* 業務 */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 pt-16 border-t border-black/5">
            <div className="p-8 reveal reveal-delay-1 bg-white/40 rounded-[2rem] border border-black/5">
              <h3 className="font-serif text-lg text-[#111] mb-4 flex items-center gap-3">
                <span className="w-[1px] h-[15px] bg-[#C29B57] inline-block" />
                国際貿易サポート
              </h3>
              <p className="text-sm text-[#141414]/70 font-light leading-[1.8]">
                海外取引に関する書類対応や調整業務など、必要に応じてサポートします。
              </p>
            </div>
            <div className="p-8 reveal reveal-delay-2 bg-white/40 rounded-[2rem] border border-black/5">
              <h3 className="font-serif text-lg text-[#111] mb-4 flex items-center gap-3">
                <span className="w-[1px] h-[15px] bg-[#C29B57] inline-block" />
                通訳業務
              </h3>
              <p className="text-sm text-[#141414]/70 font-light leading-[1.8]">
                中国語・韓国語を中心に、商談や業務コミュニケーションの通訳が可能です。
              </p>
            </div>
            <div className="p-8 reveal reveal-delay-3 bg-white/40 rounded-[2rem] border border-black/5">
              <h3 className="font-serif text-lg text-[#111] mb-4 flex items-center gap-3">
                <span className="w-[1px] h-[15px] bg-[#C29B57] inline-block" />
                医療翻訳
              </h3>
              <p className="text-sm text-[#141414]/70 font-light leading-[1.8]">
                医療分野に特化した高精度な翻訳にも対応しています。
              </p>
            </div>
          </div>

          <div className="mt-20 reveal reveal-delay-4 text-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl glass-panel text-[#111] text-xs tracking-widest uppercase hover:bg-white transition-all font-sans"
            >
              HOMEへ戻る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
