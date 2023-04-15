import { Stack } from '@mui/material'

import OrderSummary from '../OrderSummary'

export default function OrdersSummary({ orders }) {
  return (
    <Stack width="100%" direction="column" gap={2} mb={4}>
      {orders.map((order) => (
        <OrderSummary key={order.id} order={order} />
      ))}
    </Stack>
  )
}
