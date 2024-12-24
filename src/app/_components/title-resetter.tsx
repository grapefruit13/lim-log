'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTitleStore } from '@/stores/useTitleStore';

const TitleResetter = () => {
  const { resetTitle } = useTitleStore.getState();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      resetTitle();
    }
  }, [pathname, resetTitle]);

  return null;
};

export default TitleResetter;
