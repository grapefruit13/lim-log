import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/_routes';

const { blog } = ROUTES;

type Props = {
  title: string;
  src: string;
  slug?: string;
  imageClassName?: string;
};

const CoverImage = ({ title, src, slug, imageClassName }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        'shadow-sm w-full',
        {
          'hover:shadow-lg transition-shadow duration-200': slug,
        },
        imageClassName
      )}
      width={1800}
      height={600}
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`${blog}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
