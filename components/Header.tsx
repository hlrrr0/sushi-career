import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="鮨キャリ"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
              quality={100}
              unoptimized
            />
          </Link>
          
          <nav className="hidden sm:flex items-center space-x-6">
            {/* <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              求人一覧
            </Link> */}
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              お問い合わせ
            </Link>
            {/* <Link
              href="/apply"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-bold"
            >
              求人応募
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
