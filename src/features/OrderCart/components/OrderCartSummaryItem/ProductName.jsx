import { Typography } from '@mui/material'

export default function ProductName({ name }) {
  return (
    <Typography variant="body2" color="grey.500" fontWeight={700} gutterBottom>
      {name}
    </Typography>
  )
}
