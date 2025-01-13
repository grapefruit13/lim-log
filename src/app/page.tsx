'use client';

import { ICON_LINKS } from '@/constants/_icon';
import { useThemeStore } from '@/stores/useThemeStore';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Noto_Sans, Poppins } from 'next/font/google';
import ProjectCard from './_components/portfolio/project-card';
import { PROJECTS } from '@/constants/_projects';

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });

const ICON_SIZE = 32;

export default function Index() {
  const { mode } = useThemeStore();
  const [resolvedMode, setResolvedMode] = useState<'dark' | 'light'>('light');

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
    <main
      className={classNames(
        poppins.className,
        'flex lg:flex-row flex-col justify-between items-center border-accent bg-darkest lg:border-t-0 w-full min-h-screen'
      )}
    >
      <section className='relative top-0 left-0 lg:fixed flex flex-col items-center gap-y-4 lg:py-28 pt-12 pb-8 w-full lg:w-[28rem] lg:h-screen'>
        <div className='bg-accent rounded-full w-40 h-40 overflow-hidden'>
          <Image
            src='/assets/blog/authors/profile_pixel.avif'
            width={200}
            height={200}
            alt='profile pic'
          />
        </div>
        <h3 className='mb-0 font-extrabold text-3xl'>LIM</h3>
        <div className='flex flex-col items-center gap-y-1'>
          <span className={classNames(notoSans.className, 'flex text-base')}>
            A Web Developer
          </span>
          <span className={classNames(notoSans.className, 'flex text-base')}>
            Based in @Seoul
          </span>
          <span className={classNames(notoSans.className, 'flex text-base')}></span>
          <div className='flex gap-4 justify-center items-center py-3 px-4'>
            <a href='https://github.com/grapefruit13' className='tech-stack-wrapper'>
              <Image
                src={
                  resolvedMode === 'dark'
                    ? '/svg/github-white.svg'
                    : '/svg/github-dark.svg'
                }
                width={28}
                height={28}
                alt='github logo'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/woorim-heo-436b6a1bb/'
              className='tech-stack-wrapper'
            >
              <Image
                src={'/svg/linkedIn-blue.png'}
                width={30}
                height={32}
                alt='linkedin logo'
              />
            </a>
            <a
              href='mailto:liamh0218@gmail.com'
              aria-label='Send Email'
              className='tech-stack-wrapper'
            >
              <Image src={'/svg/gmail.svg'} width={30} height={32} alt='gmail logo' />
            </a>
          </div>
        </div>
        <article className='flex items-center gap-x-2 mt-4'></article>
        <p className='lg:flex hidden mt-auto text-base'>©2025 Lim</p>
      </section>
      <section className='flex flex-col gap-y-6 lg:ml-[28rem] px-14 py-12 lg:p-12 w-full lg:w-3/4 min-h-screen'>
        <article className='flex flex-col gap-y-6 border-slate-400  pb-6 border-b-2'>
          <h1 className='mb-0 text-4xl lg:text-5xl tracking-tighter'>
            Hello👋🏻! I&apos;m lim, A Web Developer who loves creating things with code.
          </h1>
          <p className={classNames(notoSans.className, 'mb-0 font-semibold text-xl')}>
            Check out my work below 👇
          </p>
          <div className='flex gap-4 w-full flex-wrap'>
            {ICON_LINKS.map((item, idx) => {
              return (
                <div
                  className='tech-stack-wrapper hover:scale-110 transition-transform'
                  key={`${idx}-${item}`}
                >
                  <Image src={item} width={ICON_SIZE} height={ICON_SIZE} alt='logo' />
                </div>
              );
            })}
          </div>
        </article>
        <article className='flex-col gap-y-4 py-4 w-full'>
          <div className='flex items-center mb-3 text-3xl'>
            <h4>Projects</h4>
          </div>
          <div className='flex flex-wrap gap-6 w-full'>
            {PROJECTS.map((item, idx) => (
              <ProjectCard
                key={`${item}-${idx}`}
                name={item[0]}
                description={item[1]}
                logoSrc={item[2]}
                gitSrc={item[3]}
                projectUrl={item[4]}
                color={item[5]}
              />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
