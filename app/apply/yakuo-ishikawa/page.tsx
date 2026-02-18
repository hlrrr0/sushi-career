import ChatApplicationForm from '@/components/ChatApplicationForm';

export const metadata = {
  title: '応募フォーム | 焼うおいし川 採用',
  description: '世界初業態「肉を焼かない焼肉」焼うおいし川への応募はこちらから。拡大期の今、チャンスを掴め。',
};

export default function YakuoIshikawaApplyPage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '40px',
      backgroundColor: '#fafafa'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* ヘッダー */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '12px'
          }}>
            焼うおいし川 応募フォーム
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            世界初業態「肉を焼かない焼肉」。<br />
            革命の最前線で、あなたの挑戦を待っている。
          </p>
          <div style={{
            display: 'inline-block',
            marginTop: '8px',
            padding: '6px 16px',
            backgroundColor: '#fff1f2',
            border: '1px solid #c41e3a',
            borderRadius: '20px',
            color: '#c41e3a',
            fontSize: '13px',
            fontWeight: 'bold'
          }}>
            所要時間: 約1分
          </div>
        </div>

        {/* チャットフォーム */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <ChatApplicationForm 
            greeting="ようこそ、焼うおいし川へ！"
            intro="世界初業態の立ち上げメンバーとして、お前の「挑戦する意欲」を確認させてくれ。いくつか質問に答えてくれ。1分で終わる。"
          />
        </div>
      </div>
    </div>
  );
}
