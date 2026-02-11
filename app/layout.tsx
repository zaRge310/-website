import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import Opening from "./components/Opening";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${cormorant.variable} antialiased`}>
        <Opening oncePerSession={true} durationMs={4200}>
          <SiteHeader />
          {children}
        </Opening>
      </body>
    </html>
  );
}
