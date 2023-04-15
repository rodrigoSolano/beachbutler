/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '@mui/material'

export default function OrderRatingButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: '100%',
        height: 30,
        minHeight: 0,
        padding: 0,
        borderRadius: '0px 0px 4px 4px',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
