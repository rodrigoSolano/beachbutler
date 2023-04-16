const privateRoutes = [
  '/menu',
  '/orders',
  '/profile',
  '/profile/account',
  '/profile/allergies',
  '/profile/currency',
  '/profile/language',
  '/profile/password',
  'allergies',
  '/dietRestrictions',
  '/',
  '/orderCart',
  '/productDetail',
]

const publicRoutes = ['/login', '/onboarding']

const isAPublicRoute = (pathname) => publicRoutes.includes(pathname)

const isAPrivateRoute = (pathname) => privateRoutes.includes(pathname)

export { isAPrivateRoute, isAPublicRoute }
