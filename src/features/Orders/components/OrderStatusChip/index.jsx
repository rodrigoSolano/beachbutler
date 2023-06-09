import { Chip } from '@mui/material'

export default function OrderStatusChip({ label }) {
  return (
    <Chip
      sx={{
        backgroundColor: '#EEF4F4',
        color: '#00918C',
      }}
      label={label}
    />
  )
}
