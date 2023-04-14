import { Stack, Typography } from '@mui/material'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'

export default function OrderTimeoutAlert() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="body1" color="grey.200">
        You can order once every:
      </Typography>
      <Stack direction="row" alignItems="center" gap={1}>
        <TimerOutlinedIcon sx={{ color: '#2196F3' }} />
        <Typography variant="body1" color="grey.200">
          30 min
        </Typography>
      </Stack>
    </Stack>
  )
}
