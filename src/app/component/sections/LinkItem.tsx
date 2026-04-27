'use client';

import Link from 'next/link';
interface Props {
  lang: string;
  linkId: string;
  linkName: string;
}

const NavLinkItem = ({ lang, linkId, linkName }: Props) => {
  return (
    <Link href={`/${lang}#${linkId}`} className='text-sm text-gray-300 hover:text-white transition-colors'>
      {linkName}
    </Link>
  );
};

export default NavLinkItem;
