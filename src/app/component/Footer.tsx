import Link from 'next/link';

interface FooterProps {
  copyright: string;
  privacyPolicy: string;
  lang: string;
}

const Footer = ({ copyright, privacyPolicy, lang }: FooterProps) => {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-center gap-2 w-full bg-[#09090b] text-white px-6 py-4'>
      <p className='text-zinc-500 text-sm'>{copyright}</p>
      <span className='hidden sm:inline-block mx-2 text-zinc-700'>|</span>
      <Link href={`/${lang}/privacy`} className='text-zinc-500 hover:text-amber-400 text-sm transition-colors'>
        {privacyPolicy}
      </Link>
    </footer>
  );
};

export default Footer;
