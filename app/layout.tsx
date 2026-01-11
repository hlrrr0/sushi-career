import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "鮨キャリ";
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-548PLCM8');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${notoSansJP.variable} font-sans flex flex-col min-h-screen bg-gray-50`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-548PLCM8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
