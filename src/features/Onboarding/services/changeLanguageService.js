// @ts-check
import Router from 'next/router'

/**
 * @description Change the language of the app
 * @param {string} language new language to set in the app (en, fr, es, etc.)
 * @returns {string} language new language to set in the app (en, fr, es, etc.)
 */
export default function changeLanguageService(language) {
  if (typeof window !== 'undefined') {
    document.cookie = `NEXT_LOCALE=${language}; max-age=${
      60 * 60 * 24 * 365 * 10
    }`
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
