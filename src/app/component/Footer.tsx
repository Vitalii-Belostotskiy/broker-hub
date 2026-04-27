'use client';

interface FooterProps {
  copyright: string;
}

const Footer = ({ copyright }: FooterProps) => {
  return (
    <footer className='flex items-center justify-center w-full bg-[#09090b] text-white p-4'>
      <p className='text-zinc-300 text-sm'>{copyright}</p>
    </footer>
  );
};

export default Footer;
