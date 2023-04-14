import { useState } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import QuantityDemand from 'features/DishDetail/components/QuantityDemand'

import { Container } from './styles'

import DishThumbnail from './DishThumbnail'
import DishName from './DishName'
import DishDescription from './DishDescription'

export default function OrderCartSummaryItem({ dish }) {
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
      <DishThumbnail thumbnail={dish.image} />
      <Stack direction="column" gap="12px">
        <Box>
          <DishName name={dish.name} />
          <DishDescription description={dish.description} />
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
