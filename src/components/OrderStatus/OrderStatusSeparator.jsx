import { useTheme } from '@mui/material'

import Separator from 'components/Separator'

export default function OrderStatusSeparator() {
  const theme = useTheme()

  return (
    <Separator
      sx={{
        width: 'calc(100% + 32px)',
        bgcolor: theme.palette.grey[50],
        margin: '16px -16px 0 -16px',
      }}
    />
  )
}
