import { useRouter } from 'next/router'
import { Stack, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'

import ProfileImageEditor from 'features/Profile/components/ProfileImageEditor'
import SettingButton from 'features/Profile/components/SettingButton'
import SETTINGS from 'features/Profile/constants/settings'

export default function Profile() {
  const router = useRouter()

  const handleSettingButtonClick = (path) => router.replace(path)

  return (
    <>
      <Stack width="100%" direction="column" alignItems="center" mt={6.5}>
        <ProfileImageEditor />
        <Typography variant="h6" color="primary.400" mt={3}>
          Hola!
        </Typography>
        <Typography variant="h5" color="grey.300" fontWeight={700} mt={1}>
          Apellido
        </Typography>
      </Stack>
      <Stack mt={3}>
        {SETTINGS.map((setting) => (
          <SettingButton
            key={setting.label}
            onClick={() => handleSettingButtonClick(setting.path)}
          >
            <Typography color="grey.300" fontSize={14}>
              {setting.label}
            </Typography>
          </SettingButton>
        ))}
      </Stack>
    </>
  )
}

Profile.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}
