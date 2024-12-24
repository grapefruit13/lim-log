import markdownStyles from './markdown-styles.module.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from './mdx-components';

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className='max-w-full mx-auto'>
      <div className={markdownStyles['markdown']}>
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
    </div>
  );
}
