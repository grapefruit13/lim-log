import Link from 'next/link';

const Header = () => {
  return (
    <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pb-8 pt-8 flex items-center sticky top-0 backdrop-blur-md'>
      <Link href='/' className='hover:underline'>
        Lim log
      </Link>
      .
    </h2>
  );
};

export default Header;
