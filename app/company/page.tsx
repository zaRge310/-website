export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#141414]">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-black/60 mb-3">Company</p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight fancy mb-12">
            会社概要
          </h1>

          <div className="bg-white/80 border border-black/10 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="divide-y divide-black/10 text-sm md:text-base">
              <Row label="商号" value="アイハシ株式会社" />
              <Row label="創立" value="令和 元年5月8日" />
              <Row label="代表者" value="趙 善徽" />
              <Row label="資本金" value="800万円" />
              <Row label="所在地" value="東京都新宿区新宿二丁目１２－１３" />
              <Row
                label="ホームページ"
                value={
                  <a
                    href="http://www.aihashi.co.jp"
                    target="_blank"
                    className="underline hover:opacity-70 transition"
                  >
                    http://www.aihashi.co.jp
                  </a>
                }
              />
              <Row label="銀行" value="三井住友銀行新宿支店" />

              <div className="grid md:grid-cols-[220px_1fr]">
                <div className="px-6 py-6 font-medium bg-[#FAF9F6]">
                  主要業務
                </div>
                <div className="px-6 py-6 leading-relaxed text-black/80 space-y-2">
                  <p>AI、IoT、NetWorkなどIT系コンサルティング</p>
                  <p>日中業務のコンサルティング、翻訳、通訳</p>
                  <p>英語、日本語、韓国語、中国語対応</p>
                  <p>IT、サービス業、労務の人材紹介</p>
                  <p>電子製品の日本販売</p>
                </div>
              </div>
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

function Row({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[220px_1fr]">
      <div className="px-6 py-5 font-medium bg-[#FAF9F6]">{label}</div>
      <div className="px-6 py-5 text-black/80">{value}</div>
    </div>
  );
}
