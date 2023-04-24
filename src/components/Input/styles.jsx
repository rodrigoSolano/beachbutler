import { styled } from '@mui/material'

import { DMSans } from 'theme'

const StyledInput = styled('input', {
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

export default StyledInput
