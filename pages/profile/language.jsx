// @ts-check
import { Box, Typography, Stack } from '@mui/material'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'
import TopReturnBar from 'features/Profile/components/TopReturnBar'
import SelectedLanguageButton from 'features/Profile/components/SelectedLanguageButton'
import changeLanguageService from 'services/changeLanguageService'

/**
 * @typedef {Object} LanguageAccountProps
 * @property {string} locale - Current locale (en, es, etc.)
 */

/**
 * @param {LanguageAccountProps} props
 * @returns {JSX.Element}
 */
export default function LanguageAccount({ locale }) {
  const { t } = useTranslation('languages')

  const handleLanguageChange = (language) => changeLanguageService(language)

  return (
    <Box mt={3}>
      <TopReturnBar>
        <Typography variant="h5" color="grey.300" fontWeight={700}>
          {t('language')}
        </Typography>
      </TopReturnBar>
      <Typography variant="body2" color="grey.500" mt={1}>
        {t('select_language')}
      </Typography>
      <Stack direction="column" gap={2} mt={2}>
        <SelectedLanguageButton
          isSelected={locale === 'en'}
          onClick={() => handleLanguageChange('en')}
        >
          <Typography variant="body1" color="grey.300">
            {t('en')}
          </Typography>
        </SelectedLanguageButton>
        <SelectedLanguageButton
          isSelected={locale === 'es'}
          onClick={() => handleLanguageChange('es')}
        >
          <Typography variant="body1" color="grey.300">
            {t('es')}
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
      ...(await serverSideTranslations(locale, ['common', 'languages'])),
      locale,
    },
  }
}
