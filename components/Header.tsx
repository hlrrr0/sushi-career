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
          
          <nav className="hidden sm:flex space-x-6">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              求人一覧
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
