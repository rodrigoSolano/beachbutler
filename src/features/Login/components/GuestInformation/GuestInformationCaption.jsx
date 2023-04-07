import { Typography } from '@mui/material'

import { useTranslation } from 'next-i18next'

export default function GuestInformationCaption() {
  const { t } = useTranslation('login')

  return (
    <Typography variant="body2" color="grey.200" fontWeight={400}>
      {t('instructions_guest_data')}
    </Typography>
  )
}
