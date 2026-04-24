import Image from 'next/image';
import AnimateIn from '../AnimateIn';

interface AboutDict {
  label: string;
  paragraphs: string[];
  cards: string[];
}

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section id='about' className='h-full py-10 scroll-mt-20 flex items-center relative overflow-hidden bg-gray-50'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left: text */}
          <div className='space-y-6'>
            <AnimateIn delay={0}>
              <p className='text-amber-500 text-xs font-semibold uppercase tracking-widest'>{dict.label}</p>
            </AnimateIn>
            {dict.paragraphs.map((p, i) => (
              <AnimateIn key={i} delay={(i + 1) * 150}>
                <p
                  className={`leading-relaxed ${i === 0 ? 'text-gray-900 font-semibold text-xl sm:text-2xl' : 'text-gray-900 text-base sm:text-lg'}`}
                >
                  {p}
                </p>
              </AnimateIn>
            ))}

            {dict.cards.map((card, i) => (
              <AnimateIn key={i} delay={(i + 1) * 200}>
                <div className='flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm'>
                  <div className='shrink-0 w-11 h-11 rounded-full bg-white border border-amber-500 flex items-center justify-center'>
                    {i === 0 ? (
                      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#D97706' strokeWidth='1.5' aria-hidden='true'>
                        <path d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>
                    ) : (
                      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#D97706' strokeWidth='1.5' aria-hidden='true'>
                        <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    )}
                  </div>
                  <p className='text-gray-700 text-base leading-relaxed'>{card}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Right: feature cards + image */}
          <div className='flex flex-col gap-4'>
            <AnimateIn delay={600}>
              <div className='mt-2 rounded-2xl overflow-hidden h-60 relative'>
                <Image fill src='/Gemini_Generated_Image_42piks42piks42pi.png' alt='Property' className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-50/30 to-transparent' />
              </div>
            </AnimateIn>
            <AnimateIn delay={600}>
              <div className='mt-2 rounded-2xl overflow-hidden h-60 relative'>
                <Image fill src='/Gemini_Generated_Image_cyvk21cyvk21cyvk.png' alt='Property' className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-50/30 to-transparent' />
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
