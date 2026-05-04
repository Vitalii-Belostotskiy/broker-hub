import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ru', 'uk', 'fr', 'it', 'es', 'zh', 'nl', 'ja', 'ko', 'he', 'ar']
const rtlLocales = ['he', 'ar']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  for (const part of acceptLanguage.split(',')) {
    const tag = part.trim().split(';')[0].trim().toLowerCase()
    const match = locales.find((l) => tag === l || tag.startsWith(l + '-'))
    if (match) return match
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  const lang = pathname.split('/')[1] || defaultLocale
  const dir = rtlLocales.includes(lang) ? 'rtl' : 'ltr'

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-lang', lang)
  requestHeaders.set('x-dir', dir)

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)', '/'],
}
