import Link from 'next/link';

export default function Header() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || '求人サイト';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">{siteName}</h1>
          </Link>
          
          <nav className="hidden sm:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              求人一覧
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
