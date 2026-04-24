'use client';

import Image from 'next/image';
import AnimateIn from '../AnimateIn';

const ICONS = [
  <svg key='0' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#D97706' strokeWidth='1.5' aria-hidden='true'>
    <path d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
  </svg>,
  <svg key='1' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#D97706' strokeWidth='1.5' aria-hidden='true'>
    <path d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
  </svg>,
  <svg key='2' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#D97706' strokeWidth='1.5' aria-hidden='true'>
    <path d='M13 10V3L4 14h7v7l9-11h-7z' />
  </svg>,
];

interface ForWhoDict {
  title: string;
  cards: string[];
}

export default function ForWho({ dict }: { dict: ForWhoDict }) {
  return (
    <section id='forWho' className='h-full py-10 flex items-center bg-gray-100 scroll-mt-30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <AnimateIn delay={0}>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-14'>{dict.title}</h2>
        </AnimateIn>

        <div className='grid md:grid-cols-2 gap-6 items-stretch'>
          {/* Left: image fills height of all cards */}
          <AnimateIn delay={180} className='h-full'>
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-hidden='true'
              className='absolute rounded-2xl inset-0 w-full h-full object-cover hidden md:block pointer-events-none'
            >
              <source src='/buisines_lady.MP4' type='video/mp4' />
            </video>
          </AnimateIn>

          {/* Right: cards stacked vertically */}
          <div className='flex flex-col gap-4'>
            {dict.cards.map((card, i) => (
              <AnimateIn key={i} delay={(i + 1) * 180} direction='up'>
                <div className='bg-white border border-gray-200 rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm hover:shadow-md hover:border-amber-400 transition-all'>
                  <div className='shrink-0 w-12 h-12 rounded-xl bg-white border border-amber-500 flex items-center justify-center'>{ICONS[i]}</div>
                  <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>{card}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
