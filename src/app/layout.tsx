import type { ReactNode } from 'react';
import { Geist } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers();
  const lang = h.get('x-lang') || 'en';
  const dir = h.get('x-dir') || 'ltr';

  return (
    <html lang={lang} dir={dir} className={`${geistSans.variable} h-full antialiased scroll-smooth`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
