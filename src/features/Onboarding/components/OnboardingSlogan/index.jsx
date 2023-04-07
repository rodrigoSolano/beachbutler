import { Typography } from '@mui/material'

export default function OnboardingSlogan({ slogan }) {
  return (
    <Typography variant="body1" color="white.main" textAlign="center">
      {slogan}
    </Typography>
  )
}
