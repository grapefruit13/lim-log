const TITLE = 'lim-log';
const DESCRIPTION = 'logging...';
const SITE_URL = 'https://lim-log.vercel.app/';
const IMAGE_URL =
  'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/profile_image/2-3_116_1720772798515.avif';
const IMAGE_ALT = 'lim-log 메타이미지';
const IMAGE_SIZE = 400;

export const METADATA = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['블로그', '포트폴리오', '개발자', 'blog', 'portfolio', 'dev'],
  url: SITE_URL,
  images: [
    {
      url: IMAGE_URL,
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      alt: IMAGE_ALT,
    },
  ],
};

export const PAGE_METADATA = {
  PORTFOLIO: {
    title: `lim's portfolio page`,
    description: `lim portfolio`,
  },
  BLOG: {
    title: `lim's blog page`,
    description: `lim-log`,
  },
};
