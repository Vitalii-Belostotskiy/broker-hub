'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import BurgerMenu from './BurgerMenu';
import NavLinkItem from './sections/LinkItem';

interface HeaderProps {
  lang: string;
  nav: { home: string; about: string; howItWorks: string; important: string; earnings: string; forWho: string; readyToStart: string };
}

const Header = ({ lang, nav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const navLinksId = ['home', 'about', 'howItWorks', 'earnings', 'forWho', 'important', 'readyToStart'];

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
          {navLinksId.map((id) => (
            <NavLinkItem key={id} lang={lang} linkId={id} linkName={nav[id as keyof typeof nav]} />
          ))}
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
