import { NextRequest, NextResponse } from 'next/server';
import {
  fetchAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  checkSlugExists,
} from '@/lib/api/articles';

// BASIC認証チェック
function checkAuth(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader) {
    return false;
  }

  const auth = authHeader.split(' ')[1];
  const [user, password] = Buffer.from(auth, 'base64').toString().split(':');

  return (
    user === process.env.BASIC_AUTH_USER &&
    password === process.env.BASIC_AUTH_PASSWORD
  );
}

// 全記事取得
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  try {
    const articles = await fetchAllArticles();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// 記事作成
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  try {
    const body = await request.json();

    // スラッグの重複チェック
    const slugExists = await checkSlugExists(body.slug);
    if (slugExists) {
      return NextResponse.json(
        { error: 'このスラッグは既に使用されています' },
        { status: 400 }
      );
    }

    const article = await createArticle(body);
    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
