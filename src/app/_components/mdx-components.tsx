import Image from 'next/image';
import React from 'react';

export const MDXComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className='text-4xl text-blue-900 font-bold mt-8 mb-4' {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className='text-3xl mt-12 mb-4 leading-snug' {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className='text-2xl mt-8 mb-4 leading-snug' {...props} />
  ),
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h4 className='text-xl mt-4 mb-4 leading-snug' {...props} />
  ),
  h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h5 className='text-lg mt-3 mb-4 leading-snug' {...props} />
  ),
  h6: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h6 className='text-base mt-2 mb-4 leading-snug' {...props} />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className='bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto'
      {...props}
    />
  ),
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code className='bg-gray-800 text-gray-100 rounded px-1 py-0.5' {...props} />
  ),
  img: (props: React.HTMLProps<HTMLImageElement>) => {
    const { src, alt, width, height } = props;

    if (!src) {
      return null;
    }

    return (
      <Image
        src={src}
        alt={alt || 'MDX Image'}
        width={width ? Number(width) : 800}
        height={height ? Number(height) : 600}
        className='my-4 rounded-md'
      />
    );
  },
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className='my-6 text-gray-800 dark:text-gray-200' {...props} />
  ),
  aside: (props: React.HTMLProps<HTMLElement>) => (
    <aside className='my-4 py-4 rounded' {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => <li className='' {...props} />,
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className='my-6 ml-6 pr-3 last-of-type:list-disc' {...props} />
  ),
  ol: (
    props: React.HTMLProps<HTMLOListElement> & { type?: '1' | 'a' | 'i' | 'A' | 'I' }
  ) => {
    const { type = '1', ...rest } = props; // 'type' 속성에 기본값을 설정
    return <ol className='my-6 pl-6 list-decimal' type={type} {...rest} />;
  },
  hr: (props: React.HTMLProps<HTMLHRElement>) => (
    <hr
      className='border-t-2 border-gray-900 dark:border-indigo-100 w-full my-6'
      {...props}
    />
  ),
};
