import { Typography } from '@mui/material'

import { useTranslation } from 'next-i18next'

export default function GuestInformationTitle() {
  const { t } = useTranslation('login')

  return (
    <Typography variant="body1" color="grey.500" fontWeight={500} gutterBottom>
      {t('one_step_login')}
    </Typography>
  )
}
