'use client';

import Link from 'next/link';

interface Props {
  lang: string;
  linkId: string;
  linkName: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLinkItem = ({ lang, linkId, linkName, isActive, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(linkId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `/${lang}#${linkId}`);
    onClick();
  };

  return (
    <Link
      href={`/${lang}#${linkId}`}
      onClick={handleClick}
      className={`text-sm transition-colors ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-white'}`}
    >
      {linkName}
    </Link>
  );
};

export default NavLinkItem;
