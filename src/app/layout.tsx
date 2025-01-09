import { HOME_OG_IMAGE_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import {
  Inter,
  // Noto_Sans_KR
} from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import cn from 'classnames';
import './globals.css';
import TitleResetter from './_components/title-resetter';
import Header from '@/app/_components/header';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
// const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });
const isProduction = process.env.NODE_ENV === 'production';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
    <html lang='ko' className='dark' data-mode='system'>
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
          href='/favicon/cat-favicon-32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/cat-favicon-32.png'
        />
        <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000000' />
        <link rel='shortcut icon' href='/favicon/favicon.png' />
        <meta
          name='google-site-verification'
          content='alHfhHfmSnUGdgt__6qzl3pNiy-mcL_hUzjK6Zcf408'
        />
        {isProduction && GA_ID && (
          <>
            <Script
              async
              strategy='afterInteractive'
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            ></Script>
            <Script id='google-analytics' strategy='afterInteractive'>
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          `}
            </Script>
          </>
        )}
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
        <div className='min-h-screen'>
          {children}
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
