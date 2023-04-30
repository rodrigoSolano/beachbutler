import { useState } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import QuantityDemand from 'features/ProductDetail/components/QuantityDemand'
import useOrder from 'context/Order/useOrder'

import { Container } from './styles'

import ProductThumbnail from './ProductThumbnail'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'

export default function OrderCartSummaryItem({
  product,
  quantity: initialQuantity,
}) {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromOrder,
  } = useOrder()
  const [quantity, setQuantity] = useState(initialQuantity)

  const onIncrement = () => {
    increaseProductQuantity(product.id)
    setQuantity(quantity + 1)
  }

  const onDecrement = () => {
    decreaseProductQuantity(product.id)
    setQuantity(quantity - 1)
  }

  const onRemove = () => {
    removeProductFromOrder(product.id)
  }

  return (
    <Container>
      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <IconButton size="small" sx={{ color: '#ACACAC' }} onClick={onRemove}>
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
      <ProductThumbnail thumbnail={product.image} />
      <Stack direction="column" gap="12px">
        <Box>
          <ProductName name={product.name} />
          <ProductDescription description={product.description} />
        </Box>
        <Stack alignItems="flex-end">
          <QuantityDemand
            color="grey.100"
            size="small"
            quantity={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </Stack>
      </Stack>
    </Container>
  )
}
