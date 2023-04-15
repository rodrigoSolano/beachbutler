import { Typography } from '@mui/material'

export default function ProductDescription({ description }) {
  return (
    <Typography color="grey.100" fontSize={12} gutterBottom>
      {description}
    </Typography>
  )
}
