// @ts-check
import { Button, Typography, useTheme } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

/**
 * @typedef {object} BackButtonProps
 * @property {string} title - Button title
 * @property {() => void} onClick - Button click handler
 */

/**
 * @param {BackButtonProps} props
 */
export default function BackButton({ title, onClick }) {
  const theme = useTheme()

  return (
    <Button
      sx={{
        width: '100%',
        height: '100%',
        border: `1px solid ${theme.palette.grey[60]}`,
        color: theme.palette.grey[200],
        '&:hover': {
          color: theme.palette.grey[200],
          border: `1px solid ${theme.palette.grey[60]}`,
        },
      }}
      onClick={onClick}
      variant="outlined"
      startIcon={<ArrowBackIcon fontSize="small" />}
    >
      <Typography variant="button" fontWeight={500} textTransform="none">
        {title}
      </Typography>
    </Button>
  )
}
