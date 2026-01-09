import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  fetchJobById,
  fetchAllJobIds,
} from '@/lib/api/agent-system';
import {
  getEmploymentTypeLabel,
  formatSalary,
  formatLocation,
  formatDate,
  generateGoogleMapsUrl,
} from '@/lib/utils/format';
import { generateJobPostingSchema } from '@/lib/utils/schema';
import LineApplyButton from '@/components/LineApplyButton';

export const revalidate = 3600; // ISR: 1時間ごとに再生成

// 動的ルートのパラメータを生成
export async function generateStaticParams() {
  const jobIds = await fetchAllJobIds();
  return jobIds.map((id) => ({ jobId: id }));
}

// メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ jobId: string }>;
}): Promise<Metadata> {
  const { jobId } = await params;
  const job = await fetchJobById(jobId);

  if (!job) {
    return {
      title: '求人が見つかりません',
    };
  }

  const description = `${job.title} | ${formatSalary(job.salary)} | ${formatLocation(job.location)}`;

  return {
    title: job.title,
    description,
    openGraph: {
      title: job.title,
      description,
      type: 'website',
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  const job = await fetchJobById(jobId);

  // 求人が見つからないか非公開の場合
  if (!job) {
    notFound();
  }

  const schema = generateJobPostingSchema(job);
  const mapUrl = generateGoogleMapsUrl(
    job.stores?.[0]?.latitude,
    job.stores?.[0]?.longitude,
    job.stores?.[0]?.address || (job.location ? formatLocation(job.location) : '')
  );

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        {/* パンくずリスト */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                トップ
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate">{job.title}</li>
          </ol>
        </nav>

        {/* 求人詳細 */}
        <article className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* ヘッダー */}
          <div className="p-6 border-b border-gray-200">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {getEmploymentTypeLabel(job.employmentType)}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {job.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {job.company?.name || '企業名未設定'}
            </div>
            <div className="text-sm text-gray-500">
              掲載日: {formatDate(job.publishedAt || job.createdAt)}
            </div>
          </div>

          {/* 給与情報 */}
          <div className="p-6 bg-blue-50 border-b border-gray-200">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  給与
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {formatSalary(job.salary)}
                </div>
              </div>
            </div>
          </div>

          {/* 仕事内容 */}
          <section className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              仕事内容
            </h2>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {job.description}
            </p>
          </section>

          {/* 業務内容 */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <section className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                具体的な業務内容
              </h2>
              <ul className="space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 応募資格・求める人材 */}
          {((job.requirements && job.requirements.length > 0) || 
            (job.qualifications && job.qualifications.length > 0)) && (
            <section className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                応募資格・求める人材
              </h2>
              <ul className="space-y-2">
                {(job.requirements || job.qualifications || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700 whitespace-pre-wrap">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 勤務時間 */}
          {job.workingHours && (job.workingHours.note || job.workingHours.notes || job.workingHours.start) && (
            <section className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                勤務時間
              </h2>
              <div className="text-gray-700 whitespace-pre-wrap">
                {job.workingHours.start && job.workingHours.end && (
                  <p className="mb-2">
                    {job.workingHours.start} 〜 {job.workingHours.end}
                  </p>
                )}
                {(job.workingHours.note || job.workingHours.notes) && (
                  <p className="text-sm text-gray-600">
                    {job.workingHours.note || job.workingHours.notes}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* 休日 */}
          {job.holidays && (
            <section className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                休日・休暇
              </h2>
              <div className="text-gray-700 whitespace-pre-wrap">
                {job.holidays}
              </div>
            </section>
          )}

          {/* 福利厚生・待遇 */}
          {(job.benefits && job.benefits.length > 0) || job.welfare && (
            <section className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                福利厚生・待遇
              </h2>
              {job.benefits && job.benefits.length > 0 ? (
                <ul className="space-y-2">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700 whitespace-pre-wrap">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-700 whitespace-pre-wrap">
                  {job.welfare}
                </div>
              )}
            </section>
          )}

          {/* 勤務地 */}
          {job.stores && job.stores.length > 0 && (
            <section className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">勤務地</h2>
              <div className="space-y-4">
                {job.stores.map((store, index) => (
                  <div key={store.id} className="border-l-4 border-blue-500 pl-4">
                    <div className="font-medium text-gray-900 mb-2">
                      {store.name}
                    </div>
                    <div className="text-gray-700 mb-2">
                      {store.location?.zipCode && (
                        <div className="text-sm text-gray-600 mb-1">
                          〒{store.location.zipCode}
                        </div>
                      )}
                      <div>{store.address || formatLocation(store.location)}</div>
                      {store.location?.building && (
                        <div className="text-sm text-gray-600">
                          {store.location.building}
                        </div>
                      )}
                    </div>
                    {index === 0 && mapUrl && (
                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Google Mapsで開く
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 企業情報 */}
          {job.company && (
            <section className="p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                企業情報
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-600">企業名</dt>
                  <dd className="text-gray-900 mt-1">{job.company.name}</dd>
                </div>
                {job.company.description && (
                  <div>
                    <dt className="text-sm font-medium text-gray-600">
                      企業概要
                    </dt>
                    <dd className="text-gray-900 mt-1 whitespace-pre-wrap">
                      {job.company.description}
                    </dd>
                  </div>
                )}
                {job.company.industry && (
                  <div>
                    <dt className="text-sm font-medium text-gray-600">業種</dt>
                    <dd className="text-gray-900 mt-1">
                      {job.company.industry}
                    </dd>
                  </div>
                )}
                {job.company.website && (
                  <div>
                    <dt className="text-sm font-medium text-gray-600">
                      ウェブサイト
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={job.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {job.company.website}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </section>
          )}
        </article>

        {/* 戻るボタン */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            求人一覧に戻る
          </Link>
        </div>
      </div>

      {/* LINE応募ボタン（固定表示） */}
      <LineApplyButton job={job} />
    </>
  );
}
