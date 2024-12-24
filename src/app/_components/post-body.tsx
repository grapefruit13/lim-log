import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from './mdx-components';

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className='max-w-full mx-auto'>
      <MDXRemote
        source={content}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        }}
        components={MDXComponents}
      />
    </div>
  );
}
