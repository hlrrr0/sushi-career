'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // すでに表示済みならイベントリスナーを設定しない
    if (hasShown) return;

    // 15秒タイマー
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 15000);

    // Exit intent検知（マウスが画面上部から離脱しようとする動き）
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasShown) return;
      
      // マウスが画面上部から離脱しようとしている場合
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* オーバーレイ */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={handleClose}
      />
      
      {/* ポップアップ */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-lg animate-scale-in">
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 relative">
          {/* 閉じるボタン */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="閉じる"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* コンテンツ */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              ちょっと待って！<br />
              あなたの理想の求人が<br className="md:hidden" />見つかるかも
            </h3>
            
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              寿司職人専門のキャリアアドバイザーが<br />
              無料であなたのキャリアをサポート！<br />
              <strong className="text-red-600">今なら30秒で簡単登録</strong>
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>完全無料で利用可能</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>200社以上の厳選求人</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>海外勤務の相談も可</span>
              </div>
            </div>

            {/* CTAボタン */}
            <Link 
              href="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
              className="block w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              無料で求人を見てみる
            </Link>

            <button
              onClick={handleClose}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              今はまだいいです
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
