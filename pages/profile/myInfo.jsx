import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Box, Stack, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'
import TopReturnBar from 'features/Profile/components/TopReturnBar'
import Input from 'components/Input'
import getProfileInformationService from 'features/Profile/services/getProfileInformationService'

export default function ProfileAccount({ profileInformation }) {
  const { t } = useTranslation('profile')
  const [phone, setPhone] = useState(profileInformation?.phoneNumber)
  const [email, setEmail] = useState(profileInformation?.email)

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <Box mt={3}>
      <TopReturnBar>
        <Typography variant="h5" color="grey.300" fontWeight={700}>
          {t('my_info')}
        </Typography>
      </TopReturnBar>
      <Stack direction="column" gap={2} mt={3}>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            {t('last_name')}
          </Typography>
          <Input
            size="small"
            value={profileInformation?.lastName}
            variant="outlined"
            textAlign="left"
            placeholder={t('last_name')}
            fullWidth
            disabled
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            {t('room_number')}
          </Typography>
          <Input
            size="small"
            value={profileInformation?.roomNumber}
            variant="outlined"
            textAlign="left"
            placeholder={t('room_number')}
            fullWidth
            disabled
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            {t('phone_number')}
          </Typography>
          <Input
            size="small"
            value={phone}
            variant="outlined"
            onChange={handlePhoneChange}
            textAlign="left"
            placeholder={t('phone_number')}
            fullWidth
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            {t('email')}
          </Typography>
          <Input
            size="small"
            value={email}
            variant="outlined"
            onChange={handleEmailChange}
            textAlign="left"
            placeholder={t('email')}
            fullWidth
          />
        </Stack>
      </Stack>
    </Box>
  )
}

ProfileAccount.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const profileInformation = await getProfileInformationService()

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'profile'])),
      locale,
      profileInformation,
    },
  }
}
