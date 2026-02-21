import { notFound } from "next/navigation";
import Link from "next/link";
import { properties } from "@/app/data/properties";

// For static generation
export function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen relative bg-[#FCFBF9] text-[#141414]">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#D4B478]/10 blur-[130px] rounded-full mix-blend-multiply" />
      </div>

      <article className="pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb / Back Link */}
          <div className="mb-10 reveal">
            <Link
              href="/#works"
              className="inline-flex items-center text-[11px] tracking-widest uppercase text-[#141414]/50 hover:text-[#C29B57] transition-colors group font-sans"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
              Back to Properties
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12 reveal reveal-delay-1">
            <div className="flex flex-wrap gap-2 mb-6">
              {(property.tags ?? []).map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 bg-white border border-black/5 rounded-full text-[10px] tracking-widest uppercase text-[#141414]/70 shadow-sm font-medium font-sans"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111] mb-6 leading-tight">
              {property.title}
            </h1>
            {property.catch && (
              <p className="text-[#141414]/60 text-lg md:text-xl font-medium font-sans max-w-2xl leading-relaxed">
                {property.catch}
              </p>
            )}
          </div>

          {/* Main Layout Grid */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            {/* Left Content Column (Gallery + Summary) */}
            <div className="space-y-16">
              {/* Main Cover Image */}
              {property.thumb && (
                <div className="w-full aspect-[16/10] bg-[#F0EEEA] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] reveal reveal-delay-2 relative">
                  <img
                    src={property.thumb}
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Summary Text */}
              {property.summary && (
                <div className="reveal">
                  <h2 className="text-[11px] tracking-[0.2em] font-sans text-[#C29B57] uppercase mb-4">
                    Overview
                  </h2>
                  <p className="text-sm md:text-base text-[#141414]/80 leading-[2.2] font-sans">
                    {property.summary}
                  </p>
                </div>
              )}

              {/* Extended Gallery Images (Docs / Floors) */}
              {property.gallery && property.gallery.length > 0 && (
                <div className="pt-10 border-t border-black/5 reveal">
                  <h2 className="text-[11px] tracking-[0.2em] font-sans text-[#C29B57] uppercase mb-8">
                    Detailed Documents & Views
                  </h2>
                  <div className="space-y-8 md:space-y-12">
                    {property.gallery.map((imgUrl, index) => (
                      <div
                        key={index}
                        className="w-full bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm"
                      >
                        <img
                          src={imgUrl}
                          alt={`${property.title} detail ${index + 1}`}
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Column (Details Details Table + CTA) */}
            <div className="lg:sticky lg:top-32 space-y-10 reveal reveal-delay-3">
              {/* Properties Specs Card */}
              <div className="glass-panel bg-white/60 p-8 md:p-10 rounded-3xl">
                <h3 className="text-[11px] tracking-[0.2em] font-sans text-[#111] uppercase mb-8 pb-4 border-b border-black/5 font-semibold">
                  Property Details
                </h3>

                {property.details && property.details.length > 0 ? (
                  <dl className="space-y-6">
                    {property.details.map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-1.5">
                        <dt className="text-[11px] tracking-widest text-[#141414]/50 font-sans uppercase">
                          {item.label}
                        </dt>
                        <dd className="font-sans text-[14px] leading-relaxed text-[#111] font-medium">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <dl className="space-y-6">
                    <div className="flex flex-col gap-1.5">
                      <dt className="text-[11px] tracking-widest text-[#141414]/50 font-sans uppercase">
                        Price
                      </dt>
                      <dd className="font-sans text-[14px] leading-relaxed text-[#111] font-medium">
                        {property.priceText}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <dt className="text-[11px] tracking-widest text-[#141414]/50 font-sans uppercase">
                        Location
                      </dt>
                      <dd className="font-sans text-[14px] leading-relaxed text-[#111] font-medium">
                        {property.locationText}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <dt className="text-[11px] tracking-widest text-[#141414]/50 font-sans uppercase">
                        Access
                      </dt>
                      <dd className="font-sans text-[14px] leading-relaxed text-[#111] font-medium">
                        {property.accessText}
                      </dd>
                    </div>
                  </dl>
                )}
              </div>

              {/* CTA Panel */}
              <div className="p-8 md:p-10 bg-[#141414] rounded-3xl text-center shadow-lg">
                <p className="text-white/70 text-xs tracking-widest uppercase mb-6 font-medium">
                  Interested in this property?
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full px-8 py-4 bg-white text-[#111] font-semibold text-[13px] tracking-widest uppercase rounded-xl hover:bg-[#C29B57] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
                <p className="text-white/40 text-[10px] mt-4 leading-relaxed tracking-wider">
                  物件の詳細や内見予約については
                  <br />
                  お問い合わせフォームよりご連絡ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
