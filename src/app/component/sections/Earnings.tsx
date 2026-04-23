'use client';

import { IoCheckmarkCircleOutline } from 'react-icons/io5';

interface Tier {
  rate: string;
  level: string;
  desc: string;
}

interface EarningsDict {
  title: string;
  tiers: Tier[];
  note: string;
  whyTitle: string;
  whyPoints: string[];
}

export default function Earnings({ dict }: { dict: EarningsDict }) {
  return (
    <section id='earnings' className='py-20 sm:py-28 bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white mb-12'>{dict.title}</h2>

        <div className='grid md:grid-cols-2 gap-12 lg:gap-20'>
          {/* Tiers */}
          <div>
            <div className='flex flex-col sm:flex-row md:flex-col gap-4'>
              {dict.tiers.map((tier) => (
                <div key={tier.level} className='flex-1 bg-zinc-800/50 border border-zinc-700/40 rounded-2xl p-6'>
                  <div className='flex items-baseline gap-3 mb-2'>
                    <span className='text-5xl sm:text-6xl font-bold text-amber-400'>{tier.rate}</span>
                    <span className='text-zinc-400 text-sm'>{tier.level}</span>
                  </div>
                  <p className='text-zinc-300 text-sm leading-relaxed'>{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className='text-zinc-400 text-xs mt-5 leading-relaxed'>{dict.note}</p>
          </div>

          {/* Why */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold text-white mb-7'>{dict.whyTitle}</h3>
            <ul className='space-y-4'>
              {dict.whyPoints.map((point, i) => (
                <li key={i} className='flex items-center gap-3 text-zinc-300 text-sm leading-relaxed shrink-0'>
                  <IoCheckmarkCircleOutline className='text-[1.5rem] text-[#fbbf24] shrink-0' />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
