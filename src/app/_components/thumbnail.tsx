import Image from 'next/image';

interface ThumbnailProps {
  title: string;
  url?: string;
  className?: string;
}

const Thumbnail = ({ title, className }: ThumbnailProps) => {
  return (
    <Image
      src={`/api/og?title=${title}}`}
      className={className}
      width={1800}
      height={600}
      alt='thumbnail'
    />
  );
};

export default Thumbnail;
