import { Box, Button, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '100%',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[60]}`,
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  justifyContent: 'center',
  alignItems: 'center',
}))

const QuantityButton = styled(Button)(({ theme }) => ({
  width: '100%',
  minWidth: '0',
  height: '100%',
  minHeight: '0',
  borderRadius: '0',
  color: theme.palette.grey[300],
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))

export { Container, QuantityButton }
