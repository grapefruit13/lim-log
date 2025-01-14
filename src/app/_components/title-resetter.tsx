'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTitleStore } from '@/stores/useTitleStore';
import { ROUTES } from '@/constants/_routes';

const { home, blog } = ROUTES;

const TitleResetter = () => {
  const { resetTitle } = useTitleStore.getState();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === home || pathname === blog) {
      resetTitle();
    }
  }, [pathname, resetTitle]);

  return null;
};

export default TitleResetter;
