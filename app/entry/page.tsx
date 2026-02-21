export default function EntryPage() {
  return (
    <main className="min-h-screen relative bg-[#FCFBF9] text-[#141414]">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#D4B478]/10 blur-[140px] rounded-full mix-blend-multiply" />
      </div>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-16 text-center reveal">
            <p className="text-xs tracking-[0.3em] text-[#C29B57] mb-4 uppercase font-sans">Contact</p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">物件募集フォーム</h1>
            <p className="text-sm text-[#141414]/60 font-medium leading-[2]">
              リフォーム可能な物件・売却をご検討中の不動産について、<br className="hidden md:block" />
              以下のフォームよりご相談ください。
            </p>
          </div>

          <form
            action="https://formspree.io/f/xyzzabcd"
            method="POST"
            className="glass-panel bg-white/60 rounded-[2rem] p-8 md:p-14 space-y-8 reveal reveal-delay-1 relative overflow-hidden"
          >
            {/* Input Groups */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-sans tracking-widest text-[#141414]/50 uppercase mb-3 text-[10px]">お名前 Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#111] focus:outline-none focus:border-[#C29B57] focus:ring-1 focus:ring-[#C29B57]/50 transition-all text-sm font-medium placeholder-black/30"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest text-[#141414]/50 uppercase mb-3 text-[10px]">メールアドレス Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#111] focus:outline-none focus:border-[#C29B57] focus:ring-1 focus:ring-[#C29B57]/50 transition-all text-sm font-medium placeholder-black/30"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest text-[#141414]/50 uppercase mb-3 text-[10px]">電話番号 Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#111] focus:outline-none focus:border-[#C29B57] focus:ring-1 focus:ring-[#C29B57]/50 transition-all text-sm font-medium placeholder-black/30"
                  placeholder="090-0000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest text-[#141414]/50 uppercase mb-3 text-[10px]">物件所在地 Location</label>
                <input
                  type="text"
                  name="address"
                  required
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#111] focus:outline-none focus:border-[#C29B57] focus:ring-1 focus:ring-[#C29B57]/50 transition-all text-sm font-medium placeholder-black/30"
                  placeholder="東京都〇〇区〇丁目"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans tracking-widest text-[#141414]/50 uppercase mb-3 text-[10px]">物件種別 Type</label>
                  <select
                    name="property_type"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#111] focus:outline-none focus:border-[#C29B57] focus:ring-1 focus:ring-[#C29B57]/50 transition-all text-sm font-medium appearance-none"
                  >
                    <option value="マンション">マンション</option>
                    <option value="戸建て">戸建て</option>
                    <option value="土地">土地</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans tracking-widest text-[#141414]/50 uppercase mb-3 text-[10px]">築年数 Age</label>
                  <input
                    type="text"
                    name="age"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#111] focus:outline-none focus:border-[#C29B57] focus:ring-1 focus:ring-[#C29B57]/50 transition-all text-sm font-medium placeholder-black/30"
                    placeholder="例：築25年"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-widest text-[#141414]/50 uppercase mb-3 text-[10px]">ご相談内容 Message</label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#111] focus:outline-none focus:border-[#C29B57] focus:ring-1 focus:ring-[#C29B57]/50 transition-all text-sm font-medium resize-none placeholder-black/30"
                  placeholder="売却希望時期、現状のお悩みなど..."
                />
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 rounded-xl bg-[#141414] text-white font-semibold text-sm tracking-widest uppercase shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all"
                >
                  内容を送信する
                </button>
              </div>
            </div>
          </form>

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
