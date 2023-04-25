import { Box, styled } from '@mui/material'

const OnboardingLanguageButtonContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})(({ theme, isSelected }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),

  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,

  backgroundColor: '#FFFFFF',

  borderRadius: theme.spacing(1),

  transition: 'all 0.3s ease',

  ...(isSelected && {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
  }),
}))

export default OnboardingLanguageButtonContainer