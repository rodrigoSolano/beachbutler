import { useRouter } from 'next/router'
import { Stack, IconButton, useTheme } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function TopReturnBar({ children }) {
  const theme = useTheme()
  const router = useRouter()

  const handleBack = () => router.replace('/profile')

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <IconButton onClick={handleBack} color={theme.palette.grey[500]}>
        <ArrowBackIcon sx={{ color: theme.palette.grey[500] }} />
      </IconButton>
      {children}
    </Stack>
  )
}
