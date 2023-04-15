/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server'
import isAuthenticatedService from 'services/isAuthenticatedService'

export function middleware(request) {
  if (
    !isAuthenticatedService(request) &&
    !request.nextUrl.pathname.startsWith('/login')
  ) {
    return NextResponse.rewrite(new URL('/onboarding', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/menu/:path*',
    '/orders/:path*',
    '/profile/:path*',
    '/allergies',
    '/dietRestrictions',
    '/',
    '/login',
    '/onboarding',
    '/orderCart',
    '/productDetail',
  ],
}
