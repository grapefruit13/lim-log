'use client';

import ThemeSwitcher from '@/app/_components/theme-switcher';
import { ROUTES } from '@/constants/_routes';
import { useThemeStore } from '@/stores/useThemeStore';
import { useTitleStore } from '@/stores/useTitleStore';
import cn from 'classnames';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const HEADER_HEIGHT = 120;
const inter = Inter({ subsets: ['latin', 'cyrillic'] });
const { home, blog } = ROUTES;

const Header = () => {
  const pathname = usePathname();
  const enableScrollEvent = pathname !== blog && pathname !== home;
  const { title } = useTitleStore();
  const { mode } = useThemeStore();
  const [resolvedMode, setResolvedMode] = useState<'dark' | 'light'>('light');

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const sentinelRef = useRef(null);

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

  useEffect(() => {
    if (!enableScrollEvent) return;

    const handleScroll = () => {
      if (window.scrollY > HEADER_HEIGHT) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableScrollEvent]);

  return (
    <>
      {/* 스크롤 감지용 작은 요소 */}
      {enableScrollEvent && <div ref={sentinelRef} className='h-[0.01px]' />}
      <header
        ref={headerRef}
        className={cn(
          inter.className,
          'transition-all duration-300 ease-in-out w-full py-4 items-center sticky top-0 backdrop-blur-lg px-5 justify-between z-50 flex',
          {
            hidden: enableScrollEvent && !isSticky,
            show: enableScrollEvent && isSticky,
          }
        )}
      >
        <div className='flex items-center justify-center gap-4'>
          <h3 className='text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight'>
            <Link className='hover:underline' href={blog}>
              Blog.
            </Link>
          </h3>
          <h3 className='text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight'>
            <Link className='hover:underline' href={home}>
              Portfolio.
            </Link>
          </h3>
        </div>
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
              width={28}
              height={28}
              alt='github logo'
            />
          </a>
          <a href='https://www.linkedin.com/in/woorim-heo-436b6a1bb/' className=''>
            <Image
              src={'/svg/linkedIn-blue.png'}
              width={28}
              height={30}
              alt='linkedin logo'
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
