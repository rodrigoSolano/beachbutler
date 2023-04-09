import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Stack, Typography, useTheme } from '@mui/material'

import CustomInput from '../src/components/shared/CustomInput'

import AppLayout from '../src/components/shared/AppLayout/AppLayout'
import Header from '../src/components/shared/AppLayout/Header'
import Body from '../src/components/shared/AppLayout/Body'
import Footer from '../src/components/shared/AppLayout/Footer'
import AppLogo from '../src/components/shared/AppLogo'

import BackButton from '../src/components/shared/BackButton'
import NextButton from '../src/components/shared/NextButton'

import useLogin from '../src/features/Login/hooks/useLogin'

export default function LoginPage() {
  const { t } = useTranslation('login')
  const router = useRouter()
  const theme = useTheme()
  const { login, error } = useLogin()

  const onSubmit = (e) => {
    e.preventDefault()
    const { lastName, roomNumber } = e.target.elements
    login({
      lastName: lastName.value.trim(),
      roomNumber: roomNumber.value,
    })
  }

  const back = () => router.push('/onboarding')

  return (
    <AppLayout component="form" onSubmit={onSubmit}>
      <Header sx={{ borderBottom: `1px solid ${theme.palette.grey['300']}` }}>
        <AppLogo />
      </Header>
      <Body>
        <Typography variant="body1" color="grey.500" fontWeight={500}>
          {t('one_step_login')}
        </Typography>
        <Typography variant="body2" color="grey.200" fontWeight={400}>
          {t('instructions_guest_data')}
        </Typography>
        <Stack mt={4} gap={4}>
          <Stack direction="column" gap={1}>
            <Typography variant="body1" color="grey.500">
              {t('last_name')}
            </Typography>
            <CustomInput
              type="text"
              name="lastName"
              error={error}
              minLength={4}
              placeholder={t('last_name')}
              autoComplete="off"
              required
            />
          </Stack>
          <Stack direction="column" gap={1}>
            <Typography variant="body1" color="grey.500">
              {t('room_number')}
            </Typography>
            <CustomInput
              min="1"
              type="number"
              name="roomNumber"
              error={error}
              minLength={1}
              placeholder={t('room_number')}
              autoComplete="off"
              required
            />
          </Stack>
          {error && (
            <Typography variant="body2" color="error" textAlign="center">
              {t('error_on_login')}
            </Typography>
          )}
        </Stack>
      </Body>
      <Footer border shadow center>
        <Stack
          sx={{ width: '100%', height: '40px', padding: '8px' }}
          gap={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BackButton title={t('back')} onClick={back} />
          <NextButton title={t('next')} type="submit" />
        </Stack>
      </Footer>
    </AppLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login'])),
      locale,
    },
  }
}
