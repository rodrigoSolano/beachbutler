import { Stack, Typography } from '@mui/material'

import Step from './Step'
import { Container } from './styles'

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

export default function Stepper() {
  return (
    <Container>
      <Stack direction="row" alignItems="center">
        {STEPS.map((step) => (
          <Step key={step.id} status={step.status} label={step.label} />
        ))}
      </Stack>
      <Typography color="primary.400" variant="body1" fontWeight={700}>
        Preparing
      </Typography>
    </Container>
  )
}
