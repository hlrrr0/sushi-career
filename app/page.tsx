import { Metadata } from 'next';
import { fetchAllJobs } from '@/lib/api/agent-system';
import JobList from '@/components/JobList';

export const revalidate = 3600; // ISR: 1時間ごとに再生成

export const metadata: Metadata = {
  title: '求人一覧',
  description: 'LINEで簡単応募できる求人情報を掲載しています。',
};

export default async function HomePage() {
  const jobs = await fetchAllJobs();

  // 新着順にソート
  const sortedJobs = [...jobs].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヘッダーセクション */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          求人一覧
        </h1>
        <p className="text-gray-600">
          LINEで簡単に応募できる求人情報をご覧いただけます
        </p>
      </div>

      {/* 求人リスト */}
      {sortedJobs.length > 0 ? (
        <JobList jobs={sortedJobs} />
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            現在掲載中の求人がありません
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            新しい求人が掲載されるまでお待ちください
          </p>
        </div>
      )}
    </div>
  );
}

