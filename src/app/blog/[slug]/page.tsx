import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { PostBody } from '@/app/_components/post-body';
import { PostHeader } from '@/app/_components/post-header';
import Container from '@/app/_components/container';
import Alert from '@/app/_components/alert';
import Header from '@/app/_components/header';

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container>
        <Header />
        <article className='mb-32'>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with 우림`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// import path from 'path';
// import React from 'react';
// import fs from 'fs';
// import { notFound } from 'next/navigation';
// import MDXContent from '@/components/MDXContent';

// const postPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
//   const slug = (await params).slug;
//   const postDirectory = path.join(process.cwd(), 'posts');
//   const filePath = path.join(postDirectory, `${slug}.mdx`);

//   if (!fs.existsSync(filePath)) notFound();

//   const mdxSource = fs.readFileSync(filePath, 'utf-8');

//   return (
//     <div>
//       <h1>{slug}</h1>
//       <MDXContent mdxSource={mdxSource} />
//     </div>
//   );
// };

// export default postPage;
