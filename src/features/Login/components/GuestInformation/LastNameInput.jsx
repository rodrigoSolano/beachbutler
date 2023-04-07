import { useTranslation } from 'next-i18next'
import { Stack, Typography } from '@mui/material'

import LoginInput from '../LoginInput'

export default function LastNameInput({ name = 'lastName', error = false }) {
  const { t } = useTranslation('login')

  return (
    <Stack direction="column" gap={1}>
      <Typography variant="body1" color="grey.500">
        {t('last_name')}
      </Typography>
      <LoginInput
        name={name}
        type="text"
        minLength={4}
        placeholder={t('last_name')}
        autoComplete="off"
        error={error}
        required
      />
    </Stack>
  )
}
