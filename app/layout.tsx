import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";
import Opening from "@/app/components/Opening";
import SiteHeader from "@/app/components/SiteHeader";
import ScrollReveal from "@/app/components/ScrollReveal";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_NAME = "AIHASHI株式会社";
const SITE_URL = "https://aihashi.co.jp";
const DESCRIPTION =
  "AIHASHI株式会社は不動産再生・リフォーム・物件活用を中心に事業を展開。空き家・再販物件の買取相談を受付中。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "AIHASHI",
    "アイハシ株式会社",
    "不動産",
    "リフォーム",
    "不動産再生",
    "物件買取",
    "空き家活用",
    "不動産投資",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    images: [
      {
        url: "/aihashi-logo-mark.png",
        width: 1200,
        height: 630,
        alt: "AIHASHI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ["/aihashi-logo-mark.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "ここにgoogle-site-verificationコードだけ入れる",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "AIHASHI株式会社",
    url: SITE_URL,
    logo: `${SITE_URL}/aihashi-logo-mark.png`,
    description:
      "不動産再生・リフォーム・物件活用を中心に事業展開するAIHASHI株式会社。",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
    },
  };

  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[#FCFBF9] text-[#141414] selection:bg-[#C29B57]/20 selection:text-[#111]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Opening durationMs={3500}>
          <ScrollReveal />
          <SiteHeader />
          {children}
        </Opening>
      </body>
    </html>
  );
}
