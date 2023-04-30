import { useRouter } from 'next/router'
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  styled,
  useTheme,
} from '@mui/material'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'

import AppHeader from 'components/AppLayout/AppHeader'
import AppLogo from 'components/AppLogo'
import QRIcon from 'components/Icons/QRIcon'
import useOrder from 'context/Order/useOrder'

const Container = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  overflow: 'hidden',
  gridTemplateRows: '56px 56px auto 64px',
  gridTemplateColumns: '1fr',
}))

const Footer = styled(Box)(() => ({
  width: '100%',
  height: '64px',
  padding: '12px 16px',
  boxShadow: '0px -4px 15px rgba(5, 31, 1, 0.1)',
  backgroundColor: '#fff',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export default function OrderCartLayout({ children }) {
  const router = useRouter()
  const theme = useTheme()
  const { order, clearOrder, orderOrder } = useOrder()

  const back = () => router.back()

  const handleOrder = () => {
    orderOrder()
    router.push('/')
  }

  return (
    <Container>
      <AppHeader
        sx={{
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.grey[60]}`,
        }}
      >
        <AppLogo />
        <Button endIcon={<QRIcon />}>
          <Typography variant="body2" color="primary" fontWeight={700}>
            Change location
          </Typography>
        </Button>
      </AppHeader>
      <AppHeader sx={{ justifyContent: 'space-between', padding: '0 8px' }}>
        <Stack direction="row" alignItems="center" gap="8px">
          <IconButton sx={{ color: theme.palette.grey[500] }} onClick={back}>
            <ArrowBackRoundedIcon />
          </IconButton>
          <Typography variant="h6" color="grey.500" fontWeight={700}>
            Your cart
          </Typography>
        </Stack>
        {order.products.length > 0 && (
          <Button
            variant="text"
            sx={{ color: theme.palette.grey[100] }}
            onClick={clearOrder}
          >
            <Typography variant="body1" color="grey.100">
              Clear cart
            </Typography>
          </Button>
        )}
      </AppHeader>
      <Box
        sx={{
          height: 'calc(100vh - 56px - 56px - 64px)',
          padding: '0 16px 16px 16px ',
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
      <Footer>
        <Stack>
          <Typography variant="body2" color="grey.100">
            Total
          </Typography>
          <Typography
            color="grey.300"
            variant="body1"
            fontSize={20}
            fontWeight={700}
          >
            {`${order?.products.reduce(
              (acc, item) => acc + item.quantity,
              0
            )} products`}
          </Typography>
        </Stack>
        {order?.products.length > 0 && (
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleOrder}
          >
            <Typography variant="body2">Send order</Typography>
          </Button>
        )}
      </Footer>
    </Container>
  )
}
