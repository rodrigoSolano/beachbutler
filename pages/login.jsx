// @ts-check
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Stack, Typography } from '@mui/material'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Input from 'components/Input'

import AppLayout from 'components/AppLayout/AppLayout'
import AppHeader from 'components/AppLayout/AppHeader'
import AppBody from 'components/AppLayout/AppBody'
import AppFooter from 'components/AppLayout/AppFooter'
import AppLogo from 'components/AppLogo'

import BackButton from 'components/BackButton'
import NextButton from 'components/NextButton'

import useLogin from 'features/Login/hooks/useLogin'

export default function LoginPage() {
  const { t } = useTranslation('login')
  const router = useRouter()
  const { login, error, errorMessage } = useLogin()

  const [fields, setFields] = useState({
    lastName: '',
    roomNumber: '',
  })

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @returns {void}
   */
  const handleChange = (event) => {
    const { name, value } = event.target
    setFields({ ...fields, [name]: value })
  }

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const onSubmit = (event) => {
    event.preventDefault()
    login({
      lastName: fields.lastName.trim().toString(),
      roomNumber: fields.roomNumber.toString().toLowerCase(),
    })
  }

  const back = () => router.replace('/onboarding')

  return (
    // @ts-ignore
    <AppLayout component="form" onSubmit={onSubmit}>
      {/* @ts-ignore */}
      <AppHeader showBorderBottom>
        <AppLogo />
      </AppHeader>
      <AppBody>
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
            <Input
              // @ts-ignore
              type="text"
              name="lastName"
              error={error}
              onChange={handleChange}
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
            <Input
              // @ts-ignore
              min={1}
              type="number"
              name="roomNumber"
              error={error}
              onChange={handleChange}
              minLength={1}
              placeholder={t('room_number')}
              autoComplete="off"
              required
            />
          </Stack>
          {error && (
            <Typography variant="body2" color="error" textAlign="center">
              {errorMessage}
            </Typography>
          )}
        </Stack>
      </AppBody>
      {/* @ts-ignore */}
      <AppFooter border shadow center>
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
      </AppFooter>
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
