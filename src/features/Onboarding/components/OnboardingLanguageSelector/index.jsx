// @ts-check
import { Stack, Typography } from '@mui/material'

import { useTranslation } from 'next-i18next'

import OnboardingLanguageButton from '../OnboardingLanguageButton'
import changeLanguageService from '../../services/changeLanguageService'

const AVAILABLE_LANGUAGES = ['en', 'es']

/**
 * @typedef {Object} OnboardingLanguageSelectorProps
 * @property {string} locale - Current locale (en, es, etc.)
 */

/**
 * @param {OnboardingLanguageSelectorProps} props
 * @returns {JSX.Element}
 */
export default function OnboardingLanguageSelector({ locale }) {
  const { t } = useTranslation('onboarding')

  const handleLanguageButtonClick = (language) =>
    changeLanguageService(language)

  return (
    <Stack direction="column" gap={2} justifyContent="flex-end">
      <Typography
        color="white.main"
        variant="body1"
        textAlign="center"
        fontWeight={700}
      >
        {t('select_language')}
      </Typography>
      <Stack direction="row" spacing={2}>
        {AVAILABLE_LANGUAGES.map((language) => (
          <OnboardingLanguageButton
            isSelected={language === locale}
            keyLang={language}
            onClick={() => handleLanguageButtonClick(language)}
            name={t(`${language}`)}
            key={language}
          />
        ))}
      </Stack>
    </Stack>
  )
}
