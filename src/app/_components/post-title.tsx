import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className='py-4 pt-16 lg:text-6xl text-5xl font-bold tracking-tighter leading-snug mb-8 text-center'>
      {children}
    </h1>
  );
}
