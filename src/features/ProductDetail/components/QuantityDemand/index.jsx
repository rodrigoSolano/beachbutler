import { Typography } from '@mui/material'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

import { Container, QuantityButton } from './styles'

export default function QuantityDemand({
  quantity = 0,
  onIncrement = () => {},
  onDecrement = () => {},
  size = 'large',
  color = 'grey.300',
}) {
  const onIncrementMiddleware = () => quantity < 99 && onIncrement()

  const onDecrementMiddleware = () => quantity > 1 && onDecrement()

  return (
    <Container size={size}>
      <QuantityButton onClick={onDecrementMiddleware} disableRipple>
        <RemoveRoundedIcon fontSize="small" />
      </QuantityButton>
      <Typography
        sx={{ minWidth: 20 }}
        align="center"
        color={color}
        variant={size === 'small' ? 'body2' : 'body1'}
      >
        {quantity}
      </Typography>
      <QuantityButton onClick={onIncrementMiddleware} disableRipple>
        <AddRoundedIcon fontSize="small" />
      </QuantityButton>
    </Container>
  )
}
