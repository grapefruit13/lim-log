import Avatar from '@/app/_components/avatar';
import CoverImage from '@/app/_components/cover-image';
import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import DateFormatter from './date-formatter';
import { ROUTES } from '@/constants/_routes';

const { blog } = ROUTES;

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

// 메인 포스트
export function HeroPost({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          imageClassName='h-auto max-h-[600px]'
        />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-5xl leading-tight'>
            <Link href={`${blog}/${slug}`} className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
