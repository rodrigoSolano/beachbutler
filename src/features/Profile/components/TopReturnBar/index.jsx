import { useRouter } from 'next/router'
import { Stack, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function TopReturnBar({ children }) {
  const router = useRouter()

  const handleBack = () => router.replace('/profile')

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <IconButton onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      {children}
    </Stack>
  )
}
