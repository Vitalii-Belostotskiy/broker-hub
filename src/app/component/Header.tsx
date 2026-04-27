'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isActiveId, setIsActiveId] = useState('home');
  const clickLockRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinksId = ['home', 'about', 'howItWorks', 'earnings', 'forWho', 'important', 'readyToStart'];

  const handleNavClick = (id: string) => {
    setIsActiveId(id);
    if (clickLockRef.current) clearTimeout(clickLockRef.current);
    clickLockRef.current = setTimeout(() => {
      clickLockRef.current = null;
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      if (clickLockRef.current) return;
      const activeLine = window.scrollY + window.innerHeight * 0.3;
      let current = navLinksId[0];

      for (const id of navLinksId) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= activeLine) current = id;
      }

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const lastSection = navLinksId[navLinksId.length - 1];

      if (window.scrollY >= maxScroll - 1) current = lastSection;

      setIsActiveId(current);
    };

    handleActiveSection();
    window.addEventListener('scroll', handleActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', handleActiveSection);
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
            <NavLinkItem
              key={id}
              lang={lang}
              linkId={id}
              linkName={nav[id as keyof typeof nav]}
              isActive={isActiveId === id}
              onClick={() => handleNavClick(id)}
            />
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
