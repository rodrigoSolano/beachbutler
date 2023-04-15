import { Typography } from '@mui/material'

export default function ProductName({ name }) {
  return (
    <Typography
      variant="body1"
      fontSize="1.25rem"
      color="grey.500"
      fontWeight={700}
      gutterBottom
    >
      {name}
    </Typography>
  )
}
