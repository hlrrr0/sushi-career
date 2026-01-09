import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "求人サイト";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: "LINEで簡単応募できる求人情報サイト",
  keywords: ["求人", "転職", "アルバイト", "パート", "LINE応募"],
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: siteName,
    description: "LINEで簡単応募できる求人情報サイト",
    type: "website",
    locale: "ja_JP",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "LINEで簡単応募できる求人情報サイト",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans flex flex-col min-h-screen bg-gray-50`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
