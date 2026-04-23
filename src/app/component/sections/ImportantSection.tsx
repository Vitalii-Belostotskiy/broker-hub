'use client';

const ICONS = [
  <svg key='0' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
    <path d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
  </svg>,
  <svg key='1' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
    <path d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>,
  <svg key='2' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
    <path d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
  </svg>,
  <svg key='3' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#FBBF24' strokeWidth='1.5' aria-hidden='true'>
    <path d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' />
  </svg>,
];

interface ImportantDict {
  title: string;
  items: string[];
}

export default function ImportantSection({ dict }: { dict: ImportantDict }) {
  return (
    <section id='important' className='py-20 sm:py-28 bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white mb-12'>{dict.title}</h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {dict.items.map((item, i) => (
            <div key={i} className='flex flex-col gap-4'>
              <div className='w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center'>{ICONS[i]}</div>
              <p className='text-zinc-300 text-sm leading-relaxed'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
