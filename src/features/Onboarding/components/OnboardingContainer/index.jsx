import { styled } from '@mui/material'

const OnboardingContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${'/images/onboarding_background.png'})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',

  display: 'grid',
  gridTemplateRows: '65% 35%',
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
}))

export default OnboardingContainer
