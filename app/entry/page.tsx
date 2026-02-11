export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            物件募集フォーム
          </h1>
          <p className="text-gray-600 mb-12 text-center">
            リフォーム可能な物件・売却をご検討中の不動産について、
            以下のフォームよりご相談ください。
          </p>

          <form
            action="https://formspree.io/f/xyzzabcd"
            method="POST"
            className="bg-white border rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">お名前</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-xl px-4 py-3"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-xl px-4 py-3"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">電話番号</label>
              <input
                type="tel"
                name="phone"
                className="w-full border rounded-xl px-4 py-3"
                placeholder="090-0000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">物件所在地</label>
              <input
                type="text"
                name="address"
                required
                className="w-full border rounded-xl px-4 py-3"
                placeholder="東京都〇〇区〇丁目"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  物件種別
                </label>
                <select
                  name="property_type"
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option>マンション</option>
                  <option>戸建て</option>
                  <option>土地</option>
                  <option>その他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  築年数
                </label>
                <input
                  type="text"
                  name="age"
                  className="w-full border rounded-xl px-4 py-3"
                  placeholder="例：築25年"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                ご相談内容
              </label>
              <textarea
                rows={5}
                name="message"
                className="w-full border rounded-xl px-4 py-3"
                placeholder="売却希望時期、現状のお悩みなど"
              />
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="px-10 py-4 bg-gray-900 text-white rounded-xl shadow"
              >
                内容を送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-sm text-center">
          <p>© AIHASHI株式会社</p>
        </div>
      </footer>
    </main>
  );
}
