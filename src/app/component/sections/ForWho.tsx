'use client';

const ICONS = [
  <svg key='0' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
    <path d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
  </svg>,
  <svg key='1' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
    <path d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
  </svg>,
  <svg key='2' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
    <path d='M13 10V3L4 14h7v7l9-11h-7z' />
  </svg>,
];

interface ForWhoDict {
  title: string;
  cards: string[];
}

export default function ForWho({ dict }: { dict: ForWhoDict }) {
  return (
    <section id="forWho" className='py-20 sm:py-28 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white text-center mb-12'>{dict.title}</h2>

        <div className='grid sm:grid-cols-3 gap-5'>
          {dict.cards.map((card, i) => (
            <div key={i} className='bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex flex-col gap-5 hover:border-zinc-600 transition-colors'>
              <div className='w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center'>{ICONS[i]}</div>
              <p className='text-zinc-300 text-sm leading-relaxed'>{card}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
