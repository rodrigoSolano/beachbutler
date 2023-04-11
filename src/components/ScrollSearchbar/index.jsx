import { useRef } from 'react'

import Searchbar from '../shared/Searchbar'
import useSearchbar from './useSearchbar'
import useScrollListener from '../shared/hooks/useScrollListener'

import SearchbarContainer from './styles'

export default function ScrollSearchbar() {
  const ref = useRef(null)
  const { query, setQuery, handleSearch, placeholder } = useSearchbar()

  const styles = { backgroundColor: 'white' }

  useScrollListener(ref, 0, styles)

  return (
    <SearchbarContainer ref={ref}>
      <Searchbar
        placeholder={placeholder}
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />
    </SearchbarContainer>
  )
}
