'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useSwipeable } from 'react-swipeable';

interface Props {
  lang: string;
  nav: { home: string; about: string; howItWorks: string; important: string; earnings: string; forWho: string; readyToStart: string };
}

export default function BurgerMenu({ lang, nav }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}#about`, label: nav.about },
    { href: `/${lang}#howItWorks`, label: nav.howItWorks },
    { href: `/${lang}#important`, label: nav.important },
    { href: `/${lang}#earnings`, label: nav.earnings },
    { href: `/${lang}#forWho`, label: nav.forWho },
    { href: `/${lang}#readyToStart`, label: nav.readyToStart },
  ] as const;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClose = () => setOpen(false);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => setOpen(false),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside as EventListener);
    };
  }, []);

  return (
    <>
      {/* Burger button — mobile only */}
      <button onClick={() => setOpen(true)} className='md:hidden text-[22px]' aria-label='Open menu' aria-expanded={open}>
        <RxHamburgerMenu />
      </button>

      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`
          md:hidden h-screen fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Slide-in panel — 1/3 of screen from the left */}
      <aside
        {...handleSwipe}
        ref={ref}
        className={`
          md:hidden fixed top-0 left-0 h-screen w-full max-w-[15rem] z-50
          bg-gray-900 text-white
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Panel header — aligned with site header height */}
        <div className='h-20 flex items-center justify-end px-4 border-b border-white/10'>
          <button onClick={handleClose} aria-label='Close menu' className='p-1 text-[22px] text-gray-400 hover:text-white transition-colors'>
            <AiOutlineClose />
          </button>
        </div>

        {/* Nav links */}
        <nav className='flex flex-col gap-1 px-4 pt-6'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={handleClose}
              className='text-sm text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors last:border-0'
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
