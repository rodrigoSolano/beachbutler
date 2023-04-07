import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Stack, Typography } from '@mui/material'

import useLoginProvider from '../../context/useLoginProvider'

import LoginLayout from '../LoginLayout/LoginLayout'
import LoginHeader from '../LoginLayout/LoginHeader'
import LoginBody from '../LoginLayout/LoginBody'
import LoginFooter from '../LoginLayout/LoginFooter'
import FooterButton from '../LoginLayout/FooterButton'

import GuestInformationTitle from './GuestInformationTitle'
import GuestInformationCaption from './GuestInformationCaption'

import LastNameInput from './LastNameInput'
import RoomNumberInput from './RoomNumberInput'

export default function GuestInformation() {
  const router = useRouter()
  const { t } = useTranslation('login')
  const { login, error } = useLoginProvider()

  const back = () => router.push('/onboarding')

  const onSubmit = (e) => {
    e.preventDefault()
    const { lastName, roomNumber } = e.target.elements
    login({
      lastName: lastName.value.trim(),
      roomNumber: roomNumber.value,
    })
  }

  return (
    <LoginLayout component="form" onSubmit={onSubmit}>
      <LoginHeader />
      <LoginBody>
        <GuestInformationTitle />
        <GuestInformationCaption />
        <Stack mt={4} gap={4}>
          <LastNameInput name="lastName" error={error} />
          <RoomNumberInput name="roomNumber" error={error} />
          {error && (
            <Typography variant="body2" color="error.main" textAlign="center">
              {t('error_on_login')}
            </Typography>
          )}
        </Stack>
      </LoginBody>
      <LoginFooter>
        <FooterButton
          direction="left"
          variant="outlined"
          title={t('back')}
          onClick={back}
        />
        <FooterButton
          direction="right"
          variant="contained"
          title={t('next')}
          type="submit"
        />
      </LoginFooter>
    </LoginLayout>
  )
}
