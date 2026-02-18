import { Metadata } from 'next';
import Link from 'next/link';
import { fetchPublishedArticles } from '@/lib/api/articles';

export const revalidate = 3600; // ISR: 1時間ごとに再生成

export const metadata: Metadata = {
  title: 'コラム一覧 | 鮨キャリ',
  description: '寿司業界の転職・キャリアに関するお役立ち情報をお届けします。',
};

export default async function ColumnsPage() {
  const articles = await fetchPublishedArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヘッダーセクション */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          コラム
        </h1>
        <p className="text-gray-600">
          寿司業界の転職・キャリアに関するお役立ち情報
        </p>
      </div>

      {/* 記事一覧 */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/columns/${article.slug}`}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* サムネイル */}
              {article.thumbnail_url ? (
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={article.thumbnail_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              )}

              {/* コンテンツ */}
              <div className="p-5">
                {/* タグ */}
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* タイトル */}
                <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                {/* 説明 */}
                {article.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {article.description}
                  </p>
                )}

                {/* メタ情報 */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.author || '編集部'}</span>
                  <time dateTime={article.published_at}>
                    {new Date(article.published_at!).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            記事がありません
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            近日公開予定です
          </p>
        </div>
      )}
    </div>
  );
}
