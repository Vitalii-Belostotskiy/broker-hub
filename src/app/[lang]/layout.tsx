import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Geist } from 'next/font/google'
import '../globals.css'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from './dictionaries'
import Header from '../component/Header'
import Footer from '../component/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

// TODO: replace with actual domain when ready
const BASE_URL = 'https://propertyhub.com'

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Property Hub — Exclusive Real Estate Partner Platform',
    description:
      'Get access to exclusive prices, bonuses and deals from real estate developers. Earn referral fees by recommending properties through the Property Hub partner network.',
  },
  ru: {
    title: 'Property Hub — Партнёрская платформа недвижимости',
    description:
      'Получите доступ к закрытым ценам, бонусам и предложениям от застройщиков. Зарабатывайте на рекомендациях через партнёрскую платформу Property Hub.',
  },
  uk: {
    title: 'Property Hub — Партнерська платформа нерухомості',
    description:
      'Отримайте доступ до закритих цін, бонусів та пропозицій від забудовників. Заробляйте на рекомендаціях через партнерську платформу Property Hub.',
  },
}

const ogLocale: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  uk: 'uk_UA',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const locale = lang as Locale
  const { title, description } = meta[locale]

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        en: `${BASE_URL}/en`,
        ru: `${BASE_URL}/ru`,
        uk: `${BASE_URL}/uk`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}`,
      siteName: 'Property Hub',
      locale: ogLocale[locale],
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'uk' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <html lang={lang} className={`${geistSans.variable} h-full antialiased scroll-smooth`}>
      <body className='min-h-full flex flex-col'>
        <Header lang={lang} nav={dict.header.nav} />
        {children}
        <Footer copyright={dict.footer.copyright} />
      </body>
    </html>
  )
}
