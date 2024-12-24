'use client';

import Container from '@/app/_components/container';
import Image from 'next/image';
import React from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

export function Footer() {
  const { mode } = useThemeStore();
  const [resolvedMode, setResolvedMode] = React.useState<'dark' | 'light'>('light'); // 상태 추가

  React.useEffect(() => {
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
    <footer className='bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800'>
      <Container>
        <div className='py-16 justify-center flex flex-col items-center'>
          <h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center mb-8 text-slate-900 dark:text-neutral-50'>
            more about me
          </h3>
          <div className='flex gap-4 justify-center items-center lg:pl-4 lg:w-1/2'>
            <a href='https://github.com/grapefruit13' className='mx-3 font-bold'>
              <Image
                src={
                  resolvedMode === 'dark'
                    ? '/svg/github-white.svg'
                    : '/svg/github-dark.svg'
                }
                width={42}
                height={44}
                alt='github logo'
              />
            </a>
            <a href='https://www.linkedin.com/in/woorim-heo-436b6a1bb/' className=''>
              <Image
                src={'/svg/linkedIn-blue.svg'}
                width={48}
                height={48}
                alt='linkedin logo'
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
