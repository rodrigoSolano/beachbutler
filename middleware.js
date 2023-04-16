/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server'

import isAnAuthenticatedUser from 'services/isAnAuthenticatedUser'
import { isAPrivateRoute, isAPublicRoute } from 'lib/routerGuard'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req) {
  // If the request is for a static asset, let it through
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return NextResponse.next()
  }

  const { pathname } = req.nextUrl // pathname is the path of the URL

  // If the request is for a private route and the user is not authenticated,
  // redirect to the onboarding page
  if (isAPrivateRoute(pathname) && !isAnAuthenticatedUser(req))
    return NextResponse.redirect(new URL('/onboarding', req.url))

  // If the request is for a public route and the user is authenticated,
  // redirect to the home page
  if (isAPublicRoute(pathname) && isAnAuthenticatedUser(req))
    return NextResponse.redirect(new URL('/', req.url))

  if (req.nextUrl.locale === 'default') {
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    )
  }

  if (req.nextUrl.locale !== 'default') {
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'

    return NextResponse.rewrite(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    )
  }

  return NextResponse.next()
}
