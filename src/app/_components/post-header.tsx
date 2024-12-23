import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import { PostTitle } from '@/app/_components/post-title';
import { type Author } from '@/interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
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
        <CoverImage
          title={title}
          src={coverImage}
          imageClassName='max-w-[600px] mx-auto'
        />
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