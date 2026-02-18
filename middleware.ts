import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // /admin配下のパスをチェック
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');
    
    // 認証ヘッダーがない場合
    if (!authHeader) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"',
        },
      });
    }

    // 認証情報を検証
    const auth = authHeader.split(' ')[1];
    const [user, password] = Buffer.from(auth, 'base64').toString().split(':');

    const validUser = process.env.BASIC_AUTH_USER || 'admin';
    const validPassword = process.env.BASIC_AUTH_PASSWORD || 'sushi2024';

    if (user !== validUser || password !== validPassword) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"',
        },
      });
    }
  }

  return NextResponse.next();
}

// 管理画面のみミドルウェアを適用
export const config = {
  matcher: '/admin/:path*',
};
