import { useState } from 'react'
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google'
import { Box, styled } from '@mui/material'
import MagnifyingGlassIcon from 'components/Icons/MagnifyingGlassIcon'

const OpenSans = Open_Sans({
  display: 'swap',
  weights: [400],
  subsets: ['latin'],
  fallbacks: ['sans-serif'],
})

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'focused',
})(({ theme, focused }) => ({
  width: '100%',
  height: '2.5rem',

  padding: theme.spacing(1),

  border: `1px solid ${theme.palette.grey[60]}`,
  color: theme.palette.grey[100],
  borderRadius: theme.spacing(1),

  backgroundColor: '#FFFFFF',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),

  transition: 'all 0.2s ease-in-out',

  ...(focused && {
    border: `1px solid ${theme.palette.primary.main}`,
  }),
}))

const SearchbarInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',

  fontFamily: OpenSans.style.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '0.875rem',
  lineHeight: '1.1875rem',
  color: theme.palette.grey[75],

  '&::placeholder': {
    fontFamily: OpenSans.style.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '1.1875rem',
    color: theme.palette.grey[75],
  },
}))

export default function Searchbar({ onSearch = () => {}, placeholder }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleChange = (e) => setQuery(e.target.value)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  const handleFocus = () => setFocused(true)

  const handleBlur = () => setFocused(false)

  return (
    <Container onSubmit={handleSearch} focused={focused}>
      <MagnifyingGlassIcon />
      <SearchbarInput
        type="text"
        value={query}
        maxLength={120}
        minLength={1}
        name="searchbarInput"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </Container>
  )
}
