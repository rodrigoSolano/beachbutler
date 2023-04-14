import { Typography } from '@mui/material'

export default function DishDescription({ description }) {
  return (
    <Typography color="grey.100" fontSize={12} gutterBottom>
      {description}
    </Typography>
  )
}
