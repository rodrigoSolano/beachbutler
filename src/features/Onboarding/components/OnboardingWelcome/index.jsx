import { Typography } from '@mui/material'
import { DMSerifDisplay } from '../../../../theme'

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
