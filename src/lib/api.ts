import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

/**
 * @description 추천 포스트만 필터링
 */
export function getRecommendedPosts(): Post[] {
  const allPosts = getAllPosts();
  const recommendedPosts = allPosts
    .filter((post) => post.recommended ?? false) // recommended가 true인 포스트만 필터링
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1)); // 날짜 오름차순 정렬
  return recommendedPosts;
}
