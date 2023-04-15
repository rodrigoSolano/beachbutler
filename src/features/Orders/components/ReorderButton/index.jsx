/* eslint-disable react/jsx-props-no-spreading */
import { Button, useTheme } from '@mui/material'

export default function ReorderButton({ children, ...props }) {
  const theme = useTheme()

  return (
    <Button
      sx={{
        color: theme.palette.grey[100],
        width: 'auto',
        height: 'auto',
        padding: 0,
        minHeight: 21,
        textDecoration: 'underline',
      }}
      variant="text"
      disableRipple
      {...props}
    >
      {children}
    </Button>
  )
}
