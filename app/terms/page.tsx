import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '利用規約',
  description: '当サイトの利用規約について',
};

export default function TermsPage() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || '鮨キャリ';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>

      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            この利用規約（以下「本規約」といいます）は、{siteName}（以下「当サイト」といいます）が提供するサービスの利用条件を定めるものです。ユーザーの皆様には、本規約に従って当サイトをご利用いただきます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第1条（適用）
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>
              本規約は、ユーザーと当サイトとの間の当サイトの利用に関わる一切の関係に適用されるものとします。
            </li>
            <li>
              ユーザーは、当サイトを利用することにより、本規約に同意したものとみなされます。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第2条（サービスの内容）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当サイトは、求人情報の閲覧および応募支援サービスを提供します。
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>求人情報の掲載・閲覧</li>
            <li>LINE公式アカウントへの応募導線の提供</li>
            <li>その他、当サイトが提供するサービス</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第3条（利用上の注意）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当サイトが事前に許諾しない営利目的での利用行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第4条（求人情報について）
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>
              当サイトに掲載される求人情報は、外部APIを通じて取得されたものであり、当サイトが独自に作成したものではありません。
            </li>
            <li>
              求人情報の正確性、最新性、完全性について、当サイトは一切保証いたしません。
            </li>
            <li>
              掲載されている求人が予告なく終了する場合があります。
            </li>
            <li>
              求人への応募に関するお問い合わせは、各求人情報に記載されている応募先へ直接ご連絡ください。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第5条（免責事項）
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>
              当サイトは、ユーザーに対して求人情報を提供するものであり、採用を保証するものではありません。
            </li>
            <li>
              当サイトの利用により発生したユーザーの損害について、当サイトは一切の責任を負いません。
            </li>
            <li>
              当サイトからLINE等の外部サービスへ遷移した後の取引や情報のやりとりについて、当サイトは一切関与せず、責任を負いません。
            </li>
            <li>
              システムメンテナンスや障害等により、予告なくサービスを停止する場合があります。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第6条（知的財産権）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトに掲載されるコンテンツ（テキスト、画像、デザイン、ロゴなど）の知的財産権は、当サイトまたはコンテンツ提供者に帰属します。ユーザーは、これらを当サイトの利用目的以外で使用することはできません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第7条（規約の変更）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトは、必要に応じて本規約を変更することができます。変更後の利用規約は、当ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第8条（準拠法および管轄裁判所）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本規約の解釈にあたっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            第9条（お問い合わせ）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本規約に関するお問い合わせは、以下のフォームよりご連絡ください。
          </p>
          <p className="text-gray-700 mt-4">
            <Link href="/contact" className="inline-block px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
              お問い合わせフォームへ
            </Link>
          </p>
        </section>

        <div className="text-right text-sm text-gray-500 mt-12">
          制定日: 2026年1月9日
        </div>
      </div>
    </div>
  );
}
