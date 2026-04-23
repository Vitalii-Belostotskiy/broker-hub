import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Hero from '../component/sections/Hero'
import About from '../component/sections/About'
import HowItWorks from '../component/sections/HowItWorks'
import Earnings from '../component/sections/Earnings'
import ForWho from '../component/sections/ForWho'
import ImportantSection from '../component/sections/ImportantSection'
import CtaSection from '../component/sections/CtaSection'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <HowItWorks dict={dict.howItWorks} />
      <Earnings dict={dict.earnings} />
      <ForWho dict={dict.forWho} />
      <ImportantSection dict={dict.important} />
      <CtaSection dict={dict.cta} />
    </>
  )
}
