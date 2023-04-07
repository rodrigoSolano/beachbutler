import { useTranslation } from 'next-i18next'
import { Stack, Typography } from '@mui/material'

import LoginInput from '../LoginInput'

export default function RoomNumberInput({
  name = 'roomNumber',
  error = false,
}) {
  const { t } = useTranslation('login')

  return (
    <Stack direction="column" gap={1}>
      <Typography variant="body1" color="grey.500">
        {t('room_number')}
      </Typography>
      <LoginInput
        name={name}
        type="number"
        min="1"
        minLength={1}
        placeholder={t('room_number')}
        autoComplete="off"
        error={error}
        required
      />
    </Stack>
  )
}
