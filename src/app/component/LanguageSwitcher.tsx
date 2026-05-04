'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const locales = ['en', 'ru', 'uk', 'ar', 'de', 'es', 'fr', 'he', 'hi', 'it', 'ja', 'ko', 'nl', 'sv', 'tw', 'zh'] as const;

interface Props {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const getLocalePath = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/') || `/${locale}`;
  };

  return (
    <div ref={ref} className='relative'>
      <button
        onClick={() => setOpen((v) => !v)}
        className='flex items-start gap-3 text-md font-semibold text-white uppercase tracking-widest hover:text-amber-400 transition-colors'
        aria-expanded={open}
        aria-haspopup='listbox'
      >
        {currentLocale}
        <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role='listbox'
          className='absolute right-0 top-full mt-2 w-20 max-h-60 overflow-y-auto bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl py-1 z-[200] scrollbar-hide'
        >
          {locales.map((locale) => (
            <li key={locale} role='option' aria-selected={locale === currentLocale}>
              <Link
                href={getLocalePath(locale)}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm uppercase tracking-widest text-center transition-colors ${
                  locale === currentLocale ? 'text-amber-400 bg-zinc-800' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
