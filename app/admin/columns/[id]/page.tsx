'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Article } from '@/lib/types/article';
import RichTextEditor from '@/components/RichTextEditor';

type Props = {
  params: Promise<{ id: string }>;
};

export default function EditArticlePage({ params }: Props) {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [article, setArticle] = useState<Article | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    thumbnail_url: '',
    author: '',
    tags: '',
    published: false,
  });

  useEffect(() => {
    params.then((p) => setId(p.id));
  }, [params]);

  useEffect(() => {
    if (id) {
      fetchArticle();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(`/api/admin/articles/${id}`, {
        headers: {
          Authorization: `Basic ${btoa(`${process.env.NEXT_PUBLIC_BASIC_AUTH_USER || 'admin'}:${process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || 'sushi2024'}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }

      const data: Article = await response.json();
      setArticle(data);
      setFormData({
        title: data.title,
        slug: data.slug,
        description: data.description || '',
        content: data.content,
        thumbnail_url: data.thumbnail_url || '',
        author: data.author || '編集部',
        tags: data.tags?.join(', ') || '',
        published: data.published,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const tagsArray = formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const response = await fetch(`/api/admin/articles/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${process.env.NEXT_PUBLIC_BASIC_AUTH_USER || 'admin'}:${process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || 'sushi2024'}`)}`,
        },
        body: JSON.stringify({
          ...formData,
          tags: tagsArray,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update article');
      }

      alert('記事を更新しました');
      router.push('/admin/columns');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error && !article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          記事編集
        </h1>
        <p className="text-gray-600">
          コラム記事を編集します
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
          {/* タイトル */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              タイトル <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="記事のタイトルを入力"
            />
          </div>

          {/* スラッグ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              スラッグ（URL） <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="article-slug"
              pattern="[a-z0-9\-]+"
            />
            <p className="mt-1 text-sm text-gray-500">
              半角英数字とハイフンのみ。URL: /columns/{formData.slug || 'slug'}
            </p>
          </div>

          {/* 説明 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              説明
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="記事の説明（SEO用）"
            />
          </div>

          {/* 本文 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              本文 <span className="text-red-500">*</span>
            </label>
            <RichTextEditor
              content={formData.content}
              onChange={(html) => setFormData({ ...formData, content: html })}
            />
            <p className="mt-1 text-sm text-gray-500">
              ツールバーを使って直感的に記事を作成できます
            </p>
          </div>

          {/* サムネイルURL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              サムネイル画像URL
            </label>
            <input
              type="url"
              value={formData.thumbnail_url}
              onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* 著者 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              著者
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="編集部"
            />
          </div>

          {/* タグ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              タグ
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="転職, キャリア, 寿司職人"
            />
            <p className="mt-1 text-sm text-gray-500">
              カンマ区切りで入力してください
            </p>
          </div>

          {/* 公開状態 */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">
                この記事を公開する
              </span>
            </label>
          </div>
        </div>

        {/* ボタン */}
        <div className="flex items-center justify-between">
          <Link
            href="/admin/columns"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            キャンセル
          </Link>
          <div className="flex gap-3">
            {article?.published && (
              <Link
                href={`/columns/${article.slug}`}
                target="_blank"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                プレビュー
              </Link>
            )}
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? '更新中...' : '更新する'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
