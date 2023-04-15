import Image from 'next/image'
import { Box, styled } from '@mui/material'

const ThumbnailContainer = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  aspectRatio: '1/1',
  position: 'relative',
  '& :first-of-type': {
    objectFit: 'cover',
    borderRadius: '8px',
  },
}))

export default function ProductThumbnail({ thumbnail }) {
  return (
    <ThumbnailContainer>
      <Image src={thumbnail} alt="Omelette de verduras" fill />
    </ThumbnailContainer>
  )
}
