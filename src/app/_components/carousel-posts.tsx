'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/_routes';

const SLIDE_INTERVAL = 5000;
const { blog } = ROUTES;

interface CarouselPostsProps {
  posts: {
    title: string;
    coverImage: string;
    slug: string;
  }[];
}

export default function CarouselPosts({ posts }: CarouselPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [posts.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative w-full overflow-hidden'>
      {/* 슬라이드 컨테이너 */}
      <div
        className={`flex transition-transform duration-500`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${posts.length * 100}%`,
        }}
      >
        {posts.map((post) => (
          <div key={post.slug} className='w-full flex-shrink-0'>
            <Link
              href={`${blog}/${post.slug}`}
              className='relative w-full h-[400px] overflow-hidden shadow-lg'
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                // 이미지 확대 height
                className='h-[400px]'
                width={1000}
                height={1000}
              />
              <div className='absolute bottom-0 left-0 p-10 bg-gradient-to-t from-black to-transparent w-full' />
              <div className='absolute bottom-0 left-0 p-4  w-full'>
                <h3 className='text-neutral-100 font-bold text-xl pb-5'>{post.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* 슬라이드 인디케이터 */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3'>
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-neutral-100' : 'bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
