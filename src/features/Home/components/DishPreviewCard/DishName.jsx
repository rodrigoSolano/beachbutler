import { Typography } from '@mui/material'

export default function DishName({ name }) {
  return (
    <Typography
      variant="body2"
      color="gray.300"
      textAlign="left"
      fontWeight={700}
      lineHeight="18px"
      sx={{ height: '37px', marginTop: '8px' }}
    >
      {name}
    </Typography>
  )
}
