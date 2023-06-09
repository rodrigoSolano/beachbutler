import { Box, styled } from '@mui/material'

const OrderDetailFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',

  padding: '0 16px',

  boxShadow: '0px -4px 15px rgba(5, 31, 1, 0.1)',
  backgroundColor: theme.palette.common.white,
}))

export default OrderDetailFooter
