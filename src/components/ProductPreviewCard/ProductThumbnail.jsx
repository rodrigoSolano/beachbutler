import Image from 'next/image'
import { Skeleton, styled } from '@mui/material'

const Container = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '4/3',
  position: 'relative',
  '& > *:first-of-type': {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
  },
}))

export default function ProductThumbnail({ thumbnail, isLoading }) {
  if (isLoading)
    return (
      <Container>
        <Skeleton variant="rectangular" />
      </Container>
    )

  return (
    <Container>
      <Image fill src={thumbnail} alt={thumbnail} />
    </Container>
  )
}
