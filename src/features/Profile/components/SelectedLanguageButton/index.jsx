import { Button, useTheme } from '@mui/material'

export default function SelectedLanguageButton({ children, isSelected }) {
  const theme = useTheme()

  const border = isSelected ? `1px solid #00918C` : `1px solid #D2D2D2`
  const bgColor = isSelected
    ? 'linear-gradient(0deg, rgba(0, 145, 140, 0.04), rgba(0, 145, 140, 0.04)), #F8F8F8'
    : '#FFFFFF'

  return (
    <Button
      color={isSelected ? 'primary' : 'grey'}
      sx={{
        color: theme.palette.grey[300],
        border,
        background: bgColor,
      }}
      variant="outlined"
    >
      {children}
    </Button>
  )
}
