import { Skeleton } from '@mui/material'
import Image from 'next/image'

export default function Banner({ banner, isLoading }) {
  if (isLoading)
    return (
      <div
        style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
          borderRadius: '8px',
          aspectRatio: '3/1',
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ borderRadius: '8px' }}
        />
      </div>
    )

  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        position: 'relative',
        borderRadius: '8px',
        aspectRatio: '3/1',
      }}
    >
      <Image
        fill
        priority
        key={banner.id}
        src={banner.image}
        alt={`Banner ${banner.id}`}
        style={{
          borderRadius: '8px',
        }}
      />
    </div>
  )
}
