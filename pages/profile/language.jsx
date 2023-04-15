import { Box, Typography, Stack } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'
import TopReturnBar from 'features/Profile/components/TopReturnBar'
import SelectedLanguageButton from 'features/Profile/components/SelectedLanguageButton'

export default function LanguageAccount({ locale }) {
  return (
    <Box mt={3}>
      <TopReturnBar>
        <Typography variant="h5" color="grey.300" fontWeight={700}>
          Language
        </Typography>
      </TopReturnBar>
      <Typography variant="body2" color="grey.500" mt={1}>
        Select your preferred language
      </Typography>
      <Stack direction="column" gap={2} mt={2}>
        <SelectedLanguageButton isSelected={locale === 'en'}>
          <Typography variant="body1" color="grey.300">
            Ingles
          </Typography>
        </SelectedLanguageButton>
        <SelectedLanguageButton isSelected={locale === 'es'}>
          <Typography variant="body1" color="grey.300">
            Español
          </Typography>
        </SelectedLanguageButton>
      </Stack>
    </Box>
  )
}

LanguageAccount.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}
