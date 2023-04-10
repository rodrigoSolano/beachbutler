import { Skeleton } from '@mui/material'

export default function BannerSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      width="100%"
      height="128px"
      sx={{ borderRadius: '8px' }}
    />
  )
}
