import { useState } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import QuantityDemand from 'features/ProductDetail/components/QuantityDemand'

import { Container } from './styles'

import ProductThumbnail from './ProductThumbnail'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'

export default function OrderCartSummaryItem({ product }) {
  const [quantity, setQuantity] = useState(1)

  const onIncrement = () => setQuantity(quantity + 1)

  const onDecrement = () => setQuantity(quantity - 1)

  return (
    <Container>
      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <IconButton size="small" sx={{ color: '#ACACAC' }}>
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
