import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Header from '../component/Header'
import Footer from '../component/Footer'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'uk' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Header lang={lang} nav={dict.header.nav} />
      {children}
      <Footer copyright={dict.footer.copyright} />
    </>
  )
}
