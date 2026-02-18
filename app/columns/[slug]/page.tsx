import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchArticleBySlug, fetchPublishedArticles } from '@/lib/api/articles';

export const revalidate = 3600; // ISR: 1時間ごとに再生成

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await fetchPublishedArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: `${article.title} | 鮨キャリ`,
    description: article.description || article.title,
    openGraph: article.thumbnail_url
      ? {
          images: [article.thumbnail_url],
        }
      : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* パンくずナビ */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/columns" className="hover:text-blue-600">
          コラム
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{article.title}</span>
      </nav>

      {/* 記事ヘッダー */}
      <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* サムネイル */}
        {article.thumbnail_url && (
          <div className="aspect-video bg-gray-200 overflow-hidden">
            <img
              src={article.thumbnail_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* タグ */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* タイトル */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          {/* メタ情報 */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{article.author || '編集部'}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time dateTime={article.published_at}>
                {new Date(article.published_at!).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>

          {/* 記事本文 */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* 記事一覧に戻るボタン */}
      <div className="mt-8 text-center">
        <Link
          href="/columns"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          コラム一覧に戻る
        </Link>
      </div>
    </div>
  );
}
