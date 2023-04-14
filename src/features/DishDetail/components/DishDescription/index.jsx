import { Typography } from '@mui/material'

export default function DishDescription({ description }) {
  return (
    <Typography variant="body2" color="grey.200" fontWeight={400} gutterBottom>
      {description}
    </Typography>
  )
}
