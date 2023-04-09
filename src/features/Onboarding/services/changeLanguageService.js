import Router from 'next/router'

export default function changeLanguageService(language) {
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
