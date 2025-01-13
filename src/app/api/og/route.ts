import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || '기본 제목';
  const imageUrl = 'http://localhost:3000/assets/blog/thumbnail/blog-thumbnail.png';
  try {
    return new ImageResponse({
      type: 'div',
      key: 'main-container',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        },
        children: [
          {
            type: 'div',
            key: 'gradient-overlay',
            props: {
              style: {
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
              },
            },
          },
          {
            type: 'span',
            key: 'text-container',
            props: {
              style: { zIndex: 1, fontSize: '120px', fontWeight: 'bold', color: 'white' },
              children: title,
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error('Error reading local image:', error);
    return new Response('Failed to load image', { status: 500 });
  }
}
