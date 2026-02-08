import { notFound } from 'next/navigation';
import { getLPConfig, getAllLPAppeals } from '@/lib/lp-configs';
import LandingPageContent from '@/components/LandingPageContent';

// 静的生成のためのパスを定義
export async function generateStaticParams() {
  const appeals = getAllLPAppeals();
  return appeals.map((appeal) => ({
    appeal,
  }));
}

// メタデータの生成
export async function generateMetadata({ params }: { params: { appeal: string } }) {
  const config = getLPConfig(params.appeal);
  
  if (!config) {
    return {
      title: 'ページが見つかりません',
    };
  }
  
  return {
    title: config.title,
    description: config.description,
  };
}

export default function LPPage({ params }: { params: { appeal: string } }) {
  const config = getLPConfig(params.appeal);
  
  if (!config) {
    notFound();
  }
  
  return <LandingPageContent config={config} />;
}
