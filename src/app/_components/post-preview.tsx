import Link from 'next/link';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, date, excerpt, slug }: Props) {
  return (
    <div className='py-4 border-b border-gray-200 transition-colors duration-300'>
      <h3 className='text-xl font-bold mb-1 leading-snug hover:underline'>
        <Link href={`/posts/${slug}`} className='dark:text-neutral-100'>
          {title}
        </Link>
      </h3>
      <div className='text-sm text-slate-700 dark:text-neutral-300 mb-2'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-sm dark:text-gray-200 text-slate-900 line-clamp-2'>{excerpt}</p>
    </div>
  );
}
