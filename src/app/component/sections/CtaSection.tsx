import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

interface CtaDict {
  title: string;
  subtitle: string;
  button: string;
}

export default function CtaSection({ dict }: { dict: CtaDict }) {
  return (
    <section id='readyToStart' className='scroll-mt-20 relative py-28 sm:py-36 overflow-hidden bg-zinc-950'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 pointer-events-none select-none'>
        <Image fill src='/layan-verde_exterior_11.jpg' alt='' aria-hidden='true' className='w-full h-full object-cover opacity-35' />
        <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/30' />
      </div>

      <div className='relative z-10 max-w-2xl mx-auto text-center px-4'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4'>{dict.title}</h2>
        <p className='text-zinc-300 text-base sm:text-lg mb-10'>{dict.subtitle}</p>
        <a
          href='https://www.onlybrokers.com/register?ref=0FHVQPVL'
          className='inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 active:scale-95 text-black font-bold px-10 py-4 rounded-full transition-all text-sm sm:text-base shadow-xl shadow-amber-400/20'
        >
          {dict.button}
          <BsArrowRight className='text-xl' />
        </a>
      </div>
    </section>
  );
}
