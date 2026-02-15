export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#141414]">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.22em] text-[#141414]/60 mb-3">
            Company
          </p>
          <h1 className="text-4xl font-semibold tracking-tight mb-10">
            会社概要
          </h1>

          <div className="bg-white/60 border border-black/10 rounded-2xl shadow-[0_22px_70px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-b border-black/10 md:border-b-0 md:border-r">
                <p className="text-sm text-black/60 mb-2">商号</p>
                <p className="font-semibold">アイハシ株式会社</p>
              </div>
              <div className="p-8 border-b border-black/10">
                <p className="text-sm text-black/60 mb-2">創立</p>
                <p className="font-semibold">令和 元年5月8日</p>
              </div>

              <div className="p-8 border-b border-black/10 md:border-r">
                <p className="text-sm text-black/60 mb-2">代表者</p>
                <p className="font-semibold">趙 善徽</p>
              </div>
              <div className="p-8 border-b border-black/10">
                <p className="text-sm text-black/60 mb-2">資本金</p>
                <p className="font-semibold">800万円</p>
              </div>

              <div className="p-8 border-b border-black/10 md:border-r">
                <p className="text-sm text-black/60 mb-2">所在地</p>
                <p className="font-semibold">東京都新宿区新宿二丁目１２－１３</p>
              </div>
              <div className="p-8 border-b border-black/10">
                <p className="text-sm text-black/60 mb-2">ホームページ</p>
                <a
                  className="font-semibold underline underline-offset-4"
                  href="http://www.aihashi.co.jp"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.aihashi.co.jp
                </a>
              </div>

              <div className="p-8 md:border-r">
                <p className="text-sm text-black/60 mb-2">銀行</p>
                <p className="font-semibold">三井住友銀行新宿支店</p>
              </div>

              <div className="p-8">
                <p className="text-sm text-black/60 mb-3">主要業務</p>

                {/* ✅ 不動産・リフォームを追記 */}
                <ul className="space-y-2 text-[15px] leading-relaxed text-black/85">
                  <li className="font-semibold">不動産売買 / 不動産再生（リフォーム・リノベーション）</li>
                  <li>AI、IoT、NetWorkなどIT系コンサルティング</li>
                  <li>日中業務のコンサルティング、翻訳、通訳</li>
                  <li>英語、日本語、韓国語、中国語対応</li>
                  <li>IT、サービス業、労務の人材紹介</li>
                  <li>電子製品の日本販売</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/"
              className="text-sm underline underline-offset-4 text-black/70 hover:text-black transition-colors"
            >
              トップへ戻る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
