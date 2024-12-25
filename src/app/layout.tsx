import Footer from '@/app/_components/footer';
import { HOME_OG_IMAGE_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import {
  Inter,
  // Noto_Sans_KR
} from 'next/font/google';
import cn from 'classnames';
import './globals.css';
import Header from '@/app/_components/header';
import TitleResetter from './_components/title-resetter';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
// const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `lim-log`,
  description: ``,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000000' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
        <meta name='theme-color' content='#000' />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
        <meta
          name='google-site-verification'
          content='alHfhHfmSnUGdgt__6qzl3pNiy-mcL_hUzjK6Zcf408'
        />
      </head>
      <body
        className={cn(
          inter.className,
          // notoSansKR.className,
          'dark:bg-slate-800 bg-neutral-50 dark:text-slate-100 w-full'
        )}
      >
        <Header />
        <TitleResetter />
        <div className='min-h-screen'>{children}</div>
        {/* TODO: 수정 필요 */}
        <Footer />
      </body>
    </html>
  );
}
