import Image from 'next/image'
import { Box, styled } from '@mui/material'

const Container = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '9/5',
  position: 'relative',
}))

export default function DishImage({ image }) {
  return (
    <Container>
      <Image
        fill
        src={image}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
        priority
      />
    </Container>
  )
}
