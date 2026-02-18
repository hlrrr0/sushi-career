import ChatApplicationForm from '@/components/ChatApplicationForm';

export const metadata = {
  title: '応募フォーム | 築地青空三代目グループ 採用',
  description: '伝統と革新を、共に。築地青空三代目グループへの応募はこちらから。',
};

export default function AllBrandsApplyPage() {
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
            築地青空三代目グループ 応募フォーム
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            築地から世界へ。伝統と革新を、共に。<br />
            日本伝統食の進化に、あなたも参加してください。
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
            greeting="ようこそ、築地青空三代目グループへ！"
            intro="日本伝統食の進化に興味を持ってくれてありがとう。お前の「情熱」を確認させてくれ。いくつか質問に答えてくれ。1分で終わる。"
          />
        </div>
      </div>
    </div>
  );
}
