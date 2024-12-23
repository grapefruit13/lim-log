import ThemeSwitcher from '@/app/_components/theme-switcher';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-full mb-20 py-8 flex items-center sticky top-0 backdrop-blur-lg px-5 justify-between z-50'>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
        <Link href='/' className='hover:underline'>
          Lim-log
        </Link>
        .
      </h2>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
