import { NextRequest, NextResponse } from 'next/server';
import {
  fetchArticleById,
  updateArticle,
  deleteArticle,
  checkSlugExists,
} from '@/lib/api/articles';

type Props = {
  params: Promise<{ id: string }>;
};

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

// 記事取得
export async function GET(request: NextRequest, { params }: Props) {
  if (!checkAuth(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  try {
    const { id } = await params;
    const article = await fetchArticleById(id);

    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

// 記事更新
export async function PATCH(request: NextRequest, { params }: Props) {
  if (!checkAuth(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  try {
    const { id } = await params;
    const body = await request.json();

    // スラッグの重複チェック（自分以外）
    if (body.slug) {
      const slugExists = await checkSlugExists(body.slug, id);
      if (slugExists) {
        return NextResponse.json(
          { error: 'このスラッグは既に使用されています' },
          { status: 400 }
        );
      }
    }

    const article = await updateArticle(id, body);
    return NextResponse.json(article);
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// 記事削除
export async function DELETE(request: NextRequest, { params }: Props) {
  if (!checkAuth(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  try {
    const { id } = await params;
    await deleteArticle(id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}
