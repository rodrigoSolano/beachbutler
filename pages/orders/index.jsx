import { Box, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'

import OrdersSummary from 'features/Orders/components/OrdersSummary'

import getOrdersService from 'features/Orders/services/getOrdersService'

export default function Orders({ ...props }) {
  const { orders } = props

  return (
    <Box mt={3}>
      <Typography variant="h6" color="grey.300" fontWeight={700}>
        Mis órdenes
      </Typography>
      <Box mt={2}>
        <OrdersSummary orders={orders} />
      </Box>
    </Box>
  )
}

Orders.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const orders = await getOrdersService()

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
      orders,
    },
  }
}
