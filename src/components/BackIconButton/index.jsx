// @ts-check
import { IconButton, useTheme } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

/**
 * @typedef {Object} BackIconButtonProps
 * @property {() => void} onClick - Button click handler
 */

/**
 * @param {BackIconButtonProps} props
 * @returns {JSX.Element}
 */
export default function BackIconButton({ onClick }) {
  const theme = useTheme()

  return (
    <IconButton sx={{ color: theme.palette.grey[500] }} onClick={onClick}>
      <ArrowBackIcon />
    </IconButton>
  )
}
