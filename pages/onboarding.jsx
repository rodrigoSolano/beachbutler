import { useRouter } from 'next/router'
import { Stack } from '@mui/material'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import OnboardingNextButton from '../src/features/Onboarding/components/OnboardingNextButton'
import OnboardingContainer from '../src/features/Onboarding/components/OnboardingContainer'
import OnboardingWelcome from '../src/features/Onboarding/components/OnboardingWelcome'
import OnboardingSlogan from '../src/features/Onboarding/components/OnboardingSlogan'
import OnboardingLogo from '../src/features/Onboarding/components/OnboardingLogo'

import Separator from '../src/components/shared/Separator'
import LanguageSelector from '../src/features/Onboarding/components/LanguageSelector'

export default function Onboarding({ locale }) {
  const router = useRouter()
  const { t } = useTranslation('onboarding')

  const goToLogin = () => router.push('/login')

  return (
    <OnboardingContainer>
      <Stack height="100%" direction="column" gap={9} alignContent="center">
        <OnboardingLogo />
        <Stack direction="column" gap={1} alignItems="center">
          <OnboardingWelcome welcome={t('welcome')} />
          <Separator px={1} />
          <OnboardingSlogan slogan={t('slogan')} />
        </Stack>
      </Stack>
      <Stack direction="column" gap={2} justifyContent="flex-end">
        <LanguageSelector t={t} locale={locale} />
        <OnboardingNextButton text={t('continue')} onClick={goToLogin} />
      </Stack>
    </OnboardingContainer>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['onboarding'])),
      locale,
    },
  }
}
