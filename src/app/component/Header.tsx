'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import BurgerMenu from './BurgerMenu';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface HeaderProps {
  lang: string;
  nav: { home: string; about: string; howItWorks: string; important: string; earnings: string; forWho: string; readyToStart: string };
}

const Header = ({ lang, nav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md text-white transition-colors duration-300 ${scrolled ? 'bg-[#0a0a0a]' : 'bg-transparent'}`}
    >
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Left — logo */}
        <Link href={`/${lang}#home`} className='shrink-0'>
          <Image src='/PropertyHub.png' alt='Property Hub' width={160} height={160} className='h-25 w-auto object-contain' priority />
        </Link>

        {/* Center — nav */}
        <nav className='hidden md:flex items-center gap-8'>
          <Link href={`/${lang}#home`} className='text-sm text-gray-300 hover:text-white transition-colors'>
            {nav.home}
          </Link>
          <Link href={`/${lang}#about`} className='text-sm text-gray-300 hover:text-white transition-colors'>
            {nav.about}
          </Link>

          <Link href={`/${lang}#howItWorks`} className='text-sm text-gray-300 hover:text-white transition-colors'>
            {nav.howItWorks}
          </Link>
          <Link href={`/${lang}#earnings`} className='text-sm text-gray-300 hover:text-white transition-colors'>
            {nav.earnings}
          </Link>
          <Link href={`/${lang}#forWho`} className='text-sm text-gray-300 hover:text-white transition-colors'>
            {nav.forWho}
          </Link>

          <Link href={`/${lang}#important`} className='text-sm text-gray-300 hover:text-white transition-colors'>
            {nav.important}
          </Link>

          <Link href={`/${lang}#readyToStart`} className='text-sm text-gray-300 hover:text-white transition-colors'>
            {nav.readyToStart}
          </Link>
        </nav>

        {/* Right — language switcher + burger (mobile) */}
        <div className='flex items-center gap-3'>
          <LanguageSwitcher currentLocale={lang} />
          <BurgerMenu lang={lang} nav={nav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
