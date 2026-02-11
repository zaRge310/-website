export default function OtherPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#141414]">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-3">
            OTHER SERVICES
          </p>
          <h1 className="text-4xl font-semibold mb-6">その他対応可能な業務</h1>
          <p className="text-[#2A2A2A]/80 leading-relaxed max-w-3xl">
            不動産・リフォーム事業を中心に、周辺領域のご相談にも柔軟に対応しております。
            詳細は内容を確認のうえ、個別にご案内いたします。
          </p>

          {/* ✅ EXPERTISE（トップから移動） */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-2">
                EXPERTISE
              </p>
              <h2 className="text-lg font-semibold mb-2">
                医療翻訳1級（社内人材）
              </h2>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                医療分野における文書・資料の翻訳に対応可能です。
              </p>
            </div>

            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-2">
                LANGUAGE
              </p>
              <h2 className="text-lg font-semibold mb-2">
                中国語・韓国語（必要に応じ対応）
              </h2>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                商談・業務コミュニケーションにおける通訳・翻訳のご相談に対応します。
              </p>
            </div>

            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-2">
                LICENSE
              </p>
              <h2 className="text-lg font-semibold mb-2">宅地建物取引士 在籍</h2>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                不動産取引における適切な手続きをサポートします。
              </p>
            </div>
          </div>

          {/* 業務 */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl">
              <h3 className="font-semibold mb-3">国際貿易サポート</h3>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                海外取引に関する書類対応や調整業務など、必要に応じてサポートします。
              </p>
            </div>
            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl">
              <h3 className="font-semibold mb-3">通訳業務</h3>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                中国語・韓国語を中心に、商談や業務コミュニケーションの通訳が可能です。
              </p>
            </div>
            <div className="p-8 bg-white/60 border border-black/10 rounded-2xl">
              <h3 className="font-semibold mb-3">医療翻訳</h3>
              <p className="text-sm text-[#2A2A2A]/75 leading-relaxed">
                医療分野に特化した高精度な翻訳にも対応しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#141414] text-white/70 py-12">
        <div className="max-w-6xl mx-auto px-6 text-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-white/80">© AIHASHI株式会社</p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors">
              トップ
            </a>
            <a href="/company" className="hover:text-white transition-colors">
              会社概要
            </a>
            <a href="/entry" className="hover:text-white transition-colors">
              物件募集
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
