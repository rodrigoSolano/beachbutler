// @ts-check
import { Typography } from '@mui/material'
import { DMSerifDisplay } from 'theme'

/**
 * @typedef {Object} OnboardingWelcomeProps
 * @property {string} welcome - Welcome text
 */

/**
 * @param {OnboardingWelcomeProps} props
 * @returns {JSX.Element}
 */
export default function OnboardingWelcome({ welcome }) {
  return (
    <Typography
      color="white.main"
      variant="h2"
      fontStyle="italic"
      fontFamily={DMSerifDisplay.style.fontFamily}
      fontWeight={400}
    >
      {welcome}
    </Typography>
  )
}
