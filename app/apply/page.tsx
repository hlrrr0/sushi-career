import ChatApplicationForm from '@/components/ChatApplicationForm';

export const metadata = {
  title: '求人応募 | 鮨キャリ',
  description: '1分で完了！あなたに最適な寿司職人の求人をご紹介します。',
};

export default function ApplyPage() {
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
            転職支援サービスへお申し込み
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            簡単な質問に答えるだけで、<br />
            あなたに最適な求人をご紹介します
          </p>
          <div style={{
            display: 'inline-block',
            marginTop: '8px',
            padding: '6px 16px',
            backgroundColor: '#fff7ed',
            border: '1px solid #f97316',
            borderRadius: '20px',
            color: '#f97316',
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
          <ChatApplicationForm />
        </div>
      </div>
    </div>
  );
}
