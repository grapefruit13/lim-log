import Container from '@/app/_components/container';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts, getRecommendedPosts } from '@/lib/api';
import CarouselPosts from '@/app/_components/carousel-posts';

export default function Index() {
  const allPosts = getAllPosts();
  const recommendedPosts = getRecommendedPosts();
  const morePosts = allPosts.slice(0);

  return (
    <main>
      <Container className='max-w-[1000px] flex flex-col gap-16 xs:px-4 sm:px-8 md:px-16'>
        <section className=''>
          <h2 className='mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight'>
            Recommendations
          </h2>
          <CarouselPosts posts={recommendedPosts} />
        </section>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
