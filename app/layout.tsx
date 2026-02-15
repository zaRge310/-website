import type { Metadata } from "next";
import "./globals.css";
import Opening from "./components/Opening";
import SiteHeader from "./components/SiteHeader";

const SITE_NAME = "AIHASHI株式会社";
const SITE_URL = "https://website-three-chi-67.vercel.app"; // 独自ドメインにしたら差し替え
const DEFAULT_TITLE = "AIHASHI株式会社 | 不動産リフォーム・再生事業";
const DEFAULT_DESC =
  "AIHASHI株式会社は東京都新宿区を拠点に、不動産リフォーム・再生事業を中心に価値創造を行っています。物件募集も受け付けています。";

// ▼▼ ここに Search Console の verification 値を入れる ▼▼
const <meta name="google-site-verification" content="aw1-OdXCjPWpJjWFg0uYHjRZHg71z3pCCkyuanft4W8" />

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | AIHASHI株式会社",
  },
  description: DEFAULT_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "AIHASHI",
    "アイハシ株式会社",
    "不動産",
    "リフォーム",
    "リノベーション",
    "不動産再生",
    "物件募集",
    "中古住宅",
    "空き家",
    "新宿",
    "東京",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    siteName: SITE_NAME,
    locale: "ja_JP",
    images: [
      {
        url: "/aihashi-logo-mark.png",
        width: 512,
        height: 512,
        alt: "AIHASHI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/aihashi-logo-mark.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  // ✅ Search Console 最短確認（HTMLタグ方式）
  verification: {
    google: GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/aihashi-logo-mark.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      addressRegion: "東京都",
      addressLocality: "新宿区",
      streetAddress: "新宿二丁目１２－１３",
    },
  };

  return (
    <html lang="ja">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Opening oncePerSession={true}>
          <SiteHeader />
          {children}
        </Opening>
      </body>
    </html>
  );
}
