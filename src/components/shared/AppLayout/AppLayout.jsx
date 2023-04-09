import { Box, styled } from '@mui/material'

const AppLayout = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '3.5rem auto 3.5rem',
  position: 'relative',
  zIndex: 0,
}))

export default AppLayout
