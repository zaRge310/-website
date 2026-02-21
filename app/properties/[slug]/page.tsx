// app/properties/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { properties } from "@/app/data/properties";

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return {};

  return {
    title: `${property.title} | AIHASHI`,
    description: property.catch ?? property.summary ?? "販売中物件の詳細ページです。",
    openGraph: {
      title: `${property.title} | AIHASHI`,
      description: property.catch ?? property.summary ?? "",
      images: property.thumb ? [{ url: property.thumb }] : [],
    },
  };
}

export default function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return notFound();

  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#141414]">
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#works"
            className="text-sm underline underline-offset-4 text-[#141414]/70 hover:text-[#141414] transition-colors"
          >
            ← 販売中物件へ戻る
          </Link>
          <Link
            href="/entry"
            className="px-4 py-2 rounded-xl bg-[#141414] text-white text-sm shadow-[0_14px_35px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-shadow"
          >
            お問い合わせ / 物件募集
          </Link>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-10">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white/60 shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
              <div className="aspect-[4/3] bg-black/5 relative">
                {property.gallery?.[0] ? (
                  <img
                    src={property.gallery[0]}
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : null}
              </div>
            </div>

            {property.gallery && property.gallery.length > 1 ? (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {property.gallery.slice(1).map((src) => (
                  <div
                    key={src}
                    className="aspect-[4/3] rounded-xl overflow-hidden border border-black/10 bg-white/60"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2 mb-4">
              {(property.tags ?? []).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/60 border border-black/10 rounded-full text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              {property.title}
            </h1>

            {property.catch ? (
              <p className="mt-3 text-[#2A2A2A]/75">{property.catch}</p>
            ) : null}

            <div className="mt-8 rounded-2xl bg-white/60 border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] p-7">
              <div className="space-y-3 text-sm">
                <Row label="価格" value={property.priceText} strong />
                <Row label="所在地" value={property.locationText} />
                <Row label="アクセス" value={property.accessText} />
              </div>

              {property.details?.length ? (
                <div className="mt-6 pt-6 border-t border-black/10 space-y-3 text-sm">
                  {property.details.map((d) => (
                    <Row key={d.label} label={d.label} value={d.value} />
                  ))}
                </div>
              ) : null}
            </div>

            {property.summary ? (
              <p className="mt-6 text-sm text-[#2A2A2A]/75 leading-relaxed">
                {property.summary}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/entry"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#141414] text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-shadow"
              >
                内覧・条件の相談をする
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-[#141414]/35 bg-white/40 backdrop-blur hover:bg-white/60 transition-colors"
              >
                会社概要を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-16 shrink-0 text-[#141414]/55">{label}</div>
      <div className={strong ? "font-semibold text-[#141414]" : "text-[#141414]/85"}>
        {value}
      </div>
    </div>
  );
}
