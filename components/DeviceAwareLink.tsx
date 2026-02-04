'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DeviceAwareLinkProps {
  mobileUrl: string;
  desktopUrl: string;
  children: React.ReactNode;
  className?: string;
}

export default function DeviceAwareLink({ 
  mobileUrl, 
  desktopUrl, 
  children, 
  className 
}: DeviceAwareLinkProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // 初回レンダリング時はデスクトップURLを返す（SSR対策）
  if (!mounted) {
    return <Link href={desktopUrl} className={className}>{children}</Link>;
  }

  const targetUrl = isMobile ? mobileUrl : desktopUrl;
  
  return (
    <Link href={targetUrl} className={className}>
      {children}
    </Link>
  );
}
