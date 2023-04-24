// @ts-check
import { Button, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

/**
 * @typedef {object} NextButtonProps
 * @property {string} title - Button title
 * @property {string} type - Button type
 * @property {function} [onClick] - Button click handler
 */

/**
 * @param {NextButtonProps} props
 * @returns {JSX.Element}
 */
export default function NextButton({
  type = 'button',
  title = 'Next',
  onClick = () => {},
}) {
  return (
    // @ts-ignore
    <Button
      sx={{ width: '100%', height: '100%' }}
      type={type}
      color="primary"
      variant="contained"
      endIcon={<ArrowForwardIcon fontSize="small" />}
      onClick={onClick}
    >
      <Typography variant="button" fontWeight={500} textTransform="none">
        {title}
      </Typography>
    </Button>
  )
}
