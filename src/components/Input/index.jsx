// @ts-check
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'

import StyledInput from './styles'

/**
 * @typedef {object} InputProps
 * @property {string} [placeholder] - Placeholder text
 * @property {boolean} [error = false] - Whether the input has an error
 * @property {string} [textAlign = 'center'] - Text alignment
 * @property {React.InputHTMLAttributes<HTMLInputElement>} props - HTML input props
 */

/**
 * @param {InputProps} props
 * @returns {JSX.Element}
 */
export default function Input({ placeholder, error, textAlign, ...props }) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)

  const handleBlur = () => setIsFocused(false)

  return (
    <StyledInput
      placeholder={isFocused ? '' : placeholder}
      // @ts-ignore
      textAlign={textAlign}
      onFocus={handleFocus}
      onBlur={handleBlur}
      error={error}
      {...props}
    />
  )
}
