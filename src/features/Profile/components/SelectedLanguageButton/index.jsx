// @ts-check
import { Button, useTheme } from '@mui/material'

/**
 * @typedef {Object} SelectedLanguageButtonProps
 * @property {boolean} isSelected
 * @property {function} onClick
 * @property {React.ReactNode} children
 */

export default function SelectedLanguageButton({
  children = null,
  isSelected = false,
  onClick = () => {},
}) {
  const theme = useTheme()

  const border = isSelected ? `1px solid #00918C` : `1px solid #D2D2D2`
  const bgColor = isSelected
    ? 'linear-gradient(0deg, rgba(0, 145, 140, 0.04), rgba(0, 145, 140, 0.04)), #F8F8F8'
    : '#FFFFFF'

  return (
    <Button
      // @ts-ignore
      color={isSelected ? 'primary' : 'grey'}
      sx={{
        color: theme.palette.grey[300],
        border,
        background: bgColor,
      }}
      variant="outlined"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
