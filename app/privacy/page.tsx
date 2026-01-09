import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '当サイトのプライバシーポリシーについて',
};

export default function PrivacyPage() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || '求人サイト';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        プライバシーポリシー
      </h1>

      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            {siteName}（以下「当サイト」といいます）は、ユーザーの個人情報保護の重要性を認識し、以下のプライバシーポリシーに従い、適切に取り扱います。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. 個人情報の定義
          </h2>
          <p className="text-gray-700 leading-relaxed">
            個人情報とは、個人に関する情報であって、当該情報に含まれる氏名、生年月日、その他の記述等により特定の個人を識別できるもの、および他の情報と容易に照合することができ、それにより特定の個人を識別できるものを指します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. 個人情報の収集
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サイトでは、以下の情報を収集する場合があります：
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>アクセスログ（IPアドレス、アクセス日時、閲覧ページなど）</li>
            <li>Cookie等の技術を用いた利用状況の情報</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            なお、当サイトでは会員登録機能はなく、氏名・メールアドレス等の個人を特定できる情報を直接収集することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. 個人情報の利用目的
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サイトが収集する情報は、以下の目的で利用します：
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>サイトの運営・管理・改善</li>
            <li>アクセス解析によるサービスの向上</li>
            <li>不正アクセスや不正利用の防止</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. 外部サービスの利用
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サイトでは、以下の外部サービスを利用しています：
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>LINE公式アカウント</strong>
              <br />
              応募機能においてLINEアプリに遷移します。LINEでの情報の取り扱いについては、LINE株式会社のプライバシーポリシーに従います。
            </li>
            <li>
              <strong>Google Maps</strong>
              <br />
              勤務地の地図表示に利用しています。Google Mapsの利用規約・プライバシーポリシーが適用されます。
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. 個人情報の第三者提供
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Cookieの使用
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトでは、ユーザーの利便性向上のためCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効化することができます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. プライバシーポリシーの変更
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトは、法令の変更や事業内容の変更等により、本ポリシーを予告なく変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            8. お問い合わせ
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本ポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
          </p>
          <p className="text-gray-700 mt-2">
            Email: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:text-blue-700">{contactEmail}</a>
          </p>
        </section>

        <div className="text-right text-sm text-gray-500 mt-12">
          制定日: 2026年1月9日
        </div>
      </div>
    </div>
  );
}
