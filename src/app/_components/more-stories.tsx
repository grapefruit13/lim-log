import { Post } from '@/interfaces/post';
import { PostPreview } from './post-preview';

type Props = {
  posts: Post[];
};

// 메인 포스트 제외한 나머지 포스트
export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className='mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight'>
        More Stories
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 gap-y-12 md:gap-y-16 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
