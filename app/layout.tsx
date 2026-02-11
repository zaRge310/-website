import "./globals.css";
import type { Metadata, Viewport } from "next";
import Opening from "./components/Opening";
import SiteHeader from "./components/SiteHeader";

// すでにフォント設定してる場合は、あなたの既存コード（cormorant等）を残してOK。
// ここでは「SEO設定の完全版」に集中しています。

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aihashi.co.jp"),
  title: {
    default: "AIHASHI株式会社｜リフォーム不動産の販売・物件提案募集",
    template: "%s｜AIHASHI株式会社",
  },
  description:
    "AIHASHI株式会社は、リフォーム済み不動産の販売と、リフォーム・再生に適した物件情報の募集（ご提案）を行っています。区分マンション・戸建て・空き家など、お気軽にご相談ください。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.aihashi.co.jp",
    siteName: "AIHASHI株式会社",
    title: "AIHASHI株式会社｜リフォーム不動産の販売・物件提案募集",
    description:
      "リフォーム済み不動産の販売と、リフォーム・再生に適した物件情報の募集（ご提案）を行っています。",
    locale: "ja_JP",
    images: [
      {
        url: "/ogp.png", // あとで作るなら public/ogp.png を置く
        width: 1200,
        height: 630,
        alt: "AIHASHI株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIHASHI株式会社｜リフォーム不動産の販売・物件提案募集",
    description:
      "リフォーム済み不動産の販売と、リフォーム・再生に適した物件情報の募集（ご提案）を行っています。",
    images: ["/ogp.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }, // optional
    ],
    apple: [{ url: "/apple-touch-icon.png" }], // optional
  },

  // 未設定なら後回しでOK
  // verification: {
  //   google: "xxxxx",
  // },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Opening oncePerSession={true} durationMs={4200}>
          <SiteHeader />
          {children}
        </Opening>
      </body>
    </html>
  );
}
