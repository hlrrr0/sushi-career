/**
 * 記事管理 API
 */

import { getSupabaseClient, getServiceSupabase } from '@/lib/supabase';
import { Article, ArticleInput, ArticleUpdate } from '@/lib/types/article';

/**
 * 公開中の記事一覧を取得（公開ページ用）
 */
export async function fetchPublishedArticles(): Promise<Article[]> {
  const supabase = getSupabaseClient();
  
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching published articles:', error);
    throw error;
  }

  return data || [];
}

/**
 * スラッグから公開記事を取得（公開ページ用）
 */
export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const supabase = getSupabaseClient();
  
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // 記事が見つからない
      return null;
    }
    console.error('Error fetching article:', error);
    throw error;
  }

  return data;
}

/**
 * 全記事を取得（管理画面用）
 */
export async function fetchAllArticles(): Promise<Article[]> {
  const supabase = getServiceSupabase();
  
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all articles:', error);
    throw error;
  }

  return data || [];
}

/**
 * IDから記事を取得（管理画面用）
 */
export async function fetchArticleById(id: string): Promise<Article | null> {
  const supabase = getServiceSupabase();
  
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    console.error('Error fetching article:', error);
    throw error;
  }

  return data;
}

/**
 * 記事を作成（管理画面用）
 */
export async function createArticle(input: ArticleInput): Promise<Article> {
  const supabase = getServiceSupabase();
  
  const articleData = {
    ...input,
    published_at: input.published && !input.published_at ? new Date().toISOString() : input.published_at,
  };

  const { data, error } = await supabase
    .from('articles')
    .insert([articleData])
    .select()
    .single();

  if (error) {
    console.error('Error creating article:', error);
    throw error;
  }

  return data;
}

/**
 * 記事を更新（管理画面用）
 */
export async function updateArticle(id: string, update: ArticleUpdate): Promise<Article> {
  const supabase = getServiceSupabase();
  
  // 公開状態に変更する場合は公開日時を設定
  const updateData = {
    ...update,
    published_at: update.published && !update.published_at ? new Date().toISOString() : update.published_at,
  };

  const { data, error } = await supabase
    .from('articles')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating article:', error);
    throw error;
  }

  return data;
}

/**
 * 記事を削除（管理画面用）
 */
export async function deleteArticle(id: string): Promise<void> {
  const supabase = getServiceSupabase();
  
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
}

/**
 * スラッグの重複チェック（管理画面用）
 */
export async function checkSlugExists(slug: string, excludeId?: string): Promise<boolean> {
  const supabase = getServiceSupabase();
  
  let query = supabase
    .from('articles')
    .select('id')
    .eq('slug', slug);

  if (excludeId) {
    query = query.neq('id', excludeId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error checking slug:', error);
    throw error;
  }

  return (data?.length || 0) > 0;
}
