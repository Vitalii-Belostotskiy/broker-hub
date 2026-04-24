import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import AnimateIn from '../AnimateIn';

interface CtaDict {
  title: string;
  subtitle: string;
  button: string;
}

export default function CtaSection({ dict }: { dict: CtaDict }) {
  return (
    <section id='readyToStart' className='scroll-mt-20 relative pt-20 pb-28 sm:pb-36 overflow-hidden bg-zinc-950'>
      {/* Wave top border — color matches bg-gray-50 of previous section */}
      <div
        className='absolute top-0 left-0 w-full pointer-events-none select-none z-10 overflow-hidden'
        style={{ height: '72px', marginTop: '-1px' }}
      >
        <svg viewBox='0 0 2880 72' preserveAspectRatio='none' className='animate-wave block' style={{ height: '72px' }}>
          <path d='M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 C1680,72 1920,0 2160,36 C2400,72 2640,0 2880,36 L2880,0 L0,0 Z' fill='#f9fafb' />
        </svg>
      </div>

      {/* Background image with overlay */}
      <div className='absolute inset-0 pointer-events-none select-none'>
        <Image fill src='/layan-verde_exterior_11.jpg' alt='' aria-hidden='true' className='w-full h-full object-cover opacity-35' />
        <div className='absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-zinc-900/5' />
      </div>

      <div className='relative z-10 max-w-2xl mt-10 mx-auto text-center px-4'>
        <AnimateIn delay={0} direction='up' rootMargin='0px 0px -200px 0px'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4'>{dict.title}</h2>
        </AnimateIn>
        <AnimateIn delay={150} direction='up' rootMargin='0px 0px -200px 0px'>
          <p className='text-zinc-300 text-base sm:text-lg mb-10'>{dict.subtitle}</p>
        </AnimateIn>
        <AnimateIn delay={300} direction='up' rootMargin='0px 0px -200px 0px'>
          <a
            href='https://www.onlybrokers.com/register?ref=0FHVQPVL'
            className='inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 active:scale-95 text-black font-bold px-10 py-4 rounded-full transition-all text-sm sm:text-base shadow-xl shadow-amber-400/20'
          >
            {dict.button}
            <BsArrowRight className='text-xl' />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
