import { Stack, Typography } from '@mui/material'
import { StepCircle, StepLine } from './styles'

export default function Step({ isOpen, status, label }) {
  const getColor = () => {
    if (status === 'finalized') return 'primary.400'

    if (status === 'inProgress') return 'grey.400'

    return 'rgba(0, 145, 140, 0.2)'
  }

  return (
    <>
      <Stack direction="row" alignItems="center" gap={1}>
        <StepCircle status={status} isOpen={isOpen} label={label} />
        {isOpen && (
          <Typography
            color={getColor()}
            variant="body1"
            fontWeight={700}
            lineHeight={0}
          >
            {label}
          </Typography>
        )}
      </Stack>
      <StepLine status={status} isOpen={isOpen} />
    </>
  )
}
