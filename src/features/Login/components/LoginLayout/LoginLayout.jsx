import { Box, styled } from '@mui/material'

const LoginLayout = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '4.5rem auto 3.5rem',
}))

export default LoginLayout
