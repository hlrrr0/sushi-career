'use client';

import { Job } from '@/lib/types/job';

interface LineApplyButtonProps {
  job: Job;
}

// エルメ共通URL
const ELME_COMMON_URL = "https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK";

export default function LineApplyButton({ job }: LineApplyButtonProps) {
  const handleApplyClick = () => {
    // 店舗名を取得（stores配列の最初の店舗名、なければ会社名、それもなければ空文字）
    const shopName = job.stores?.[0]?.name || job.company?.name || '';
    
    // 1. 日本語のエンコード処理（文字化け防止）
    const encodedTitle = encodeURIComponent(job.title);
    const encodedShopName = encodeURIComponent(shopName);

    // 2. URLを作成（cid2に店舗名を追加）
    const trackingUrl = `${ELME_COMMON_URL}&job_id=${job.id}&job_title=${encodedTitle}&cid2=${encodedShopName}`;

    // 3. 求人情報をクリップボードにコピー（念のため）
    const textToCopy = `【応募】\n求人名: ${job.title}\nの詳細を希望します。`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      // 4. パラメータ付きのURLへ移動
      window.location.href = trackingUrl;
    }).catch((err) => {
      console.error('クリップボードへのコピーに失敗しました:', err);
      // コピーに失敗してもエルメのURLには移動する
      window.location.href = trackingUrl;
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={handleApplyClick}
          className="flex items-center justify-center w-full py-4 px-6 bg-[#06C755] text-white font-bold text-lg rounded-lg hover:bg-[#05b04d] transition-colors shadow-md"
        >
          <svg
            className="w-6 h-6 mr-3"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINEで応募・問い合わせ
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">
          求人情報がコピーされ、LINEが開きます
        </p>
      </div>
    </div>
  );
}
