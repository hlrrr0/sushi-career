'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/' || pathname.startsWith('/lp/');

  if (isLandingPage) {
    // LPページはヘッダー・フッターなし
    return <>{children}</>;
  }

  // その他のページは通常のレイアウト
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
