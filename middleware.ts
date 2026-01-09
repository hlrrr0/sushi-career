import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Basic認証のチェック
  const basicAuth = request.headers.get('authorization');
  const url = request.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    const validUser = process.env.BASIC_AUTH_USER || 'admin';
    const validPassword = process.env.BASIC_AUTH_PASSWORD || 'password';

    if (user === validUser && pwd === validPassword) {
      return NextResponse.next();
    }
  }

  // 認証失敗時は401を返す
  url.pathname = '/api/auth';

  return NextResponse.rewrite(url, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// すべてのパスに適用（静的ファイルを除く）
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
