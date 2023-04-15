/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import { styled } from '@mui/material'

import { DMSans } from 'theme'

const Input = styled('input', {
  shouldForwardProp: (prop) => prop !== 'error' && prop !== 'textAlign',
})(({ theme, error, textAlign = 'center' }) => ({
  width: '100%',
  height: '2.75rem',
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.grey['60']}`,

  textAlign,
  padding: textAlign === 'left' && '0 1rem',
  color: theme.palette.grey['100'],
  fontFamily: DMSans.style.fontFamily,

  '&:focus': {
    outline: 'none',
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#000000',
  },

  ...(error && {
    border: `1px solid ${theme.palette.error.main}`,
  }),
}))

export default function CustomInput({
  placeholder,
  error,
  textAlign,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)

  const handleBlur = () => setIsFocused(false)

  return (
    <Input
      placeholder={isFocused ? '' : placeholder}
      textAlign={textAlign}
      onFocus={handleFocus}
      onBlur={handleBlur}
      error={error}
      {...props}
    />
  )
}
