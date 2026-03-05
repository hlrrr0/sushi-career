'use client';

import { useEffect, useState } from 'react';

const LIFF_URL = 'https://liff.line.me/2007732519-m2atzql7';

export default function LiffCtaButton() {
  const [href, setHref] = useState(LIFF_URL);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get('fbclid');
    if (fbclid) {
      setHref(`${LIFF_URL}?fbclid=${encodeURIComponent(fbclid)}`);
    }
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      求人を見てみる (無料)
    </a>
  );
}
