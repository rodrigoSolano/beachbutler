/* eslint-disable react/jsx-props-no-spreading */
import { Button, Typography } from '@mui/material'

export default function AddToCartButton({ ...props }) {
  return (
    <Button
      variant="contained"
      sx={{ height: '100%', minHeight: '0', flexGrow: '6' }}
      {...props}
    >
      <Typography variant="button" textTransform="none">
        Añadir al carrito
      </Typography>
    </Button>
  )
}
