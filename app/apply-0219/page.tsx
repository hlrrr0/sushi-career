import SushiAptitudeTestForm from '@/components/SushiAptitudeTestForm';

export const metadata = {
  title: '寿司職人適正検査 | 鮨キャリ',
  description: '10の質問で寿司職人としての適性を診断！あなたに最適な求人をご紹介します。',
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
            🍣 寿司職人適正検査
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            10の質問であなたの適性を診断<br />
            最適な求人をご紹介します
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
            所要時間: 約2分
          </div>
        </div>

        {/* 適正検査フォーム */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <SushiAptitudeTestForm />
        </div>
      </div>
    </div>
  );
}
