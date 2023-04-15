import { Skeleton, Typography } from '@mui/material'

export default function ProductName({ name, isLoading }) {
  if (isLoading)
    return (
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{ marginTop: '8px', borderRadius: '8px', height: 37 }}
      />
    )

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
