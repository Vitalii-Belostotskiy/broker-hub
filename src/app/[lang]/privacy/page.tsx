import { getDictionary, hasLocale } from '../dictionaries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const p = dict.privacy;

  return (
    <main className='min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-20'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link
          href={`/${lang}`}
          className='inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-10'
        >
          ← {p.back}
        </Link>

        <h1 className='text-3xl sm:text-4xl font-bold text-white mb-2'>{p.title}</h1>
        <p className='text-zinc-500 text-sm mb-10'>{p.updated}</p>

        <div className='space-y-8 text-base leading-relaxed'>
          {p.sections.map((section: { heading: string; body: string }, i: number) => (
            <section key={i}>
              <h2 className='text-lg font-semibold text-white mb-2'>{section.heading}</h2>
              <p className='text-zinc-400 whitespace-pre-line'>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
