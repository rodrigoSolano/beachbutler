// @ts-check
import { Typography } from '@mui/material'

/**
 * @typedef {Object} OnboardingSloganProps
 * @property {string} slogan - Slogan text
 */

/**
 * @param {OnboardingSloganProps} props
 * @returns {JSX.Element}
 */
export default function OnboardingSlogan({ slogan }) {
  return (
    <Typography variant="body1" color="white.main" textAlign="center">
      {slogan}
    </Typography>
  )
}
