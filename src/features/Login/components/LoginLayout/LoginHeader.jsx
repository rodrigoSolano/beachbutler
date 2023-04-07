import Image from 'next/image'
import { Box, useTheme } from '@mui/material'

export default function LoginHeader() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${theme.palette.grey['300']}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        src="/logos/beachbutler_logo_bold.png"
        width={164}
        height={36}
        alt="beachbutler logo"
        style={{ margin: '0 auto' }}
        priority
      />
    </Box>
  )
}
