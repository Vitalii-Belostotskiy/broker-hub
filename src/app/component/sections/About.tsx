import Image from 'next/image';

interface AboutDict {
  label: string;
  paragraphs: string[];
  cards: string[];
}

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section id='about' className='scroll-mt-20 py-20 sm:py-28 bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left: text */}
          <div>
            <p className='text-amber-400 text-xs font-semibold uppercase tracking-widest mb-5'>{dict.label}</p>
            <div className='space-y-4'>
              {dict.paragraphs.map((p, i) => (
                <p key={i} className={`leading-relaxed ${i === 0 ? 'text-white font-semibold text-lg sm:text-xl' : 'text-zinc-300 text-base'}`}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right: feature cards */}
          <div className='flex flex-col gap-4'>
            {dict.cards.map((card, i) => (
              <div key={i} className='flex items-center gap-4 bg-zinc-800/40 border border-zinc-700/40 rounded-2xl p-6'>
                <div className='shrink-0 w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/25 flex items-center justify-center'>
                  {i === 0 ? (
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
                      <path d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  ) : (
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
                      <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  )}
                </div>
                <p className='text-zinc-300 text-sm leading-relaxed'>{card}</p>
              </div>
            ))}

            {/* Decorative property thumbnail */}
            <div className='mt-2 rounded-2xl overflow-hidden h-44 relative'>
              <Image fill src='/layan-verde_exterior_02.jpg' alt='Property' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
