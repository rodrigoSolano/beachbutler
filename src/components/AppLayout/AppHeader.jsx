import { Box, styled } from '@mui/material'

const AppHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'borderColor',
})(({ theme, borderColor = 'grey' }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',

  position: 'relative',
  zIndex: 10,

  padding: '0 16px',

  ...(borderColor === 'grey' && {
    borderBottom: `1px solid ${theme.palette.grey[60]}`,
  }),
}))

export default AppHeader
