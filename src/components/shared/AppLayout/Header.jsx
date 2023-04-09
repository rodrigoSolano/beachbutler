import { Box, styled } from '@mui/material'

const Header = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 10,
}))

export default Header
