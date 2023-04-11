import { Stack, Typography } from '@mui/material'

import LanguageButton from '../LanguageButton'
import changeLanguageService from '../../services/changeLanguageService'

const AVAILABLE_LANGUAGES = ['en', 'es']

export default function LanguageSelector({ t, locale }) {
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
          <LanguageButton
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
