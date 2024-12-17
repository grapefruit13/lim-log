import path from 'path';
import React from 'react';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';

const filePath = path.join(process.cwd(), 'posts', 'ch07.mdx');
const markdownSource = fs.readFileSync(filePath, 'utf-8');
const {
  content,
  // frontmatter
} = await compileMDX({
  source: markdownSource,
  options: {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  },
});

const page = () => {
  return <div>{content}</div>;
};

export default page;
