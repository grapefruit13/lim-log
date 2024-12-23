import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className='lg:text-6xl text-5xl font-bold tracking-tighter leading-snug mb-8 text-center md:text-left'>
      {children}
    </h1>
  );
}
