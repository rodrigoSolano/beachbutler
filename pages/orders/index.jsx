// @ts-check
import { useRouter } from 'next/router'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'

import OrderPreviewCard from 'features/Orders/components/OrderPreviewCard'

import getPreviewActiveOrdersService from 'features/Orders/services/getPreviewActiveOrdersService'
import getPreviewOrderHistory from 'features/Orders/services/getPreviewOrderHistoryService'

export default function Orders({ previewActiveOrders, previewOrderHistory }) {
  const router = useRouter()
  const { t } = useTranslation('orders')

  const redirectToOrderDetail = (orderPreview) =>
    router.push(`/orders/${orderPreview.id}`)

  return (
    <Box mt={3} mb={3}>
      <Typography variant="h6" color="grey.300" fontWeight={700}>
        {t('my_orders')}
      </Typography>

      <Stack direction="column" mt={2} gap={2}>
        <Typography variant="body1" color="primary">
          {t('active_orders')}
        </Typography>
        {previewActiveOrders.map((orderPreview) => (
          <OrderPreviewCard
            key={orderPreview.id}
            onClick={redirectToOrderDetail}
            orderPreview={orderPreview}
          />
        ))}
        <Typography variant="body1" color="primary">
          {t('history')}
        </Typography>
        {previewOrderHistory.map((orderPreview) => (
          <OrderPreviewCard
            key={orderPreview.id}
            onClick={redirectToOrderDetail}
            orderPreview={orderPreview}
          />
        ))}
      </Stack>
    </Box>
  )
}

Orders.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const previewActiveOrders = await getPreviewActiveOrdersService()
  const previewOrderHistory = await getPreviewOrderHistory()

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'orders'])),
      locale,
      previewActiveOrders,
      previewOrderHistory,
    },
  }
}
