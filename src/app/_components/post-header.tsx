'use client';

import { useTitleStore } from '@/stores/useTitleStore';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import { PostTitle } from '@/app/_components/post-title';
import { type Author } from '@/interfaces/author';
import { useEffect } from 'react';
import Thumbnail from './thumbnail';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, date, author }: Props) {
  const { setTitle } = useTitleStore.getState();
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:mb-8 md:flex md:gap-3 md:items-center'>
        <Avatar name={author.name} picture={author.picture} />
        <div className='text-lg dark:text-gray-300 flex gap-3'>
          <span>·</span>
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className='mb-16 md:mb-16 sm:mx-0'>
        <Thumbnail title={title} className='max-w-[600px] mx-auto' />
      </div>
      <div className='max-w-full mx-auto'>
        <div className='block md:hidden mb-6'>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className='md:hidden mb-6 text-lg'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
