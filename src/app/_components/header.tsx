'use client';

import ThemeSwitcher from '@/app/_components/theme-switcher';
import { useThemeStore } from '@/stores/useThemeStore';
import { useTitleStore } from '@/stores/useTitleStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const { title } = useTitleStore();

  const { mode } = useThemeStore();
  const [resolvedMode, setResolvedMode] = useState<'dark' | 'light'>('light'); // 상태 추가

  useEffect(() => {
    if (mode === 'system') {
      const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      setResolvedMode(systemMode);
    } else {
      setResolvedMode(mode);
    }
  }, [mode]);

  return (
    <div className='w-full mb-20 py-8 flex items-center sticky top-0 backdrop-blur-lg px-5 justify-between z-50'>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
        <Link href='/' className='hover:underline'>
          Lim-log
        </Link>
        .
      </h2>
      <h2 className='text-xl md:text-2xl font-semibold tracking-tight md:tracking-tighter leading-tight'>
        {title || ''}
      </h2>
      <div className='flex flex-row gap-2 items-center justify-center'>
        <ThemeSwitcher />
        <a href='https://github.com/grapefruit13' className='mx-3 font-bold'>
          <Image
            src={
              resolvedMode === 'dark' ? '/svg/github-white.svg' : '/svg/github-dark.svg'
            }
            width={36}
            height={38}
            alt='github logo'
          />
        </a>
        <a href='https://www.linkedin.com/in/woorim-heo-436b6a1bb/' className=''>
          <Image
            src={'/svg/linkedIn-blue.png'}
            width={40}
            height={44}
            alt='linkedin logo'
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
