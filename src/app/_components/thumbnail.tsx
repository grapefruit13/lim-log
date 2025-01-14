import Image from 'next/image';

const WIDTH = 600;
const HEIGHT = 400;

interface ThumbnailProps {
  coverImage: string;
}

const Thumbnail = ({ coverImage }: ThumbnailProps) => {
  return (
    <Image
      src={coverImage || '/assets/blog/thumbnail/blue-gradient.jpg'}
      width={WIDTH}
      height={HEIGHT}
      alt='post-cover-image'
      aria-label='post-cover-image'
      className={`max-w-[${WIDTH}px] max-h-[${HEIGHT}px] overflow-hidden mx-auto rounded-xl`}
    />
  );
};

export default Thumbnail;
