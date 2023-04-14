import { Stack } from '@mui/material'

import OrderCartLayout from 'features/OrderCart/components/OrderCartLayout'
import OrderCartSummaryItem from 'features/OrderCart/components/OrderCartSummaryItem'
import OrderTimeoutAlert from 'features/OrderCart/components/OrderTimeoutAlert'

const DISHES = [
  {
    id: '1',
    name: 'Omelette de verduras',
    description: 'Omelette con pimiento rojo o verde, cebolla, tomate...',
    image: '/images/dishes/dish_thumbnail_1.png',
  },
]

export default function OrderCart() {
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
          {DISHES.map((dish) => (
            <OrderCartSummaryItem key={dish.id} dish={dish} />
          ))}
        </Stack>
        <OrderTimeoutAlert />
      </Stack>
    </OrderCartLayout>
  )
}
