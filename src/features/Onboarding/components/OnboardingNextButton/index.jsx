// @ts-check
import { Button, Typography } from '@mui/material'

/**
 * @typedef {Object} OnboardingNextButtonProps
 * @property {string} text - Button text
 * @property {() => void} onClick - Function to execute when the button is clicked
 */

/**
 * @param {OnboardingNextButtonProps} props
 * @returns {JSX.Element}
 */
export default function OnboardingNextButton({ text, onClick = () => {} }) {
  return (
    <Button
      color="primary"
      variant="contained"
      sx={{ minWidth: '120px', alignSelf: 'flex-end' }}
      onClick={onClick}
    >
      <Typography variant="button" textTransform="none">
        {text}
      </Typography>
    </Button>
  )
}
