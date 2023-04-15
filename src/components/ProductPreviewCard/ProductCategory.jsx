import { Box, Skeleton, Typography, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1.5rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#F7A4B6',
  borderRadius: theme.spacing(3),
}))

export default function ProductCategory({ category, isLoading }) {
  if (isLoading)
    return (
      <Skeleton
        variant="rectangular"
        width="100%"
        height={24}
        sx={{ borderRadius: '24px' }}
      />
    )

  return (
    <Container>
      <Typography
        fontSize="0.75rem"
        color="gray.300"
        textTransform="none"
        fontWeight={400}
      >
        {category}
      </Typography>
    </Container>
  )
}
