import { useEffect, useState } from 'react'
import { Paper, Stack, Typography, useTheme } from '@mui/material'
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded'

import useOrder from 'context/Order/useOrder'
import {
  RECEIVED,
  PREPARING,
  ON_ROUTE,
  DELIVERED,
} from 'context/Order/orderStatuses'

import Stepper from '../Stepper'
import ShowOrderButton from './ShowOrderButton'
import DropdownButton from './DropdownButton'
import OrderStatusSeparator from './OrderStatusSeparator'

const STEPS = [
  {
    id: 1,
    label: 'Received',
    status: 'pending',
    value: RECEIVED,
  },
  {
    id: 2,
    label: 'Preparing',
    status: 'pending',
    value: PREPARING,
  },
  {
    id: 3,
    label: 'Delivering',
    status: 'pending',
    value: ON_ROUTE,
  },
  {
    id: 4,
    label: 'Delivered',
    status: 'pending',
    value: DELIVERED,
  },
]

const getSteps = (status = RECEIVED) => {
  const currentStep = STEPS.find((step) => step.value === status)

  return STEPS.map((step) => {
    if (step.id === currentStep?.id) {
      if (step.id === 4) return { ...step, status: 'finalized' }
      return { ...step, status: 'inProgress' }
    }

    if (step.id <= currentStep?.id) return { ...step, status: 'finalized' }

    if (step.id > currentStep?.id) return { ...step, status: 'pending' }

    return { ...step, status: 'pending' }
  })
}

export default function OrderStatus() {
  const { order } = useOrder()
  const { status } = order
  const theme = useTheme()
  const steps = getSteps(status)
  const totalProducts = order.products.reduce((acc, i) => acc + i.quantity, 0)
  const [currentStepLabel, setCurrentStepLabel] = useState(
    steps.find((step) => step.value === status)?.label
  )
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    setCurrentStepLabel(steps.find((step) => step.value === status)?.label)
  }, [order.status, status, steps])

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
          {`${totalProducts} products`}
        </Typography>
        <ShowOrderButton />
      </Stack>
      <OrderStatusSeparator />
      <Stepper
        steps={steps}
        isOpen={isOpen}
        currentStepLabel={currentStepLabel}
      />
    </Paper>
  )
}
