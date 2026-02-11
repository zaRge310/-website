export default function OtherBusinessPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#141414]">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm text-black/60 mb-3">Other Services</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight fancy mb-10">
            その他対応可能な業務
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/80 border border-black/10 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold mb-3">国際貿易サポート</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                海外取引に関する書類対応や調整業務など、
                不動産以外の分野でも柔軟に対応しています。
              </p>
            </div>

            <div className="p-8 bg-white/80 border border-black/10 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold mb-3">通訳業務</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                中国語・韓国語を中心に、商談や業務コミュニケーションの通訳が可能です。
              </p>
            </div>

            <div className="p-8 bg-white/80 border border-black/10 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold mb-3">医療翻訳</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                医療分野に特化した高精度な翻訳にも対応しています。
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/"
              className="inline-block px-6 py-3 rounded-xl border border-black/20 bg-white hover:bg-white/80 transition-colors"
            >
              トップへ戻る
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-sm text-center">
          <p>© AIHASHI株式会社</p>
        </div>
      </footer>
    </main>
  );
}
