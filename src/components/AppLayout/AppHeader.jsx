import { Box, styled } from '@mui/material'

const AppHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'showBorderBottom',
})(({ theme, showBorderBottom = false }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 10,

  ...(showBorderBottom && {
    borderBottom: `1px solid ${theme.palette.grey['300']}`,
  }),
}))

export default AppHeader
