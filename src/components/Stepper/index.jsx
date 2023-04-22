import { Stack, Typography } from '@mui/material'

import Step from './Step'
import { Container } from './styles'

export default function Stepper({ steps, isOpen }) {
  const direction = isOpen ? 'column' : 'row'
  const alignItems = isOpen ? 'flex-start' : 'center'

  return (
    <Container>
      <Stack direction={direction} alignItems={alignItems}>
        {steps.map((step) => (
          <Step
            isOpen={isOpen}
            status={step.status}
            label={step.label}
            key={step.id}
          />
        ))}
      </Stack>
      {!isOpen && (
        <Typography color="primary.400" variant="body1" fontWeight={700}>
          Preparing
        </Typography>
      )}
    </Container>
  )
}
