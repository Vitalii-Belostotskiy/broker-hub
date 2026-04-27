import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import AnimateIn from '../AnimateIn';

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
    <section id='earnings' className='flex items-center h-full py-10 bg-[#0a0a0a] scroll-mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <AnimateIn delay={0}>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12'>{dict.title}</h2>
        </AnimateIn>

        <div className='grid md:grid-cols-2 gap-12 lg:gap-20'>
          {/* Tiers */}
          <div>
            <div className='flex flex-col sm:flex-row md:flex-col gap-4'>
              {dict.tiers.map((tier, i) => (
                <AnimateIn key={tier.level} delay={(i + 1) * 150}>
                  <div className='flex-1 bg-zinc-800/50 border border-zinc-700/40 rounded-2xl p-6'>
                    <div className='flex items-baseline gap-3 mb-2'>
                      <span className='text-5xl sm:text-6xl font-bold text-amber-400'>{tier.rate}</span>
                      <span className='text-zinc-400 text-sm'>{tier.level}</span>
                    </div>
                    <p className='text-zinc-300 text-base leading-relaxed'>{tier.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn delay={450}>
              <p className='text-zinc-500 text-sm mt-5 leading-relaxed'>{dict.note}</p>
            </AnimateIn>
          </div>

          {/* Why */}
          <div>
            <AnimateIn delay={150}>
              <h3 className='text-lg sm:text-xl font-bold text-white mb-7'>{dict.whyTitle}</h3>
            </AnimateIn>
            <ul className='space-y-4'>
              {dict.whyPoints.map((point, i) => (
                <AnimateIn key={i} delay={(i + 1) * 120 + 150}>
                  <li className='flex items-center gap-3 text-zinc-300 text-base leading-relaxed'>
                    <IoCheckmarkCircleOutline className='text-[1.5rem] text-amber-400 shrink-0' />
                    {point}
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
