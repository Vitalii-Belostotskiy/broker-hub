const dictionaries = {
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  ru: () => import('./dictionaries/ru.json').then((m) => m.default),
  uk: () => import('./dictionaries/uk.json').then((m) => m.default),
  fr: () => import('./dictionaries/fr.json').then((m) => m.default),
  it: () => import('./dictionaries/it.json').then((m) => m.default),
  es: () => import('./dictionaries/es.json').then((m) => m.default),
  zh: () => import('./dictionaries/zh.json').then((m) => m.default),
  nl: () => import('./dictionaries/nl.json').then((m) => m.default),
  ja: () => import('./dictionaries/ja.json').then((m) => m.default),
  ko: () => import('./dictionaries/ko.json').then((m) => m.default),
  he: () => import('./dictionaries/he.json').then((m) => m.default),
  ar: () => import('./dictionaries/ar.json').then((m) => m.default),
}

export type Locale = keyof typeof dictionaries

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
