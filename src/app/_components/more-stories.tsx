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
        More stories
      </h2>
      <div className='flex flex-col gap-2 mb-32'>
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
