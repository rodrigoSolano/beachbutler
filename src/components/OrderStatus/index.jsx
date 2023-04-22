import { useState } from 'react'
import { Paper, Stack, Typography, useTheme } from '@mui/material'
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded'

import Stepper from '../Stepper'
import ShowOrderButton from './ShowOrderButton'
import DropdownButton from './DropdownButton'
import OrderStatusSeparator from './OrderStatusSeparator'

const STEPS = [
  {
    id: 1,
    label: 'Preparing',
    status: 'finalized',
  },
  {
    id: 2,
    label: 'Cooking',
    status: 'inProgress',
  },
  {
    id: 3,
    label: 'Delivering',
    status: 'pending',
  },
  {
    id: 4,
    label: 'Delivered',
    status: 'pending',
  },
]

export default function OrderStatus() {
  const theme = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <Paper
      elevation={0}
      sx={{
        padding: '16px',
        boxShadow: '0px 4px 10px rgba(155, 163, 157, 0.08)',
        borderRadius: '8px',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={1}>
          <FoodBankRoundedIcon sx={{ color: theme.palette.primary[400] }} />
          <Typography variant="body1" color="primary.400" fontWeight={700}>
            Order in progress
          </Typography>
        </Stack>
        <DropdownButton isOpen={isOpen} onClick={handleToggle} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" mt={1}>
        <Typography variant="body1" color="grey.300">
          3 productos
        </Typography>
        <ShowOrderButton />
      </Stack>
      <OrderStatusSeparator />
      <Stepper isOpen={isOpen} steps={STEPS} />
    </Paper>
  )
}
