// @ts-check
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Button, Stack, Typography } from '@mui/material'

import AppBody from 'components/AppLayout/AppBody'
import AppLayout from 'components/AppLayout/AppLayout'
import AppHeader from 'components/AppLayout/AppHeader'
import BackIconButton from 'components/BackIconButton'

import { OrderStatus } from 'features/Orders/types/Order'
import OrderStatusChip from 'features/Orders/components/OrderStatusChip'
import OrderProductCard from 'features/Orders/components/OrderItemCard'
import OrderDetailFooter from 'features/Orders/components/OrderDetailFooter'
import getOrderDetailService from 'features/Orders/services/getOrderDetailService'

/**
 * @typedef {import("../../src/features/Orders/types/Order").Order} Order
 */

/**
 * @typedef {Object} OrderDetailtPageProps
 * @property {Order} order
 */

/**
 * @param {OrderDetailtPageProps} props
 * @returns {JSX.Element}
 */
export default function OrderDetailPage({ order }) {
  const { t } = useTranslation(['orders'])
  const router = useRouter()

  const back = () => router.replace('/orders')

  return (
    <AppLayout>
      <AppHeader sx={{ padding: '0 8px' }} borderColor="grey">
        <Stack direction="row" alignItems="center" gap={1}>
          <BackIconButton onClick={back} />
          <Typography variant="h6" fontWeight={700}>
            {t('order')} {`#${order.number}`}
          </Typography>
        </Stack>
      </AppHeader>
      <AppBody>
        <Stack gap={2}>
          {order.items.map(({ product }) => (
            <OrderProductCard key={product.id} orderProduct={product} />
          ))}
        </Stack>
      </AppBody>
      <OrderDetailFooter>
        <Stack direction="column" justifyContent="center">
          <Typography variant="caption" color="grey.100" fontWeight={700}>
            {t('total')}
          </Typography>
          <Typography variant="body2" fontWeight={700}>
            {order.items.length} {t('items')}
          </Typography>
        </Stack>
        {order.status !== OrderStatus.DELIVERED && (
          <OrderStatusChip label={t(order.status)} />
        )}
        {order.status === OrderStatus.DELIVERED && (
          <Button variant="contained" sx={{ minHeight: '36px' }}>
            <Typography variant="body2">{t('order_again')}</Typography>
          </Button>
        )}
      </OrderDetailFooter>
    </AppLayout>
  )
}

export async function getServerSideProps({ locale, params }) {
  const { orderId } = params
  const order = await getOrderDetailService(orderId)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'orders'])),
      locale,
      order,
    },
  }
}
