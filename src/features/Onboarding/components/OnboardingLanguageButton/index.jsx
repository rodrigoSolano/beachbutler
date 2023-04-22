// @ts-check
import Image from 'next/image'
import { Typography } from '@mui/material'

import OnboardingLanguageButtonContainer from './styles'

/**
 * @typedef {Object} OnboardingLanguageButtonProps
 * @property {string} name - Language name (English, Spanish, etc.)
 * @property {string} keyLang - Language key (en, es, etc.)
 * @property {() => void} onClick - Function to execute when the button is clicked
 * @property {boolean} isSelected - If the button is selected
 */

/**
 * @param {OnboardingLanguageButtonProps} props
 * @returns {JSX.Element}
 */
export default function OnboardingLanguageButton({
  name = 'English',
  keyLang = 'en',
  onClick = () => {},
  isSelected = false,
}) {
  return (
    <OnboardingLanguageButtonContainer
      // @ts-ignore
      isSelected={isSelected}
      onClick={onClick}
    >
      <Image
        width={48}
        height={48}
        src={`/icons/flags/${keyLang}.svg`}
        alt={`${name} flag`}
      />
      <Typography variant="body1" fontWeight={700}>
        {name}
      </Typography>
    </OnboardingLanguageButtonContainer>
  )
}
