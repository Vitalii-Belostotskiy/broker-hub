'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const locales = ['en', 'ru', 'uk'] as const;

interface Props {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside as EventListener);
    };
  }, []);

  const getLocalePath = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/') || `/${locale}`;
  };

  const otherLocales = locales.filter((l) => l !== currentLocale);

  return (
    <div ref={ref} className='relative flex items-center group'>
      {/* Desktop (md+): slide in from right on hover */}
      <div
        className='
          hidden md:flex
          absolute right-full top-1/2 -translate-y-1/2
          items-center gap-3 pr-4
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-200 ease-out
          pointer-events-none group-hover:pointer-events-auto
          whitespace-nowrap
        '
      >
        {otherLocales.map((locale) => (
          <Link
            key={locale}
            href={getLocalePath(locale)}
            className='text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors'
          >
            {locale}
          </Link>
        ))}
      </div>

      {/* Current locale — button for mobile tap, decorative on desktop */}
      <button
        onClick={() => setMobileOpen((v) => !v)}
        className='text-md font-semibold text-white uppercase tracking-widest select-none md:cursor-default'
        aria-expanded={mobileOpen}
        aria-haspopup='listbox'
      >
        {currentLocale}
      </button>

      {/* Mobile (< md): dropdown top → bottom on tap */}
      <div
        aria-hidden={!mobileOpen}
        className={`
          md:hidden
          absolute top-full right-0 mt-2
          flex flex-col items-end gap-1
          
          transition-all duration-200 ease-out
          ${mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}
        `}
      >
        {otherLocales.map((locale) => (
          <Link
            key={locale}
            href={getLocalePath(locale)}
            onClick={() => setMobileOpen(false)}
            className='text-md font-medium text-gray-300 hover:text-white uppercase tracking-widest transition-colors py-1'
          >
            {locale}
          </Link>
        ))}
      </div>
    </div>
  );
}
