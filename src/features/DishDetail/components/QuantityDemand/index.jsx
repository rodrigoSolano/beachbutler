import { Typography } from '@mui/material'

import { Container, QuantityButton } from './styles'

export default function QuantityDemand({
  quantity = 0,
  onIncrement = () => {},
  onDecrement = () => {},
}) {
  const onIncrementMiddleware = () => quantity < 99 && onIncrement()

  const onDecrementMiddleware = () => quantity > 1 && onDecrement()

  return (
    <Container>
      <QuantityButton onClick={onDecrementMiddleware} disableRipple>
        -
      </QuantityButton>
      <Typography
        sx={{ minWidth: 20 }}
        align="center"
        color="grey.300"
        variant="body1"
      >
        {quantity}
      </Typography>
      <QuantityButton onClick={onIncrementMiddleware} disableRipple>
        +
      </QuantityButton>
    </Container>
  )
}
