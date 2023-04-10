import Image from 'next/image'
import { Skeleton } from '@mui/material'

export default function DishThumbnail({ thumbnail, isLoading }) {
  if (isLoading)
    return (
      <Skeleton
        variant="rectangular"
        width={148}
        height={104}
        sx={{ borderRadius: '8px' }}
      />
    )

  return (
    <Image
      src={thumbnail}
      alt={thumbnail}
      width={148}
      height={104}
      style={{ borderRadius: '6px' }}
    />
  )
}
