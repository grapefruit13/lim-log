import { compileMDX } from 'next-mdx-remote/rsc';
import React from 'react';
import remarkGfm from 'remark-gfm';

interface MDXContentProps {
  mdxSource: any;
}

const MDXContent = async ({ mdxSource }: MDXContentProps) => {
  // console.log(mdxSource);
  const {
    content,
    // frontmatter
  } = await compileMDX({
    source: mdxSource,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
      },
    },
  });
  return <div>{content}</div>;
};

export default MDXContent;
