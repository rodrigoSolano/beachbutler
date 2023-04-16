import Router from 'next/router'

export default function changeLanguageService(language) {
  if (typeof window !== 'undefined') {
    document.cookie = `NEXT_LOCALE=${language}`
  }

  Router.replace(
    {
      pathname: Router.pathname,
      query: Router.query,
    },
    Router.asPath,
    { locale: language }
  )
  return language
}
