import Image from 'next/image';
import React from 'react';

export const MDXComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      className='text-4xl dark:text-neutral-50 text-blue-900 font-extrabold mt-8 mb-4'
      {...props}
    />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      className='text-3xl dark:text-neutral-50 text-slate-800 font-bold mt-12 mb-4 leading-snug'
      {...props}
    />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      className='text-2xl dark:text-neutral-50 text-slate-900 font-bold mt-8 mb-4 leading-snug'
      {...props}
    />
  ),
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h4
      className='dark:text-neutral-50 text-slate-950 font-bold text-xl mt-4 mb-4 leading-snug'
      {...props}
    />
  ),
  h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h5
      className='dark:text-neutral-50 text-blue-900 font-semibold text-lg mt-3 mb-4 leading-snug'
      {...props}
    />
  ),
  h6: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h6
      className='dark:text-neutral-50 text-blue-900 font-semibold text-base mt-2 mb-4 leading-snug'
      {...props}
    />
  ),
  // pre: (props: React.HTMLProps<HTMLPreElement>) => (
  //   <pre
  //     className='bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm'
  //     {...props}
  //   />
  // ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => {
    return (
      <div className='relative'>
        {/* 맥 윈도우 스타일의 버튼들 */}
        <div className='absolute top-0 left-0 flex space-x-2 bg-slate-700 dark:bg-neutral-50 w-full p-2 rounded-t'>
          <span className='w-3 h-3 bg-red-500 rounded-full'></span>
          <span className='w-3 h-3 bg-yellow-400 rounded-full'></span>
          <span className='w-3 h-3 bg-green-500 rounded-full'></span>
        </div>
        {/* 코드 블럭 */}
        <pre
          className='bg-neutral-100 dark:bg-slate-700 text-slate-950 dark:text-gray-100 rounded px-3 py-3 pt-10 text-wrap text-sm overflow-x-auto shadow-md border border-slate-700 dark:border-neutral-50'
          {...props}
        />
      </div>
    );
  },
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code
      className='bg-slate-800 dark:bg-slate-900 text-gray-100 rounded px-2 py-[2px] whitespace-nowrap'
      {...props}
    />
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
  em: (props: React.HTMLProps<HTMLElement>) => (
    <em className=' dark:text-slate-900' {...props} />
  ),
  // quote style
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className='my-4 rounded px-4 py-2 dark:bg-slate-950 bg-slate-300 bg-opacity-40'
      {...props}
    />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => <li className='custom-li' {...props} />,
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className='my-6 ml-6 pr-3 last-of-type:list-disc custom-ul' {...props} />
  ),
  ol: (
    props: React.HTMLProps<HTMLOListElement> & { type?: '1' | 'a' | 'i' | 'A' | 'I' }
  ) => {
    const { type = '1', ...rest } = props; // 'type' 속성에 기본값을 설정
    return <ol className='my-6 pl-6 list-decimal' type={type} {...rest} />;
  },
  hr: (props: React.HTMLProps<HTMLHRElement>) => (
    <hr
      className='border-t-1 border-gray-900 dark:border-neutral-200 w-full my-6'
      {...props}
    />
  ),
};
