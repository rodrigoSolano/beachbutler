import { Box, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 64px',
  backgroundColor: theme.palette.common.white,
  boxSizing: 'border-box',
}))

export default function ProductDetailLayout({ children }) {
  return <Container>{children}</Container>
}
