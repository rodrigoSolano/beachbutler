import { Box, styled } from '@mui/material'

const Footer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'border' && prop !== 'shadow' && prop !== 'center',
})(({ theme, border = false, shadow = false, center = false }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.common.white,

  position: 'relative',
  zIndex: 10,

  ...(border && {
    borderTop: `1px solid ${theme.palette.grey['60']}`,
  }),

  ...(shadow && {
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
  }),

  ...(center && {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
}))

export default Footer
