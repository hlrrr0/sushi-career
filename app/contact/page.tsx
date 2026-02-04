import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'お問い合わせ | 鮨キャリ',
  description: '鮨キャリへのお問い合わせはこちらから。企業採用担当者様、求職者様、その他お問い合わせを受け付けております。',
};

export default function ContactPage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '60px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* ヘッダー */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            お問い合わせ
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            ご不明な点やご質問がございましたら、<br />
            以下のフォームよりお気軽にお問い合わせください。
          </p>
        </div>

        {/* フォーム */}
        <ContactForm />

        {/* 注意事項 */}
        <div style={{
          marginTop: '48px',
          padding: '24px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#4b5563',
          lineHeight: '1.8'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '12px'
          }}>
            お問い合わせにあたってのご注意
          </h3>
          <ul style={{
            listStyle: 'disc',
            paddingLeft: '20px',
            margin: 0
          }}>
            <li>お問い合わせ内容により、回答までに数日お時間をいただく場合がございます。</li>
            <li>営業時間: 平日 9:00〜18:00（土日祝日を除く）</li>
            <li>お問い合わせ内容によっては、お電話でのご連絡をさせていただく場合がございます。</li>
            <li>迷惑メール設定をされている方は、「@osushi.studio」からのメールを受信できるように設定をお願いいたします。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
