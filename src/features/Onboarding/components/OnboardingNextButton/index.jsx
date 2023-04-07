import { Button, Typography } from '@mui/material'

export default function OnboardingNextButton({ text, onClick = () => {} }) {
  return (
    <Button
      color="primary"
      border="medium"
      variant="contained"
      sx={{ minWidth: '100px', alignSelf: 'flex-end' }}
      onClick={onClick}
    >
      <Typography variant="button" textTransform="none">
        {text}
      </Typography>
    </Button>
  )
}
