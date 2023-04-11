import { useState } from 'react'
import { useTranslation } from 'next-i18next'

/**
 * Custom hook that manages the state and behavior of a search bar.
 * @param {string} [initialQuery=''] - The initial value of the search bar query.
 * @returns {{
 *    query: string,
 *    setQuery: function,
 *    handleSearch: function,
 *    placeholder: string
 *  }} An object containing the query value, a function to update it, a function to handle the search, and a placeholder text for the search bar.
 */
export default function useSearchbar(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery)
  const { t } = useTranslation('common')

  /**
   * Handler function for a search.
   * Logs the current search query to the console.
   */
  const handleSearch = () => {
    // eslint-disable-next-line no-console
    console.log('Search for: ', query)
  }

  return {
    query,
    setQuery,
    handleSearch,
    placeholder: t('searchbar_placeholder'),
  }
}
