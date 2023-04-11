import Image from 'next/image'
import { Box, Skeleton, styled } from '@mui/material'

const Container = styled(Box, {
  name: 'BannerConatiner',
})(() => ({
  width: 'calc(100% - 32px)',
  height: '128px',
  position: 'relative',
  borderRadius: '8px',
  '& > *:first-of-type': {
    borderRadius: '8px',
    objectFit: 'cover',
  },
  '@media (min-width: 360px)': {
    width: '100%',
  },
}))

export default function Banner({ banner, isLoading }) {
  if (isLoading)
    return (
      <Container>
        <Skeleton variant="rectangular" width="auto" height="100%" />
      </Container>
    )

  return (
    <Container>
      <Image fill priority src={banner.image} alt={`Banner ${banner.id}`} />
    </Container>
  )
}
