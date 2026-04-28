'use client';

import { useSyncExternalStore } from 'react';
import Script from 'next/script';
import Link from 'next/link';

interface Props {
  lang: string;
  texts: {
    message: string;
    accept: string;
    decline: string;
    learnMore: string;
  };
}

const GA_ID = 'G-ZLV4LT44B0';
const GA_ID_PAID = 'AW-18124580054';
const STORAGE_KEY = 'cookie_consent';

type Consent = 'accepted' | 'declined' | 'pending';

let listeners: Array<() => void> = [];

function getSnapshot(): Consent {
  const stored = localStorage.getItem(STORAGE_KEY);
  return (stored as Consent | null) ?? 'pending';
}

function getServerSnapshot(): null {
  return null;
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function saveConsent(value: 'accepted' | 'declined') {
  localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach((l) => l());
}

export default function CookieConsent({ lang, texts }: Props) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              gtag('config', '${GA_ID_PAID}');
            `}
          </Script>
        </>
      )}

      {consent === 'pending' && (
        <div className='fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6'>
          <div className='max-w-2xl mx-auto bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 shadow-2xl flex flex-col sm:flex-row items-center gap-4'>
            <p className='text-zinc-300 text-sm leading-relaxed flex-1'>
              {texts.message}{' '}
              <Link href={`/${lang}/privacy`} className='text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors'>
                {texts.learnMore}
              </Link>
            </p>
            <div className='flex gap-3 shrink-0'>
              <button
                onClick={() => saveConsent('declined')}
                className='text-sm text-zinc-400 hover:text-white border border-zinc-600 hover:border-zinc-400 px-4 py-2 rounded-full transition-all'
              >
                {texts.decline}
              </button>
              <button
                onClick={() => saveConsent('accepted')}
                className='text-sm font-semibold bg-amber-400 hover:bg-amber-300 text-black px-5 py-2 rounded-full transition-all'
              >
                {texts.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
