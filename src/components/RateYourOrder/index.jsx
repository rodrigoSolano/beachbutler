import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { IconButton, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { Container, Wrapper } from './styles'
import StartRate from './StartRate'

const stars = [1, 2, 3, 4, 5]

export default function RateYourOrder({
  onRate = () => {},
  onClose = () => {},
}) {
  const { t } = useTranslation('common')
  const [rate, setRate] = useState(0)

  const handleRate = (_rate) => {
    setRate(_rate)
    onRate(_rate)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Wrapper>
      <Container>
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="body2" color="grey.200" fontWeight={500}>
              {t('rate_your_order')}
            </Typography>
            <Stack direction="row" alignItems="center" gap={0.5}>
              {stars.map((star) => (
                <StartRate
                  key={star}
                  fill={star <= rate}
                  onClick={() => handleRate(star)}
                />
              ))}
            </Stack>
          </Stack>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Container>
    </Wrapper>
  )
}
