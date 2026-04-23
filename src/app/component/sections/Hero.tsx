import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';

interface HeroDict {
  title: string;
  subtitle: string;
  cta: string;
  badges: string[];
}

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section className='relative h-screen min-h-[600px] overflow-hidden bg-zinc-950'>
      {/* Mobile video */}
      <video autoPlay muted loop playsInline aria-hidden='true' className='absolute inset-0 w-full h-full object-cover md:hidden pointer-events-none'>
        <source src='/promo_clip_mobile.mp4' type='video/mp4' />
      </video>

      {/* Desktop video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden='true'
        className='absolute inset-0 w-full h-full object-cover hidden md:block pointer-events-none'
      >
        <source src='/promo_clip.MOV' type='video/mp4' />
      </video>

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/20 to-zinc-900/30 pointer-events-none' />

      {/* Content */}
      <div className='relative z-10 h-full flex items-center'>
        <div className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
          <div className='max-w-2xl'>
            <p className='text-amber-400 text-xs font-semibold uppercase tracking-widest mb-5'>Property Hub</p>
            <h1 className='text-[2.2rem] sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6'>{dict.title}</h1>
            <p className='text-zinc-300 text-base sm:text-lg leading-relaxed mb-10 max-w-md'>{dict.subtitle}</p>
            <a
              href='https://www.onlybrokers.com/register?ref=0FHVQPVL'
              className='inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 active:scale-95 text-black font-bold px-8 py-4 rounded-full transition-all text-sm sm:text-base shadow-lg shadow-amber-400/20'
            >
              {dict.cta}
              <BsArrowRight className='text-xl' />
            </a>

            <div className='mt-10 flex flex-wrap gap-x-6 gap-y-3'>
              {dict.badges.map((badge) => (
                <div key={badge} className='flex items-center gap-1 text-sm text-zinc-300'>
                  <IoCheckmarkCircleOutline className='text-[1.5rem] text-[#fbbf24]' />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
