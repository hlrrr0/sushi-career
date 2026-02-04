'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

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

  if (!isVisible || !mounted) return null;

  // デバイスに応じてリンク先を決定
  const targetUrl = isMobile 
    ? "https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
    : "/apply";

  return (
    <>
      <style jsx global>{`
        @keyframes exitIntentFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes exitIntentScaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .exit-intent-overlay {
          animation: exitIntentFadeIn 0.2s ease-out;
        }

        .exit-intent-popup {
          animation: exitIntentScaleIn 0.3s ease-out;
        }
      `}</style>

      {/* オーバーレイ */}
      <div 
        className="exit-intent-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999
        }}
        onClick={handleClose}
      />
      
      {/* ポップアップ */}
      <div 
        className="exit-intent-popup"
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
          width: '90%',
          maxWidth: '500px'
        }}
      >
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '24px',
          position: 'relative'
        }}>
          {/* 閉じるボタン */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              color: '#9ca3af',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="閉じる"
            onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* コンテンツ */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '16px',
              lineHeight: '1.4'
            }}>
              ちょっと待って！<br />
              あなたの理想の求人が見つかるかも
            </h3>
            
            <p style={{
              color: '#4b5563',
              marginBottom: '24px',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              寿司職人専門のキャリアアドバイザーが<br />
              無料であなたのキャリアをサポート！<br />
              <strong style={{ color: '#dc2626' }}>今なら30秒で簡単登録</strong>
            </p>

            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#374151',
                marginBottom: '12px'
              }}>
                <svg style={{ width: '20px', height: '20px', color: '#22c55e', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>完全無料で利用可能</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#374151',
                marginBottom: '12px'
              }}>
                <svg style={{ width: '20px', height: '20px', color: '#22c55e', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>200社以上の厳選求人</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#374151'
              }}>
                <svg style={{ width: '20px', height: '20px', color: '#22c55e', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>海外勤務の相談も可</span>
              </div>
            </div>

            {/* CTAボタン */}
            <Link 
              href={targetUrl}
              style={{
                display: 'block',
                width: '100%',
                background: 'linear-gradient(to right, #f97316, #dc2626)',
                color: 'white',
                fontWeight: 'bold',
                padding: '16px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #ea580c, #b91c1c)';
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #f97316, #dc2626)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
            >
              無料で求人を見てみる
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
