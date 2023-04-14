/* eslint-disable react/jsx-props-no-spreading */
import { Button, Typography, useTheme } from '@mui/material'

export default function ShowOrderButton({ ...props }) {
  const theme = useTheme()
  return (
    <Button
      sx={{
        color: theme.palette.grey[100],
        minHeight: '0',
        paddingTop: '0',
        paddingBottom: '0',
      }}
      variant="text"
      disableRipple
      {...props}
    >
      <Typography
        variant="body2"
        color="grey.100"
        sx={{ textDecoration: 'underline' }}
      >
        Ver pedido
      </Typography>
    </Button>
  )
}
