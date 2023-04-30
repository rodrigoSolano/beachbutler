import { Stack, Typography } from '@mui/material'
import useOrder from 'context/Order/useOrder'

import OrderCartLayout from 'features/OrderCart/components/OrderCartLayout'
import OrderCartSummaryItem from 'features/OrderCart/components/OrderCartSummaryItem'
import OrderTimeoutAlert from 'features/OrderCart/components/OrderTimeoutAlert'

export default function OrderCart() {
  const { order } = useOrder()

  return (
    <OrderCartLayout>
      <Stack
        pt="16px"
        gap="16px"
        height="100%"
        overflow="auto"
        justifyContent="space-between"
      >
        <Stack gap="8px">
          {order?.products?.map(({ product, quantity }) => (
            <OrderCartSummaryItem
              key={product.id}
              product={product}
              quantity={quantity}
            />
          ))}
        </Stack>
        {order.products.length === 0 && (
          <Typography variant="h5" color="grey.500" textAlign="center">
            No hay productos en el carrito
          </Typography>
        )}
        {order.products.length ? <OrderTimeoutAlert /> : <div />}
      </Stack>
    </OrderCartLayout>
  )
}
