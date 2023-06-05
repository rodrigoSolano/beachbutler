import { useRouter } from 'next/router'
import { Stack, Typography } from '@mui/material'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'

import ProfileImageEditor from 'features/Profile/components/ProfileImageEditor'
import SettingButton from 'features/Profile/components/SettingButton'
import SETTINGS from 'features/Profile/constants/settings'
import getProfileInformationService from 'features/Profile/services/getProfileInformationService'

export default function Profile({ profileInformation }) {
  const { t } = useTranslation('profile')
  const router = useRouter()

  const handleSettingButtonClick = (path) => router.replace(path)

  return (
    <>
      <Stack width="100%" direction="column" alignItems="center" mt={6.5}>
        <ProfileImageEditor />
        <Typography variant="h6" color="primary.400" mt={3}>
          {t('greeting')}
        </Typography>
        <Typography variant="h5" color="grey.300" fontWeight={700} mt={1}>
          {profileInformation?.lastName}
        </Typography>
      </Stack>
      <Stack mt={3}>
        {SETTINGS.map((setting) => (
          <SettingButton
            key={setting.label}
            onClick={() => handleSettingButtonClick(setting.path)}
          >
            <Typography color="grey.300" fontSize={14}>
              {t(setting.key_translated)}
            </Typography>
          </SettingButton>
        ))}
      </Stack>
    </>
  )
}

Profile.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

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
