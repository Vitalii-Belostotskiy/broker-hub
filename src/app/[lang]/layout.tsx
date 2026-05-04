import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import CookieConsent from '../component/CookieConsent';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale, type Locale } from './dictionaries';
import Header from '../component/Header';
import Footer from '../component/Footer';

const BASE_URL = 'https://luxury-hub-phi.vercel.app';

const allLocales: Locale[] = ['en', 'ru', 'uk', 'fr', 'it', 'es', 'zh', 'nl', 'ja', 'ko', 'he', 'ar', 'de', 'sv', 'hi', 'tw'];

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
  fr: {
    title: 'Property Hub — Plateforme Partenaire Immobilière Exclusive',
    description:
      'Accédez à des prix exclusifs, des bonus et des offres de promoteurs immobiliers. Gagnez des commissions en recommandant des propriétés via le réseau partenaire Property Hub.',
  },
  it: {
    title: 'Property Hub — Piattaforma Partner Immobiliare Esclusiva',
    description:
      'Accedi a prezzi esclusivi, bonus e offerte dai costruttori immobiliari. Guadagna commissioni raccomandando proprietà tramite la rete partner Property Hub.',
  },
  es: {
    title: 'Property Hub — Plataforma Exclusiva de Socios Inmobiliarios',
    description:
      'Accede a precios exclusivos, bonos y ofertas de promotores inmobiliarios. Gana comisiones recomendando propiedades a través de la red de socios Property Hub.',
  },
  zh: {
    title: 'Property Hub — 独家房地产合作伙伴平台',
    description:
      '获取来自房地产开发商的独家价格、奖金和优惠。通过Property Hub合作伙伴网络推荐房产并赚取佣金。',
  },
  nl: {
    title: 'Property Hub — Exclusief Vastgoed Partner Platform',
    description:
      'Krijg toegang tot exclusieve prijzen, bonussen en aanbiedingen van vastgoedontwikkelaars. Verdien referralvergoedingen door eigendommen aan te bevelen via het Property Hub-partnernetwerk.',
  },
  ja: {
    title: 'Property Hub — 独占不動産パートナープラットフォーム',
    description:
      '不動産デベロッパーからの独占価格、ボーナス、取引にアクセスしましょう。Property Hubパートナーネットワークを通じて物件を紹介し、紹介料を稼ぎましょう。',
  },
  ko: {
    title: 'Property Hub — 독점 부동산 파트너 플랫폼',
    description:
      '부동산 개발업체로부터 독점 가격, 보너스 및 거래에 액세스하세요. Property Hub 파트너 네트워크를 통해 부동산을 추천하고 리퍼럴 수수료를 버세요.',
  },
  he: {
    title: 'Property Hub — פלטפורמת שותפי נדל"ן בלעדית',
    description:
      'קבל גישה למחירים בלעדיים, בונוסים ועסקאות מיזמי נדל"ן. הרוויח עמלות הפניה על ידי המלצה על נכסים דרך רשת השותפים של Property Hub.',
  },
  ar: {
    title: 'Property Hub — منصة شركاء العقارات الحصرية',
    description:
      'احصل على وصول إلى الأسعار الحصرية والمكافآت والصفقات من مطوري العقارات. اكسب رسوم الإحالة من خلال التوصية بالعقارات عبر شبكة شركاء Property Hub.',
  },
  de: {
    title: 'Property Hub — Exklusive Immobilien-Partnerplattform',
    description:
      'Erhalten Sie Zugang zu exklusiven Preisen, Boni und Angeboten von Immobilienentwicklern. Verdienen Sie Empfehlungsgebühren durch das Property Hub Partnernetzwerk.',
  },
  sv: {
    title: 'Property Hub — Exklusiv Fastighetspartnerplattform',
    description:
      'Få tillgång till exklusiva priser, bonusar och erbjudanden från fastighetsutvecklare. Tjäna referralersättningar via Property Hub partnernätverket.',
  },
  hi: {
    title: 'Property Hub — एक्सक्लूसिव रियल एस्टेट पार्टनर प्लेटफ़ॉर्म',
    description:
      'रियल एस्टेट डेवलपर्स से एक्सक्लूसिव कीमतें, बोनस और डील प्राप्त करें। Property Hub पार्टनर नेटवर्क के माध्यम से संपत्तियों की सिफारिश करके रेफरल शुल्क कमाएं।',
  },
  tw: {
    title: 'Property Hub — 獨家房地產合作夥伴平台',
    description:
      '獲取來自房地產開發商的獨家價格、獎金和優惠。通過Property Hub合作夥伴網絡推薦房產並賺取佣金。',
  },
};

const ogLocale: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  uk: 'uk_UA',
  fr: 'fr_FR',
  it: 'it_IT',
  es: 'es_ES',
  zh: 'zh_CN',
  nl: 'nl_NL',
  ja: 'ja_JP',
  ko: 'ko_KR',
  he: 'he_IL',
  ar: 'ar_AE',
  de: 'de_DE',
  sv: 'sv_SE',
  hi: 'hi_IN',
  tw: 'zh_TW',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const locale = lang as Locale;
  const { title, description } = meta[locale];

  const languageAlternates = Object.fromEntries(allLocales.map((l) => [l, `${BASE_URL}/${l}`]));

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        ...languageAlternates,
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
  };
}

export async function generateStaticParams() {
  return allLocales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <CookieConsent lang={lang} texts={dict.cookie} />
      <Header lang={lang} nav={dict.header.nav} />
      {children}
      <Footer copyright={dict.footer.copyright} privacyPolicy={dict.footer.privacyPolicy} lang={lang} />
    </>
  );
}
