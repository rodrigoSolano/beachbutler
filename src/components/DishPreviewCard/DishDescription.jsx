import { Skeleton, Typography } from '@mui/material'

export default function DishDescription({ description, isLoading }) {
  if (isLoading)
    return (
      <Skeleton
        variant="rectangular"
        width="100%"
        height={32}
        sx={{ marginTop: '8px', borderRadius: '8px' }}
      />
    )

  return (
    <Typography
      variant="button"
      color="gray.200"
      textAlign="left"
      textTransform="none"
      component="p"
      fontWeight={400}
      sx={{
        display: 'block',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        overflow: 'hidden',
        maxHeight: '2rem',
        lineHeight: '1rem',
        marginTop: '8px',
      }}
    >
      {description}
    </Typography>
  )
}
