import Image from 'next/image'
import { Skeleton } from '@mui/material'

import { ProductThumbnailContainer } from './styles'

export default function ProductThumbnail({ thumbnail, isLoading }) {
  if (isLoading)
    return (
      <ProductThumbnailContainer>
        <Skeleton variant="rectangular" />
      </ProductThumbnailContainer>
    )

  return (
    <ProductThumbnailContainer>
      <Image fill src={thumbnail} alt={thumbnail} />
    </ProductThumbnailContainer>
  )
}
