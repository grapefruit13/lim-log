import classNames from 'classnames';
import { Noto_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpRight from '../icon/ArrowUpRight';
import GithubLogo from '../icon/GithubLogo';

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400'] });
const SVG_SIZE = 20;

type Props = {
  name: string;
  description: string;
  logoSrc: string;
  gitSrc: string;
  projectUrl: string;
  color: string;
};

const ProjectCard = ({
  name,
  description,
  logoSrc,
  gitSrc,
  projectUrl,
  color,
}: Props) => {
  return (
    <div className='flex items-center justify-stretch gap-6 border w-full max-w-[400px] hover:border-slate-600 dark:hover:border-slate-400 dark:border-slate-600 border-slate-400 rounded px-4 py-6'>
      <Image src={logoSrc} width={44} height={44} alt='logo' />
      <div className='flex flex-col items-start justify-start gap-3 flex-grow'>
        <h3>{name}</h3>
        <p className={classNames(notoSans.className, 'text-sm')}>{description}</p>
      </div>
      <div className='flex gap-2'>
        <Link
          className='hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors p-2'
          href={gitSrc}
        >
          <GithubLogo width={SVG_SIZE} height={SVG_SIZE} color={color} />
        </Link>
        <Link
          className='hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors p-2'
          href={projectUrl}
        >
          <ArrowUpRight width={SVG_SIZE} height={SVG_SIZE} color={color} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
